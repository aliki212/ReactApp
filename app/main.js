import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom' // named export variable - needs brackets and specific name - ES6 modules

//My Components
import Header from './components/Header'
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"
import About2 from './components/About' // export default variable - doesnt matter what you name it
import Terms from './components/Terms'

function Main() {
    return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomeGuest/>}/>
				<Route path="/about-us" element={<About2 />}/>
				<Route path="/terms" element={<Terms />}/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if(module.hot) {
    module.hot.accept()
}