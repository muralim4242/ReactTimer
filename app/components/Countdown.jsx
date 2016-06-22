var React = require("react");
var Clock = require("Clock");
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {count: 0, countdownStatus: "stopped"}
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({count: 0})
                case "pause":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            var newStatus = this.state.countdownStatus;
            this.setState({
                count: newCount > 0
                    ? newCount
                    : 0,
                countdownStatus: newCount > 0
                    ? newStatus
                    : "stopped"
            })
        }, 1000)
    },
    handleSetCountDown: function(seconds) {
        this.setState({count: seconds, countdownStatus: "started"});
    },
    handleCountdownStatusChanged: function(newStatus) {
        this.setState({countdownStatus: newStatus});
    },
    render: function() {
        var {count, countdownStatus} = this.state;
        var renderControls = () => {
            if (this.state.countdownStatus === "stopped") {
                return (<CountdownForm onSetCountDown={this.handleSetCountDown}/>)
            } else {
                return (<Controls countdownStatus={countdownStatus} onStatusChanged={this.handleCountdownStatusChanged}/>)
            }
        }
        return (
            <div>
                <Clock totalSeconds={count}/> {renderControls()}
            </div>
        )
    }
});

module.exports = Countdown;
