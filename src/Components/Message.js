import React from 'react';

const Message = ({message, toggleRead, toggleSelected, toggleStarred, updateItem}) => {

  const readClass = message.read ? 'read' : 'unread';
  const selectedClass = message.selected ? 'selected' : '';
  const starredClass = message.starred ? 'fa fa-star' : 'fa fa-star-o';


  return (
    <div className={`row message ${selectedClass} ${readClass}`} onClick={(event)=>{
      event.stopPropagation()
      const item ={
          "messageIds": [message.id],
          "command": "read",
          "read": !message.read
        }
      updateItem(item,"PATCH")
      toggleRead(message)}} >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" checked={message.selected} onClick={(e)=>{toggleSelected(message,e)}}/>
          </div>
          <div className="col-xs-2">
            <i className={`star ${starredClass}`} onClick={(event)=>{
              event.stopPropagation()
              const item = {
                  "messageIds": [message.id],
                  "command": "star",
                  "star": !message.starred
                }
              updateItem(item, "PATCH")
              toggleStarred(message)}}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {message.labels.map((ele, i) => <span key={i} className="label label-primary">{ele}</span> )}
        <a>
          {message.subject}
        </a>
      </div>
    </div>
  )
}

//module.exports = the ES6 way:
export default Message;
