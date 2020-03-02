import React from 'react'

const Scroll = (props)=>{
  return (
    <div style={{ overflowY:'scroll', borderTop:'1px solid black', height:'500px', padding:'50px', padding: '17px', boxSizing: 'content-box', width:'100%'}}>
      {props.children}
    </div>
      )
}

export default Scroll;