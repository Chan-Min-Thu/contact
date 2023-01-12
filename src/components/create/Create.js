import React,{ useState } from 'react'
import {BiArrowToLeft} from "react-icons/bi"
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2"

const Create = () => {
  const nevigate = useNavigate();
  const [newContact, setNewContact] = useState({
    name:"",
    phone:"",
    email:"",
    address:""
  })
  // const Toast =Swal.fire(
  //   'Good job!',
  //   'You clicked the button!',
  //   'success'
  // )
  const apiAddToData = async (addContact)=>{
     const {data} = await axios.post('http://localhost:3000/contacts',addContact)
     Swal.fire(
      'Good job!',
      'You Created New Contact!',
      'success')
     console.log(data)
  }
  const handleChange =(e)=>{
      const {name,value} =e.target
      setNewContact({...newContact,[name]:value})
  }
  const formSubmit =(e)=>{
    e.preventDefault();
    let addContact={
        id:Date.now(),
        name:newContact.name,
        email:newContact.email,
        phone:newContact.phone,
        address:newContact.address
      }
      apiAddToData(addContact)
      nevigate('/')
  }

  return (
    <div className="w-3/5 mx-auto my-6 shadow-sm bg-slate-300 p-5 rounded-lg">
      <div className="flex justify-between flex-row">
        <h1 className="font-sans text-3xl mb-5">Create Contact</h1>
        <Link to="/">
          <BiArrowToLeft className="font-bold text-3xl text-blue-700 px-1 py-1 rounded-2xl hover:bg-gray-200" />
        </Link>
      </div>
      <form onSubmit={formSubmit} autoComplete="off">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Contact-name."
            name="name"
            value={newContact.name}
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
            type="text"
            id="email"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Email."
            name="email"
            value={newContact.email}
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
            name="phone"
            value={newContact.phone}
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
            value={newContact.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
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

export default Create