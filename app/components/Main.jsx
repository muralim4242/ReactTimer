var React = require('react');
var Navigation=require('Navigation');
var Main = (props) => {
    return (

        <div>
          <Navigation/>
            <p>This is main jsx</p>
            <div>
                {props.children}
            </div>
        </div>
    )
}

module.exports = Main;
