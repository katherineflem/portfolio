import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../client/Pages/Home'
import Contact from './Pages/Contact';
import Nav from './Components/nav'


class App extends React.Component<IAppProps, IAppState> {

	render() {
		return (
			<>
			<BrowserRouter>
			<Nav />
				<Switch>
					<Route exact path='/' component={Home}></Route>
					{/* <Route exact path='/about' component={About}></Route> */}
					<Route exact path='/contact' component={Contact}></Route>
				</Switch>
			</BrowserRouter>
			</>
		);
	}
}

export interface IAppProps { }

export interface IAppState {
	name: string;
}

export default App;
