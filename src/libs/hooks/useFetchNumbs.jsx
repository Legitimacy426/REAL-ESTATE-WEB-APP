

import { useEffect, useState } from "react";
import TimeAgo from 'react-timeago'

import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import Errors from "@/comps/Errors";


const FetchNumbs = ({tag}) => {


const [cardslength, setCardlength] = useState([]);
const [cards, setCards] = useState([]);
const [isErrorC, setError] = useState(null);
const [isPendingC, setPendingC] = useState(true);
const [lastdate, setLastDate] = useState(true);


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
        setCards(Cards)
        setCardlength(Cards.length);
        setPendingC(false);
  const d = Cards[0].createdAt
  setLastDate(d)
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  }, [tag]);
  return (
  

    <>
         <div className="text-2xl font-bold">  <span>{cardslength } </span></div>
        <p className="text-xs text-gray-500 dark:text-gray-400"> Last added <TimeAgo date={new Date()} />
        </p>
         {isPendingC && (<span className="loading loading-spinner loading-xs"></span>)}
    </>
  )
};
export default FetchNumbs;