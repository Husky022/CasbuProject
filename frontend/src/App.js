import React from 'react';
import './App.css';
import './components/Header.css';
import UserList from './components/Users.js'
import {ProjectList, UserProjectList} from './components/Projects.js'
import NoteList from './components/ToDos.js'
import Footer from "./components/Footer.js";
import axios from 'axios'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import LoginForm from './components/Auth.js'
import Cookies from 'universal-cookie';


class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'projects': [],
           'notes': [],
           'token': ''
       }
   }
   set_token(token) {
       const cookies = new Cookies()
       cookies.set('token', token)
       this.setState({'token': token}, ()=>this.load_data())
  }

  is_authenticated() {
       return this.state.token != ''
  }

  logout() {
       this.set_token('')
  }

  get_token_from_storage() {
       const cookies = new Cookies()
       const token = cookies.get('token')
       this.setState({'token': token}, ()=>this.load_data())
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
  if (this.is_authenticated())
    {
        headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }

  get_token(username, password) {
       axios.post('http://127.0.0.1:8000/api/token/', {username: username, password: password})
       .then(response => {
           this.set_token(response.data['token'])
       }).catch(error => alert('Неверный логин или пароль'))
  }

  load_data() {

    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/api/users', {headers})
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
    axios.get('http://127.0.0.1:8000/api/projects', {headers})
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
    axios.get('http://127.0.0.1:8000/api/notes', {headers})
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



    componentDidMount() {
        this.get_token_from_storage()
    }

    render () {
       return <div className="App">
                   <BrowserRouter>
                        <div className="container-menu">
                            <div className="container-menu-buttons">
                                <ul className="menu-buttons-list">
                                    <li className="menu-button">
                                        <Link to='/users'>Users</Link>
                                    </li>
                                </ul>
                                <ul className="menu-buttons-list">
                                    <li className="menu-button">
                                        <Link to='/projects'>Projects</Link>
                                    </li>
                                </ul>
                                <ul className="menu-buttons-list">
                                    <li className="menu-button">
                                        <Link to='/notes'>ToDo's</Link>
                                    </li>
                                </ul>
                                <ul className="menu-buttons-list">
                                    <li className="menu-button">
                                        <Link to='/users'>About</Link>
                                    </li>
                                </ul>
                                <ul className="menu-buttons-list">
                                    <li>
                                        {this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                                    </li>
                                </ul>
                            </div>
                        </div>

                       <Routes>
                           <Route exact path='/users' element={<UserList users={this.state.users} />}  />
                           <Route exact path='/projects' element={<ProjectList projects={this.state.projects} />} />
                           <Route exact path='/notes' element={<NoteList notes={this.state.notes} />} />
                           <Route exact path="/users/:id" element={<UserProjectList projects={this.state.projects} />} />
                           <Route exact path="/login" element={<LoginForm get_token={(username, password) => this.get_token(username, password)} />}  />
                       </Routes>
                   </BrowserRouter>
                   <Footer />
            </div>
    }

}


export default App;

