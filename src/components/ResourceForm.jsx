import React, { useState } from 'react'

function AddResourceForm() {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({}) // State for validation errors

  const validateForm = () => {
    const newErrors = {}
    if (!name) {
      newErrors.name = 'Name is required'
    }
    if (!link) {
      newErrors.link = 'Link is required'
    } else if (!/^(http|https):\/\/[^ "]+$/.test(link)) {
      newErrors.link = 'Invalid URL format'
    }
    if (!description) {
      newErrors.description = 'Description is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // Return true if no errors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      // Add resource logic here with validated data
      console.log('name:', name)
      console.log('link:', link)
      console.log('description:', description)
      setName('')
      setLink('')
      setDescription('')
      setErrors({}) // Clear errors on successful submit
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <label>
        Link:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        {errors.link && <span className="error">{errors.link}</span>}
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        {errors.description && <span className="error">{errors.description}</span>}
      </label>
      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Create
      </button>
    </form>
  )
}

export default AddResourceForm
