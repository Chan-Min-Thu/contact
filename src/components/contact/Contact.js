import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ContactList from './ContactList';


const Contact = ({contactId}) => {
    const [contact, setContact] = useState([])
    const getContact = async () => {
               const {data} = await axios.get('http://localhost:3000/contacts')
               setContact(data)
//                console.log("contact",contact)
    }
    const apiDeleteToContact = async (id)=>{
      console.log(id)
      const {data} = await axios.delete(`http://localhost:3000/contacts/${id}`)
      
      getContact()
  
    }
   
    useEffect(() => {
      getContact()
    }, [])
    
  return (
    <div className='flex flex-col justify-start w-3/4 mx-auto my-5'>
      <Link to='/create'>
      <button className='bg-gray-800 outline-none w-60 text-white p-2 rounded-md mb-5'>Create New Contact</button>
      </Link>
      <div className="relative w-auto overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {contact.map((c,index)=><ContactList key={index} contact={c} apiDeleteToContact={apiDeleteToContact}/>)}
        </table>
      </div>
    </div>
  );
};

export default Contact;