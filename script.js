function hello(){
    var userName=prompt("Enter your name");
    console.log("Hello " + userName);
}

//function expression
/*let traveling= function(place){
    return "Traveling to " + place;
 }*/ 

//arrow function ">"
let traveling= (place)=> "Traveling to " + place
let sum= (a,b) => "The result is " + (a.b);

let travel= traveling("Italy");
let travel2= traveling("Mexico");
document.write(`${travel}`);
document.write(travel2);
document.write(sum(5,10));

var pr= prompt("Enter the product name:");
var q=prompt("Enter the quantity");
var p=prompt("Enter the price:")

function taxCalculation(product,quantity,price,taxes){
 var subtotal=quantity * price;
 var total=(subtotal*taxes)+subtotal;

 document.write(`
    <div>
        <h1>Amazon Online Store</h1>
        <p> Tijuan, Mexico, 22555</p>
        <p>Quantity -- Description-- Price</p>
        <p> ${quantity} ${product} ${price}</p>
        <p>-------------------subtotal= ${subtotal}</P>
        <p>-------------------taxes= ${subtotal *taxes}</p>
        <p>-------------------total- ${total}</p>
     </div>   
 `);
}
taxCalculation("Laptop",2,1000,0.16);
taxCalculation(pr,q,p,0.16);