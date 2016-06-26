var React = require("react");
var Clock = require("Clock");
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function() {
        return {count: 0, timerStatus: "stopped"}
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
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
    componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            var newStatus = this.state.timerStatus;
            this.setState({
                count: newCount < 600000
                    ? newCount
                    : 600000
            })
        }, 1000)
    },
    handletimerStatusChanged: function(newStatus) {
        this.setState({timerStatus: newStatus});
    },
    render: function() {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChanged={this.handletimerStatusChanged}/>
            </div>
        )
    }
});

module.exports = Timer;
