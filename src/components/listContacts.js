import React, { Component } from 'react';
import ContactCard from './contactCard';
import {Link} from 'react-router-dom';
const ContactList = (props) => {

    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    }
    return (  
        <div className='ui celled list'>
            <h2>Contact List</h2>
            <Link to='/add'>
            <button className='ui button blue right'>Add</button>
            </Link>
           
            {props.contacts.map(item=>{
                console.log(item);
                return (
                    <ContactCard contact = {item} clickHandler = {deleteContactHandler} key = {item.id}/>
                )
            })}
        </div>
    );
}
 
export default ContactList;