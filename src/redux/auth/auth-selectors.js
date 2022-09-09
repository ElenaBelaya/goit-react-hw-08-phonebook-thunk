const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getisFetchingCurrentUser = state => state.auth.isRefreshingCurrentUser;
const getError = state => state.auth.error;
const getToken = state => state.auth.token;
const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getisFetchingCurrentUser,
  getError,
  getToken,
};

export default authSelectors;
