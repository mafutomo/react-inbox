import React, { Component } from 'react';
// import logo from './logo.svg';
// importing react the libary and the actual components
import './App.css';
//importing all of the components directly linked to App.js
import MessagesList from './Components/MessageList';
import Toolbar from './Components/Toolbar';
import Navbar from './Components/Navbar';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: props.messages

    }

  }


  //create a method for the story
  toggleRead = (message) => {
    const index = this.state.messages.indexOf(message);
    let newMessages = this.state.messages.slice(0); //copying and creating a whole new array
    newMessages[index].read = !newMessages[index].read;
    this.setState({messages:newMessages}) //setState is changing the state because the constructor is incapsulated. When you change state then you'll need this to change the state of any program
  }

  // When a user selects messages
  // And presses "Mark As Read"
  // Then each selected message should be marked as read
  // And should no longer be bold
  markAsRead = () =>{
    let readMessages = this.state.messages.map( msg => {
      if(msg.selected === true) {
        msg.read = true;
      }
      return msg;
    })
    this.setState({messages:readMessages})
  }

  markAsUnread = () =>{
    let unreadMessages = this.state.messages.map( msg => {
      if(msg.selected === true) {
        msg.read = false;
      }
      return msg;
    })
    this.setState({messages:unreadMessages})
  }

  //If the message is selected, it should have the selected style and the box should be checked
  toggleSelected = (message,e) => {
    e.stopPropagation()
    const index = this.state.messages.indexOf(message)
    let selectMessages = this.state.messages.slice(0);
    selectMessages[index].selected = !selectMessages[index].selected;
    this.setState({messages:selectMessages})
  }

  // Select all messages

  selectAll = () => {
    let allMessages = this.state.messages;

    if(allMessages.filter( msg => msg.selected === true ).length === 8) {
      //changing it all to be false
      let selectAllFalse = allMessages.map( msg => {
         msg.selected = false
         return msg
       })
      this.setState({messages:selectAllFalse})
    } else {
      //changing it all to be true
      let selectAllTrue = allMessages.map( msg => {
         msg.selected = true
         return msg
       })
      this.setState({messages:selectAllTrue})
    }
  }

  //If the message is starred, then the star should be filled in, otherwise it should be empty
  toggleStarred = (message) => {
    const index = this.state.messages.indexOf(message)
    let starredMessages = this.state.messages.slice(0);
    starredMessages[index].starred = !starredMessages[index].starred;
    this.setState({messages:starredMessages})
  }

  applyLabel = (value) => {
      let newMessages = this.state.messages.slice(0);
      newMessages.map(msg => {
        if(msg.selected === true) {
          if(msg.labels.indexOf(value) === -1) {
            msg.labels.push(value)
          }
        }
      })
      this.setState({messages:newMessages})
  }


  deleteLabel = (value) => {
    let newMessages = this.state.messages.slice(0);

    newMessages.map(msg => {
      if(msg.selected === true) {
        if(msg.labels.indexOf(value) !== -1) {
          let index = msg.labels.indexOf(value)
          msg.labels.splice(index,1)
        }
      }
    })
    this.setState({messages:newMessages})
  }

  //Delete
  deleteSelected = () => {
    let result = this.state.messages.filter( msg => msg.selected !== true)
    this.setState({messages:result})
  }

  //Count number of unread
  countUnread = () => {
    
  }

  render() {
    return (
      <div className="App">
          <Navbar />

          <div className='container'>
            <Toolbar
            messages = {this.state.messages}
            selectAll = {this.selectAll}
            markAsRead = {this.markAsRead}
            markAsUnread = {this.markAsUnread}
            deleteSelected = {this.deleteSelected}
            applyLabel = {this.applyLabel}
            deleteLabel = {this.deleteLabel}/>

            <MessagesList
            messages={this.state.messages}
            toggleRead = {this.toggleRead}
            toggleSelected = {this.toggleSelected}
            toggleStarred = {this.toggleStarred}
            selectAll = {this.selectAll}
            deleteLabel = {this.deleteLabel}/>
            </div>

      </div>
    );
  }
}

export default App;
