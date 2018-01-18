import { h, render, Component } from 'preact';
import { Link } from 'preact-router';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state.people = 2;
		this.state.billrate = 15;
		this.state.showControls = true;
		this.state.showClock = false;

		this.updatePeople = this.updatePeople.bind(this);
		this.updateBillRate = this.updateBillRate.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.hideControls = this.hideControls.bind(this);
	}

	componentDidMount(){
    this.nameInput.focus();
  }

	updatePeople(evt) {
		this.setState({people: evt.target.value});
	}

	updateBillRate(evt) {
		this.setState({billrate: evt.target.value});
	}

	hideControls() {
		this.setState({
			showControls: false,
			showClock: true,
		})

		setTimeout(() => {this.startTimer()}, 1000);
	}

	startTimer() {
		let clock = new Clock(this.state.people);
		let money = new Money(this.state.people, this.state.billrate);
		clock.start();
		money.start();
	}

	render() {
		return (
			<div className="page page__home">
				<div class={`controls-container ${this.state.showControls ? 'show':'hide'}`}>
					<div class='controls'>
						<input
							ref={(input) => { this.nameInput = input; }}
							value={this.state.people}
							onChange={this.updatePeople}
						/>
						<hr/>
						<span class="label">Participants</span>
						<input
							value={this.state.billrate}
							onChange={this.updateBillRate}
						/>
						<hr/>
						<span class="label">Billrate ($)</span>
						<div class="button" onClick={this.hideControls}>Start</div>
					</div>
				</div>
				<div class={`clock-container ${this.state.showClock ? 'show':'hide'}`}>
					<div id="clock">00:00:00</div>
					<div id="money">$<span id='value'>0</span></div>
				</div>
			</div>
		)
	};
}

function Money(people, billrate) {
	let money = this;
	let timeout;
	let time;

	this.value = 0;
	this.perSecond = parseFloat(((billrate * people) / 60) / 60);
	this.stop = stop;
	this.start = start;

	let element = document.getElementById('value');

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
		let value = money.value;
		element.innerHTML = (value).toFixed(0);
	}

	function update() {
		let update = money.value += money.perSecond;
	}
}

function Clock(people) {
	let clock = this;
	let timeout;
	let time;

	this.hours = 0;
	this.minutes = 0;
	this.seconds = 0;
	this.stop = stop;
	this.start = start;

	let element = document.getElementById('clock');

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
		let hours = clock.hours;
		let minutes = clock.minutes;
		let seconds = clock.seconds;

		hours = hours < 10 ? "0" + hours : "" + hours;
		minutes = minutes < 10 ? "0" + minutes : "" + minutes;
		seconds = seconds < 10 ? "0" + seconds : "" + seconds;

		element.innerHTML = hours + ":" + minutes + ":" + seconds;
	}

	function update() {
		let seconds = clock.seconds += 1;

		if (seconds === 60) {
				clock.seconds = 0;
				let minutes = ++clock.minutes;

				if (minutes === 60) {
						clock.minutes = 0;
						let hours = ++clock.hours;

						if (hours === 24) clock.hours = 0;
				}
		}
	}
}
