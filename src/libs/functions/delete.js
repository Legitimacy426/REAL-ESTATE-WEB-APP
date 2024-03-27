import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"



export const deleteItem = (id) =>{
  const docRef = doc(db,"properties",id)
  deleteDoc(docRef).then(()=>{
   console.log("delete succesifully")
  }).catch((e)=>{
    console.log(e.message)
  })

}