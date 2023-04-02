import React from 'react'

function Trending(props) {
  return (
    <div className='articleResult' onClick={()=> window.open(`${props.url}`, '_blank')}>
      
      <img src = {props.image} style={{height:"130px", borderRadius:"7px"}}/>
      <div style={{display:"flex",flexDirection:"column"}}>
      <div style={{display:'flex',flexDirection:"column",height:"130px",padding:"5px 0 25px 15px"}}>
        <h1 style={{fontSize:" 17px",fontWeight:"600",marginTop:"0px",width:"250px",lineHeight:"18px"}}>{props.title}</h1>
        <h2 style={{fontSize:"12px",fontWeight:"400",margin:"0",height:"140px", width:"240px",overflow:"hidden",wordWrap:'break-word'
      }}>{props.header}
      </h2>
     </div>
     
     
     </div>
    </div>
    
  )
}

export default Trending
