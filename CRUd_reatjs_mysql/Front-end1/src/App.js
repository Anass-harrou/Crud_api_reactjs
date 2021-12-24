import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Login from './login';
import Register from './Register';
import Nav from './Nav';
import './styles.css'
import Home from './home';
import { Provider } from "./Context";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { Actions } from "./Actions";


function App() {
  
  const data = Actions();
  
  return (
   <>
    {
      (!localStorage.getItem("token"))?
      (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
      ):(
        <div>
          <Home />
          <Provider value={data}>
            <div className="App">
              
              <div className="wrapper">
              <h1>Users Table</h1>
                <section className="left-side">
                  <Form />
                </section>
                <section className="right-side">
                  <UserList />
                </section>
              </div>
            </div>
          </Provider>
        </div>
      )
    }
   </> 
  )
}

export default App;
