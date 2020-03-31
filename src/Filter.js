import React from 'react';

function Filter (props) {

  return (
    <div>
      <input id="search-bar" type="text" placeholder="Search..."
      onChange={(event)=> props.receiveFilter(event.target.value)}/>
    </div>
  )

}
export default Filter;