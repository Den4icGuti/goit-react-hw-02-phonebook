import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Forma.module.css'

class Form extends Component { 

  state = {
    contacts: [],
    name: '',
    number: ''
  };



  //===Метод меняющий состояние в полях===//
  onHandleInputData = e => { 
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  //===Метод который отправляет форму onSubmit===//
  onFormSubmit = e => { 
    e.preventDefault()
    this.props.onSubmit(this.state)

    this.reset()
  }
  
  //===Метод очищает поля формы после сабмита===//

  reset = () => { 
    this.setState({name:'',number:''})
  }
  
   render() { 
    
    return (
      <form onSubmit={this.onFormSubmit} className={styles.Form}>
        <h2>Phonebook</h2>
        <label className={styles.label}>Name
          <input
            type="text"
            value={this.state.name}
            name='name'
            onChange={this.onHandleInputData}
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>Phone
        <input
          type="tel"
          value={this.state.number}
          onChange={this.onHandleInputData}
          name='number'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
          </label>
        <button tupe='submit'>Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
}

export default Form;