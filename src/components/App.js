import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChange = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
    
  }
  
  fetchPets = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(resp=>resp.json()).then(jsonPets=>{
        this.setState({
          pets:jsonPets
        })
      })
    } else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat').then(resp=>resp.json()).then(jsonPets=>{
        this.setState({
          pets:jsonPets
        })
      })      
    } else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog').then(resp=>resp.json()).then(jsonPets=>{
        this.setState({
          pets:jsonPets
        })
      })
    } else {
      fetch('/api/pets?type=micropig').then(resp=>resp.json()).then(jsonPets=>{
        this.setState({
          pets:jsonPets
        })
      })      
    }      
  }

  handleAdoption = (petId) => {
    this.state.pets.forEach(pet=> {
      if (pet.id === petId) {
        return pet.isAdopted = !pet.isAdopted
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoption} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
