//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDicount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resulP = document.getElementById("ResultP");
    resulP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

function onClickButtonPriceDiscount1() {

    const coupons = [
        {
            name: "Batman",
            discount: 15,
        },
        {
            name: "Superman",
            discount: 30,
        },
        {
            name: "Spiderman",
            discount: 25,
        },
    ];

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón "+ couponValue + " no es válido");
    }else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultM = document.getElementById("ResultP");
        resultM.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
  }