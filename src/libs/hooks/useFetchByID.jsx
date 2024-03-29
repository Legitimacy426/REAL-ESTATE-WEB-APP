

import { useEffect, useState } from "react";


import {

  query,
 
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";


const useFetchByID = (id) => {


const [card, setCards] = useState([]);
const [isErrorC1, setError] = useState(null);
const [isPendingC1, setPendingC] = useState(true);

    useEffect(() => {
   
    const Cards = [];
      let q;
      const userRef = doc(db, "properties",id);
      q = query(
        userRef,
         
       );
   
    getDoc(q)
      .then((user) => {
        Cards.push({ ...user.data(), id: user.id });
        setCards(Cards);
        setPendingC(false);
        console.log(Cards,'----------------------------')
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  }, [id]);
  return { card, isErrorC1, isPendingC1 };
};
export default useFetchByID;