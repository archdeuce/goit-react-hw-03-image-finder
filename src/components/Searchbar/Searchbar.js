import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({
      imageName: event.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { imageName } = this.state;

    if (imageName.trim() === '') {
      toast.error('Пустое поле поиска.', { toastId: 'searchbar' });
      return;
    }

    this.props.onSubmit(imageName.toLowerCase());
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className="Searchbar" onSubmit={this.handleSubmit}>
        <form className="SearchForm">
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />

          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
