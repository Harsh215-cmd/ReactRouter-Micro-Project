import React, { useState } from 'react'
import { useParams ,useNavigate, Link } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Details from './Details';
const View = () => {

    const navigate = useNavigate();
    
     const data = localStorage.getItem("information");
     const [data2,setdata2] = useState(JSON.parse(data));

     const detail = (arg) => {
        const num = arg + 1;
        console.log(num);
        navigate(`/detail/${num}`)
    }



  return (
    <>
    <div className="table">
        <h2>Students Information</h2><br />
      <table>
        <thead>
            <tr>
                <th>Sr/no</th>
                <th>Name</th>
                <th>SurName</th>
                <th>Get Details</th>
            </tr>
        </thead>
        <tbody>
            {data2 ? data2.map( (id,index)=>(
                <tr key={id.Student_Name}><td>{index + 1}</td><td>{id.Student_Name}</td><td>{id.Student_Name}</td><td><button onClick={()=>{detail(index)}} >Get Deatails</button></td></tr> 
            )) : <h1>No Data Available</h1> }
        </tbody>
      </table>
      <br />
      <hr />

      </div>
    </>
  )
}

export default View