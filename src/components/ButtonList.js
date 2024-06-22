import React from 'react'
import Button from './Button'

const list = ["All","Javascript","Live","Music","News","Cricket","Examinatino","Batting","UPSC","React","Tailwind"];
const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item)=>
           <Button name={item}/>
      )}
      
     
    </div>
  )
}

export default ButtonList