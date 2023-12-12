function Msg(props) {

  return (
    <div className='Msg'>
        <h2>{props.username}</h2>
        <p>{props.message}</p>
    </div>
  )
}

export default Msg
