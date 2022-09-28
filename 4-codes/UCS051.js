dataLayer.push({
    "useCase": {
        "id": "UCS051",
        "trackType": "PV",
        "name": "19- Chat actions",
        "step": "View the page to enter payment information on the page sent by the chat"
    },
    "event": "PV",
    "page": {
        "gaStep": "ga_step=checkout-payment-information-chat",
        "requestURI": "<Path of the page.>",
        "language": "<Page language. 'fr' or 'en'>",
        "province": "<Selected province: 'QC', 'AB', 'BC', 'MB', 'NB', or 'NL'>",
        "contentPage": null,
        "contentCategory": null,
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
        "checkout": {
            "actionField": {
                "step": "4"
            },
            "products": [
                {
                    "name": "<Product name>",
                    "id": "<Product SKU>",
                    "price": "<Product price displayed (the lowest one if is on sale)>",
                    "brand": null,
                    "category": null,
                    "quantity": "<Product quantity >"
                }
            ]
        }
    }
});