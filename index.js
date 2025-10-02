const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const SPECIAL_CASES = {
  nan: 'NaN',
  stoppropagation: 'StopPropagation',
  preventdefault: 'PreventDefault',
  oo: 'OO',
  api: 'API',
  jsonp: 'JSONP'
};

const titleCased = () => {
  return tutorials.map(title =>
    title
      .split(' ')
      .map(token => {
        const m = token.match(/^([A-Za-z]+)(.*)$/);
        if (!m) return token;

        const [, core, rest] = m;
        const lower = core.toLowerCase();

        let fixed;
        if (Object.prototype.hasOwnProperty.call(SPECIAL_CASES, lower)) {
          fixed = SPECIAL_CASES[lower];
        } else {
          fixed = core.charAt(0).toUpperCase() + core.slice(1).toLowerCase();
        }

        return fixed + rest;
      })
      .join(' ')
  );
};