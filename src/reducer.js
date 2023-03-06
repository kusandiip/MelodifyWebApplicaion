export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove it after finish developing.....
  // token:
  //   "BQB2Nlsnl0Pd-oqOWGOFWcKgLIbEQ43GOfpkUNBK8NLSs4G9zGaWIJB7vfcSxPeRXAuiaQZ2Od9zeEyiytXulT9AweBRehQB0XFues8F8FoPMjfBEFh4kO5q4lsUIvf8Q94akbC_YhNsmMqnP8v-DvhJLQo0TxTTE-8OYD3OYTDJBDsVwQ0WeNw-xagQIeBRBTuiaAYjRUNZPtFuCyET6A",
};

const reducer = (state, action) => {
  console.log(action);
  //   Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return{
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state;
  }
};

export default reducer;
