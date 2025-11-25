const UserReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS_START":
      return {
        ...state,
        users: [],  // Start with an empty users array
        isFetching: true,
        error: false,
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state, // Preserve the existing state
        users: action.payload, // Update with the fetched users
        isFetching: false,
        error: false,
      };
    case "GET_USERS_FAILURE":
      return {
        ...state, // Preserve the existing state
        users: [], // Clear the users list on failure
        isFetching: false,
        error: true,
      };
    
    case "DELETE_USER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload), // Ensure using the correct user ID field
        isFetching: false,
        error: false,
      };
    case "DELETE_USER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default UserReducer;
