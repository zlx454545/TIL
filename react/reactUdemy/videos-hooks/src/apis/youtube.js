import axios from "axios";

const KEY = "AIzaSyBpo0v5KoHDiYCQSpA4RUXryIPPafaHgdI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
