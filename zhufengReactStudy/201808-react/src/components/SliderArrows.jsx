import React, { Component } from 'react'
class SliderArrows extends Component {
  state = {}
  render() {
    return (
      <div className="slider-arrows">
        <span onClick={() => this.props.turn(-1)} className="arrow arrow-left">
          &lt;
        </span>
        <span onClick={() => this.props.turn(1)} className="arrow arrow-right">
          &gt;
        </span>
      </div>
    )
  }
}

export default SliderArrows
