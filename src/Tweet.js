import "./App.css";

export default function Tweets(props) {
	return (
		<div className="tweet">
			<h3>{props.name}</h3>
			<p>{props.saying}</p>
			<h3>{props.counter}</h3>
		</div>
	);
}
