import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
	const error = useRouteError();
	console.log(error);
	if (error.status === 404) {
		return (
			<Wrapper className='full-page'>
				<div>
					<img
						src={img}
						alt='not found'
					/>
					<h3>Ohh! Page Not Found</h3>
					<p>We can't seem to find the page you're looking for</p>
					<Link to='/'>back home</Link>
				</div>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<div>
				<h1>Something went wrong!</h1>
				<Link to='/'>back home</Link>
			</div>
		</Wrapper>
	);
};
export default Error;
