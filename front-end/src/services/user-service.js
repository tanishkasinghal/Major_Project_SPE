import { myAxios } from "./helper";
 const addEmployee=(emp)=>{
    return myAxios.post('/api/auth/register/${dept_Id}',emp).then((Response)=>Response.data)
};

export default addEmployee;