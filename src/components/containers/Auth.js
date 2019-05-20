import React,{Component} from "react";

import logo from '../../logo.svg';
import '../../App.css';


class Auth extends Component{

    constructor(){
        super();
        this.state={
            visitor:{
                username:"",
                password:""
            }
            
        }
 
        this.updateVistor=this.updateVistor.bind(this);
        this.login=this.login.bind(this);
        this.register=this.register.bind(this);
    }
 
    updateVistor(event){
        
        const {name,value}=event.target;
        const updatedVisitor=Object.assign({},this.state.visitor)
        updatedVisitor[name]=value;
        this.setState({
            visitor:updatedVisitor
        });
    }

    register(event){
        event.preventDefault();
        console.log("REGISTER : "+JSON.stringify(this.state.visitor));
    }
    login(event){
        event.preventDefault();
        console.log("LOGIN : "+JSON.stringify(this.state.visitor));
    }

    render(){
        return (
            <div className="App-header">
              
              <hr/>
              <h3>Register</h3>
              <form>        
                  <input 
                        type="text" 
                        name="username"
                        placeholder="Username"  
                        onChange={this.updateVistor}
                  />
                  <br/>
                  <input 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        onChange={this.updateVistor}
                  />
                  <br/>
                  <button onClick={this.register}> Signup Now</button>
              </form>

              <hr/>
              <h3>Login</h3>
              <form>
                   
                    <input 
                            type="text" 
                            name="username"
                            placeholder="Username" 
                            onChange={this.updateVistor}
                    />
                  
                  <br/>
                  <input 
                        type="password" 
                        name="password"
                        placeholder="" 
                        onChange={this.updateVistor}
                  />
                  <br/>
                  <button onClick={this.login}> Login Now</button>
              </form>

              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
              </header>
            </div>
          );
    }
}

export default Auth;