import React from 'react'
import Avatar from '@mui/material/Avatar';
export const Profile= (props) => {
  return (
    <div className='Avatar'>
<Avatar src={props.src} sx={{width:`${props.width}`,height:`${props.height}`}} />
    </div>
  )
}
 