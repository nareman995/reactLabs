import React from "react";
function Functionalprops(props)
{
    const {fname,lname,age,job}=props;
    return(
        <h2>Hello I'm {fname} {lname} {age} {job} </h2>

    )

}
export default Functionalprops;