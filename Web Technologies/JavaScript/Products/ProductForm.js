var name;
var img;
var desc;
var quantity;
var price;
var dataObj;

function submitList(){

    name = document.getElementById("productName").value;
    img = document.getElementById("productImage").value;
    console.log(img);
    desc = document.getElementById("productDescription").value;
    quantity = document.getElementById("productQuantity").value;
    price = document.getElementById("productPrice").value;

    dataObj = {
        "name" : name,
        "img" : img,
        "desc" : desc,
        "quantity" : quantity,
        "price" : price
    };

    localStorage.setItem("product_data", JSON.stringify(dataObj));
}