import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ece25568ef142878c967ca78ca085f2",
  },
});
