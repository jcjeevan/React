import React, { Component } from 'react';
import {useNavigate} from 'react-router-dom';
class AddContact extends Component {
    state = { 
        "name":"",
        "email":""
     } 

    add = (e)=>{
        //const navigate = useNavigate();
        e.preventDefault();
         this.props.addContactHandler(this.state);
         this.setState({name:"",email:""})
         //navigate('/');
    }


    render() { 
        return (
            <div className='ui main'>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type = "text" 
                        placeholder='name' 
                        value = {this.state.name}
                        onChange={(e)=>this.setState({name:e.target.value})}></input>
                    </div>
                    <div className='field'>
                        <label>Enail</label>
                        <input type = "text" 
                        placeholder='email' 
                        value = {this.state.email}
                        onChange={(e)=>this.setState({email:e.target.value})}></input>
                    </div>
                    <button className='ui button blue'>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default AddContact;