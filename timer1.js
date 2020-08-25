let argsArray = process.argv.slice(2);

for (let arg of argsArray) {
  if (arg > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg);
  }
}