var selectedrow=null;
function onformsubmit(){

}

// retrive the data
function readformdata(){
    var formdata={};
    formdata["productcode"] = document.getElementById("productcode").value;
    formdata["product"] = document.getElementById("product").value;
    formdata["quantity"] = document.getElementById("quantity").value;
    formdata["price"] = document.getElementById("price").value;
    return formdata;
}

// insert
function insertNewRecord(){
    var table=document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newflow = table.insertRow(table.length);
    var cell1 = 

}