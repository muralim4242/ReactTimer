var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return (
      <div className = "top-bar" > <div className="top-bar-left">
        <ul className="menu">
            <li className="menu-text">
                React Timer App
            </li>
            <li className="menu-text">
                <Link to="/" activeClassName="active-link">Timer</Link>
            </li>
            <li className="menu-text">
                <Link to="/countdown" activeClassName="active-link">Countdown</Link>
            </li>
        </ul>
    </div> < div className = "top-bar-right" > <ul className="menu">
        <li className="menu-text">
            Created by
            <a href="www.mfivest.com" target="_black">Murali</a>
        </li>
    </ul> < /div>
    </div >
  )
}

module.exports = Navigation;
