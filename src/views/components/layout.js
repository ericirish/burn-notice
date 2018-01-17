import { h } from 'preact';

export default function (props) {
	return (
		<div id="app">
			<main id="content">
				{ props.children }
			</main>
		</div>
	);
}
