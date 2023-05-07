const initialState = {
  movies: [{
    name: 'test'
  }],
}

export default function MovieReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'value':
      return state;
      break;

    default:
      break;
  }
  return state;
}