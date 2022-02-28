import React, { Component } from "react";
import Form from "./Forma/Forma";
 import UserList from "./UserList/UserList";
 import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";
import data from './data/data.json';



class App extends Component {

  state = {
    contacts: data,
    name: '',
    number: '',
    filter:'',
    
  }

  //===Метод добавления нового пользователя===//
  addContact = data => { 
    // const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };
     this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
  }

  
  //==Получаем данные через props при сабмите формы==//
  onHandlerSubmit = dataUser => { 
    console.log(dataUser);
  }

  //===Метод меняeющий соcтояния поля Filter===//
  onChangeFilter = e => { 
    this.setState({ filter: e.currentTarget.value})
    
  }

  // getNameBySearch = () => { 
  //   const { filter, contacts} = this.state;
  //   const normaLize = filter.toUpperCase;
   
  //   return contacts.filter(searchName =>
  //   searchName.name.toUpperCase().includes(normaLize))
  // }
   
  render() { 
    // const visibleSearchName = this.getNameBySearch();
    return (
      <div>
        <Form
          onSubmit={this.addContact} />
        <Filter
          title="Contacts"
          value={this.state.filter}
          onChange={this.onChangeFilter}
        />
        <UserList
          item={this.state.contacts} />
    </div>
     );
  }
}
 
export default App;