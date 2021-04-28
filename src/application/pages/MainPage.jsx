import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  ProfessorDetailPage from './ProfessorDetailPage';




const MainPage = () => {
	const [professorData, setprofessorData] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get('https://dev.perfectprof.com/api/search');
			setprofessorData(response.data.data);
		} catch {}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<nav className='navbar navbar-dark bg-dark'>
				<div className='container-fluid'>
					<span className='navbar-brand mb-0 h1'>Professor.edu</span>
				</div>
			</nav>

			<Router>
				<Switch>
					<Route exact path='/'>
						<div className='container'>
							<div className='row'>
								<div className='col-12'>
									<h1 style={{ textAlign: 'center', marginBottom: '100px' }}>Professors</h1>
								</div>
							</div>
							<div className='row'>
								<div className='col-12'>
									<Card Data={professorData} />
								</div>
							</div>
						</div>
					</Route>
					<Route path='/professor/:slug'>
						<ProfessorDetailPage  Data={professorData}/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default MainPage;
