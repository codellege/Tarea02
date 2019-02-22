// Tarea 01

let aa = document.getElementById('agea');
let na = document.getElementById('namea');
let ab = document.getElementById('ageb');
let nb = document.getElementById('nameb');

let alertone = document.getElementById('onealert');
let buttonone = document.getElementById('oneBtn');

buttonone.addEventListener('click', () => {
    numaa = Number(aa.value);
    namna = na.value;
    numab = Number(ab.value);
    namnb = nb.value;

    let text = '';

    if (numaa > numab) {
        text = `<div class="alert alert-primary">
        <strong>${namna} tiene ${numaa} años y es mayor </strong>
        </div>`;
    } else {
        text = `<div class="alert alert-primary">
        <strong>${namnb} tiene ${numab} años y es mayor </strong>
        </div>`;
    }

    alertone.innerHTML = text;
});

// Tarea 02

let pay = document.getElementById('payTxt');
let buttontwo = document.getElementById('twoBtn');
let alerttwo = document.getElementById('twoalert');

buttontwo.addEventListener('click', () => {

    let text = '';
    let numPay = Number(pay.value);

    if (numPay >= 1000) {
        newNumPay = numPay - (numPay * .20);
        text = `<div class="alert alert-success">
        <strong>Descuento Aprovado: Total ${newNumPay}</strong>
    </div>`;
    } else {
        text = `<div class="alert alert-primary">
        <strong>Total: ${numPay}</strong>
    </div>`
    }

    alerttwo.innerHTML = text;

});

// Tare 03

let produ = document.getElementById('product');
let price = document.getElementById('price');
let clave = document.getElementById('coupon');

let buttonthree = document.getElementById('threeBtn');
let alertthree = document.getElementById('alertthree');

buttonthree.addEventListener('click', () => {

    let text = '';
    let priceNum = Number(price.value);

    if (clave.value == '01') {

        newPrice = priceNum - (priceNum * .10);

        text = `<div class="alert alert-success">
        <strong>Descuento Aprovado: <br>
        Producto: ${produ.value} <br>
        Precio Original: ${priceNum} <br>
        Descuento: 10% <br>
        Total ${newPrice}</strong>
        </div>`;

    } else if (clave.value == '02') {

        newPrice = priceNum - (priceNum * .20);

        text = `<div class="alert alert-success">
        <strong>Descuento Aprovado: <br>
        Producto: ${produ.value} <br>
        Precio Original: ${priceNum} <br>
        Descuento: 20% <br>
        Total ${newPrice}</strong>
        </div>`;
    }

    alertthree.innerHTML = text;
    
});