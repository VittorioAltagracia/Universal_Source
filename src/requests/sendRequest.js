import { post } from "jquery";
import { db } from "../utils/firebase.config";
import { collection, addDoc } from "firebase/firestore";

const emailToSendTo = "vittorioaltagracia@gmail.com";

// the function below takes in the name of the collection we are writing too and a payload in a form of object as it's second parameter
export const requestNewCategoryOrPost = async (
  firstName,
  textMessage,
  contactInfo
) => {
  try {
    const postRequest = await addDoc(collection(db, "requests"), {
      to: emailToSendTo,
      name: firstName,
      text: textMessage,
      contactInfo: contactInfo,
    });

    return postRequest;
  } catch (error) {
    console.error(`Sending request failed with error:`, error);
    throw error;
  }
};
