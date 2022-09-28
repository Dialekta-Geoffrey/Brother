dataLayer.push({
    "useCase": {
        "id": "UCS083",
        "trackType": "PV",
        "name": "26 - Mobile Solutions",
        "step": "Solutions - Subcategory Page"
    },
    "event": "PV",
    "page": {
        "gaStep": "ga_step=mobile_solutions_solutions_[subcategory name]",
        "requestURI": "<Path of the page.>",
        "language": "<Page language. 'fr' or 'en'>",
        "province": "<Selected province: 'QC', 'AB', 'BC', 'MB', 'NB', or 'NL'>",
        "contentPage": "<The content of the page. e.g.: Our People, HL-3140CW>",
        "contentCategory": "<Category of the content. e.g.: Sample Products, About, My Account>"
    },
    "user": {
        "userType": "<User type based current subscription: 'BROTHERCARE1', 'BROTHERCARE2'...>",
        "userHasAccount": "<Use: 'yes' or 'no'.>",
        "ageBracket": "<User calcultaed age according to birth date. '35'>",
        "userID": "<User account ID.>"
    },
    "ecommerce": {
        "currencyCode": "<Local currency of the transaction.>",
        "impressions": [
            {
                "name": "<Product name>",
                "id": "<Product SKU>",
                "price": "<Product price displayed (the lowest one if is on sale)>",
                "brand": "<Product brand. Use <Category> + '-' + <subcategory>. Refer this link for values. https://www.screencast.com/t/O5AiJVWMJJ>",
                "category": "<Product category displayed on the menu, separated by '/'>",
                "list": "<Product list. Use: 'Products list', 'Guided search', 'Keyword search', 'Related products - Product page', 'Relates products - Add to cart page', 'Related products - Cart page' where the product was located.>",
                "position": "<Position of the product in the page>"
            }
        ]
    }
});