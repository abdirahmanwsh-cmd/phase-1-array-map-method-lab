const { expect } = require('chai');
const { titleCased } = require('./index');

// index.test.js

describe('titleCased', () => {
  it('should return an array', () => {
    expect(titleCased()).to.be.an('array');
  });

  it('should return the correct title-cased tutorials', () => {
    const expected = [
      'What Does The This Keyword Mean?',
      'What Is The Constructor OO Pattern?',
      'Implementing Blockchain Web API',
      'The Test Driven Development Workflow',
      'Immutable State And Pure Functions',
      'What Is The Difference Between == And ===?',
      'What Is The Difference Between Event Capturing And Bubbling?',
      'What Is JSONP?'
    ];
    expect(titleCased()).to.deep.equal(expected);
  });

  it('should return an array of the same length as the input', () => {
    expect(titleCased()).to.have.lengthOf(8);
  });
});