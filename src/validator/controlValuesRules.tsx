export type ControlValueRule = {
  name: string;
  controlType: string;
  mandatory: { isMandatory: boolean; errorMessage: string };
  regExp?: { rule: string; errorMessage: string }[];
};

const controlValuesRules: ControlValueRule[] = [
  {
    name: 'gameName',
    controlType: 'text',
    mandatory: { isMandatory: true, errorMessage: 'Please enter name of the game' },
    regExp: [{ rule: '^.{0,50}$', errorMessage: 'Max length no more than 50 characters' }],
  },
  {
    name: 'developer',
    controlType: 'text',
    mandatory: { isMandatory: true, errorMessage: 'Please enter name of the game developer' },
    regExp: [{ rule: '^.{0,50}$', errorMessage: 'Max length no more than 50 characters' }],
  },
  {
    name: 'publisher',
    controlType: 'text',
    mandatory: { isMandatory: true, errorMessage: 'Please enter name of the game publisher' },
    regExp: [{ rule: '^.{0,50}$', errorMessage: 'Max length no more than 50 characters' }],
  },
  {
    name: 'firstRelease',
    controlType: 'date',
    mandatory: { isMandatory: true, errorMessage: 'Please enter first release date' },
  },
  {
    name: 'platforms',
    controlType: 'checkbox',
    mandatory: { isMandatory: true, errorMessage: 'Please select at least one platform' },
  },
  {
    name: 'esrbRating',
    controlType: 'radiobox',
    mandatory: { isMandatory: true, errorMessage: 'Please select assigned ESRB rating' },
  },
  {
    name: 'isSequelAnnounced',
    controlType: 'switcher',
    mandatory: {
      isMandatory: true,
      errorMessage: 'Please select whether sequel was announced or not',
    },
  },
  {
    name: 'imageFile',
    controlType: 'file',
    mandatory: {
      isMandatory: true,
      errorMessage: 'Please select a file for thumbnail of the game',
    },
    regExp: [],
  },
];

export default controlValuesRules;
