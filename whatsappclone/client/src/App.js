import React from 'react'
import Login from './components/Login/Login';
import './App.css'
import { useStateValue } from './components/ContextApi/StateProvider';
import Chat from './components/chat/Chat';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Sidebar from './components/SideBar/Sidebar';


const App = () => {
  const [{user}]= useStateValue();
  return (
       <div className='app'>
         {!user? (<Login/>):
      (<div className='app_body'>
       
      <Router>
      <Sidebar/>
        <Routes>
         <Route path="/" element ={<Chat/>}/>
        </Routes>
      </Router>
      </div>
      )} 
     
    </div>
  

  
  )
}

export default App