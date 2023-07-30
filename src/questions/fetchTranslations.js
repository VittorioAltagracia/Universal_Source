import axios from "axios";
import { apiKey } from "../utils/nlpApiKey";
export const TranslateViaAPI = async (questions) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("text", questions);
  encodedParams.set("to", "uk");
  encodedParams.set("from", "en");

  const options = {
    method: "POST",
    url: "https://nlp-translation.p.rapidapi.com/v1/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
