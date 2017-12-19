
import React from 'react'

function getMessage() {
  return 'Hello World'
}

export default () => (
  <div>
    <h1 >{getMessage()}</h1>
    <div>Hello React Hot Loader!</div>
  </div>
)