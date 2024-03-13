import React, { Component } from 'react'
import Button from '../Buttons/Button'
import "./Card.css"

export default class Card extends Component {
    
  render() {
    return (
      <div className='card'>
        <h2>{this.props.name}</h2>
        <p>
          {this.props.describtion}
        </p>

        <Button changeCardName={this.props.changeName} />
      </div>
    )
  }
}
