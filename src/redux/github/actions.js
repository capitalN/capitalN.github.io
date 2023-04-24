import { GET_REPOS, GET_USER } from "./actionTypes";
import axios from "axios";
let username = "capitalN";

const token = process.env.REACT_APP_API_KEY;
const query = `{
  user(login: "${username}") {
    websiteUrl
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          homepageUrl
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
}`;

export const get_repos = () => async (dispatch) => {
  try {
    let res = await axios.post(
      "https://api.github.com/graphql",
      { query },
      { headers: { Authorization: `bearer ${token}` } }
    );
    let payload = res.data.data.user.pinnedItems.nodes;
    dispatch({ type: GET_REPOS, payload });
    console.log(payload);
  } catch (error) {
    console.log(error);
    console.error(error.response.data.message);
  }
};

export const get_user = () => async (dispatch) => {
  try {
    let res = await axios.get(`https://api.github.com/users/${username}`);
    let payload = res.data;
    dispatch({ type: GET_USER, payload });
  } catch (error) {
    console.log(error);
  }
};
