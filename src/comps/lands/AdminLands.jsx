/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tasQBxyQoZJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { ArrowLeftIcon, ArrowRightIcon, DotsHorizontalIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { deleteField, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"




import { add } from "@/libs/functions/add"


import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage"
import { app, db } from "@/libs/firebaseConfig"
import useFetch from "@/libs/hooks/useFetch"
import useFetchByID from "@/libs/hooks/useFetchByID"
import { updateItem } from "@/libs/functions/update"
import TimeAgo from "@/libs/functions/TimeAgo"
import TimeAgof from "@/libs/functions/TimeAgo"
import { deleteItem } from "@/libs/functions/delete"
import Navbar from "../admin/Navbar"
import { useRouter } from "next/navigation"
import Errors from "../Errors"

const storage = getStorage(app)



export default function AdminLands() {

// data ===================
const router = useRouter()
const { cards, isErrorC, isPendingC } = useFetch("lands")  
const [selectedId, setSelectedID] = useState('');
// const { card, isErrorC1, isPendingC1 } = useFetchByID(selectedId)

console.log(cards)



    // states=================

    
  
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [images, setImages] = useState([]);
    const [size, setSize] = useState('');
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState('available');
const [progress, setProgress] = useState({});
const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);
const [disabled, setDisabled] = useState(false);


// functions
const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };
// add house ========================
    const handleSubmit = (e)=>{

        e.preventDefault()
 setDisabled(true)
if(name == "" || files.length == 0 || description == "" || price == "" || location == ""  ){
  alert("All fields are required ")
  setDisabled(false)
  return
}
        
          //upload photos================
const tag = "lands"

    files.forEach((file) => {
      const storageRef = ref(storage, `${tag}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progressValue = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress((prevProgress) => ({
            ...prevProgress,
            [file.name]: progressValue,
          }));
        },
        (error) => {
          setError(error.message);
          setDisabled(false)
        },
        () => {
        
           getDownloadURL(ref(storage, `${tag}/${file.name}`))
            .then((url) => {
              // successs================
           images.push(url)
              
        
        console.log('File available at: ', url);
         
    if(images.length === files.length){
      setDisabled(true)
       const doc = {
      description,
       name,
       label: name,
       category:tag,
       size,
       location,
       price,
       createdAt:serverTimestamp(),
       updatedAt : serverTimestamp(),
       images,
       thumbnail : images[0],
       status:"available"
       }

     add("properties",doc)
 console.log(images.length)
 setSuccess("land added succesifully ")
 setDisabled(false)
    }
   

            });
        }
      );
    });

      

    } 


// add photos

const handleUpdate = (e)=>{

  e.preventDefault()


  
    //upload photos================
const tag = "lands"

files.forEach((file) => {
const storageRef = ref(storage, `${tag}/${file.name}`);
const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
  'state_changed',
  (snapshot) => {
    const progressValue = Math.round(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    setProgress((prevProgress) => ({
      ...prevProgress,
      [file.name]: progressValue,
    }));
  },
  (error) => {
    setError(error.message);
  },
  () => {
  
     getDownloadURL(ref(storage, `${tag}/${file.name}`))
      .then((url) => {
        // successs================
     images.push(url)
        
  
  console.log('File available at: ', url);
   
if(images.length === files.length){
  setDisabled(true)
 const doc = {
  description,
 name,
 label: name,
 category:tag,
 size,
 location,
 price,
 updatedAt : serverTimestamp(),
 images,
 thumbnail : images[0],
 status:"available"
 }

updateItem(selectedId,doc)
setSuccess("Updated successifully")
setDisabled(false)
}


      });
  }
);
});



} 

// delete ================================================================

const handleDelete = (id,name) => {
 const yes = confirm(`Do you really want to delete ${name}`)
 if(yes){
     deleteItem(id)
 }

 
}

  return (
    <div className="grid min-h-screen ">
    {/* header=== */}
          
   
      <div className="flex flex-col">
       <Navbar />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline">
              <ArrowLeftIcon className="h-4 w-4"  onClick={router.back}/>
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="font-semibold text-lg md:text-xl">Lands</h1>
            <Button className="ml-auto" size="" onClick={()=>{
              
              document.getElementById('my_modal_3').showModal()
            
              setName("")
          setStatus("")
          setSelectedID("")
          setDescription("")
          setPrice("")
          setLocation("")
          setSize("")
            }
            
            
            
            } 
              
              
              >
              New Land
            </Button>
          </div>
         
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
           alt="Land image"
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
       <TableCell className="flex gap-2">
         <Popover>
           <PopoverTrigger asChild>
             <Button className="h-8 w-8" size="icon" variant="outline">
               <DotsHorizontalIcon className="h-4 w-4" />
             </Button>
           </PopoverTrigger>
           <PopoverContent align="end" className="w-36">
        <div className="cursor-pointer" onClick={()=>
        {
          document.getElementById('modal_update').showModal()
        
          setName(card.name)
          setStatus(card.status)
          setSelectedID(card.id)
          setDescription(card.description)
          setPrice(card.price)
          setLocation(card.location)
          setSize(card.size)
        }
        
        }>Update</div>
      
        <div className="cursor-pointer" onClick={()=>{handleDelete(card.id,card.name)}}>Delete</div>
   
           
           </PopoverContent>
         </Popover>
       </TableCell>
     </TableRow>
   ))}
        
       
      </TableBody>
    </Table>
    <Errors data={cards} loading={isPendingC} error={isErrorC} />
              </div>
         
        </main>
      </div>

      {/* modals -==================================== */}
{/* add land ================= */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box rounded-none">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="w-full max-w-2xl space-y-4">
    <form action="">

    <div className="space-y-2">
        <h1 className="text-3xl font-bold">Add a new Land</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below and click submit to add the land to the website.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="title">Name/Title</Label>
        <Input  value={name} id="title" placeholder="Enter the title/name"  required  onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea  value={description} className="min-h-[150px]" id="description" placeholder="Enter the description" required   onChange={(e)=>{setDescription(e.target.value)}} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input  value={price}  id="price" placeholder="Enter the price"   onChange={(e)=>{setPrice(e.target.value)}}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input  value={location}  id="location" placeholder="Enter the location"   onChange={(e)=>{setLocation(e.target.value)}}/>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Status</Label>
          <Input  value={status}  id="price" placeholder="eg available or sold"   onChange={(e)=>{setStatus(e.target.value)}}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Size/Area</Label>
          <Input  value={size}  id="size" placeholder="Area in Acres"   onChange={(e)=>{setSize(e.target.value)}}/>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="photos">Photos</Label>
        <Input id="photos" multiple type="file"  onChange={handleChange}/>
        {Object.keys(progress).map((fileName) => (
        <span key={fileName}>
          <small>{fileName}: {progress[fileName]}%</small>
        </span>
      ))}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
        <p className="text-xs text-gray-500 dark:text-gray-400">You can select multiple images at once.</p>
      </div>
      <Button type="submit" onClick={(e)=>{handleSubmit(e)}} disabled={disabled}>Submit</Button>
    </form>
    </div>
  </div>
</dialog>

{/* modal    update===================================================================== */}
<dialog id="modal_update" className="modal">
  <div className="modal-box rounded-none">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="w-full max-w-2xl space-y-4">
    <form action="">

    <div className="space-y-2">
        <h1 className="text-3xl font-bold">Update {name} </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below and click submit to update {name} .
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="title">Name/Title</Label>
        <Input  value={name} id="title" placeholder="Enter the title/name"  required  onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea  value={description} className="min-h-[150px]" id="description" placeholder="Enter the description" required   onChange={(e)=>{setDescription(e.target.value)}} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input  value={price}  id="price" placeholder="Enter the price"   onChange={(e)=>{setPrice(e.target.value)}}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input  value={location}  id="location" placeholder="Enter the location"   onChange={(e)=>{setLocation(e.target.value)}}/>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Status</Label>
          <Input  value={status}  id="price" placeholder="eg available or sold"   onChange={(e)=>{setStatus(e.target.value)}}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Size/Area</Label>
          <Input  value={size}  id="size" placeholder=""   onChange={(e)=>{setSize(e.target.value)}}/>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="photos">Photos</Label>
        <Input id="photos" multiple type="file"  onChange={handleChange}/>
        {Object.keys(progress).map((fileName) => (
        <div key={fileName}>
          <small>{fileName}: {progress[fileName]}%</small>
        </div>
      ))}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
        <p className="text-xs text-gray-500 dark:text-gray-400">You can select multiple images at once.</p>
      </div>
      <Button type="submit" onClick={(e)=>{handleUpdate(e)}}>Submit</Button>
    </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}







function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

