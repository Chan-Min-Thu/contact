import axios from 'axios';
import React , {useEffect, useState}from 'react'
import {BiArrowToLeft} from "react-icons/bi"
import { Link,useParams,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Edit() {
  const nevigate = useNavigate()
  const [contact,setContact] = useState({
    name:'',
    email:"",
    phone:'',
    address:''
  })
  const {id} = useParams();
  const getSingleContact = async ()=>{
    const { data } = await axios.get(`http://localhost:3000/contacts/${id}`)
    setContact(data)
  }
  const addSingleContact = async(con)=>{
    const {data} = await axios.patch(`http://localhost:3000/contacts/${id}`,con)
    getSingleContact()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been updated',
      showConfirmButton: false,
      timer: 1500
    })

  }
  useEffect(()=>{
       getSingleContact()

  },[])
  const handleChange = (e)=>{
    const {name,value} = e.target
    setContact({...contact,[name]:value})
   
  }
  let newContact
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(contact)
    
    addSingleContact(contact)
    nevigate(-1)
   
  }
  return (
    <div className="w-3/5 mx-auto my-6 shadow-sm bg-slate-300 p-5 rounded-lg">
      <div className="flex justify-between flex-row">
        <h1 className="font-sans text-3xl mb-5">Update Contact-{id}</h1>
        <Link to="/">
          <BiArrowToLeft className="font-bold text-3xl text-blue-700 px-1 py-1 rounded-2xl hover:bg-gray-200" />
        </Link>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="name"
            id="email"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Contact-name."
            name='name'
            defaultValue={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Email."
            name='email'
            defaultValue={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone-no"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="ph.no"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="09100200300"
            name='phone'
            defaultValue={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="ph.no"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="New York"
            name='address'
            defaultValue={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 mr-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
          <Link to="/">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancle
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Edit