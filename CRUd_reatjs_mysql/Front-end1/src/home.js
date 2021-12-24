import React from 'react';
import axios from 'axios';


const Axios = axios.create({
    baseURL: 'http://localhost/PHP-REST-API/'
});

class Home extends React.Component {

    state={
        name:''
    }


    logout=()=>{
        localStorage.removeItem("token");
        localStorage.clear();
    }


   componentDidMount=()=>{
        
    const loginToken = localStorage.getItem('token');

    // If inside the local-storage has the JWT token
    if(loginToken){

        //Adding JWT token to axios default header
            Axios.defaults.headers.common['Authorization'] = 'bearer '+loginToken;

            // Fetching the user information
            Axios.get('user-info.php').then(res=>{
                this.setState({name:res.data.user.name})
            })        

        }
        
    }

 //localStorage.getItem("token")



render(){

  return (
        <div className="base-container" >
        <div className="header">Dashboard</div>
        <div className="xcnn">
            <p>Hello {this.state.name} that the dashboard page.<br /> <a onClick={this.logout} href="/">Logout</a></p>
            </div>
            <div class="footr">
        <h3>&copy; 2020 - 2021 | Anass</h3>
    </div>
        </div>
        
    )
  }
}

export default Home;