// import React, { ReactHTMLElement } from 'react';
// import EngineList from '../components/EngineList';
// import EsrbRatingList from '../components/EsrbRatingList';
// import GameCard, { GameCardData } from '../components/GameCard';
// import PlatformsList from '../components/PlatformsList';

// class Form extends React.Component<{}> {
//   constructor(props: {}) {
//     super(props);
//     this.state = { gameCardList: [] };
//     this.formRef = React.createRef();
//   }
//   state: { gameCardList: GameCardData[] };
//   formRef: React.RefObject<HTMLFormElement>;

//   handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (this.formRef.current !== null) {
//       console.log(Object.keys(this.formRef.current));
//       console.log(this.formRef.current.gameName.value);
//       console.log(this.formRef.current.developer.value);
//       console.log(this.formRef.current.publisher.value);
//       console.log(this.formRef.current.firstRelease.value);
//       console.log(this.formRef.current.engine.value);
//       console.log(this.formRef.current.platforms.value);
//       console.log(this.formRef.current.esrbRating.value);
//       console.log(Object.keys(this.formRef.current.esrbRating['0']));
//       console.log(this.formRef.current.esrbRating['1'].checked);
//       console.log(this.formRef.current.imageFile.value);
//       //      this.addGameCard(gameCard);
//     }
//   }

//   private addGameCard(gameCard: GameCardData) {
//     const newGameCardList = this.state.gameCardList.concat([gameCard]);
//     this.setState({ gameCardList: newGameCardList });
//   }

//   render() {
//     return (
//       <form ref={this.formRef} onSubmit={(e) => this.handleSubmit(e)}>
//         <div>
//           <label>
//             Game:
//             <input
//               // ref={this.gameNameRef}
//               name="gameName"
//               type="text"
//               placeholder="Enter Game Name"
//             ></input>
//           </label>
//         </div>
//         <div>
//           <label>
//             Developer:
//             <input
//               // ref={this.developerRef}
//               name="developer"
//               type="text"
//               placeholder="Enter Game Developer Name"
//             ></input>
//           </label>
//         </div>
//         <div>
//           <label>
//             Publisher:
//             <input
//               // ref={this.publisherRef}
//               name="publisher"
//               type="text"
//               placeholder="Enter Game Publisher Name"
//             ></input>
//           </label>
//         </div>
//         <div>
//           <label>
//             First Release:
//             <input
//               // ref={this.firstReleaseRef}
//               name="firstRelease"
//               type="date"
//             ></input>
//           </label>
//         </div>
//         {/* <div>
//           <label>
//             Engine:
//             <select
//               // ref={this.engineRef}
//               name="engine"
//             >
//               <option value="Unreal">Unreal</option>
//               <option value="Unity">Unity</option>
//               <option value="Source">Source</option>
//               <option value="Cryengine">Cryengine</option>
//               <option value="Gamebryo">Gamebryo</option>
//               <option value="IW">IW</option>
//               <option value="Anvil">Anvil</option>
//               <option value="id Tech">id Tech</option>
//               <option value="Essence">Essence</option>
//               <option value="Clausewitz">Clausewitz</option>
//             </select>
//           </label>
//         </div> */}
//         <EngineList />
//         <PlatformsList />
//         <EsrbRatingList />
//         {/* <div>
//           <label>Platforms:</label>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms" value="Android"></input>
//               Android
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms" value="iOS"></input>
//               iOS
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               iPadOS
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               Linux
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               MacOS
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               Nintendo Switch
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               Playstation 3
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               Playstation 4
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               Playstation 5
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               Xbox 360
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               Xbox One
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               Xbox Series X/S
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" name="platforms"></input>
//               Windows
//             </label>
//           </div>
//         </div> */}
//         {/* <div>
//           <label>ESRB Rating:</label>
//           <label>
//             <input type="radio" name="esrbRating"></input>
//             Everyone
//           </label>
//           <label>
//             <input type="radio" name="esrbRating"></input>
//             Everyone 10+
//           </label>
//           <label>
//             <input type="radio" name="esrbRating"></input>
//             Teen
//           </label>
//           <label>
//             <input type="radio" name="esrbRating"></input>
//             Mature 17+
//           </label>
//           <label>
//             <input type="radio" name="esrbRating"></input>
//             Adults Only 18+
//           </label>
//           <label>
//             <input type="radio" name="esrbRating"></input>
//             Rating Pending
//           </label>
//         </div> */}
//         <div>
//           <label>Is sequel announced?:</label>
//           <div>
//             <label>
//               <input type="radio" name="isSequelAnnounced" value="yes"></input>
//               Yes
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="radio" name="isSequelAnnounced" value="no"></input>
//               No
//             </label>
//           </div>
//         </div>
//         <div>
//           <label>
//             load thumbnail
//             <input
//               // ref={this.imageFile}
//               name="imageFile"
//               type="file"
//             ></input>
//           </label>
//         </div>
//         <button>Create</button>
//       </form>
//     );
//   }
// }

// export default Form;
