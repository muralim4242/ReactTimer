var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Clock = require("Clock");

describe("Clock", () => {
    it("should exit", () => {
        expect(Clock).toExist();
    })

    describe("formateSeconds", () => {
        it("should render clock to output",()=>{
          var clock=TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
          var $el=$(ReactDOM.findDOMNode(clock));
          var actualText=$el.find('.clock-text').text();

          expect(actualText).toBe("01:02");
        })

        it("should formate Seconds", () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var totalSeconds = 615;
            var expected = "10:15";
            var actual = clock.formateSeconds(totalSeconds);

            expect(actual).toBe(expected);
        });

        it("should formate seconds and minutes when min/sec less than 10", () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var totalSeconds = 61;
            var expected = "01:01";
            var actual = clock.formateSeconds(totalSeconds);

            expect(actual).toBe(expected);
        })
    })
})
