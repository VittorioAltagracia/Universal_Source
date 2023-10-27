import { db } from "../utils/firebase.config";
import { collection, addDoc } from "firebase/firestore";

const emailToSendTo = "vittorioaltagracia@gmail.com";

// the function below takes in the name of the collection we are writing too and a payload in a form of object as it's second parameter
export const requestNewCategoryOrPost = async (
  firstName,
  textMessage,
  contactInfo,
  newParam,
  collectionName
) => {
  try {
    // let testError = true;
    // if (testError) {
    //   throw new Error(`test error`);
    // }

    // areaToImprove is an optinal parameter

    const postRequest = await addDoc(collection(db, collectionName), {
      to: emailToSendTo,
      name: firstName,
      text: textMessage,
      areaToImprove: newParam ?? null,
      contactInfo: contactInfo,
    });

    return postRequest;
  } catch (error) {
    console.error(`Sending request failed with error:`, error);
    throw error;
  }
};
