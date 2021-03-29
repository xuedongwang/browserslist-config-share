const browsersList = require('./index');
const browserslist = require("browserslist");

const browsers = browserslist(browsersList);

test(`Browsers contains user's config`, () => {
  expect(browsersList).toContain('> 0.25%');
  expect(browsersList).toContain('IE >= 11');
  expect(browsersList).toContain('iOS >= 7');
});

test(`Successfully resolves a list of browsers`, () => {
  expect(browsers.length).toBeGreaterThan(0);
});

// console.log("Resolved the following browsers:")
// console.log(browsers.join("\n"))

// module.exports = [
//   "> 0.25%",
//   "IE >= 11",
//   "iOS >= 7"
// ]