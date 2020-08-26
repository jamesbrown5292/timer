const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (key === "b") {
    console.log(key);
    process.stdout.write('\x07');
  }
  switch (key) {
  case '0':
  case '1':
  case '2':
  case '3':
  case '4':
  case '5':
  case '6':
  case '7':
  case '8':
  case '9':
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
    console.log("alarm set for " + key);
    break;
  }
});
