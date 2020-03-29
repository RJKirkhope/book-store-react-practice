import React from 'react';

function Filter (props) {

  return (
    <div>
      <input type="text" 
      onChange={(event)=> props.receiveFilter(event.target.value)}/>
    </div>
  )

}
export default Filter;