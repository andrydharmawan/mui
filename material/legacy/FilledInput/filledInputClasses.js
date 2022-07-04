import { generateUtilityClasses, generateUtilityClass } from '@mui/base';
export function getFilledInputUtilityClass(slot) {
  return generateUtilityClass('MuiFilledInput', slot);
}
var filledInputClasses = generateUtilityClasses('MuiFilledInput', ['root', 'colorSecondary', 'underline', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'hiddenLabel', 'input', 'inputSizeSmall', 'inputHiddenLabel', 'inputMultiline', 'inputAdornedStart', 'inputAdornedEnd']);
export default filledInputClasses;