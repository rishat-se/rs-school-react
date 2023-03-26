import React, { ReactHTMLElement } from 'react';
import EngineList from '../components/EngineList';
import EsrbRatingList from '../components/EsrbRatingList';
import GameCard, { GameCardData } from '../components/GameCard';
import PlatformsList from '../components/PlatformsList';
import SequelSwitch from '../components/SequelSwitch';
import SimpleInputSet from '../components/SimpleInputSet';
import controlValuesRules, { ControlValueRule } from '../validator/controlValuesRules';
import validate from '../validator/validate';
import './Form.css';

// export type ControlError = {
//   name: string;
//   error: string;
// };

export type ControlValues = Partial<GameCardData>;
export type ControlErrors = Partial<GameCardData>;

class Form extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
    this.state = { gameCardList: [], controlErrors: [] };
    this.formRef = React.createRef();
  }
  state: { gameCardList: GameCardData[]; controlErrors: ControlErrors };
  formRef: React.RefObject<HTMLFormElement>;

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.formRef.current !== null) {
      const controlValues = this.getFormValues(this.formRef.current, controlValuesRules);
      const newControlErrors = validate(controlValues, controlValuesRules);
      this.setState({ controlErrors: newControlErrors });
      //      this.addGameCard(gameCard);
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

  private addGameCard(gameCard: GameCardData) {
    const newGameCardList = this.state.gameCardList.concat([gameCard]);
    this.setState({ gameCardList: newGameCardList });
  }

  render() {
    const { controlErrors } = this.state;
    return (
      <form ref={this.formRef} onSubmit={(e) => this.handleSubmit(e)}>
        <SimpleInputSet errors={controlErrors} />
        <EngineList errors={controlErrors} />
        <PlatformsList errors={controlErrors} />
        <EsrbRatingList errors={controlErrors} />
        <SequelSwitch errors={controlErrors} />
        <button>Create</button>
      </form>
    );
  }
}

export default Form;
