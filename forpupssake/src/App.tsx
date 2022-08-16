import './App.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
	return (
		<div className="App">
		  <Header />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
