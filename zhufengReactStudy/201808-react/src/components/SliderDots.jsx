import React, { Component } from 'react'
class SliderDots extends Component {
  render() {
    return (
      <div className="slider-dots">
        {this.props.items.map((item, index) => (
          <span
            key={index}
            onClick={() => {
              this.props.turn(index - this.props.index)
            }}
            className={
              'dot ' +
              (index === this.props.index ||
              (this.props.index === this.props.items.length && index === 0)
                ? 'active'
                : '')
            }
          />
        ))}
      </div>
    )
  }
}

export default SliderDots
