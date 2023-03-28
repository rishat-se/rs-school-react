import React, { ReactHTMLElement } from 'react';
import EngineList from '../components/EngineList';
import EsrbRatingList from '../components/EsrbRatingList';
import { GameCardData } from '../components/GameCard';
import GameCardList from '../components/GameCardList';
import PlatformsList from '../components/PlatformsList';
import SequelSwitch from '../components/SequelSwitch';
import controlValuesRules, { ControlValueRule } from '../validator/controlValuesRules';
import validate from '../validator/validate';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';
import ImageFile from '../components/ImageFile';
import TextInput from '../components/TextInput';
import DateInput from '../components/DateInput';
import { esrbRatings, platforms } from '../constants/formConstants';

export type ControlValues = Partial<GameCardData>;
export type ControlErrors = Partial<GameCardData>;
type ControlRefs = {
  gameName: React.RefObject<HTMLInputElement>;
  developer: React.RefObject<HTMLInputElement>;
  publisher: React.RefObject<HTMLInputElement>;
  firstRelease: React.RefObject<HTMLInputElement>;
  engine: React.RefObject<HTMLSelectElement>;
  esrbRating: React.RefObject<HTMLInputElement>[];
  platforms: React.RefObject<HTMLInputElement>[];
  isSequelAnnounced: React.RefObject<HTMLInputElement>[];
  imageFile: React.RefObject<HTMLInputElement>;
};

class Form extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
    this.state = { gameCardList: [], controlErrors: {} };
    this.formRef = React.createRef();
    this.controlRefs = {
      gameName: React.createRef(),
      developer: React.createRef(),
      publisher: React.createRef(),
      firstRelease: React.createRef(),
      esrbRating: esrbRatings.map(() => React.createRef()),
      engine: React.createRef(),
      platforms: platforms.map(() => React.createRef()),
      isSequelAnnounced: [React.createRef(), React.createRef()],
      imageFile: React.createRef(),
    };
  }
  state: { gameCardList: GameCardData[]; controlErrors: ControlErrors };
  controlRefs: ControlRefs;
  formRef: React.RefObject<HTMLFormElement>;

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const imageFileRef = this.controlRefs.imageFile.current;
    e.preventDefault();
    const controlValues = this.getFormValues(this.controlRefs, controlValuesRules);
    const newControlErrors = validate(controlValues, controlValuesRules);
    this.setState({ controlErrors: newControlErrors });
    if (Object.keys(newControlErrors).length === 0) {
      if (imageFileRef !== null && imageFileRef.files !== null) {
        const file = URL.createObjectURL(imageFileRef.files[0]);
        controlValues.imageFile = file;
      }
      this.addGameCard(controlValues);
      alert('Success: new game added');
      if (this.formRef.current !== null) {
        this.formRef.current.reset();
      }
    }
  }

  private getFormValues(controlRefs: ControlRefs, controlValuesRules: ControlValueRule[]) {
    let controlValues: ControlValues = {};
    controlValues.gameName = controlRefs.gameName.current ? controlRefs.gameName.current.value : '';
    controlValues.developer = controlRefs.developer.current
      ? controlRefs.developer.current.value
      : '';
    controlValues.publisher = controlRefs.publisher.current
      ? controlRefs.publisher.current.value
      : '';
    controlValues.firstRelease = controlRefs.firstRelease.current
      ? controlRefs.firstRelease.current.value
      : '';
    controlValues.engine = controlRefs.engine.current ? controlRefs.engine.current.value : '';
    const checkedEsrbRating = controlRefs.esrbRating.find((ref) => ref.current?.checked);
    controlValues.esrbRating = checkedEsrbRating?.current ? checkedEsrbRating.current.value : '';
    controlValues.platforms = controlRefs.platforms
      .filter((ref) => ref.current && ref.current?.checked)
      .map((ref) => (ref.current ? ref.current.value : ''));
    const checkedIsSequelAnnounced = controlRefs.isSequelAnnounced.find(
      (ref) => ref.current?.checked
    );
    controlValues.isSequelAnnounced = checkedIsSequelAnnounced?.current
      ? checkedIsSequelAnnounced?.current?.value
      : '';
    controlValues.imageFile = controlRefs.imageFile.current
      ? controlRefs.imageFile.current.value
      : '';
    return controlValues;
  }

  private addGameCard(controlValues: ControlValues) {
    const newGameCard = { id: uuidv4(), ...controlValues };
    const imageFile = newGameCard.imageFile;
    const newGameCardList = this.state.gameCardList.concat([newGameCard as GameCardData]);
    this.setState({ gameCardList: newGameCardList });
  }

  render() {
    const { controlErrors } = this.state;
    return (
      <div className="game-card-wrapper">
        <form className="game-card-form" ref={this.formRef} onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Add Game</h2>
          <TextInput
            label="Game"
            inputRef={this.controlRefs.gameName}
            name="gameName"
            placeholder="Enter Game Name"
            errors={controlErrors}
          />
          <TextInput
            label="Developer"
            inputRef={this.controlRefs.developer}
            name="developer"
            placeholder="Enter Game Developer"
            errors={controlErrors}
          />
          <TextInput
            label="Publisher"
            inputRef={this.controlRefs.publisher}
            name="publisher"
            placeholder="Enter Game Pablisher"
            errors={controlErrors}
          />
          <DateInput
            label="First Release"
            inputRef={this.controlRefs.firstRelease}
            name="firstRelease"
            errors={controlErrors}
          />
          <EngineList
            label="Engine"
            inputRef={this.controlRefs.engine}
            name="engine"
            errors={controlErrors}
          />
          <PlatformsList
            label="Platforms"
            inputRefs={this.controlRefs.platforms}
            name="platforms"
            errors={controlErrors}
          />
          <EsrbRatingList
            label="Engine"
            inputRefs={this.controlRefs.esrbRating}
            name="engine"
            errors={controlErrors}
          />
          <SequelSwitch
            label="Is sequel announced?"
            inputRefs={this.controlRefs.isSequelAnnounced}
            name="isSequelAnnounced"
            errors={controlErrors}
          />
          <ImageFile
            label="Load Thumbnail"
            inputRef={this.controlRefs.imageFile}
            name="imageFile"
            errors={controlErrors}
          />
          <button>Create</button>
        </form>
        <GameCardList gameCardList={this.state.gameCardList} />
      </div>
    );
  }
}

export default Form;
