const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menu_button = document.querySelector('.menu_hamburger');
const menu_close = document.querySelector('.menu_close');
const basket = document.querySelector('.basket');
const nav_basket_items = document.querySelector('.nav_basket_items');
const basket_item_num = document.querySelector('.basket_item_num');

const carusel_hero = document.querySelectorAll('.carusel_hero');
const head_visibility = document.querySelector('.head_visibility');
const thumbnail_img = document.querySelectorAll('.thumbnail_img');
const visibility = document.querySelector('.visibility');
const carusel_close = document.querySelector('.carusel_close');

const order_icon_minus = document.querySelector('.order_icon_minus');
const order_count_value = document.querySelector('.order_count_value');
const order_icon_plus = document.querySelector('.order_icon_plus');

const basket_in_product = document.querySelector('.basket-in-product');
const productNone = document.querySelector('.productNone');
const order_add_basket = document.querySelector('.order_add_basket');
const basket_products = document.querySelector('.basket_products');
const basket_product = document.querySelector('.basket_product');
const big_Text = document.querySelector('.big_Text');
const price = document.querySelector('.price');

let addCart = [];
// ! Menu button functions
thumbnail_img.forEach(thumb => {
    thumb.addEventListener('click', () => {
        thumbnail_img.forEach(rem => {
            rem.classList.remove('thumb_active');
        });
        carusel_hero.forEach(carusel_hero => {
            carusel_hero.src = thumb.src;
            thumb.classList.add('thumb_active');
        });
    });
});

menu_button.addEventListener('click', () => {
    hamburger.style.display = 'block';
    setTimeout(() => {
        menu.style.left = '0';
    }, 100);
});

menu_close.addEventListener('click', () => {
    hamburger.style.display = 'none';
    menu.style.left = '-100%';
});

basket.addEventListener('click', () => {
    nav_basket_items.classList.toggle('nav_basket_items_active');
    if (addCart.length > 0) {
        productNone.style.display = 'none';
        basket_in_product.style.justifyContent = 'space-between';
        basket_products.style.display = 'flex';
        nav_basket_items.style.height = "auto";

        addCart.map(item => {
            basket_product.innerHTML = `
                <div class="product_cart">
                    <img src="${item.image}" alt="image">
                    <div class="product_cart_info">
                        <h2>${item.heading}</h2>
                        <h3>
                            <span>
                            $
                            <span class="product_price">${item.productPrice}</span>
                            </span>
                            x <span class="product_count">${item.orderCount}</span>
                            <span>
                            $
                            <span class="multiply_price">${item.multiply}</span>
                            </span>
                        </h3>
                    </div>
                    <img src="./images/icon-delete.svg" alt="delete">
                </div>
            `
        })
    } else {
        basket_in_product.style.alignItems = 'center';
        basket_in_product.style.justifyContent = 'center';
    }

});
// ! the end

// ! carousel items functions 

carusel_hero.forEach(carusel_hero => {
    carusel_hero.addEventListener('click', () => {
        visibility.style.display = 'flex';
        thumb.classList.add('thumb_active');
    });
});

carusel_close.addEventListener('click', () => {
    visibility.style.display = 'none';
});

// ! The end

// ! order_count_value
let order_count = 1;
order_icon_minus.addEventListener('click', () => {
    if (order_count >= 2) {
        order_count_value.textContent = parseInt(order_count_value.textContent) - 1;
    }
    order_count = parseInt(order_count_value.textContent);
    console.log(order_count);
});

order_icon_plus.addEventListener('click', () => {
    if (order_count < 100) {
        order_count_value.textContent = parseInt(order_count_value.textContent) + 1;
    }
    order_count = parseInt(order_count_value.textContent);
    console.log(order_count);
});
// ! the end

// ! order add cart functions
let basket_element = 0;
order_add_basket.addEventListener('click', () => {
    basket_element++;
    addCart.push({ image: '../images/image-product-1-thumbnail.jpg', basketLength: basket_element, heading: big_Text.textContent, productPrice: 125.00, orderCount: order_count, multiply: 125.00 * order_count });
    console.log(addCart);
    console.log(addCart.length);

    if (addCart.length > 0) {
        basket_item_num.style.display = 'flex';
        basket_item_num.innerHTML = addCart.length;


        // addCart.map((item, id) => {
        //     for (let i = 0; i < basket_element; i++) {


        //     }
        // })

        // const productCart = document.createElement('div');
        // console.log(productCart);
        // document.body.insertBefore(productCart, basket_product);
        // basket_product = `
        //         <div class="product_cart" id="${id}">
        //             <img src="${item.image}" alt="image">
        //             <div class="product_cart_info">
        //                 <h2>${item.heading}</h2>
        //                 <h3>
        //                     <span>
        //                     $
        //                     <span class="product_price">${item.productPrice}</span>
        //                     </span>
        //                     x <span class="product_count">${item.orderCount}</span>
        //                     <span>
        //                     $
        //                     <span class="multiply_price">${item.multiply}</span>
        //                     </span>
        //                 </h3>
        //             </div>
        //             <img src="./images/icon-delete.svg" alt="delete">
        //         </div>
        //     `

    }
});
