import CardComponent from "./components/CardComponent"
import './components/style.css'
const App =()=>{
    const users = [
        {
            "userName": "ziyan",
            "userProfile": "https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=612x612&w=0&k=20&c=hhlfr_8TgalVqSMprxcXHKhCnqixB3sxKDUXnr7IfT8=",
            "userId": 787898
        },
        {
            "userName": "john_doe",
            "userProfile": "https://media.istockphoto.com/id/946822750/photo/portrait-of-a-smiling-young-man.jpg?s=612x612&w=0&k=20&c=POhlgbqMrrWCVaW9hX3NZ9FTcn7r39YCCEMpT-dqvOQ=",
            "userId": 123456
        },
        {
            "userName": "jane_smith",
            "userProfile": "https://media.istockphoto.com/id/1025648216/photo/portrait-of-smiling-woman.jpg?s=612x612&w=0&k=20&c=jBFP8hFXSV1z0qG0YWtH2p_7LptB-T9a4LLSx8Xde04=",
            "userId": 789012
        },
        {
            "userName": "michael_brown",
            "userProfile": "https://media.istockphoto.com/id/1003131664/photo/portrait-of-handsome-man-smiling.jpg?s=612x612&w=0&k=20&c=a9VwMPaFBoZ6c5f8GiZwRmQ-jq_dhOekyU6EOa3pJ_c=",
            "userId": 345678
        },
        {
            "userName": "emily_white",
            "userProfile": "https://media.istockphoto.com/id/1127068528/photo/portrait-of-a-beautiful-young-woman.jpg?s=612x612&w=0&k=20&c=JzIxxGGL6F8L9H7Xc0BXPpiW_FVmuFj1tJhUXztckCU=",
            "userId": 901234
        }
    ];
    
    return(
        <>
            <div className="mainInterface">

        {users.map((user)=>{
            return(
                <CardComponent userName={user.userName} userProfile={user.userProfile} userId={user.userId} />
            )
        })}
        </div>

            {/* <CardComponent userName={"ziyan"} userProfile={"https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=612x612&w=0&k=20&c=hhlfr_8TgalVqSMprxcXHKhCnqixB3sxKDUXnr7IfT8="} userId={787898} /> */}
        </>
    )
}

export default App