var name = document.getElementById("productName");
var desc = document.getElementById("productDescription");
var quantity = document.getElementById("productQuantity");
var price = document.getElementById("productPrice");
var btn = document.getElementById("submitBtn").value;
var url, fsize;
var totalPrice = 0;

//To load the image with appropriate path
function loadFile(event) {
    url = URL.createObjectURL(event.target.files[0]);
    console.log(url)
    fsize = (event.target.files[0].size / 1024 / 1024).toFixed(2);
};

//Submit the data to list
function submitProduct() {

    document.getElementById("productAdd").style.visibility = "visible";
    const listItems = document.getElementById("listItems");
    const listName = document.createElement("li");
    listItems.classList.add("list-group-item", "m-2");
    var img = document.createElement("img");

    listItems.style.paddingBlockStart = '10px';

    img.style.width = "50px";
    img.style.height = "50px";
    img.src = url;

    listItems.appendChild(img);
    listName.innerHTML = "<span style='font-weight:bolder;font-size:20px;'>"
                            + document.getElementById("productName").value
                            + "</span><br>"
                            + document.getElementById("productDescription").value 
                            + "<br>Price - " + document.getElementById("productPrice").value 
                            +  " Rs. </br>" 
                            + "Quantity : "
                            + document.getElementById("productQuantity").value + "<br>";

    listItems.appendChild(listName);
    var cartBtn = document.createElement("button");
    cartBtn.innerHTML = "Add to cart";
    cartBtn.classList.add("btn", "btn-primary", "mt-1",);

    listItems.appendChild(cartBtn);

    const blankSpace = document.createElement("span");
    blankSpace.innerHTML = "<br><br>";
    listItems.appendChild(blankSpace);

    const fPrice = document.getElementById("productPrice").value;
    var imgCart = document.createElement("img");
    imgCart.style.width = "50px";
    imgCart.style.height = "50px";
    imgCart.src = url;
    const fNamePrice = document.getElementById("productName").value + "  -  " + document.getElementById("productPrice").value + "Rs.   ";


    clearForm();

    cartBtn.onclick = function(){

        document.getElementById("cartDiv").style.visibility = "visible";

        totalPrice = parseInt(fPrice) + totalPrice;
        document.getElementById("totalPrice").innerText = totalPrice;
        
        const cartListName = document.createElement("li");
        cartListName.innerHTML = fNamePrice;

        var removeBtn = document.createElement("button");
        removeBtn.innerHTML = "DELETE";
        removeBtn.classList.add("btn", "btn-primary", "ml-1");

        const blankSpace = document.createElement("span");
        blankSpace.innerHTML = "<br><br>";
        cartListName.appendChild(removeBtn);
        cartListName.appendChild(blankSpace);
        

        const cartListItems = document.getElementById("cartListItems");
        cartListItems.appendChild(cartListName);

        removeBtn.onclick = function () {
            totalPrice = totalPrice - parseInt(fPrice);
            document.getElementById("totalPrice").innerText = totalPrice;
            if(totalPrice == 0){
                document.getElementById("cartDiv").style.visibility = "hidden";
            }
            cartListItems.removeChild(cartListName);
        }
    }

}

function clearForm(){
    document.getElementById("productName").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productImage").value = "";
}

//Validation of the form
function validate() {
    if (document.getElementById("productName").value == "") {
        alert("You must enter name");
    }
    else if (desc.value == "") {
        alert("You must enter description")
    }
    else if (quantity.value <= 0) {
        alert("Enter valid choice")
    }
    else if (price.value <= 0) {
        alert("Enter valid choice")
    }
    else if (fsize == null) {
        alert("Upload image")
    }
    else {
        submitProduct()
    }
}