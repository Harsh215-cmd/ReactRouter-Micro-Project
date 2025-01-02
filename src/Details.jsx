import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
const Details = () => {
    const { UserId } = useParams();

    const info = localStorage.getItem("information")
    const [info2,setinfo2] =useState(JSON.parse(info));
    const [disp , setdisp]= useState(info2[UserId - 1]);
    // console.log(disp);
    // console.log(info2[UserId - 1]);
    // for(let i = 0;  i<= UserId; i++ ){
    //  console.log(i[info2]);
    // }

  return (
    <>
    <h1>Details of {disp.Student_Name}</h1> <hr />
     <ul>
        <li>Name :{disp.Student_Name}</li>
        <li>SurName :{disp.Student_Surname}</li>
        <li>Number :{disp.Student_Number}</li>
        <li>Email :{disp.Student_Mail}</li>
        <li>Course :{disp.Selected_Course}</li>
     </ul>
    </>
  )
}

export default Details