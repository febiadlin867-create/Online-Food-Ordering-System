function placeOrder(){

let customerName =
document.getElementById("name").value;

let mobile =
document.getElementById("mobile").value;

let address =
document.getElementById("address").value;

let summary =
document.getElementById("summary");


// Customer validation

if(customerName=="" ||
mobile=="" ||
address==""){

alert("Please fill all customer details");

return;

}

if(mobile.length!=10 ||
isNaN(mobile)){

alert("Enter a valid mobile number");

return;

}


// Menu items

let items =
document.querySelectorAll(".item");

let quantities =
document.querySelectorAll(".qty");

let grandTotal=0;

let output=`
Customer:<br>
<b>${customerName}</b>
<br><br>
`;


// Calculate subtotal

for(let i=0;i<items.length;i++){

if(items[i].checked){

let itemName=
items[i].dataset.name;

let price=
parseInt(items[i].dataset.price);

let quantity=
parseInt(quantities[i].value);

let subtotal=
price*quantity;

grandTotal+=subtotal;

output += `
${itemName} x${quantity}
= ₹${subtotal}
<br><br>
`;

}

}


// If no items selected

if(grandTotal==0){

alert("Please select food items");

return;

}


// Display summary

output += `
----------------------<br><br>

<b>
Grand Total = ₹${grandTotal}
</b>

<br><br>

<h3 style="color:green;">
Thank You for Ordering!
</h3>
`;

summary.innerHTML=output;

}
