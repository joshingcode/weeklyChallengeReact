import React from 'react'

function ContactForm() {
   

  return (
    <>
    <form>
        <label>Name:</label>
        <input type='text' placeholder='Your Name'/><br/>
        <label>Phone Number:</label>
        <input type='tel' placeholder='Your Phone Number'/><br/>
        <label>Email:</label>
        <input type='text' placeholder='Valid Email'/><br/>
   
    </form>
    </>
  )
}

export default ContactForm