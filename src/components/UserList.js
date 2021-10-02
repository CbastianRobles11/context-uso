import React, { useEffect, useContext } from 'react'


//ya no necesito pasarle prorps o links ahora con use context pero usamos el userContext
import UserContext from '../context/User/UserContext'


export default function UserList() {
    //solo traemos getUserst para traer todos los useariso de api
    const { users, getUsers ,getProfile} = useContext(UserContext)

    useEffect(() => {

        getUsers()

    }, [])


    return (
        <div className="list group h-100">
            {
                users.map(user => 
                {
                    return (
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-row justify-content-start " 
                        key={user.id} 
                        onClick={()=> getProfile(user.id)}
                        >
                            <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70" alt="" />
                            <p>
                                {user.first_name}
                            </p>

                        </a>
                    )
                })
            
            }

        </div>
    )
}
