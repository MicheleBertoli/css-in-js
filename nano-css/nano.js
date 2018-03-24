import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';

const nano = create();

addonRule(nano);

const {rule} = nano;

export {
  rule
};
