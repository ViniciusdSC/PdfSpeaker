import {store} from '~/store';
import {Types} from '~/store/reducers/speakers';

export const addSpeaker = (payload) => {
  return store.dispatch({
    payload,
    type: Types.ADD_SPEAKER,
  });
};

export const removeSpeaker = (id) => {
  return store.dispatch({
    payload: {id},
    type: Types.REMOVE_SPEAKER,
  });
};
