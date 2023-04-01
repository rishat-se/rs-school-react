import React, { useState } from 'react';
import EngineList from '../../components/FormComponents/EngineList';
import EsrbRatingList from '../../components/FormComponents/EsrbRatingList';
import { GameCardData } from '../../components/GameCard/GameCard';
import GameCardList from '../../components/GameCardList/GameCardList';
import PlatformsList from '../../components/FormComponents/PlatformsList';
import SequelSwitch from '../../components/FormComponents/SequelSwitch';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';
import ImageFile from '../../components/FormComponents/ImageFile';
import TextInput from '../../components/FormComponents/TextInput';
import DateInput from '../../components/FormComponents/DateInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

function Form() {
  const [gameCardList, setGameCardList] = useState<GameCardData[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formRef: React.RefObject<HTMLFormElement> = React.createRef();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const file = URL.createObjectURL(data.imageFile[0]);
    addGameCard({ ...data, imageFile: file });
    alert('Success: new game added');
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  function addGameCard(data: FieldValues) {
    const newGameCard: GameCardData = { id: uuidv4(), ...data } as GameCardData;
    console.log(newGameCard);
    const newGameCardList = gameCardList.concat([newGameCard as GameCardData]);
    console.log(newGameCardList);
    setGameCardList(newGameCardList);
  }

  return (
    <div className="game-card__container">
      <form ref={formRef} className="game-card__form" onSubmit={handleSubmit(onSubmit)}>
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
      <GameCardList gameCardList={gameCardList} />
    </div>
  );
}

export default Form;
