let name = "Md Ashik Ansari";

let reversedName = name.split(" ").reverse();

for (let i = 0; i < reversedName.length; i++) {
  let el = reversedName[i];
  if (i != 1) {
    for (let j = el.length - 1; j >= 0; j--) {
      console.log(el[j]);
    }
  }
}

//React JS
