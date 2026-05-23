import { useState, useEffect } from "react";
import { Student } from "../type";
import { Link, useParams } from "react-router-dom";

function ViewStudent(){
    const{id}=useParams<{id:string}>();
    const [std,setStd]=useState<Student|null>(null);
    useEffect(()=>{fetch(`http://localhost:3001/students/${id}`)
        .then((res)=>res.json())
        .then((data)=>setStd(data));},[id]);
    if(!std){
        return <p>Loading Student Details</p>
    }
    return(
        <div>
            <p><span style={{fontWeight:"bold"}}>ID:</span> <span style={{color:"#6f42c1",fontWeight:"500"}}>{std.id}</span> </p>
            <p><span style={{fontWeight:"bold"}}>Name:</span> <span style={{color:"#6f42c1",fontWeight:"500"}}>{std.name}</span> </p>
            <p><span style={{fontWeight:"bold"}}>Email:</span> <span style={{color:"#6f42c1",fontWeight:"500"}}>{std?.email}</span> </p>
            <p><span style={{fontWeight:"bold"}}>Phone:</span> <span style={{color:"#6f42c1",fontWeight:"500"}}>{std?.phone}</span> </p>
            <p><span style={{fontWeight:"bold"}}>Course:</span> <span style={{color:"#6f42c1",fontWeight:"500"}}>{std?.course}</span> </p>
            <p><span style={{fontWeight:"bold"}}>Location:</span> <span style={{color:"#6f42c1",fontWeight:"500"}}>{std?.location}</span> </p>
            <Link to="/"><button style={{color:"red", fontWeight:"600"}}>Back to StudentList</button></Link>
        </div>
    )
}
export default ViewStudent;