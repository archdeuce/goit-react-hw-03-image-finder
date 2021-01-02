import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.handleClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.handleClose();
    }
  };

  handleClose = () => {
    this.props.toggleModal({
      isOpen: false,
      src: '',
      alt: '',
    });
  };

  render() {
    const { modalImg, modalAlt } = this.props;

    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={modalImg} alt={modalAlt} />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
  modalAlt: PropTypes.string.isRequired,
};
