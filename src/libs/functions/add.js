import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebaseConfig"


export const add = (tag,data) =>{
 
try {
   
     
    const depoRef = collection(db, tag)
            addDoc(depoRef, data).then(() => {
          console.log("house uploaded")
              
            }).catch((e) => {
             console.log("error adding house")
               console.log(e.message)
            })
     

    
} catch (error) {
    console.log(error.message)
}
}