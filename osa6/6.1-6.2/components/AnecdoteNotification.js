import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideNotification } from '../reducers/notificationReducer'

// import toggleNotification visibility

const Notification = () => {

  const dispatch = useDispatch()

  // How to mimic componentDidUpdate() with React Hooks
  // En tiedä toimiiko ihan sata jänistä, koska efekti laukeaa kahdesti
  // varmaan koska tämä komponentti renderöidään uudestaan dispatchin kautta
  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) {
        const timer = setTimeout(() => {
          console.log('SET TIME OUT active')
          dispatch(hideNotification())
        }, 2000);
        return () => {
          console.log('CLEAR TIME OUT')
          clearTimeout(timer);
        }
    } else {
      console.log('OLEN IF ELSE')
      didMountRef.current = true
    }
  })
  

  /*
  Toimii myös
  
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('timer active')
      dispatch(hideNotification())
    }, 2000);
    return () => {
      console.log('clear time out')
      clearTimeout(timer);
    }
  })
  */

  const notification = useSelector(state => {
    if (state.notification.chosenNote) {
      return state.notification.chosenNote
    }
  })

  const notificationType = useSelector(state => state.notification.type)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const isNotificationVisible = useSelector(state => state.notification.isNotificationShowing)
  
  if (!isNotificationVisible) return null;

  return (
    <>
      <div style={style}>
        {notificationType === 'CREATE_NEW_ANEC' ? 'created new: ' : null}
        {notificationType === 'VOTED_ANEC' ? 'you voted: ' : null}
        {notification}
      </div>
    </>
  )
}

export default Notification