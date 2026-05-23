import { useState } from "react";
import { Student } from "../type";
import { useNavigate } from "react-router-dom";

function AddStudent(){
    const [std,setStd]=useState<Student>({
        name: "",
        email: "",
        phone: "",
        course: "",
        location: "",
    });
    const navigate=useNavigate()
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
        setStd({...std,[e.target.name]:e.target.value})
    };
    const handleSubmit=async(e:React.FormEvent)=>{ e.preventDefault();
        fetch(`http://localhost:3001/students`, {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(std),
        })
        alert("Students data added successfully");
        if(std.phone.length!==10){
            alert("Phone number must be 10 digits")
            return;
        }
        if(!std.email.includes("@")){
            alert("Invalid email")
            return;
        }
        navigate("/");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p><span style={{fontWeight:"bold"}}>Name: </span> <br />
                    <input name="name" value={std.name} onChange={handleChange} required placeholder="Enter your name"/>
                </p>
                <p><span style={{fontWeight:"bold"}}>Email: </span> <br />
                    <input type="email" name="email" value={std.email} onChange={handleChange} required  placeholder="Enter your email"/>
                </p>
                <p><span style={{fontWeight:"bold"}}>Phone Number: </span> <br />
                    <input name="phone" value={std.phone} onChange={handleChange} required  placeholder="Enter your phone number"
                    maxLength={10} pattern="[6-9]{1}[0-9]{9}"/>
                </p>
                <p><span style={{fontWeight:"bold"}}>Course: </span> <br />
                    <input name="course" value={std.course} onChange={handleChange} required  placeholder="Enter your course"/>
                </p>
                <p><span style={{fontWeight:"bold"}}>Location: </span> <br />
                    <input name="location" value={std.location} onChange={handleChange} required  placeholder="Enter your location"/>
                </p>
                <p>
                    <button type="submit" style={{color:"Green", fontWeight:"600"}}>Add Student Data</button>
                </p>
            </form>
        </div>
    )
}
export default AddStudent;