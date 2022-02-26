import React, { Component } from "react";
import Form from "./Forma/Forma";
import UserList from "./UserList/UserList";
import SearchByName from "./Filter/Filter";
import data from './data/data.json';



class App extends Component {

  state = {
    contacts: data,
    name: '',
    number:'',
    filter:''
  }
  
  //==Получаем данные через props при сабмите формы==//
  onHandlerSubmit = dataUser => { 
    console.log(dataUser);
  }

  //===Метод меняeющий сотояния поля Filter===//
  onChangeFilter = e => { 
    this.setState({ filter: e.currentTarget.value })
  }

  getNameBySearch = () => { 
    const { filter, contacts } = this.state;
    const normaLize = filter.toLowerCase();
   
    return contacts.filter(searchName =>
    searchName.name.toLowerCase().includes(normaLize))
  }
   
  render() { 
    const { filter } = this.state;
    // const visibleSearchName = this.getNameBySearch();
    return (
      <div>
        <Form onSubmit={this.onHandlerSubmit}/>
        <SearchByName title="Contacts" value={filter} onChange={this.onChangeFilter}/>
      
        {/* {this.contacts.length  > 0 ? ('fefwfwe') :   <UserList item={data} /> } */}
      </div>
     );
  }
}
 
export default App;