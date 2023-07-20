import React from 'react'
import './sidebar.css'
import { useStateValue } from "../ContextApi/StateProvider";
import { IconButton, Avatar } from "@mui/material";
import {
  DonutLarge,
  Chat,
  MoreVert,
  Groups,  SearchOutlined

} from '@mui/icons-material';

const Sidebar = () => {
  const [{user}]= useStateValue();
  return (
    <div className='sidebar'>
     <div className='sidebar_header'>
      <Avatar src={user.photoURL}/>
     <div className='sidebar_headerRight'>
     <IconButton> <Groups/></IconButton>
     <IconButton><DonutLarge/></IconButton>
     <IconButton><Chat /></IconButton>
     <IconButton><MoreVert/></IconButton>
     </div>
     </div>
    <div className='sidebar_search'>
    <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
    </div>



  
  )
}

export default Sidebar