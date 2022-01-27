var name = document.getElementById("productName");
var desc = document.getElementById("productDescription");
var img = document.getElementById("prdImg");
var quantity = document.getElementById("productQuantity");
var price = document.getElementById("productPrice");
var btn = document.getElementById("submitBtn").value;
var url, fsize;

//To load the image with appropriate path
function loadFile(event){
    url = URL.createObjectURL(event.target.files[0]);
    console.log(url)
    fsize = (event.target.files[0].size / 1024 / 1024).toFixed(2);
};

//Submit the data to list
function submitProduct(){
    
    document.getElementById("prdName").innerHTML = document.getElementById("productName").value;
    document.getElementById("prdDesc").innerText = document.getElementById("productDescription").value;
    document.getElementById("prdQuantity").innerHTML = document.getElementById("productQuantity").value;
    document.getElementById("prdPrice").innerHTML = document.getElementById("productPrice").value;
    img.src = url;

    document.getElementById("productName").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productImage").value = "";
    
}

//Validation of the form
function validate(){
    if(document.getElementById("productName").value == ""){
        alert("You must enter name");
    }
    else if(desc.value == ""){
        alert("You must enter description")
    }
    else if(quantity.value <= 0 ){
        alert("Enter valid choice")
    }
    else if(price.value <= 0 ){
        alert("Enter valid choice")
    }
    else if(fsize == null){
        alert("Upload image")
    }
    else{
        submitProduct()
    }
}