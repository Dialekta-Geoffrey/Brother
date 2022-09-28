dataLayer.push({
    "useCase": {
        "id": "UCS014",
        "trackType": "Non PV",
        "name": "5- Category pages",
        "step": "Click on a product in the list"
    },
    "event": "productClick",
    "eventCategory": "productClick",
    "eventAction": "<This variable has different configurations on each UCS. Refer to notes for details.>",
    "eventLabel": "<This variable has different configurations on each UCS. Refer to notes for details.>",
    "ecommerce": {
        "currencyCode": "<Local currency of the transaction.>",
        "click": {
            "actionField": {
                "list": "<Product list. Use: 'Products list', 'Guided search', 'Keyword search', 'Related products - Product page', 'Relates products - Add to cart page', 'Related products - Cart page' where the product was located.>"
            },
            "products": [
                {
                    "name": "<Product name>",
                    "id": "<Product SKU>",
                    "price": "<Product price displayed (the lowest one if is on sale)>",
                    "brand": "<Product brand. Use <Category> + '-' + <subcategory>. Refer this link for values. https://www.screencast.com/t/O5AiJVWMJJ>",
                    "category": "<Product category displayed on the menu, separated by '/'>",
                    "position": "<Position of the product in the page>"
                }
            ]
        }
    }
});