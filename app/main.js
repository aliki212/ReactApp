import React from "react";
import { render } from "react-dom";
import $ from "jquery";
import Popper from "popper.js";
// import "bootstrap/dist/js/bootstrap.css";
// import 'bootstrap';
//import "~bootstrap/scss/bootstrap";
import './style.css';
import App from './src/App.js';
import Carousel from './src/Carousel.js';

function BillySFirstComponent() {
  return (
    <>
      <App />
      <h1 className="text-warning">Hello Wonderland</h1>
      <Carousel />
      <p>Here we will begin our app.</p>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

render(<BillySFirstComponent />, document.querySelector("#app"))
