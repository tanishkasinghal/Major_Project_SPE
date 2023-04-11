import { myAxios } from "./helper";
export const addEmployee=(emp)=>{
    return myAxios.post('/api/auth/register',emp).then((Response)=>Response.json())
};