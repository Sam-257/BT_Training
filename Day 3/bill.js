const $ = (id) => document.getElementById(id);
const items = [];

const displayItems = () => {
    let tableData = '';
    for(item of items){
        tableData += '<tr><td>'+ item.code +'</td><td>' + item.iname+ '</td><td>'+ item.cost +'</td><td>' + item.quantity + '</td><td>' + (parseInt(item.quantity) * parseInt(item.cost)) + '</td></tr>'
    }
    $('tbody').innerHTML = tableData;
    let lineCosts = items.map(item => item.cost * item.quantity);
    let subTotal = lineCosts.reduce((a,b) => a + b);
    let saleTax =  subTotal * 0.7;
    $('subTotal').value = subTotal;
    $('saleTax').value = saleTax.toFixed(2);
    $('total').value = (subTotal + saleTax).toFixed(2);
}

const clearInputFields = () => {
    $('code').value = null;
    $('iname').value = null;
    $('cost').value = null;
    $('quantity').value = null;
}

const addItem = () => {
    let item = {
        code: $('code').value,
        iname: $('iname').value,
        cost: $('cost').value,
        quantity: $('quantity').value,
    }
    items.push(item);
    displayItems();
    clearInputFields();
}

window.onload= function(){
    $('addItem').onclick= addItem;
}