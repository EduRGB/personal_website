import { useState } from 'react'
import { SiTelegram } from 'react-icons/si'

import toast, { Toaster } from 'react-hot-toast';

/** @type {import("@emotion/react").CSSObject} */
const css = {
  display: 'flex',
  margin: '150px 30px',
  padding: 100,
  paddingBottom: 200,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 30,
  color: '#F3F0FF',

  'svg': {
    color: '#F3F0FF',
    margin: '30px 0',
    fontSize: 70,
  },

  'label': {
    color: '#E5DBFF',
  },

  'input,textarea': {
    border: 'none',
    borderRadius: 4,
    padding: 15,
    width: 300,
    maxWidth: '100%',
    display: 'block',
    marginTop: 10,
    color: '#5F3DC4',
    outlineColor: '#7950F2',
  },

  'button': {
    border: 'none',
    padding: '15px 30px',
    borderRadius: 32,
    color: 'white',
    backgroundColor: '#7950F2',
    transition: 'background-color .2s ease',

    '&:hover': {
      backgroundColor: '#5F3DC4',
      cursor: 'pointer',
    },

    '&:disabled': {
      opacity: 0.3,
      cursor: 'auto',
      '&:hover': {
        backgroundColor: '#7950F2',
      },
    },
  },
}

const ContactSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [sending, setSending] = useState(false)


  const onSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, message }
    console.log(data)

    setSending(true)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .finally(() => {
        setSending(false)
        toast.success('Thank you for your message!')
      })
  }

  return (
    <form css={css} onSubmit={onSubmit}>
      <SiTelegram />

      <label>
        Name
        <input type='text' minLength={3} value={name} onChange={e => setName(e.target.value)} required />
      </label>

      <label>
        Email
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
      </label>


      <label>
        Message
        <textarea rows={5} minLength={10} value={message} onChange={e => setMessage(e.target.value)} required>
        </textarea>
      </label>

      <button type='submit' disabled={sending}>
        Send
      </button>

      <Toaster />
    </form>
  )
}

export default ContactSection
