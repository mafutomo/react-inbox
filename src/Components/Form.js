import React from 'react'

const Form = ({messages, formStatus, captureSubject, captureBody, subject, body, updateItem}) => {

  if(!formStatus) {
    return (
      <div></div>
    )
  } else {
    return (
          <form className="form-horizontal well">
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label for="subject" className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" onChange={(event)=>{captureSubject(event)}}/>
          </div>
        </div>
        <div className="form-group">
          <label for="body" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-8">
            <textarea name="body" id="body" className="form-control" onChange={(event)=>{captureBody(event)}}></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" className="btn btn-primary" onClick={(event)=>{
              event.stopPropagation()
              const item = {
                "subject":subject,
                "body":body
              }
              updateItem(item,"POST")
            }}/>
          </div>
        </div>
      </form>
    )
  }

}

export default Form;
