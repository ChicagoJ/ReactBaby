import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
          <div className='row'>
            <div className='col-sm-4 col-sm-offset-8'>
              Home
              <div>This is {this.props.name} and I am {this.props.age} years old</div>
              <ul>
                {this.props.user.hobbies.map((hobby,i) => <li key={i}> {hobby} </li>)}
              </ul>
            </div>
          </div>
    );
  }
}