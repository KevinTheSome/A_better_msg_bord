import { useState,useEffect } from 'react'
import axios from 'axios';
import style from './Main.module.css';
import Msg from './Msg.jsx';

function App() {
  const [dataMsg , setDataMsg] = useState([]);
  const [username , setUsername] = useState(" ");
  const [message , setMessage] = useState(" ");
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    getMsg()
  },[])
  
  function getMsg(){
    try {
      fetch("http://localhost/shit_msg_bord/backend/")
    .then(response => response.json())
    .then(data => setDataMsg(data.msg))
    setIsLoading(false);
    } catch (error) {
      console.error(error)
    }
  }

  function sandMsg() {
    try {
    axios.post("http://localhost/shit_msg_bord/backend/msg.php",{
      message : message , username: username
    });
    }catch (error) {
      console.error(error);
    }
    setUsername("");
    setMessage("");
    getMsg()
  }

  const messageJSX = dataMsg.map((msgObject ,key) => {
    return <Msg key={key} username={msgObject.username} message={msgObject.msg}/>
  })

  return (
    <>
    {isLoading ? <h1>Loading...</h1> :
      <div className={style.conteiner}>
        <div className={style.appHolder}>
          <div className={style.msgSandBox}>
            <input type="text" placeholder='username' value={username} onChange={(e) =>{setUsername(e.target.value)}}/>
            <input className={style.msgInput} type="text" placeholder='msg' value={message} onChange={(e) =>{setMessage(e.target.value)}}/>
            <br />
            <button onClick={sandMsg}>Sand!</button>
          </div>
          {messageJSX}
       </div>
      </div>
    }
    </>
  )
}

export default App
