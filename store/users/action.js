export const userActionTypes = {
  UPDATE_USER_STATUS: "UPDATE_USER_STATUS",
  REMOVE_USER_STATUS: "REMOVE_USER_STATUS"
};

export const loginUser = () => {
  return { type: userActionTypes.UPDATE_USER_STATUS };
};

export const logoutUser = () => {
  return { type: userActionTypes.REMOVE_USER_STATUS };
};