import React from 'react'
// import {Redirect} from 'react-router-dom'
export default function(props) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        localStorage.setItem('login', 'true')
        props.history.push(props.location.state.from)
      }}
    >
      Login
    </button>
  )
}
