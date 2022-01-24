import React from 'react';
import './App.css';
import './components/Header.css';
import UserList from './components/Users.js'
import {ProjectList, UserProjectList} from './components/Projects.js'
import NoteList from './components/ToDos.js'
import Footer from "./components/Footer.js";
import axios from 'axios'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from "./components/Header.js";


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
           return <div className="App">
                       <BrowserRouter>
                           <Menu />
                           <Routes>
                               <Route exact path='/users' element={<UserList users={this.state.users} />}  />
                               <Route exact path='/projects' element={<ProjectList projects={this.state.projects} />} />
                               <Route exact path='/notes' element={<NoteList notes={this.state.notes} />} />
                               <Route exact path="/users/:id" element={<UserProjectList projects={this.state.projects} />} />
                           </Routes>
                       </BrowserRouter>
                       <Footer />
                </div>
       }

    }


export default App;

