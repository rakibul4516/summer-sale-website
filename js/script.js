//Get product price
function getProductPrice(productId){
    const getPrice = document.getElementById(productId);
    const productPriceString = getPrice.innerText;
    const Price = parseFloat(productPriceString);
    return Price;
}
//Get Product name
function getProductName(productNameId){
    const getName = document.getElementById(productNameId);
    const nameValue = getName.innerText;
    return nameValue;
}
//Set total product price
function setProductPrice(productTotalId,totalPrice){
    const productTotal = document.getElementById(productTotalId);
    productTotal.innerText = totalPrice;
}
// Function for set name in payment section
function setProductName(productNameValue){
    const parentDiv = document.getElementById('name-field');
    const createNameField = document.createElement('h3');
    parentDiv.appendChild(createNameField);
    createNameField.style.fontSize = '20px';
    createNameField.style.fontWeight = '500';
    const count = parentDiv.childElementCount;
    createNameField.innerText = `${count} . ${productNameValue}`;
}
// Function for remove attribute form button
function removeAttibute(){
    const totalAmount = getProductPrice('total-price');
    if(totalAmount > 0){
        document.getElementById('btn-payment').removeAttribute('disabled');
    }
    if(totalAmount >= 200){
        document.getElementById('btn-coupon').removeAttribute('disabled');
    }
}
// Product 1 
document.getElementById('product-container1').addEventListener('click',function(){
    const productPrice = getProductPrice('product-price1');
    const productName = getProductName('product-name1');
    const previousTotal = getProductPrice('total-price');
    const priceTotal = previousTotal + productPrice;
    setProductPrice('total-price',priceTotal.toFixed(2));
    setProductName(productName);
    removeAttibute();
})
//Product 2
document.getElementById('product-container2').addEventListener('click',function(){
    const productPrice = getProductPrice('product-price2');
    const productName = getProductName('product-name2');
    const previousTotal = getProductPrice('total-price');
    const priceTotal = previousTotal + productPrice;
    setProductPrice('total-price',priceTotal.toFixed(2));
    setProductName(productName);
    removeAttibute();
})
//Product 3
document.getElementById('product-container3').addEventListener('click',function(){
    const productPrice = getProductPrice('product-price3');
    const productName = getProductName('product-name3');
    const previousTotal = getProductPrice('total-price');
    const priceTotal = previousTotal + productPrice;
    setProductPrice('total-price',priceTotal.toFixed(2));
    setProductName(productName);
    removeAttibute();
})
//Product 4
document.getElementById('product-container4').addEventListener('click',function(){
    const productPrice = getProductPrice('product-price4');
    const productName = getProductName('product-name4');
    const previousTotal = getProductPrice('total-price');
    const priceTotal = previousTotal + productPrice;
    setProductPrice('total-price',priceTotal.toFixed(2));
    setProductName(productName);
    removeAttibute();
})
//Product 5
document.getElementById('product-container5').addEventListener('click',function(){
    const productPrice = getProductPrice('product-price5');
    const productName = getProductName('product-name5');
    const previousTotal = getProductPrice('total-price');
    const priceTotal = previousTotal + productPrice;
    setProductPrice('total-price',priceTotal.toFixed(2));
    setProductName(productName);
    removeAttibute();
})
//Product 6
document.getElementById('product-container6').addEventListener('click',function(){
    const productPrice = getProductPrice('product-price6');
    const productName = getProductName('product-name6');
    const previousTotal = getProductPrice('total-price');
    const priceTotal = previousTotal + productPrice;
    setProductPrice('total-price',priceTotal.toFixed(2));
    setProductName(productName);
    removeAttibute();
})
//Product 7
document.getElementById('product-container7').addEventListener('click',function(){
    const productPrice = getProductPrice('product-price7');
    const productName = getProductName('product-name7');
    const previousTotal = getProductPrice('total-price');
    const priceTotal = previousTotal + productPrice;
    setProductPrice('total-price',priceTotal.toFixed(2));
    setProductName(productName);
    removeAttibute();
})
//Product 8
document.getElementById('product-container8').addEventListener('click',function(){
    const productPrice = getProductPrice('product-price8');
    const productName = getProductName('product-name8');
    const previousTotal = getProductPrice('total-price');
    const priceTotal = previousTotal + productPrice;
    setProductPrice('total-price',priceTotal.toFixed(2));
    setProductName(productName);
    removeAttibute();
})
//Product 9
document.getElementById('product-container9').addEventListener('click',function(){
    const productPrice = getProductPrice('product-price9');
    const productName = getProductName('product-name9');
    const previousTotal = getProductPrice('total-price');
    const priceTotal = previousTotal + productPrice;
    setProductPrice('total-price',priceTotal.toFixed(2));
    setProductName(productName);
    removeAttibute();
})


//Add promo code system
document.getElementById('btn-coupon').addEventListener('click',function(){
    const totalPrice = getProductPrice('total-price');
    const getCouponValue = document.getElementById('coupon-field');
    const couponValue = getCouponValue.value;
    getCouponValue.value ='';
    if (couponValue === 'SELL200'){
        const discountPrice = totalPrice * 20 / 100;
        const totalPriceWithoutDiscount = totalPrice - discountPrice;
        setProductPrice('discount-price',discountPrice.toFixed(2));
        setProductPrice('total',totalPriceWithoutDiscount.toFixed(2)); 
    } else{
        alert('Invalid coupon code!')
    }
})

//Model event listener
document.getElementById('btn-model').addEventListener('click',function(){
    window.location.href = 'index.html';
})