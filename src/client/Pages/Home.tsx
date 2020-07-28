import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/header'
import Services from './Services'
class Home extends React.Component<IHomeProps, IHomeState> {

	render() {
		return (
			<>
				<Header />
				<main className="container-fluid" id="main">
					<section className="row" id="mission-section">
						<section className="col">
							<h3>K.Fleming Designs offers unique collaborative branding and design services for businesses that want to discover their identity.
					See your business come to life from logo design and content creation to web design and development.</h3>
						</section>
					</section>
					<section id="services">
					<Services />
					</section>
					<section id="contact">
						<Link to="/contact" className="btn btn-success text-white shadow-lg m-5">Get In Touch</Link>
					</section>
					<section className=" container-fluid footer">

					</section>


				</main>
			</>
		);
	}
}

export interface IHomeProps { }

export interface IHomeState {
	name: string;
}

export default Home;