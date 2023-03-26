import React, { ReactHTMLElement } from 'react';
import EngineList from '../components/EngineList';
import EsrbRatingList from '../components/EsrbRatingList';
import GameCard, { GameCardData } from '../components/GameCard';
import PlatformsList from '../components/PlatformsList';
import SequelSwitch from '../components/SequelSwitch';
import SimpleInputSet from '../components/SimpleInputSet';

class Form extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
    this.state = { gameCardList: [] };
    this.formRef = React.createRef();
  }
  state: { gameCardList: GameCardData[] };
  formRef: React.RefObject<HTMLFormElement>;

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.formRef.current !== null) {
      console.log(Object.keys(this.formRef.current));
      console.log(this.formRef.current.gameName.value);
      console.log(this.formRef.current.developer.value);
      console.log(this.formRef.current.publisher.value);
      console.log(this.formRef.current.firstRelease.value);
      console.log(this.formRef.current.engine.value);
      console.log(this.formRef.current.platforms.value);
      console.log(this.formRef.current.esrbRating.value);
      console.log(Object.keys(this.formRef.current.esrbRating['0']));
      console.log(this.formRef.current.esrbRating['1'].checked);
      console.log(this.formRef.current.imageFile.value);
      //      this.addGameCard(gameCard);
    }
  }

  private addGameCard(gameCard: GameCardData) {
    const newGameCardList = this.state.gameCardList.concat([gameCard]);
    this.setState({ gameCardList: newGameCardList });
  }

  render() {
    return (
      <form ref={this.formRef} onSubmit={(e) => this.handleSubmit(e)}>
        <SimpleInputSet />
        <EngineList />
        <PlatformsList />
        <EsrbRatingList />
        <SequelSwitch />
        <button>Create</button>
      </form>
    );
  }
}

export default Form;
