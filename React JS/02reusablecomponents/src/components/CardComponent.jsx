import './style.css'
const CardComponent = ({userName,userProfile,userId}) => {
  return (
    <>
    <div className='main'>

          <div className='cardMain'>
            <img className='ProfilePic' src={userProfile} alt="" />
            <h1>{userName}</h1>
            <button onClick={()=>{console.log(userId)}}>Follow</button>
          </div>
    </div>
    </>
  )
}

export default CardComponent
