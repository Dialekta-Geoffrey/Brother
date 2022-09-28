dataLayer.push({
    "useCase": {
        "id": "UCS030",
        "trackType": "Non PV",
        "name": "7- Checkout steps",
        "step": "Checkout - upsell / product promotion"
    },
    "event": "addToCart",
    "eventCategory": "Upsell selection",
    "eventAction": "<This variable has different configurations on each UCS. Refer to notes for details.>",
    "eventLabel": "<This variable has different configurations on each UCS. Refer to notes for details.>",
    "ecommerce": {
        "currencyCode": "<Local currency of the transaction.>",
        "add": {
            "products": [
                {
                    "name": "<Product name>",
                    "id": "<Product SKU>",
                    "price": "<Product price displayed (the lowest one if is on sale)>",
                    "brand": "<Product brand. Use <Category> + '-' + <subcategory>. Refer this link for values. https://www.screencast.com/t/O5AiJVWMJJ>",
                    "category": "<Product category displayed on the menu, separated by '/'>",
                    "quantity": "<Quantity added to cart>"
                }
            ]
        }
    }
});