var React = require("react");

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render: function() {
        var {countdownStatus} = this.props;
        var renderElement = () => {
            if (countdownStatus === "started") {
                return (
                    <button className="button secondary">Pause</button>
                )
            } else if (countdownStatus === "pause") {
                return (
                    <button className="button primary">Start</button>
                )
            }
        };
        return (
            <div className="controls">
                {renderElement()}
                <button className="button alert hallow">Cancel</button>
            </div>
        )
    }
});

module.exports = Controls;
