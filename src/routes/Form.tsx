import React, { ReactHTMLElement } from 'react';
import EngineList from '../components/EngineList';
import EsrbRatingList from '../components/EsrbRatingList';
import GameCard, { GameCardData } from '../components/GameCard';
import GameCardList from '../components/GameCardList';
import PlatformsList from '../components/PlatformsList';
import SequelSwitch from '../components/SequelSwitch';
import SimpleInputSet from '../components/SimpleInputSet';
import controlValuesRules, { ControlValueRule } from '../validator/controlValuesRules';
import validate from '../validator/validate';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';
import ImageFile from '../components/ImageFile';

export type ControlValues = Partial<GameCardData>;
export type ControlErrors = Partial<GameCardData>;

class Form extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
    this.state = { gameCardList: [], controlErrors: {} };
    this.formRef = React.createRef();
    this.fileRef = React.createRef();
  }
  state: { gameCardList: GameCardData[]; controlErrors: ControlErrors };
  formRef: React.RefObject<HTMLFormElement>;
  fileRef: React.RefObject<HTMLInputElement>;

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const { current: curFormRef } = this.formRef;
    e.preventDefault();
    if (curFormRef !== null) {
      const controlValues = this.getFormValues(curFormRef, controlValuesRules);
      const newControlErrors = validate(controlValues, controlValuesRules);
      this.setState({ controlErrors: newControlErrors });
      if (Object.keys(newControlErrors).length === 0) {
        if (curFormRef.imageFile !== null && curFormRef.imageFile.files !== null) {
          const file = URL.createObjectURL(curFormRef?.imageFile.files[0]);
          controlValues.imageFile = file;
        }
        this.addGameCard(controlValues);
        alert('Success: new game added');
        curFormRef.reset();
      }
    }
  }

  private getFormValues(formRef: HTMLFormElement, controlValuesRules: ControlValueRule[]) {
    let controlValues: ControlValues = {};
    try {
      controlValuesRules.forEach((control) => {
        switch (control.controlType) {
          case 'text':
          case 'radiobox':
          case 'switcher':
          case 'file':
          case 'date':
          case 'selector':
            controlValues = { ...controlValues, [control.name]: formRef[control.name].value };
            break;
          case 'checkbox':
            const platforms: string[] = Object.keys(formRef[control.name])
              .map((checkbox) => formRef[control.name][checkbox])
              .filter((checkbox) => checkbox.checked)
              .map((checkbox) => checkbox.value);
            controlValues = { ...controlValues, [control.name]: platforms };
            break;
          default:
            throw new Error('Unknown field type');
        }
      });
    } catch (e) {
      console.log(e);
    }
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
          <SimpleInputSet errors={controlErrors} />
          <EngineList errors={controlErrors} />
          <PlatformsList errors={controlErrors} />
          <EsrbRatingList errors={controlErrors} />
          <SequelSwitch errors={controlErrors} />
          <ImageFile errors={controlErrors} />
          <button>Create</button>
        </form>
        <GameCardList gameCardList={this.state.gameCardList} />
      </div>
    );
  }
}

export default Form;
