import { Map } from 'immutable';

// Creating the initial Immutable Map
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Creating a new Map based on the first one with modified values
export const map2 = map
  .set(2, 'Benjamin')
  .set(4, 'Oliver');
