import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const users = [{
    id: 1,
    name: "joe"
},{
    id: 2,
    name: "kate"
}];

export const User = () => {
    const navigate = useNavigate();

    const api = useApi();


    useEffect(() => {
        console.log(api)
    }, [])

    const {id} = useParams() //gives us information that lives in url
    const user = users.find((user) => user.id === parseInt(id!!, 10) )

    if(!user){
        return <div> user with id {id} not foudn </div>
    }

    return (
        //push by default, replace replaces the last link in history 
        <>
            <h1> {user.name} </h1>
            <button onClick={() => navigate('/user/3', {replace: true})}> Go back </button> 
        </>
    )
}