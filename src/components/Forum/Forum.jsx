import React, { useState } from 'react'

const Forum = () => {

    const  [title, setTitle]= useState("")
    const [description, setDescription] = useState("")
    const [createdBy, setCreatedBy] = useState("")
  return (
    <div>
        <form>
            <input type="text" placeholder='Title' />
            <input type="text" placeholder='description' />
            <input type="text" placeholder='User' />
        </form>
        <button>Create Topics</button>
    </div>
  )
}

export default Forum