const filterByPrice = (products, prices) => {
    const [bottomPrice, topPrice] = prices;
    const productsFiltered = products.filter((product) => {
        return product.precio >= bottomPrice && product.precio<=topPrice
    });
    return productsFiltered;
};

const orderByName = (products, order) => {
    //console.log(products);
    const productsOrdered = products.toSorted((a,b) => {
        return a.nombre.localeCompare(b.nombre);
    })
    if(order === "des"){
        return productsOrdered.toReversed();
    }
    return productsOrdered;
}



export {
    filterByPrice,
    orderByName
}
