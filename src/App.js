import './App.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    modalImg: '',
    modalAlt: '',
  };

  onSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = ({ isOpen, src, alt }) => {
    this.setState({
      showModal: isOpen,
      modalImg: src,
      modalAlt: alt,
    });
  };

  // проверка пропсов

  render() {
    const { searchQuery, showModal, modalImg, modalAlt } = this.state;

    return (
      <div className="App">
        <ToastContainer closeOnClick autoClose={2000} />

        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery
          searchQuery={searchQuery}
          toggleModal={this.toggleModal}
        />

        {showModal && (
          <Modal
            toggleModal={this.toggleModal}
            modalImg={modalImg}
            modalAlt={modalAlt}
          />
        )}
      </div>
    );
  }
}

export default App;
