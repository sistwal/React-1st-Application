import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className='card'>
        <img src={this.props.img} alt="" />
        <h2>{this.props.login}</h2>
        <a href={this.props.profile}>Go to profile</a>
      </div>
    )
  }
}
