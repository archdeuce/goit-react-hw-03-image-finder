import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import pixabayAPI from '../../services/pixabay-api';
import ImageGalleryItem from '../ImageGalleryItem';
import LoadMoreButton from '../Button';
import Loader from '../Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    images: [],
    totalHits: 0,
    error: null,
    status: Status.IDLE,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING, page: 1 });
      this.handleRequest(nextQuery);
      return;
    }

    if (prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });
      this.handleRequest(nextQuery, nextPage);
      return;
    }
  }

  handleRequest = (searchQuery, nextPage) => {
    pixabayAPI
      .fetchImage(searchQuery, nextPage)
      .then(({ hits, totalHits }) =>
        this.setState(prevState => {
          if (nextPage > 1) {
            hits = [...prevState.images, ...hits];
          }

          return {
            images: hits,
            totalHits,
            status: Status.RESOLVED,
          };
        }),
      )
      .catch(error => this.setState({ error, status: Status.REJECTED }))
      .finally(() => {
        this.setState({ status: Status.IDLE });
        this.pageSmoothScroll();
      });
  };

  handleLoadMoreBtn = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  handleModal = e => {
    if (e.target !== e.currentTarget) {
      this.props.toggleModal({
        isOpen: true,
        src: e.target.dataset.source,
        alt: e.target.alt,
      });
    }
  };

  pageSmoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  showError = error => {
    toast.error(error.message, { toastId: 'error' });
  };

  showInfo = () => {
    toast.info('Images are not found.', { toastId: 'resolved' });
  };

  render() {
    const { images, error, status, totalHits } = this.state;

    if (status === Status.PENDING) {
      return <Loader />;
    }

    if (status === Status.REJECTED) {
      this.showError(error);
    }

    if (status === Status.RESOLVED || status === Status.IDLE) {
      if (!images.length && status !== Status.IDLE) {
        this.showInfo();
        return null;
      }

      return (
        <>
          <ul className="ImageGallery" onClick={this.handleModal}>
            {images.map(({ tags, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={shortid.generate()}
                src={webformatURL}
                alt={tags}
                source={largeImageURL}
              />
            ))}
          </ul>

          {images.length < totalHits && (
            <LoadMoreButton onClick={this.handleLoadMoreBtn} />
          )}
        </>
      );
    }

    return null;
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
