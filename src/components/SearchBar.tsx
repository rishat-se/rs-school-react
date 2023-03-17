import React, { Component } from 'react';

class SearchBar extends Component<{}, { searchValue: string }> {
  state = { searchValue: '' };

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.currentTarget.value });
    console.log(e.currentTarget.value);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  componentDidMount(): void {
    const searchValue = localStorage.getItem('searchValue');
    this.setState({ searchValue: searchValue ? searchValue : '' });
    console.log(`mounted with ${searchValue}`);
  }

  componentWillUnmount(): void {
    console.log(`unmounted with ${this.state.searchValue}`);
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  render() {
    return (
      <div>
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
