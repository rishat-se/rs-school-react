import React, { ReactHTMLElement } from 'react';
import CardList from '../components/CardList';
import GameCard from '../components/GameCard';
import SearchBar from '../components/SearchBar';
import GameCardType from '../types/GameCardType';

class Form extends React.Component<{}> {
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
        <div>
          <label>
            Game:
            <input
              ref={this.myRef}
              onChange={() => {
                if (this.myRef.current !== null) {
                  console.log(this.myRef.current.value);
                }
              }}
              type="text"
              placeholder="Enter Game Name"
            ></input>
          </label>
        </div>
        <div>
          <label>
            Developer:
            <input type="text" placeholder="Enter Game Developer Name"></input>
          </label>
        </div>
        <div>
          <label>
            Publisher:
            <input type="text" placeholder="Enter Game Publisher Name"></input>
          </label>
        </div>
        <div>
          <label>
            First Release:
            <input type="date"></input>
          </label>
        </div>
        <div>
          <label>
            Engine:
            <select>
              <option value="Unreal">Unreal</option>
              <option value="Unity">Unity</option>
              <option value="Source">Source</option>
              <option value="Cryengine">Cryengine</option>
              <option value="Gamebryo">Gamebryo</option>
              <option value="IW">IW</option>
              <option value="Anvil">Anvil</option>
              <option value="id Tech">id Tech</option>
              <option value="Essence">Essence</option>
              <option value="Clausewitz">Clausewitz</option>
            </select>
          </label>
        </div>
        <div>
          <label>Platforms:</label>
          <div>
            <label>
              <input type="checkbox"></input>
              Android
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              iOS
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              iPadOS
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Linux
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              MacOS
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Nintendo Switch
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Playstation 3
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Playstation 4
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Playstation 5
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Xbox 360
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Xbox One
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Xbox Series X/S
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" defaultValue="default"></input>
              Windows
            </label>
          </div>
        </div>
        <div>
          <label>ESRB Rating:</label>
          <label>
            <input type="radio" name="esrb-rating"></input>
            Everyone
          </label>
          <label>
            <input type="radio" name="esrb-rating"></input>
            Everyone 10+
          </label>
          <label>
            <input type="radio" name="esrb-rating"></input>
            Teen
          </label>
          <label>
            <input type="radio" name="esrb-rating"></input>
            Mature 17+
          </label>
          <label>
            <input type="radio" name="esrb-rating"></input>
            Adults Only 18+
          </label>
          <label>
            <input type="radio" name="esrb-rating"></input>
            Rating Pending
          </label>
        </div>
        <div>
          <label>
            load thumbnail
            <input type="file"></input>
          </label>
        </div>
        <button>Create</button>
      </form>
    );
  }
}

export default Form;
