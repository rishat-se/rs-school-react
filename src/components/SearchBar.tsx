import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component<object, { searchValue: string }> {
  constructor(props: object) {
    super(props);
    this.state = { searchValue: localStorage.getItem('searchValue') || '' };
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.currentTarget.value });
    console.log(e.currentTarget.value);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  componentWillUnmount(): void {
    console.log(`unmounted with ${this.state.searchValue}`);
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            value={this.state.searchValue}
          ></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
