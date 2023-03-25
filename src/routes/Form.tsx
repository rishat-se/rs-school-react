import React, { Component, ReactHTMLElement } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

class Form extends Component<{}> {
  constructor(props: {}) {
    super(props);
    this.myRef = React.createRef();
  }

  myRef: React.RefObject<HTMLInputElement>;

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.myRef.current !== null) {
      this.myRef.current.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Firstname:
          <input
            ref={this.myRef}
            onChange={() => {
              if (this.myRef.current !== null) {
                console.log(this.myRef.current.value);
              }
            }}
            type="text"
            placeholder="Enter firstaname ..."
          ></input>
        </label>
        <label>
          Lastname:
          <input type="text" placeholder="..."></input>
        </label>
        <label>
          Birthdate:
          <input type="date" placeholder="..."></input>
        </label>
        <label>
          Select:
          <select defaultValue="two">
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
        </label>
        <label>
          I consent to my personal data
          <input type="checkbox"></input>
        </label>
        <label>
          male
          <input type="radio" name="gender"></input>
        </label>
        <label>
          female
          <input type="radio" name="gender"></input>
        </label>
        <button>Clear</button>
      </form>
    );
  }
}

export default Form;
