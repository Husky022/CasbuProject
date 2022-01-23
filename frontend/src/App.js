import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/Users.js'
import ProjectList from './components/Projects.js'
import NoteList from './components/ToDos.js'
import Menu from "./components/Header.js";
import Footer from "./components/Footer.js";
import axios from 'axios'


class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'projects': [],
           'notes': []
       }
   }

    componentDidMount() {
       axios.get('http://127.0.0.1:8000/api/users')
           .then(response => {
               console.log('users loaded')
               const users = response.data.results
                   this.setState(
                   {
                       'users': users
                   }
               )
               console.log(this.state)
           }).catch(error => console.log(error))
       axios.get('http://127.0.0.1:8000/api/projects')
           .then(response => {
               console.log('projects loaded')
               const projects = response.data.results
                   this.setState(
                   {
                       'projects': projects
                   }
               )
               console.log(this.state)
           }).catch(error => console.log(error))
       axios.get('http://127.0.0.1:8000/api/notes')
           .then(response => {
               console.log('notes loaded')
               const notes = response.data.results
                   this.setState(
                   {
                       'notes': notes
                   }
               )
               console.log(this.state)
           }).catch(error => console.log(error))
    }

       render () {
           return <div>
           <Menu />
           <UserList users={this.state.users} />
           <ProjectList projects={this.state.projects} />
           <NoteList notes={this.state.notes} />
           <Footer />
           </div>
       }

    }


export default App;

