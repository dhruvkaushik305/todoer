import { useEffect, useState } from "react";

const useAuth = ()=>{
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const getUser = async ()=>{
            try{
                const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/isLogged`,{
                    credentials: 'include'
                });
                const response = await res.json();
                console.log(response);
                if(response.success){
                    setUser(response.data);
                }
                else setUser(null);
            }catch(err){
                console.error(err);
                setUser(null);
            }
        }
        getUser()
    },[])
    return user;
}
export default useAuth;