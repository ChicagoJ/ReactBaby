import React from 'react'
import { Route, Link } from 'react-router-dom'
export default function({ label, to }) {
  return (
    <Route
      path={to}
      children={({ match }) => {
        return (
          <li className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
          </li>
        )
      }}
    />
  )
}
