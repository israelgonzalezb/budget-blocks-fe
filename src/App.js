import React from 'react';
import './App.css';

import Home from './components/home'; 
/* I: Presentational component, just links to Login and registration pages, 
uses Material UI components */

import Login from './components/Form_Components/Login/Login';
/* I: Redux-connected component,
sets up session storage for the logged-in user,
redirects to /dashboard or /onboard/1 depending on some user profile state,
uses Material UI components, uses react-spinner-loader,
also uses an additional css file for adding more styles to the material ui components */

import Register from './components/Form_Components/Register/Register';
/* I: similar to login component with an additional password confirmation check and extra inputs for user details */


import { Switch, Route } from 'react-router-dom';
/*I: Switch https://reacttraining.com/react-router/web/api/Switch
<Switch> is unique in that it renders a route exclusively. 
In contrast, every <Route> that matches the location renders inclusively.*/

import Dashboard from './components/Dashboard';
//I: Guts of the app, where transactions are viewed, added, deleted, etc

import PrivateRoute from './components/PrivateRoute';
//I: Custom component, redirects to "/link" if no token is found in redux store
// Otherwise, it renders the component that was passed in
import AddTransaction from './components/Modal_Components/AddTransaction';
import Navbar from './components/NavBar';
// I: Shows logo and logout button if user is logged in
// Straight up custom component using only a css file for styling... is there a material ui component to replace this, for consistency sake?
import SelectCategories from './components/Form_Components/Select_Categories/SelectCategories';
import FirstOnboard from './components/OnboardComponents/FirstOnboard';
import ManualBlocks from './components/Blocks_Components/ManualBlocks';

function App() {

	return (
		<div>
			<Navbar />
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} /> {/*I: ✓ Reviewed */}
					<Route path='/login' component={Login} /> {/*I: ✓ Reviewed */}
					<Route path='/register' component={Register} /> {/*I: ✓ Reviewed */}
					<PrivateRoute path='/dashboard' component={Dashboard} /> {/*I: ✓ Reviewed */}
					<Route path='/onBoard/select' component={SelectCategories} /> {/*I: ✓ Reviewed */}
					<Route path='/trans' component={AddTransaction} /> {/*I: ✓ Reviewed */}
					{/*I: Dashboard is parent of LinkedTransactions component which can also render AddTransaction modal */}
					<Route path='/onBoard/1' component={FirstOnboard} /> {/*I: ✓ Reviewed */}
					<Route path='/manual' component={ManualBlocks} /> {/*I: ✓ Reviewed */}
				</Switch>
			</div>
		</div>
	);
}

export default App;
