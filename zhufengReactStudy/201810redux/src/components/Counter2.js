import React, { Component } from 'react'
import connect from '../connect'
import { INCREASE, DECREASE } from '../actions'
class Counter2 extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.onIncrease}>+</button>
        <button onClick={this.props.onDecrease}>-</button>
      </div>
    )
  }
}
//mapStateToProps  把store里的状态对象映射成属性

let mapStateToProps = state => ({ number: state.number })
let mapDispatchToProps = dispatch => ({
  onIncrease: () => dispatch({ type: INCREASE }),
  onDecrease: () => dispatch({ type: DECREASE })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter2)
