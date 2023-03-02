import { Link } from "react-router-dom"


//clicking on user should take you to id page

export const Home = () => {
    return (
        <div>
            {users.map(user => (
            <div><Link key={user.id} to {`/users/${user.id}`}></Link></div>)}
        </div>
    )
}