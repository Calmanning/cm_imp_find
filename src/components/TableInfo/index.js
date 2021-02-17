import React, {Component} from "react";



 function TableInfo({ randos }) {


    return (
        <div>
            
            <div className="row">
            <tbody>
{randos[0] !== undefined && randos[0].name !== undefined ? (
    randos.map(({ name, picture, email, dob }) => {
        return ( 

        <tr key={name.first}>
        <td>
            <img src={picture.thumbnail} alt="faces of randoom"/>
        </td>
        <td>
            {name.first} {name.last}
        </td>
        <td>
            {email}
        </td>
        <td>
            {dob.age}
        </td>
        
        </tr>
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