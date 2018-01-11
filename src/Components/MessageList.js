import React from 'react';
import Message from './Message';

const MessagesList = ({messages, toggleRead, toggleSelected, toggleStarred}) => { //desctructoring the props, to allow each of the messages components to render (instead of putting "props")

  return (
    <div>
    {messages.map(message => (<Message key= {messages.id}
      message={message}
      toggleRead = {toggleRead}
      toggleSelected = {toggleSelected}
      toggleStarred = {toggleStarred}
      />))}
    </div>
  )
}

export default MessagesList;
