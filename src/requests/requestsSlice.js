import { db } from "../utils/firebase.config";
import { collection, addDoc } from "firebase/firestore";

// the function below takes in the name of the collection we are writing too and a payload in a form of object as it's second parameter

export const requestNewCategoryOrPost = async (
  firstName,
  textMessage,
  contactInfo
) => {
  try {
    const postRequest = await addDoc(collection(db, "requests"), {
      to: "v.palatnyk@gmail.com",
      name: firstName,
      text: textMessage,
      contactInfo: contactInfo,
    });

    console.log(
      `Request has been sent successfully. Status ${postRequest.status}`
    );
    return Promise.resolve();
  } catch (error) {
    console.error(`Sending request failed with error:`, error);
    return Promise.reject(error);
  }
};
