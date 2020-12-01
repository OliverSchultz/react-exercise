import Tweets from "./Tweet";

export default function App() {
	return (
		<div className="app">
			<Tweets name="dieter" saying="Rosenkrieg" counter="78" />
			<Tweets name="miriam" saying="Rhabarber" counter="8" />
			<Tweets name="lene" saying="Hühnerkacke" counter="209" />
			<Tweets name="thomas" saying="och männo" counter="2" />
		</div>
	);
}
