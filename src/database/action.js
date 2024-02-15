  export const setSearchUserData = (searchUserData) => ({
    type: 'SET_USERDATA',
    payload: searchUserData,
  });
  export const removeSearchUserData = (index) => ({
    type: 'REMOVE_USERDATA',
    payload: index,
  });
  export const clearAllSearchUserData = () => ({
    type: 'CLEAR_ALL_SEARCH_USERDATA',
  });