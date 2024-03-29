import Details from '@/comps/Details/Details'
import React from 'react'

const page = ({params}) => {
    console.log(params.id)
  return (
    <Details  id={params.id}/>
  )
}

export default page
