dataLayer.push({
    "useCase": {
        "id": "UCS017",
        "trackType": "PV",
        "name": "6- Products actions",
        "step": "View of a product detail page"
    },
    "event": "PV",
    "page": {
        "gaStep": "ga_step=product-detail-page",
        "requestURI": "<Path of the page.>",
        "language": "<Page language. 'fr' or 'en'>",
        "province": "<Selected province: 'QC', 'AB', 'BC', 'MB', 'NB', or 'NL'>",
        "contentPage": "<The content of the page. e.g.: Our People, HL-3140CW>",
        "contentCategory": "<Category of the content. e.g.: Sample Products, About, My Account>",
        "contentSubcategoryLevel1": "<The page subcategory Level1. e.g.:Printers, Support Centers, The Brother Group, Our People>",
        "contentSubcategoryLevel2": "<The page subcategory Level2. e.g.:Laser Fax, Brother Global>"
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
                "list": "<Product list. Use: 'Products list', 'Guided search', 'Keyword search', 'Related products - Product page', 'Relates products - Add to cart page', 'Related products - Cart page' where the product was located.>"
            }
        ],
        "detail": {
            "products": [
                {
                    "name": "<Product name>",
                    "id": "<Product SKU>",
                    "price": "<Product price displayed (the lowest one if is on sale)>",
                    "brand": "<Product brand. Use <Category> + '-' + <subcategory>. Refer this link for values. https://www.screencast.com/t/O5AiJVWMJJ>",
                    "category": "<Product category displayed on the menu, separated by '/'>"
                }
            ]
        }
    }
});