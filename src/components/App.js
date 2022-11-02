import React, { useState, useEffect, useReducer } from 'react';
import Header from './header';
import AddContact from './addContact'
import ContactList from './listContacts'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  })


  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  }

  const removeContactHandler = ((id) => {
    const newContactList = contacts.filter((item) => {
      return item.id != id
    });

    setContacts(newContactList);
  });


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className='ui container'>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/add" element={<AddContact addContactHandler = {addContactHandler} />} />
          <Route exact path="/" element={<ContactList contacts={contacts} getContactId = {removeContactHandler}/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
