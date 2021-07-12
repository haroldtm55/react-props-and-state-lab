import React from 'react'

class Pet extends React.Component {
  constructor() {
    super()
    this.state={
      className: "ui primary button",
      buttonText: 'Adopt pet'
    }
  }
  toggleAdoptPetButton = (event) => {
    if (this.props.pet.isAdopted) {
      return
    }
    this.props.onAdoptPet(this.props.pet.id)
    this.setState({
      className: "ui disabled button",
      buttonText: 'Already adopted'
    })
  }

  generateClassNameBasedOnAdoption = () => {
    if (this.props.pet.isAdopted) {
      return 'ui disabled button'
    } else return 'ui primary button'
  }

  generateButtonTextBasedOnAdoption = () => {
    if (this.props.pet.isAdopted) {
      return 'Already adopted'
    } else return 'Adopt pet'
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender==='male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted && <button className="ui disabled button">Already adopted</button>}
          {!this.props.pet.isAdopted && <button onClick={(e)=>this.toggleAdoptPetButton(e)} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet