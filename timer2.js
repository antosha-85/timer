const stdin = process.stdin;
let arr = ['\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039'];
let numbers = [1,2,3,4,5,6,7,8,9];
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
    if (key === "\u0062") {
    process.stdout.write('\x07');;
    };
    if (key === '\u0003') {
        console.log(`Thanks for using me, ciao!`)
        process.exit();
      };
      for (let i = 0; i < arr.length; i++) {
        if (key === arr[i]) {
            console.log(`setting timer for ${numbers[i]} seconds`)
        setTimeout(()=> {
            process.stdout.write('\x07');
        }, numbers[i]*1000);
        }
    }
});
console.log('after callback');

