const args = process.argv.slice(2);
if (args.length === 0) {
    console.log('array length is 0')
};
for (let item of args) {
    if (item < 0) {
        console.log('negative numbers');
    } else if (isNaN(item)) {
        console.log('not a number');
    } else {
    setTimeout(() => {
    process.stdout.write('\x07');
    }, item);
    }
}
