const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { showGreeting } = require('./greetings');
async function run(args) {
    const { _: names } = yargs(hideBin(args)).argv;
    showGreeting(names);
}
module.exports = { run };
