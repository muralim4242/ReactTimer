var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe("Timer", () => {
    it("should exist", () => {
        expect(Timer).toExist();
    });

    it("should start when we click started", (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.handletimerStatusChanged("started");
        expect(timer.state.count).toBe(0);

        setInterval(() => {
            expect(timer.state.count).toBe(1);
            expect(timer.state.timerStatus).toBe("started");
            done();
        }, 1001)
    });

  it("should pause when we click pause", (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handletimerStatusChanged("started");
    timer.handletimerStatusChanged("pause");

    setInterval(() => {
        expect(timer.state.count).toBe(10);
        expect(timer.state.timerStatus).toBe("pause");
        done();
    }, 1001)
});

    it("should stop when we click stop", (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count:10});
        timer.handletimerStatusChanged("started");
        timer.handletimerStatusChanged("stopped");

        setInterval(() => {
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe("stopped");
            done();
        }, 1001)
    });
})
