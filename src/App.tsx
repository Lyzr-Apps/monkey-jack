import React, { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="bg-blue-600 h-3 rounded-t-lg"></div>

          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-normal text-gray-900 mb-2">Contact Information Form</h1>
              <p className="text-sm text-gray-600">Please provide your contact details</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none bg-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Your answer"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none bg-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Your answer"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
