var data={
    
        "product": {
            "id": 6937548554342,
            "title": "Embrace Sideboard",
            "description": "<p data-mce-fragment=\"1\">The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.</p>",
            "vendor": "Marmeto",
            "product_type": "Cloth",
            "price": "$12999",
            "compare_at_price": "$19999",
            "options": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        {
                            "Yellow": "#ECDECC"
                        },
                        {
                            "Green": "#BBD278"
                        },
                        {
                            "Blue": "#BBC1F8"
                        },
                        {
                            "Pink": "#FFD3F8"
                        }
                    ]
                },
                {
                    "name": "Size",
                    "position": 2,
                    "values": [
                        "Small",
                        "Medium",
                        "Large",
                        "Extra large",
                        "XXL"
                    ]
                }
            ],
            "images": [
                {
                    "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-6Y2XstWtDvM-unsplash.jpg?v=1701946731"
                },
                {
                    "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-HVlOLCHlzJs-unsplash.jpg?v=1701946732"
                },
                {
                    "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-om8qxMDlGfI-unsplash.jpg?v=1701946732"
                },
                {
                    "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-WQgvRkmqRrg-unsplash.jpg?v=1701946731"
                }
            ]
        }
    
}
var vendorName = data.product.vendor;
document.getElementById('vendorName').innerText =  vendorName;
var productTitle = data.product.title;
document.getElementById('productTitle').innerText =  productTitle;
var compareAtPrice = parseInt(data.product.compare_at_price.replace('$', '').replace(',', ''));
var discountPercentage = 35;
var discountedPrice = compareAtPrice - (compareAtPrice * (discountPercentage / 100));
 var formattedDiscountedPrice = '$' + discountedPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
document.getElementById('discountedPrice').innerText =  formattedDiscountedPrice ;

var compare_at_price = data.product.compare_at_price;
document.getElementById('compare_at_price').innerText =  compare_at_price;
function selectColor(color) {
    // Reset check marks for all colors
    resetCheckMarks();

    // Toggle the check mark for the selected color
    var checkMark = document.getElementById('checkMark' + color);
    checkMark.style.display = (checkMark.style.display === 'none' || checkMark.style.display === '') ? 'block' : 'none';
}

// Function to reset check marks for all colors
function resetCheckMarks() {
    var colorSquares = document.querySelectorAll('.colorSquare');
    colorSquares.forEach(function (square) {
        var checkMark = square.querySelector('.checkMark');
        if (checkMark) {
            checkMark.style.display = 'none';
        }
    });
}
function selectSize(size) {
    console.log('Selected Size:', size);
}
var quantity = 1;

// Function to handle size selection


// Function to increment quantity
function incrementQuantity() {
    quantity++;
    updateQuantity();
}

// Function to decrement quantity
function decrementQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
}

// Function to update quantity display
function updateQuantity() {
    document.getElementById('quantity').innerText = quantity;
}

// Function to handle add to cart
function addToCart() {
    var selectedSize = document.querySelector('input[name="size"]:checked');
    if (selectedSize) {
        console.log('Adding to cart - Size:', selectedSize.value, 'Quantity:', quantity);
    } else {
        console.log('Please select a size.');
    }
}
function addToCart() {
    var selectedSize = document.querySelector('input[name="size"]:checked');
    if (selectedSize) {
        // Display added product details and message
        var addedProductContainer = document.getElementById('addedProductContainer');
        addedProductContainer.innerHTML = `
            
            <p></p>${data.product.title}
                
       with Size  ${selectedSize.value}
           and Quantity  ${quantity}
            </p>
        `;
        addedProductContainer.style.display = 'block';
    } else {
        console.log('Please select a size.');
    }
}
var descriptionContainer = document.getElementById('descriptionContainer');
        descriptionContainer.innerHTML = data.product.description;
        var mainImage = document.getElementById('mainImage');
        mainImage.src = data.product.images[0].src;

        // Display thumbnail images
        var thumbnailContainer = document.getElementById('thumbnailContainer');
        data.product.images.forEach(function(image, index) {
            var thumbnailImage = document.createElement('img');
            thumbnailImage.src = image.src;
            thumbnailImage.alt = 'Thumbnail Image ' + (index + 1);
            thumbnailImage.className = 'thumbnailImage';
            thumbnailImage.onclick = function() {
                mainImage.src = image.src;
            };
            thumbnailContainer.appendChild(thumbnailImage);
        });
        

