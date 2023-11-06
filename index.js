const userInput = prompt(
  "Please enter a list of froyo flavors separated by commas."
);
const cleanedInput = userInput.replace(/\s/g, '');
const flavors = cleanedInput.split(",");
const order = {};
for (let i = 0; i < flavors.length; i++) {
    let currentFlavor=flavors[i];
  if (order[currentFlavor]) {
    order[currentFlavor] += 1;
  } else {
    order[currentFlavor] = 1;
  }
}
console.table(order);
