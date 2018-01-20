import React from 'react';
import Message from './Message';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const MessagesList = ({messages, toggleRead, toggleSelected, toggleStarred, updateItem, getBody, bod, bodObj, showBody}) => { //desctructoring the props, to allow each of the messages components to render (instead of putting "props")

  return (
          <div>
            {messages.map(message => (

                <Message
                key= {message.id}
                message={message}
                toggleRead = {toggleRead}
                toggleSelected = {toggleSelected}
                toggleStarred = {toggleStarred}
                updateItem = {updateItem}
                getBody = {getBody}
                bod = {bod}
                bodObj = {bodObj}
                showBody = {showBody}
                />

            ))}
          </div>

      )

}



export default MessagesList;
