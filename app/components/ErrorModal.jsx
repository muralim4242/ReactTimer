var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server")

var ErrorModal = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        error: React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
        return {title: 'Error'}
    },
    componentDidMount: function() {
      var {title, error} = this.props;
      var htmlMarkup=(  <div className="reveal tiny text-center" id="error-modal" data-reveal="">
            <h2>{title}</h2>
            <p>{error}</p>
            <p>
                <button className="button hollow" data-close="">Okey</button>
            </p>
        </div>);
        var $modal= $(ReactDOMServer.renderToString(htmlMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {

        return (
            <div>
            </div>
        );
    }
})

module.exports = ErrorModal;
