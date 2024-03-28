class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    const id = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        const minutes = this.computeTwoDigitNumber(this.getMinutes());
        const seconds = this.computeTwoDigitNumber(this.getSeconds());
        callback(minutes, seconds);
      }
    }, 1000);

    this.intervalId = id;
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime % 60;
    return seconds;
  }

  getMilliseconds() {
    // ... your code goes here
    const seconds = this.getSeconds();
    const milliseconds = seconds * 100;
    return milliseconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalIdMilliseconds);
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    // this.stop();
    // reset the values in our HTML file, by using .innerHTML;
    document.getElementById('minDec').innerHTML = '0';
    document.getElementById('minUni').innerHTML = '0';
    document.getElementById('secDec').innerHTML = '0';
    document.getElementById('secUni').innerHTML = '0';
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
// Mock DOM elements
global.document.getElementById = jest.fn().mockImplementation((id) => {
  const elements = {
    'minDec': { innerHTML: '' },
    'minUni': { innerHTML: '' },
    'secDec': { innerHTML: '' },
    'secUni': { innerHTML: '' },
    // Add any other elements you need to mock here
  };
  return elements[id] || null;
});
