let productIndex = document.querySelector('.products');

let indexProduts = [
    {
        productImg: '/Necklaces/1.png',
        productTitle: 'Fastive Beaded Peari Nacklace',
        productPrice: '350',
    },
    {
        productImg: '/Necklaces/2.png',
        productTitle: 'Women Good Quality Har',
        productPrice: '400',
    },
    {
        productImg: '/Necklaces/3.png',
        productTitle: 'Fastive Beauty Necklace',
        productPrice: '450',
    },
    {
        productImg: '/Necklaces/4.png',
        productTitle: 'Girl Parti Stands Nacklace',
        productPrice: '350',
    },
    {
        productImg: '/Necklaces/5.png',
        productTitle: 'Beauty Flower Necklace with Tops',
        productPrice: '500',
    },
    {
        productImg: '/Necklaces/6.png',
        productTitle: 'Goden Part famale Nacklace',
        productPrice: '350',
    },
    {
        productImg: '/Necklaces/7.png',
        productTitle: 'Husband Like of Nacklace',
        productPrice: '550',
    },
    {
        productImg: '/Necklaces/8.png',
        productTitle: 'Beauty Girls Peari Nacklace',
        productPrice: '350',
    },
]

let productInnerHtml = '';

indexProduts.forEach(items =>{
    productInnerHtml += ` 
    <div class="products-items">
        <div class="itemPdt itmPdtScd">
            <a href="/Home/productsDiscriptionPage.html" class="jhg"> <img class="itemPdt-img" src="${items.productImg}" alt=""></a>
            <div class="products-text">
              <a href="/Home/productsDiscriptionPage.html" class="pro-title">${items.productTitle}</a>
              <a class="pricelink" href="/Home/productsDiscriptionPage.html"><span id="Price">Rs. ${items.productPrice}</span></a>
            </div>
        </div>
    </div>`
})

productIndex.innerHTML = productInnerHtml;