let allProduts = [
    {
        id:'1',
        productImg: '/allProductsImg/1.png',
        productTitle: 'Fastive Beaded Peari Nacklace',
        productPrice: '350',
    },
    {
        id:'2',
        productImg: '/allProductsImg/2.png',
        productTitle: 'Women Good Quality Har',
        productPrice: '400',
    },
    {
        id:'3',
        productImg: '/allProductsImg/3.png',
        productTitle: 'Fastive Beauty Necklace',
        productPrice: '450',
    },
    {
        id:'4',
        productImg: '/allProductsImg/4.png',
        productTitle: 'Girl Parti Stands Nacklace',
        productPrice: '350',
    },
    {
        id:'5',
        productImg: '/allProductsImg/5.png',
        productTitle: 'Beauty Flower Necklace with Tops',
        productPrice: '500',
    },
    {
        id:'6',
        productImg: '/allProductsImg/6.png',
        productTitle: 'Goden Part famale Nacklace',
        productPrice: '350',
    },
    {
        id:'7',
        productImg: '/allProductsImg/7.png',
        productTitle: 'Husband Like of Nacklace',
        productPrice: '550',
    },
    {
        id:'8',
        productImg: '/allProductsImg/8.png',
        productTitle: 'Beauty Girls Peari Nacklace',
        productPrice: '350',
    },
    {
        id:'9',
        productImg: '/allProductsImg/9.png',
        productTitle: 'Beauty Girls Peari Nacklace',
        productPrice: '350',
    },
    {
        id:'10',
        productImg: '/allProductsImg/10.png',
        productTitle: 'Beauty Girls Peari Nacklace',
        productPrice: '350',
    },
    {
        id:'11',
        productImg: '/allProductsImg/11.png',
        productTitle: 'Beauty Girls Peari Nacklace',
        productPrice: '350',
    },
    {
        id:'12',
        productImg: '/allProductsImg/12.jpg.png',
        productTitle: 'Beauty Girls Peari Nacklace',
        productPrice: '350',
    },
    {
        id:'13',
        productImg: '/allProductsImg/13.jpg.png',
        productTitle: 'Beauty Girls Peari Nacklace',
        productPrice: '350',
    },
    {
        id:'14',
        productImg: '/allProductsImg/14.jpg.png',
        productTitle: 'Beauty Girls Peari Nacklace',
        productPrice: '350',
    },
]


let allProdutsItem = document.querySelector('.products');
let allProductHtml = '';

allProduts.forEach(items =>{
   allProductHtml += `
   <div class="products-items">
           <div class="itemPdt itmPdtScd">
               <a href="/Home/productsDiscriptionPage.html" class="jhg"> <img class="itemPdt-img" src="${items.productImg}" alt=""></a>
               <div class="products-text">
                   <a href="/Home/productsDiscriptionPage.html" class="pro-title">${items.productTitle}</a>
                   <a class="pricelink" href="/Home/productsDiscriptionPage.html"><span id="Price">Rs. ${items.productPrice}</span></a>
               </div>
           </div>
   </div>`
});


allProdutsItem.innerHTML = allProductHtml;