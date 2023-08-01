import axios from "axios";
import { apiKey } from "../utils/nlpApiKey";

export const TranslateViaAPI = async (...questionsData) => {
  try {
    const responses = await Promise.all(
      questionsData.map((par) => {
        const data = [
          {
            Text: par,
          },
        ];

        const params = new URLSearchParams();
        params.set("to[0]", "uk");
        params.set("api-version", "3.0");
        params.set("profanityAction", "NoAction");
        params.set("textType", "plain");

        const url =
          "https://microsoft-translator-text.p.rapidapi.com/translate";
        return axios.post(url, data, {
          params,
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
          },
        });
      })
    );

    const translatedText = responses.map((res) => res.data);
    console.log(translatedText);
    return translatedText;
  } catch (error) {
    console.log(error);
  }
};
