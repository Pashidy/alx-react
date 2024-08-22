import { Map } from 'immutable';

function getImmutableObject(object) {
  // Converts the object into an immutable Map
  return Map(object);
}

export default getImmutableObject;
