import React, { Component } from 'react'
class SliderItem extends Component {
  state = {}
  render() {
    return (
      <ul style={this.props.style} className="sliders">
        {this.props.items.map((item, index) => (
          <li className="slider" key={index}>
            <img src={item.src} alt="" />
          </li>
        ))}
        <li className="slider" key={this.props.items.length}>
          <img src={this.props.items[0].src} alt="" />
        </li>
      </ul>
    )
  }
}

export default SliderItem
