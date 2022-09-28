dataLayer.push({
    "useCase": {
        "id": "UCS024",
        "trackType": "Non PV",
        "name": "7- Checkout steps",
        "step": "Click to remove a product on the cart page"
    },
    "event": "removeFromCart",
    "eventCategory": "Eommerce action",
    "eventAction": "<This variable has different configurations on each UCS. Refer to notes for details.>",
    "eventLabel": null,
    "ecommerce": {
        "currencyCode": "<Local currency of the transaction.>",
        "remove": {
            "products": [
                {
                    "name": "<Product name>",
                    "id": "<Product SKU>",
                    "price": "<Product price displayed (the lowest one if is on sale)>",
                    "brand": "<Product brand. Use <Category> + '-' + <subcategory>. Refer this link for values. https://www.screencast.com/t/O5AiJVWMJJ>",
                    "category": "<Product category displayed on the menu, separated by '/'>",
                    "quantity": "<Quantity removed from cart>"
                }
            ]
        }
    }
});