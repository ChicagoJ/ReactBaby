import React from 'react'
import PropTypes from 'prop-types'
let connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class Proxy extends Component {
    constructor() {
      super()
      this.state = {}
    }
    componentWillMount() {
      this.unsubscribe = this.context.store.subscribe(() =>
        this.setState(mapStateToProps(this.context.store.getState()))
      )
      //   this.context.store.subscribe(() => {
      //     this.unsubscribe = this.setState(
      //       mapStateToProps(this.context.store.getState())
      //     )
      //   })
    }
    componentWillUnmount() {
      this.unsubscribe()
    }
    render() {
      return (
        <Component
          {...this.state}
          {...mapDispatchToProps(this.context.store.dispatch)}
        />
      )
    }
  }
  Proxy.contextTypes = {
    store: PropTypes.object
  }
  return Proxy
}

export default connect
