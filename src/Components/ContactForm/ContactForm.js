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
    <form onSubmit={handleSubmit} className='pt-20 flex flex-col justify-center gap-3'>
        <input className='py-2 px-20 bg-slate-700 focus:bg-slate-800 text-white border-b-2 border-b-purple-400 text-center' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Ingrese su Nombre'/>
        <input className='py-2 px-16 bg-slate-700 focus:bg-slate-800 text-white border-b-2 border-b-purple-400 text-center' value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Ingrese su Nro Telefono'/>
        <input className='py-2 px-16 bg-slate-700 focus:bg-slate-800 text-white border-b-2 border-b-purple-400 text-center' value={email} onChange={(e)=> setMail(e.target.value)} placeholder='Ingrese su e-mail'/>
        <button className='py-2 px-2 rounded-full bg-purple-600 text-white text-md mt-3'>Generar Orden</button>
    </form>
  )
}

export default ContactForm