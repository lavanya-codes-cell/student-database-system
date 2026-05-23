import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Student } from "../type";

function StudentList(){
    const [std, setStd]=useState<Student[]>([]);
    useEffect(()=>{
        fetch("http://localhost:3001/students")
        .then((res)=>res.json())
        .then((data)=>setStd(data));
    },[]);
    const  handleDelete=async(id:number)=>{
        const confirmDelete=window.confirm("Are you sure Delete the student list?")
        if(!confirmDelete){
            return;
        }
        await fetch(`http://localhost:3001/students/${id}`,
            {method:"DELETE"});
        setStd(std.filter((s)=>s.id!==id));
    }
    return(
        <div className="cantainer-fluid text-white">
            <h1 style={{backgroundColor:"black", color:"white", letterSpacing:"3px", borderRadius:"8px",}}>STUDENT LISTS</h1>
            <Link to="/add"><h3 style={{letterSpacing:"1px"}}>Add New Student</h3></Link>
            <table border={2} className="std-table" style={{backgroundColor:"rgba(151, 218, 245, 0.34)"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Course</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {std.map((s)=>(
                    <tr key={s.id}>
                        <td style={{color:"green"}}>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>{s.phone}</td>
                        <td>{s.course}</td>
                        <td>{s.location}</td>
                        <td>
                            <Link to={`/view/${s.id}`}>View </Link> | {""}
                            <Link to={`/edit/${s.id}`}>Edit </Link> | {""}
                            <button  onClick={()=>handleDelete(s.id!)} style={{color:"red"}}> Delete </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default StudentList;