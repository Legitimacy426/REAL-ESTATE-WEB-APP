

import { useEffect, useState } from "react";


import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig";


const useFetch = (tag) => {


const [cards, setCards] = useState([]);
const [isErrorC, setError] = useState(null);
const [isPendingC, setPendingC] = useState(true);

    useEffect(() => {
   
    const Cards = [];
      let q;
      const userRef = collection(db, "properties");
      q = query(
        userRef,
        where('category','==',tag)
       );
   
    getDocs(q)
      .then((users) => {
        users.forEach((user) => {
          Cards.push({ ...user.data(), id: user.id });
        });
        setCards(Cards);
        setPendingC(false);
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  }, [tag]);
  return { cards, isErrorC, isPendingC };
};
export default useFetch;