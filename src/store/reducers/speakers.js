export const Types = {
  ADD_SPEAKER: 'ADD_SPEAKER',
  REMOVE_SPEAKER: 'REMOVE_SPEAKER',
};

export default function (state = [], {type, payload}) {
  switch (type) {
    case Types.ADD_SPEAKER:
      return [...state, {id: Date.now(), ...payload}];
    case Types.REMOVE_SPEAKER:
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
}
