import axios from "axios";
// get all no.of clients
const API_PATH =
  "https://us-central1-gatestone-yyte.cloudfunctions.net/campaignAnalytics";
export function getCampaignAnalytics(data) {
  return new Promise((resolve, reject) => {
    axios
      .post(API_PATH, data)
      .then((response) => {
        return resolve(response);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
