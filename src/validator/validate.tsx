import { ControlErrors, ControlValues } from '../routes/Form';
import { ControlValueRule } from './controlValuesRules';

const validate = (controlValues: ControlValues, controlValuesRules: ControlValueRule[]) => {
  let controlErrors: ControlErrors = {};
  controlValuesRules.map((control) => {
    if (control.mandatory.isMandatory) {
      if (controlValues[control.name].length === 0) {
        controlErrors[control.name] = control.mandatory.errorMessage;
      }
    }
    if (control.regExp?.length) {
      control.regExp.forEach((regExp) => {
        if (!new RegExp(regExp.rule).test(controlValues[control.name])) {
          controlErrors[control.name] = regExp.errorMessage;
        }
      });
    }
  });
  return controlErrors;
};

export default validate;
