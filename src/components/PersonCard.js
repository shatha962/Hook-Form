import React from 'react';


const PersonCard = props => {
    const {firstName, lastName, email, password, conpassword} = props.data
    return(
        <div>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { conpassword }</p>
        </div>
    );
}
export default PersonCard;