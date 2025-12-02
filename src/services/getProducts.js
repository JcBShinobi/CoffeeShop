import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getProducts() {
  const ref = collection(db, "products");
  const snapshot = await getDocs(ref);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}