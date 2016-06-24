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
        it("on set function should work", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountDown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            setInterval(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001)

        });

        it("never run the clock when count is zero", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountDown(1);

            setInterval(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)


        });

        it("clicking on pause to stop count", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountDown(3);
            countdown.handleCountdownStatusChanged("pause")

            setInterval(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe("pause");
                done();
            }, 1001)
        });

        it("changing status to stopped should reset count to 0", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountDown(3);
            countdown.handleCountdownStatusChanged("stopped")

            setInterval(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe("stopped");
                done();
            }, 1001)
        });
    })
});
