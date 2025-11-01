const UserList =()=>{
    const users = [
        {id: 1 , name: "EngOmar", email: "engomar@gmail.com"},
        {id: 2 , name: "EngAli", email: "engali@gmail.com"}
    ]
    return(
<div>
    <h1>User List</h1>
       <ul>
        {
            users.map(user =>(
                <li key={user.id}>{user.name},({user.email})</li>
            ))
        }
       </ul>
</div>
    )
}
export default UserList;