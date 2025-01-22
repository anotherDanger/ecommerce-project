async function getProduct()
{
    const request = new Request('../dummy/products.json', {
        method: "GET"
    });
    const response = await fetch(request);
    const data = await response.json();
    const products = data;
    console.log(products.product1);
    const productContainer = document.getElementById('product-container');
    
};

export {getProduct};