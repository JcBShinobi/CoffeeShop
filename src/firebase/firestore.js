import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getProducts() {
  const ref = collection(db, "products"); // TEM DE SER products
  const snapshot = await getDocs(ref);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}