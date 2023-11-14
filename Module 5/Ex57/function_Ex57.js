function ItemMoney() {
    var Qty1 = eval(myform.Qty1.value);
    if (!isNaN(Qty1)) 
        {
        item1 = document.getElementById("item1");
        item1.innerHTML = Qty1 * 19.95 + " $";
        } 

    var Qty2 = eval(myform.Qty2.value);
    if (!isNaN(Qty2)) 
        {
        item2 = document.getElementById("item2");
        item2.innerHTML = Qty2 * 29.95 + " $";
        } 

    var Qty3 = eval(myform.Qty3.value);
    if (!isNaN(Qty3)) 
        {
        item3 = document.getElementById("item3");
        item3.innerHTML = Qty3 * 39.95 + " $";
        } 
}

function TotalBill() {
    var Qty1 = eval(myform.Qty1.value);
    var Qty2 = eval(myform.Qty2.value);
    var Qty3 = eval(myform.Qty3.value);
    total = Qty1 * 19.95 + Qty2 * 29.95 + Qty3 * 39.95;

    var totalElement = document.getElementById("total");
    totalElement.innerHTML = total + " $";
}