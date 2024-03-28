import React from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"

import useFetch from '@/libs/hooks/useFetch'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import Errors from '../Errors'

const Tables = ({tag}) => {
  const { cards, isErrorC, isPendingC } = useFetch(tag)  
  return (
   <>

         
              <div className="">
             {/* table here -================================================= */}
             <Table className="w-full">
      <TableHeader className="hidden sm:table-header-group">
        <TableRow>
          <TableHead className="w-[120px]"></TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
         
          <TableHead className="w-[120px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
   {cards.map(card =>(
       <TableRow className="divide-y" key={card.id}>
       <TableCell className="hidden md:block">
         <img
           alt="House image"
           className="aspect-video rounded-md overflow-hidden object-cover  "
           height="80"
           src={card.thumbnail}
           width="120"
         />
       </TableCell>
       <TableCell>
         <div className="font-semibold">{card.label}</div>
         <div className="text-sm text-gray-500 dark:text-gray-400">{card.location}</div>
       </TableCell>
       <TableCell className="font-semibold">{card.price}</TableCell>
       <TableCell>{card.status}</TableCell>
       <TableCell>just now</TableCell>
      
     </TableRow>
   ))}
        
       
      </TableBody>
    </Table>
    {/* errors */}
    <Errors data={cards} loading={isPendingC} error={isErrorC} />
              </div>
          
    
   </>
  )
}

export default Tables
