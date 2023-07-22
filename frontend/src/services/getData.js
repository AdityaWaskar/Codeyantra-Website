import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

const getData = {
  async getDataByCollection(collection_name) {
    const data = await getDocs(collection(db, collection_name)).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return newData === undefined ? [] : newData;
      }
    );

    return data;
  },
};

export default getData;
