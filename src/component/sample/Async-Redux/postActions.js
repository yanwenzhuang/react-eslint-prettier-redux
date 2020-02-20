import axios from "axios";
import * as actionsType from "./actionsType";

function requestPosts() {
  return {
    type: actionsType.REQUEST_POSTS,
  };
}

function receivePosts(json) {
  return {
    type: actionsType.RECEIVE_POSTS,
    items: json.data,
    receivedAt: Date.now(),
  };
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestPosts()); // display the loading status
    const axiosConfig = {
      withCredentials: true,
    };
    return axios
      .get("http://localhost:8080/getUserInfo", axiosConfig)
      .then(response => {
        console.log(response);
        dispatch(receivePosts(response.data));
      })
      .catch(err => {
        console.log("An error occurred.", err);
      });
  };
}
