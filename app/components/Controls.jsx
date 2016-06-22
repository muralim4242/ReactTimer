var React = require("react");

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChanged: React.PropTypes.func.isRequired
    },
    onStatusChanged: function(newStatus) {
        return () => {
            this.props.onStatusChanged(newStatus);
        }
    },
    render: function() {
        var {countdownStatus} = this.props;
        var renderElement = () => {
            if (countdownStatus === "started") {
                return (
                    <button className="button secondary" onClick={this.onStatusChanged("pause")}>Pause</button>
                )
            } else if (countdownStatus === "pause") {
                return (
                    <button className="button primary" onClick={this.onStatusChanged("started")}>Start</button>
                )
            }
        };
        return (
            <div className="controls">
                {renderElement()}
                <button className="button alert hallow" onClick={this.onStatusChanged("stopped")}>Cancel</button>
            </div>
        )
    }
});

module.exports = Controls;
