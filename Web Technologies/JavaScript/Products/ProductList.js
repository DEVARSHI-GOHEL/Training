var dataObj = localStorage.getItem("product_data");
localStorage.clear();

var temp = JSON.parse(dataObj).name;
document.getElementById("prdName").innerHTML = temp;

var temp = JSON.parse(dataObj).img;
document.getElementById("prdImg").src = temp;

var temp = JSON.parse(dataObj).desc;
document.getElementById("prdDesc").innerHTML = temp;

var temp = JSON.parse(dataObj).quantity;
document.getElementById("prdQuantity").innerHTML = temp;

var temp = JSON.parse(dataObj).price;
document.getElementById("prdPrice").innerHTML = temp;