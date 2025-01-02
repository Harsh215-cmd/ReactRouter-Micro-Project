import React, { useEffect, useState } from 'react'
const Home = () => {

    const[name,setname]=useState("");
    const[surname,setsurname]=useState("");
    const[mob,setmob]=useState("");
    const[mail,setmail]=useState("");
    const[course,setcourse]=useState("");

    const btn = () =>{
        const data = {
            Student_Name : name ,
            Student_Surname : surname ,
            Student_Number : mob ,
            Student_Mail : mail ,
            Selected_Course : course
        }
       
    const info = localStorage.getItem("information");
    const info2 = info ? JSON.parse(info) : [] ;
    info2.push(data)
    const info3 = JSON.stringify(info2);
    localStorage.setItem("information",info3)
    alert("Form Submited");
    }
  return (
    <>
    <fieldset>
        <legend>Registration Form</legend>
        <br />
        <form action="">
        <label htmlFor="">Name :</label>
        <input type="text" value={name} onChange={ (e)=>{setname(e.target.value)}} /> <br /> <br />
        <label htmlFor="">SurName :</label>
        <input type="text" value={surname} onChange={ (e)=>{setsurname(e.target.value)}}/> <br /> <br />
        <label htmlFor="">Mobile :</label>
        <input type="text" value={mob} onChange={ (e)=>{setmob(e.target.value)}}/> <br /> <br />
        <label htmlFor="">Email :</label>
        <input type="text" value={mail} onChange={ (e)=>{setmail(e.target.value)}}/> <br /> <br />
        <label htmlFor="">Course :</label>
        <input type="text" value={course} onChange={ (e)=>{setcourse(e.target.value)}}/> <br /> <br />
        <center><button onClick={btn}>Submit Form</button></center>
        <br />
        </form>
    </fieldset>
    </>
  )
}

export default Home