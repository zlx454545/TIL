import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1bX4W4l8rKlcZL7vCsfkZX4iuiCD9VPbEdjO9JX949I",
  },
});
