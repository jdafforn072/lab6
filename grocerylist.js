var myList = [{
	item: "Coffee ",
	price: 2.95,
},
{
	item: "Milk ",
	price: 1.99,
},
{
	item: "Hot Dogs ",
	price: 2.15,
},
{
	item: "Bananas ",
	price: .99,
}]
var total = 0;

myList.forEach(function(list){
var newElement = document.createElement ("p");
newElement.innerHTML = (list.item + "= $" + list.price);
document.body.appendChild(newElement);
total += list.price;
});

var newElement = document.createElement ('p');
newElement.innerHTML = "total =" + total;
document.body.appendChild(newElement);
