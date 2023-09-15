import { useContext } from "react"
import { LoginContext } from "../loginContext/loginContext"

export const UserDetails = () => {
    const {user} = useContext(LoginContext)

    return(
        <div>
            <p>{user?.firstname}</p>
            <p>{user?.lastname}</p>
            <p>{user?.access_token}</p>
        </div>
    )
}