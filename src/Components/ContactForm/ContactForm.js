import React from 'react'

const ContactForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')

    const handleSubmit = () =>{
        const userData = {
            name,phone, mail
        }

        onConfirm(userData)
    }


  return (
    <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=> setName(e.target.value)}/>
        <input value={phone} onChange={(e)=> setPhone(e.target.value)}/>
        <input value={mail} onChange={(e)=> setMail(e.target.value)}/>
        <input/>
        <button onConfirm={createOrder}>Generar Orden</button>
    </form>
  )
}

export default ContactForm