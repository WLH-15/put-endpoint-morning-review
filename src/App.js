import React, {Component} from 'react';
import './App.css';
import Person from './Components/Person'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount(){
    axios.get('/api/people')
      .then(res => this.setState({people: res.data}))
      .catch(err => console.log(err))
  }

  editPerson = (id, first, last) => {
    // console.log("id", id)
    // console.log("first", first)
    // console.log("last", last)
    axios.put(`/api/people/${id}`, {firstName: first, lastName: last})
      .then(res => {
        // console.log("res.data", res.data)
        this.setState({people: res.data})
      })
      .catch(err => console.log(err))
  }
  
  render(){
    // console.log("this.state.people", this.state.people)
    return (
      <div className="App">
        {this.state.people.map(element => {
          return <Person key={element.id} personInfo={element} editPerson={this.editPerson}/>
        })}
      </div>
    );
  }
}

export default App;
