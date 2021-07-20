const { fork } = require('child_process');
const processFork = fork('children.js');

const num = 50;

for (let i = 1; i <= num; i++) {
    processFork.send(i);
}

processFork.on('message', (data) => {
    console.log(data);
})