const core = require('@actions/core');
const core = require('@actions/github');

try {
    const nameToSalute = core.getInput('hello-there');
    console.log(`Hello ${nameToSalute}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event pauload ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}
