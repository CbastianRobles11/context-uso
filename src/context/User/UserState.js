import React, {useReducer} from 'react'
import UserReducer from './UserReducer'

import userContext from './UserContext'
import axios from 'axios'


const UserState =(props)=>{

        const initialState ={
            users:[],
            selectedUser:null
        }

        // paso el esto incial y el UserReducer que viene de otro archivop
        const [state, dispatch] = useReducer(UserReducer, initialState)

        //traer una lista de usuario para llenar el initial state
        const getUsers=async ()=>{

            //lamamos a la api
            const res= await axios.get("https://reqres.in/api/users")
            
            //ver
            // console.log(res.data.data);

            //pasamos por el dsipatch
            dispatch({
                type:'GET_USERS',
                payload:res.data.data
            })

        }

        //trae un usuario para llenar el initial state
        const getProfile=async (id)=>{
            //lamamos a la api
            const res= await axios.get("https://reqres.in/api/users/"+id)
            
            // console.log(res.data.data);
            dispatch({
                type:'GET_PROFILE',
                payload:res.data.data
            })
        }


        return (

            //todos los componentes que esten dentro deluser context p[ueden acceder desde cualquier lado]
           //que nomas vamos a porder acceeder desde todos los componentes 
            <userContext.Provider value={{
                users:state.users,
                selectedUser:state.selectedUser,
                getUsers,
                getProfile
            }} >
                {props.children}
            </userContext.Provider>
        )
}

export default UserState