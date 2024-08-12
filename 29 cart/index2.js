let v = 0; // Quantity of items
let pic = 500; // Price per item
let pk = document.getElementById('price'); // Total price element
let k = document.getElementById('n'); // Quantity display element
let kt = 0; // Cart count
let ck = document.getElementById('cart'); // Cart count display element

function p() {
    v++;
    k.innerHTML = v;
    pk.innerHTML = pic * v;
    kt++;
    ck.innerHTML = kt;
}

function m() {
    if (v > 0) {
        v--;
        k.innerHTML = v;
        pk.innerHTML = pic * v;
        kt--;
        ck.innerHTML = kt;
    }
    if (v <= 0) {
        v = 0;
    }
    if (kt <= 0) {
        kt = 0;
    }
}
