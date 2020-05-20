import React from "react"
import ReactDOM from "react-dom"

function BillySFirstComponent() {
  return (
    <>
      <h1>Hello Billie</h1>
      <p>Here we will begin our app.</p>
    </>
  )
}

ReactDOM.render(<BillySFirstComponent />, document.querySelector("#app"))
