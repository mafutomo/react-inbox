import React from 'react'

//functional component below:
const Toolbar = ({messages, message, selectAll, markAsRead, markAsUnread, applyLabel, deleteLabel, deleteSelected, updateItem, toggleFormView}) => {

  const selectAllIcon = messages.filter(msg => msg.selected === true).length === 8 ? 'fa-check-square-o' : messages.filter(msg => msg.selected === true).length === 0 ?'fa-square-o' : 'fa-minus-square-o';


  return (

    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{messages.filter(message => message.read === false).length}</span>
          unread messages
        </p>

        <a className="btn btn-danger" onClick={()=>{toggleFormView()}}>
          <i className="fa fa-plus"></i>
        </a>

        <button className="btn btn-default" onClick={()=>{selectAll()}}>
          <i className={`fa ${selectAllIcon }`} ></i>
        </button>

        <button className="btn btn-default" onClick={()=>{markAsRead()}}>Mark As Read</button>

        <button className="btn btn-default" onClick={()=>{markAsUnread()}}>Mark As Unread</button>

        <select className="form-control label-select" onChange={(event)=>{
          event.stopPropagation()
          const item = {
            "messageIds": [],
            "command": "addLabel",
            "label": event.target.value
          }
          messages.map(ele => {
            if(ele.selected) {
              item.messageIds.push(ele.id)
            }
          })
          updateItem(item, 'PATCH')
          applyLabel(event.target.value)}}>
          <option selected="true" disabled="disabled">Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={(event)=>{
          event.stopPropagation()
          const item = {
            "messageIds": [],
            "command": "removeLabel",
            "label": event.target.value
          }
          messages.map(ele => {
            if(ele.selected) {
              item.messageIds.push(ele.id)
            }
          })
          updateItem(item, "PATCH")
          deleteLabel(event.target.value)}}>
          <option selected="true" disabled="disabled">Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={(event)=>{
          event.stopPropagation()
          const item ={
            "messageIds": [],
            "command": "delete"
          }
          messages.map(ele => {
            if(ele.selected) {
              item.messageIds.push(ele.id)
            }
          })
          updateItem(item, "PATCH")
          deleteSelected()}}>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>

  )
}

//remember to export the Toolbar!! we can't export the const because this is a functional component, not a class component
export default Toolbar;
