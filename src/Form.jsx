import React from 'react'

function Form() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">

        <h2 className="text-2xl font-bold mb-6 text-center text-zinc-800">
          Add Details
        </h2>

        <form className="space-y-4">

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-zinc-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-zinc-700">Contact Number</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter contact number"
              className="border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-zinc-700">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              className="border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}

export default Form