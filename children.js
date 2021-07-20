process.on('message', data => {
    process.send(factorial(data))
});


function factorial(num) {
    if (num === 0) {
        return 1
    }
    return num * factorial(num -1)
}