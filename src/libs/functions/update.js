import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"



export const updateItem = (id,data) =>{
    
  const docRef = doc(db,"properties",id)
  updateDoc(docRef,data).then(()=>{
   console.log("updated succesifully")
  }).catch((e)=>{
    console.log(e.message)
  })

}