import React, { Component } from 'react'

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    // imgUrl: 'https://picsum.photos/200',
    tags: []
  }
  //   constructor() {
  //     super()
  //     this.handleIncrement = this.handleIncrement.bind(this)
  //   }
  //   style = {
  //     fontSize: 10,
  //     fontWeight: 'bold'
  //   }

  //   renderTags() {
  //     if (this.state.tags.length === 0) {
  //       return <p>There are no tags!</p>
  //     }
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag, i) => (
  //           <li key={i}>{tag}</li>
  //         ))}
  //       </ul>
  //     )
  //   }
  handleIncrement() {
    // console.log(product)
    this.setState({ value: this.state.value + 1 })
  }

  // Arrow Function can avoid bind and assign this to this function
  //   handleIncrement = () => {
  //     console.log('Increment Clicked', this)
  //   }
  render() {
    return (
      <div>
        {/* <img src={this.state.imgUrl} alt="testImage" /> */}
        <h4>Counter# {this.props.counter.id}</h4>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && 'Please add a tag'}
        {this.renderTags()} */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    )
  }
  getBadgeClass() {
    let classes = 'badge m-2 badge-'
    classes += this.state.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { value } = this.state
    return value === 0 ? 'Zero' : value
  }
}

export default Counter
