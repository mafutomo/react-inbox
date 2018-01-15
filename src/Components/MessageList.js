import React from 'react';
import Message from './Message';

const MessagesList = ({messages, toggleRead, toggleSelected, toggleStarred, updateItem}) => { //desctructoring the props, to allow each of the messages components to render (instead of putting "props")

  return (
    <div>
    {messages.map(message => (<Message key= {message.id}
      message={message}
      toggleRead = {toggleRead}
      toggleSelected = {toggleSelected}
      toggleStarred = {toggleStarred}
      updateItem = {updateItem}
      />))}
    </div>
  )

}

export default MessagesList;
