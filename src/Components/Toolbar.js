import React from 'react'

//functional component below:
const Toolbar = (props) => {

  return (

    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <a className="btn btn-danger" >
          <i className="fa fa-plus"></i>
        </a>

        <button className="btn btn-default" onClick={()=>{props.selectAll()}}>
          <i className="fa fa-minus-square-o" ></i>
        </button>

        <button className="btn btn-default" onClick={()=>{props.markAsRead()}}>Mark As Read</button>

        <button className="btn btn-default" onClick={()=>{props.markAsUnread()}}>Mark As Unread</button>

        <select className="form-control label-select" onChange={(event)=>{props.applyLabel(event.target.value)}}>
          <option selected="true" disabled="disabled">Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={(event)=>{props.deleteLabel(event.target.value)}}>
          <option selected="true" disabled="disabled">Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={()=>{props.deleteSelected()}}>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>

  )
}

//remember to export the Toolbar!! we can't export the const because this is a functional component, not a class component
export default Toolbar;