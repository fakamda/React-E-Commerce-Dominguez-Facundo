import React from 'react'
import { useState } from 'react'

const ContactForm = ({onConfirm}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setMail] = useState("")

    const handleSubmit = () => {
      const userData = {
          name, phone, email
      }

      
      onConfirm(userData)
  }

  return (
    <form onSubmit={handleSubmit} className='pt-20'>
        <input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Ingrese su Nombre'/>
        <input value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Ingrese su Nro Telefono'/>
        <input value={email} onChange={(e)=> setMail(e.target.value)} placeholder='Ingrese su e-mail'/>
        <button>Generar Orden</button>
    </form>
  )
}

export default ContactForm