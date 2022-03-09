let array = ["Saab", "Volvo", "BMW"];
const car = array.find(item => item.includes("BMW"));
const element = document.createElement("div");
element.append(car);
document.body.append(element);

alert("array: " + array);

alert("element is taken: " + car);

array[0] = "Honda";
alert("first item is changed: " + array);

const lastCar = array.pop();
alert("last item is removed: " + array);

array.push("Audi");
alert("item is added: " + array);

array.splice(1, 1, "BMW");
alert("splice is done:" + array);