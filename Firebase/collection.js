import { getFirestore } from "firebase/firestore";
import { app } from "./firebase-config";
import { getDocs,doc,addDoc,deleteDoc,collection,query,onSnapshot} from "firebase/firestore";

const db = getFirestore(app);

async function getItem(item) {
  const photosCol = collection(db, item);
  const photoSnapshot = await getDocs(photosCol);
  const ItemList = photoSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
return ItemList;
}

async function deleteItem(id, item) {
  try {
  await deleteDoc(doc(db, item, id));
  console.log("Document deleted with ID: ", id);
} catch (error) {
  console.error("Error deleting document: ", error);
}
}

async function AddItem(objectItem, item) {
  try {
    const docRef = await addDoc(collection(db, item), objectItem);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function subscribe(callback, item) {
  const unsubscribe = onSnapshot(
    query(collection(db, {item})),
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        
        if (callback) callback({ change, snapshot});
      });
     
    }
  );
  return unsubscribe;
}


export { getItem,AddItem,deleteItem,subscribe};