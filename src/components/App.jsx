import React, { Component } from "react";
import Form from "./Forma/Forma";
import UserList from "./UserList/UserList";
import data from './Forma/data/data.json';



class App extends Component {

  state = {
  contacts:data,
  filter:''
  }
  
  //==Получаем данные через props при сабмите формы==//
  onHandlerSubmit = dataUser => { 
    console.log(dataUser);
  }
   
  render() { 
    
    return (
      <>
        <Form onSubmit={this.onHandlerSubmit} />
        
        <UserList title ="Contacts" item={data}/>
      </>
     );
  }
}
 
export default App;