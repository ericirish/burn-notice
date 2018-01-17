import { h, render, Component } from 'preact';
import { Link } from 'preact-router';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state.people = 2;

		this.updatePeople = this.updatePeople.bind(this);
		this.startTimer = this.startTimer.bind(this);

	}

	updatePeople(evt) {
		console.log(evt);
		this.setState({people: evt.target.value});
	}

	startTimer() {
		//const {people} = this.state;
		var clock = new Clock(this.state.people);
		clock.start();
	}

	render() {
		return (
			<div className="page page__home">
				<input type="number" value={this.state.people} onChange={this.updatePeople}/>
				<button onClick={this.startTimer}>Start</button>
				<div id="clock"></div>
			</div>
		)
	};
}

function Clock(people) {
	var clock = this;
	var timeout;
	var time;

	this.hours = 0;
	this.minutes = 0;
	this.seconds = 0;
	this.stop = stop;
	this.start = start;

	var element = document.getElementById('clock');

	function stop() {
		clearTimeout(timeout);
	}

	function start() {
		timeout = setTimeout(tick, 0);
		time = Date.now();
	}

	function tick() {
		time += (1000 / people);
		timeout = setTimeout(tick, time - Date.now());
		display();
		update();
	}

	function display() {
		var hours = clock.hours;
		var minutes = clock.minutes;
		var seconds = clock.seconds;

		hours = hours < 10 ? "0" + hours : "" + hours;
		minutes = minutes < 10 ? "0" + minutes : "" + minutes;
		seconds = seconds < 10 ? "0" + seconds : "" + seconds;

		element.innerHTML = hours + ":" + minutes + ":" + seconds;
	}

	function update() {
		var seconds = clock.seconds += 1;

		if (seconds === 60) {
				clock.seconds = 0;
				var minutes = ++clock.minutes;

				if (minutes === 60) {
						clock.minutes = 0;
						var hours = ++clock.hours;

						if (hours === 24) clock.hours = 0;
				}
		}
	}
}
