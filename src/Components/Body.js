import React from 'react';

const Body = ({message, bodObj, getBody}) => {
//
// console.log("in body == ", getBody(message.id));

getBody(message.id)

  return(
  <div>
    <div className="row message-body">
      <div className="col-xs-11 col-xs-offset-1">
        {bodObj}

      </div>
    </div>
  </div>
  )

}

export default Body;
