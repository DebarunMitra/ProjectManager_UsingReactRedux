import {BUY_CANDY} from './candyTypes';

export const buyCandy = () => {
  return {
    type: BUY_CANDY,
    info: 'Candy redux action'
  }
}
