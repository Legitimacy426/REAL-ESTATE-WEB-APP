

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
const [lastdate, setLastDate] = useState('');


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
  const d = Cards[0].updatedAt
  const ts = (d.seconds+d.nanos*10**-9)*1000
  day = new Date(ts)

  setLastDate(day) 
 
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  }, []);
  return (
  

    <>
         <div className="text-2xl font-bold">  <span>{cardslength } </span></div>
        <p className="text-xs text-gray-500 dark:text-gray-400"> Last added <TimeAgo date={lastdate} />
        </p>
         {isPendingC && (<span className="loading loading-spinner loading-xs"></span>)}
    </>
  )
};
export default FetchNumbs;