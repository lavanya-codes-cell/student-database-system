import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Student } from "../type";

function EditStudent(){
    const[std, setStd]=useState<Student>({
        name:"",
        email:"",
        phone:"",
        course:"",
        location:"",
    })

    //navigate
    const navigate=useNavigate()

    //fetch id
    const{id}=useParams<{id:string}>();

    //useEffect
    useEffect(()=>{fetch(`http://localhost:3001/students/${id}`)
    .then((res)=>res.json())
    .then((data)=>setStd(data))},[id]);

    //handle input change
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setStd({...std,[e.target.name]:e.target.value});
    }
    //update details
    const handleSubmit=async(e:React.FormEvent)=>{e.preventDefault();
        await fetch(`http://localhost:3001/students/${id}`, 
            {
                method:"PUT",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(std),
            });
                alert("Data Updated Successfully")
                navigate("/")
            }
            return(
                <div>
                    <form onSubmit={handleSubmit}>
                        <p><span style={{fontWeight:"bold"}}>Name: </span> <br />
                            <input name="name" value={std.name} onChange={handleChange} required />
                        </p>
                        <p><span style={{fontWeight:"bold"}}>Email: <span/></span> <br />
                            <input name="email" value={std.email} onChange={handleChange} required />
                        </p>
                        <p><span style={{fontWeight:"bold"}}>Phone Number: </span> <br />
                            <input name="phone" value={std.phone} onChange={handleChange} required/>
                        </p>
                        <p><span style={{fontWeight:"bold"}}>Course: </span> <br />
                            <input name="course" value={std.course} onChange={handleChange} required />
                        </p>
                        <p><span style={{fontWeight:"bold"}}>Location: </span> <br />
                            <input name="location" value={std.location} onChange={handleChange} required />
                        </p>
                        <p>
                            <button type="submit" style={{color:"purple", fontWeight:"600"}}>Edit Student</button>
                        </p>
                    </form>
                </div>
            )
    }
    export default EditStudent;