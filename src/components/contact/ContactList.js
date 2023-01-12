import React,{useState} from 'react'
import {MdDeleteForever} from 'react-icons/md'
import {AiOutlineEdit} from "react-icons/ai"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';

function ContactList({contact,apiDeleteToContact}) {
  const deletefun = (id)=>{Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      apiDeleteToContact(id)
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
     
    }
  })}
  
  return (
    <tbody>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {contact.name}
        </th>
        <td className="px-6 py-4">{contact.phone}</td>
        <td className="px-6 py-4">{contact.email}</td>
        <td className="px-6 py-4">{contact.address}</td>
        <td className="px-6 py-4 flex flex-row justify-evenly text-right">
          <Link to={`/edit/${contact.id}`}>
            <AiOutlineEdit id={contact.id} contact={contact} className="text-green-600 text-xl dark:text-blue-500 hover:underline" />
          </Link>
          <MdDeleteForever id={contact.id} contactId={contact.id} onClick={()=>deletefun(contact.id)} className="text-xl text-red-600 dark:text-blue-500 hover:underline" />
        </td>
      </tr>
    </tbody>
  );
}

export default ContactList

