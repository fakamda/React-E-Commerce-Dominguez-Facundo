import { useState, createContext, useContext } from 'react'
import { icons } from 'react-icons'

const Notification = ({ type, message }) => {
    const notificationStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 70, 
      right: 20,
      backgroundColor: type === 'success' ? 'rgba(22, 163, 74, 0.4)' : 'rgba(244, 63, 94, 0.4)',
      color: 'white',
      padding: '10px 20px 10px 20px',
      borderRadius: 10
    }
  
    if(!message) return
  
    return (
      <div style={notificationStyle}>
        {message}
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'error',
        text: ''
    })

    const setNotification = (type, text) => {
        setNotificationData({ type, text })
        setTimeout(() => {
          setNotification({ type, text: ''})
        }, 2000)
      }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification type={notificationData.type} message={notificationData.text}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}
