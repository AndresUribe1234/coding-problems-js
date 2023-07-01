function directoryName(anyString) {
  let name = anyString.toLowerCase();
  name = name.split(" ").join("_");
  return name;
}

console.log(process.argv);
const inputString = process.argv[2];
console.log(directoryName(inputString));
