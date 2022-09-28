dataLayer.push({
    "useCase": {
        "id": "UCS031",
        "trackType": "PV",
        "name": "8- Transaction confirmation",
        "step": "View the transaction confirmation page"
    },
    "event": "PV",
    "page": {
        "gaStep": "ga_step=checkout-order-confirmation-website",
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
    "transaction": {
        "websiteVsChat": "<Display 'website' or 'chat' depending where the transaction occurs. From chat URL or through a regular website process.>",
        "revenue": "<Total transaction amount. (including tax, shipping and fees)>",
        "originalPrice": "<Original transaction amount.>",
        "discount": "<Total transaction discount if applies.>"
    },
    "ecommerce": {
        "currencyCode": "<Local currency of the transaction.>",
        "purchase": {
            "actionField": {
                "id": "<Order ID>",
                "affiliation": "Brother",
                "revenue": "<Total transaction amount. (EXCLUDING tax, shipping and fees)>",
                "tax": "<Tax amount>",
                "shipping": "<Shipping amount>",
                "coupon": null
            },
            "products": [
                {
                    "name": "<Product name>",
                    "id": "<Product SKU>",
                    "price": "<Final product price.>",
                    "brand": "<Product brand. Use <Category> + '-' + <subcategory>. Refer this link for values. https://www.screencast.com/t/O5AiJVWMJJ>",
                    "category": "<Product category displayed on the menu, separated by '/'>",
                    "quantity": "<Product quantity >",
                    "coupon": "<Coupon code used. Leave empty if not applicable>"
                },
                {
                    "name": "<Product name>",
                    "id": "<Product SKU>",
                    "price": "<Final product price.>",
                    "brand": "<Product brand. Use <Category> + '-' + <subcategory>. Refer this link for values. https://www.screencast.com/t/O5AiJVWMJJ>",
                    "category": "<Product category displayed on the menu, separated by '/'>",
                    "quantity": "<Product quantity >"
                }
            ]
        }
    }
});