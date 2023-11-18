function createProduct(){
    var name = document.getElementById("product-name").value;
    var price = document.getElementById("product-price").value;
    var weight = document.getElementById("product-weight").value;

    var productRequest = {
        name: name,
        price: parseFloat(price),
        weight: parseFloat(weight)
    };

    fetch('http://localhost:8080/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productRequest)
    })
        .then(response => {
            if (!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error)
        });
}