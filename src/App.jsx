import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import ContactList from './ContactList'
import Form from './Form'

function App() {

  const LOCAL_STORAGE_KEY = "contacts"

  const [contacts, setContact] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  const formHandler = (contact) => {
    setContact((prev) => [...prev, contact])
  }

  // save to localStorage whenever contacts change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="w-full h-screen bg-zinc-900">
      <Navbar />
      <Form formHandler={formHandler} />
      <ContactList contact={contacts} />
    </div>
  )
}

export default App