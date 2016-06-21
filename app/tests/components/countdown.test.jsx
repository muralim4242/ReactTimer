var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var Countdown = require("Countdown");

describe("Countdown", () => {
    it("Should exit", () => {
        expect(Countdown).toExist();
    });

    describe("onSetCountDown funtion defination test", () => {
        it("on set function should work", () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountDown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            setInterval(() => {
                expect(countdown.state.count).toBe(9);
            }, 10001)
        });

        it("on set function should not show negative number if seconds is 1", () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountDown(1);

            setInterval(() => {
                expect(countdown.state.count).toBe(0);
            },3001)
        });
    })
});
