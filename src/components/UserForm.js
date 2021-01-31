import React from  'react';
    
    
const UserForm = props => {
    const {inputs, setInputs} = props;
    
    const onChange = e => {
    setInputs({
        ...inputs,
        [e.target.name] : e.target.value
    });
};
    
    return(
        <form >
            <div className= "form-group">
                <label htmlFor="firstName">First Name: </label> 
                <input type="text" onChange={ onChange } name="firstName"/>
            </div>
            <div className= "form-group">
                <label htmlFor="lastName">Last Name: </label> 
                <input type="text" onChange={ onChange} name="lastName" />
            </div>
            <div className= "form-group">
                <label htmlFor="email">Email: </label> 
                <input type="text" onChange={ onChange }  name="email"/>
            </div>
            <div className= "form-group">
                <label htmlFor="password">Password: </label>
                <input type="text" onChange={ onChange } name="password" />
            </div>
            <div className= "form-group">
                <label htmlFor="conpassword">Confirm Password: </label>
                <input type="text" onChange={ onChange} name="conpassword" />
            </div>
        </form>
    );
};
    
export default UserForm;