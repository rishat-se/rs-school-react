import { GameCardData } from '../components/GameCard';
import { ControlErrors, ControlValues } from '../routes/Form';
import { ControlValueRule } from './controlValuesRules';

const validate = (controlValues: ControlValues, controlValuesRules: ControlValueRule[]) => {
  const controlErrors: ControlErrors = {};
  controlValuesRules.map((control) => {
    if (control.mandatory.isMandatory) {
      if (controlValues[control.name as keyof GameCardData]?.length === 0) {
        controlErrors[control.name as keyof ControlErrors] = control.mandatory.errorMessage;
      }
    }
    if (control.regExp?.length) {
      control.regExp.forEach((regExp) => {
        if (
          typeof controlValues[control.name as keyof GameCardData] === 'string' &&
          !new RegExp(regExp.rule).test(controlValues[control.name as keyof GameCardData] as string)
        ) {
          controlErrors[control.name as keyof GameCardData] = regExp.errorMessage;
        }
      });
    }
  });
  return controlErrors;
};

export default validate;
