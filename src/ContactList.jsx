import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {

  const renderContactList = props.contact.map((contact) => {
    return (
      <ContactCard 
        key={contact.id}
        contact={contact}
      />
    )
  })

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-red-400">
      {renderContactList}
    </div>
  )
}

export default ContactList