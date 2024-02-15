const initialState = {
  searchUserData: [],
};

const searchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERDATA':
      const isDuplicate = state.searchUserData.some(
        (data) => data.current === action.payload.current
      );

      if (!isDuplicate) {
        return {
          ...state,
          searchUserData: [
            ...state.searchUserData,
            { current: action.payload.current, previous: action.payload.previous },
          ],
        };
      } else {
        return state;
      }
    case 'REMOVE_USERDATA':
      const updatedData = [...state.searchUserData];
      updatedData.splice(action.payload, 1);
      return {
        ...state,
        searchUserData: updatedData,
      };
    case 'CLEAR_ALL_SEARCH_USERDATA':
      return {
        ...state,
        searchUserData: [],
      };
    default:
      return state;
  }
};

export default searchUserReducer;

