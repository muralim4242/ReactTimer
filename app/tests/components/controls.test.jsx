var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var Controls = require("Controls");

describe("Controls", () => {
    it("Should exit", () => {
        expect(Controls).toExist();
    });

    describe("render", () => {
        it("should display pause button when timer started", () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);

            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find("button:contains('Pause')");

            expect($pauseButton.length).toBe(1);
        });

        it("should display start button when timer stopped", () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="pause"/>);

            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find("button:contains('Start')");

            expect($startButton.length).toBe(1);
        });
    })
});
