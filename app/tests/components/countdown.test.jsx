var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountDown', () => {
     it('should set state to started and coutdown', (done) => {
       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
       countdown.handleSetCountDown(10);

       expect(countdown.state.count).toBe(10);
       expect(countdown.state.countdownStatus).toBe('started');

       setTimeout(() => {
         expect(countdown.state.count).toBe(9);
         done();
       }, 1001)
     });

     it('should never set count less than zero', (done) => {
       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
       countdown.handleSetCountDown(1);

       setTimeout(() => {
         expect(countdown.state.count).toBe(0);
         done();
       }, 3001)
     });

     it('should pause countdown on paused status', (done) => {
       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
       countdown.handleSetCountDown(3);
       countdown.handleCountdownStatusChanged('pause');

       setTimeout(() => {
         expect(countdown.state.count).toBe(3);
         expect(countdown.state.countdownStatus).toBe('pause');
         done();
       }, 1001);
     });

     it('should reset count on stopped', (done) => {
       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
       countdown.handleSetCountDown(3);
       countdown.handleCountdownStatusChanged('stopped');

       setTimeout(() => {
         expect(countdown.state.count).toBe(0);
         expect(countdown.state.countdownStatus).toBe('stopped');
         done();
       }, 1001);
     });
  });
});
