
"use client"
import React from 'react'
import Herodetails from './Herodetails'
import Gallery from './Gallery'
import Footer from '../home/Footer'
import useFetchByID from '@/libs/hooks/useFetchByID'

const Details = ({id}) => {
  // fetch here 

 const{ card, isErrorC1, isPendingC1 } =  useFetchByID(id)

 console.log(card[0])
  return (
 <>
  <Herodetails data={card[0]}  loading={isPendingC1}  error={isErrorC1} />
  <Gallery data={card[0]} loading={isPendingC1}  error={isErrorC1} />
  <Footer />
 </>

  )
}

export default Details
