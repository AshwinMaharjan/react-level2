import React from 'react'

function ContactCard(props) {
  const { id, name, address } = props.contact

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm border border-zinc-200 hover:shadow-lg transition">

      <div className="text-xs text-zinc-500 mb-2">
        ID: {id}
      </div>

      <div className="text-lg font-semibold text-zinc-800">
        {name}
      </div>

      <div className="text-sm text-zinc-600 mt-1">
        {address}
      </div>

    </div>
  )
}

export default ContactCard