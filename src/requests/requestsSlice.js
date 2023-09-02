import { db } from "../utils/firebase.config";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

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

// export const deleteRecordsByToProperty = async (toValue) => {
//   // Create a query to find documents with the matching "to" property
//   const q = query(collection(db, "requests"), where("to", "==", toValue));

//   try {
//     // Execute the query to get the matching documents
//     const querySnapshot = await getDocs(q);

//     // Loop through the documents and delete each one
//     querySnapshot.forEach(async (doc) => {
//       const docRef = (db, "requests", doc.id);
//       await deleteDoc(docRef);
//       console.log(`Deleted document with "to" value: ${toValue}`);
//     });

//     return Promise.resolve();
//   } catch (error) {
//     console.error(
//       `Error deleting documents with "to" value: ${toValue}`,
//       error
//     );
//     return Promise.reject(error);
//   }
// };

// // Usage: Delete documents with a specific "to" value
// deleteRecordsByToProperty("v.palatnyk@gmail.com");
