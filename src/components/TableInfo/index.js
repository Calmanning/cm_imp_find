import React, {Component} from "react";
import "./TableInfo.css"


 function TableInfo({ randos }) {


    return (
        <div>
            
            <div className="row">
            <tbody>
{randos[0] !== undefined && randos[0].name !== undefined ? (
    randos.map(({ name, picture, email, dob, cell }) => {
        return ( 
            <div className="container">
            <div className="row imp" key={cell}>
        
        <div className="col-sm-1"> 
            <img src={picture.thumbnail} alt="faces of randoom people "/>
            </div>
        <div className="col-sm-3"> 
        {name.first} {name.last}
            </div>
        <div className="col-sm-4"> 
        {email}
            </div>
        <div className="col-sm-3 age"> 
        {dob.age}
            </div>
            
        </div>
        </div>
        )
    
    })
    
) : (
    <p>You got nothin</p>
)}
</tbody>
            </div>
        </div>
    )

    }

    export default TableInfo;