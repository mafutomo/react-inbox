import React, { Component } from 'react';
import './App.css';
import MessagesList from './Components/MessageList';
import Toolbar from './Components/Toolbar';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        messages: [],
        formStatus: false,
        subject:"",
        body: "",
        bod:"",
        bodObj: ""
      }
  }

//anytime you need to set state or use this.state, like below, you need to have it in an arrow function if you want to avoid using .bind(this) in your render.
  componentDidMount = async () => {
     const response = await fetch('http://localhost:8082/api/messages')
     const json = await response.json()
     this.setState({messages: json._embedded.messages})
     console.log(this.state.messages);
    }

  getBody = async (id) =>  {
        const response = await fetch(`http://localhost:8082/api/messages/${id}`)
        const json = await response.json()
        this.setState({bodObj:json.body})
    }

//for persisting read, unread, stars
    async updateItem(item, method) {
      await fetch(`http://localhost:8082/api/messages`, {
        method: method,
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
           }
         })
       }

  //to show form
  toggleFormView = (formStatus) => {
    let newFormState = this.state.formStatus
    newFormState = !newFormState
    this.setState({formStatus:newFormState})
  }

  captureSubject = (event) => {
    let newSubject = event.target.value
    this.setState({subject:newSubject})
  }

  captureBody = (event) => {
    let newBody = event.target.value
    this.setState({body:newBody})
  }

  //create a method for the story
  toggleRead = (message) => {
    const index = this.state.messages.indexOf(message);
    let newMessages = this.state.messages.slice(0); //copying and creating a whole new array
    newMessages[index].read = !newMessages[index].read;
    this.setState({messages:newMessages}) //setState is changing the state because the constructor is incapsulated. When you change state then you'll need this to change the state of any program
  }

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


  render() {

  return (
    <Router>
      <div className="App">
          <div className='container'>

          <Route path='/' render={() => (
            <div>
              <Navbar />
              <Toolbar
                messages = {this.state.messages}
                formStatus = {this.state.formStatus}
                selectAll = {this.selectAll}
                markAsRead = {this.markAsRead}
                markAsUnread = {this.markAsUnread}
                deleteSelected = {this.deleteSelected}
                applyLabel = {this.applyLabel}
                deleteLabel = {this.deleteLabel}
                updateItem = {this.updateItem}
                toggleFormView = {this.toggleFormView}/>

                <Route path='/compose' render={() => (
                  <div>
                    <Form
                      messages = {this.state.messages}
                      formStatus = {this.state.formStatus}
                      subject = {this.state.subject}
                      body = {this.state.body}
                      captureSubject = {this.captureSubject}
                      captureBody = {this.captureBody}
                      updateItem = {this.updateItem}
                      componentDidMount = {this.componentDidMount}/>
                    </div>
                  )}/>

                    <div>
                    <MessagesList
                      messages={this.state.messages}
                      toggleRead = {this.toggleRead}
                      toggleSelected = {this.toggleSelected}
                      toggleStarred = {this.toggleStarred}
                      selectAll = {this.selectAll}
                      deleteLabel = {this.deleteLabel}
                      updateItem = {this.updateItem}
                      getBody = {this.getBody}
                      bod = {this.state.bod}
                      bodObj = {this.state.bodObj}
                      />
                    </div>

                </div>
              )}/>

            </div>
        </div>
    </Router>
    );
  }
}

export default App;
