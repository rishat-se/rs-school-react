import React, { useState } from 'react';
import EngineList from '../../components/FormComponents/EngineList';
import EsrbRatingList from '../../components/FormComponents/EsrbRatingList';
import { GameCardData } from '../../components/GameCard/GameCard';
import GameCardList from '../../components/GameCardList/GameCardList';
import PlatformsList from '../../components/FormComponents/PlatformsList';
import SequelSwitch from '../../components/FormComponents/SequelSwitch';
import controlValuesRules from '../../validator/controlValuesRules';
import validate from '../../validator/validate';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';
import ImageFile from '../../components/FormComponents/ImageFile';
import TextInput from '../../components/FormComponents/TextInput';
import DateInput from '../../components/FormComponents/DateInput';
import { esrbRatings, platforms } from '../../constants/form.constants';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export type ControlValues = Partial<GameCardData>;
export type ControlErrors = {
  [Property in keyof GameCardData]?: string;
};

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

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [gameCardList, setGameCardList] = useState();
  const [controlErrors, setControlErrors] = useState();

  const formRef = React.createRef();
  // this.controlRefs = {
  //   gameName: React.createRef(),
  //   developer: React.createRef(),
  //   publisher: React.createRef(),
  //   firstRelease: React.createRef(),
  //   esrbRating: esrbRatings.map(() => React.createRef()),
  //   engine: React.createRef(),
  //   platforms: platforms.map(() => React.createRef()),
  //   isSequelAnnounced: [React.createRef(), React.createRef()],
  //   imageFile: React.createRef(),
  // };

  // state: { gameCardList: GameCardData[]; controlErrors: ControlErrors };
  // controlRefs: ControlRefs;
  // formRef: React.RefObject<HTMLFormElement>;
  //  console.log(errors);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    //   // const imageFileRef = this.controlRefs.imageFile.current;
    //   // e.preventDefault();
    //   // const controlValues = this.getFormValues(this.controlRefs);
    //   // const newControlErrors = validate(controlValues, controlValuesRules);
    //   // this.setState({ controlErrors: newControlErrors });
    //   // if (Object.keys(newControlErrors).length === 0) {
    //   //   if (imageFileRef !== null && imageFileRef.files !== null) {
    //   //     const file = URL.createObjectURL(imageFileRef.files[0]);
    //   //     controlValues.imageFile = file;
    //   //   }
    //   //   this.addGameCard(controlValues);
    //   //   alert('Success: new game added');
    //   //   if (this.formRef.current !== null) {
    //   //     this.formRef.current.reset();
    //   //   }
    //   // }
    console.log(data);
  };

  function getFormValues(controlRefs: ControlRefs) {
    const controlValues: ControlValues = {};
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

  // function addGameCard(controlValues: ControlValues) {
  //   const newGameCard = { id: uuidv4(), ...controlValues };
  //   const newGameCardList = gameCardList.concat([newGameCard as GameCardData]);
  //   this.setState({ gameCardList: newGameCardList });
  // }

  return (
    <div className="game-card__container">
      <form className="game-card__form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add Game</h2>
        <TextInput label="Game" name="gameName" errors={errors} register={register} />
        <TextInput label="Developer" name="developer" errors={errors} register={register} />
        <TextInput label="Publisher" name="publisher" errors={errors} register={register} />
        <DateInput label="First Release" name="firstRelease" errors={errors} register={register} />
        <EngineList label="Engine" name="engine" errors={errors} register={register} />
        <PlatformsList label="Platforms" name="platforms" errors={errors} register={register} />
        <EsrbRatingList label="ESRB Rating" name="esrbRating" errors={errors} register={register} />
        <SequelSwitch
          label="Is sequel announced?"
          name="isSequelAnnounced"
          errors={errors}
          register={register}
        />
        <ImageFile label="Load Thumbnail" name="imageFile" errors={errors} register={register} />
        <button>Create</button>
      </form>
      {/* <GameCardList gameCardList={this.state.gameCardList} /> */}
    </div>
  );
}

export default Form;
