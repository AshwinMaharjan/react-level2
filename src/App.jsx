import React from 'react'
import Navbar from './Navbar'
import AddContact from './AddContact'
import ContactList from './ContactList'
import Form from './Form'

function App() {
  const contact=[
    {
      id:"001",
      name: "Ashwin",
      address: "Nayabazar"
    },
    {
      id:"002",
      name: "Anjali",
      address: "Patan"
    }
];
  return (
    <div className="w-full h-screen bg-zinc-900">
      <Navbar />
      <Form />
      <ContactList contact={contact}/>

    </div>
  )
}

export default App