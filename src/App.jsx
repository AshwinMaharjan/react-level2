import React from 'react'
import Navbar from './Navbar'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <Navbar />
      <AddContact />
      <ContactList />
    </div>
  )
}

export default App