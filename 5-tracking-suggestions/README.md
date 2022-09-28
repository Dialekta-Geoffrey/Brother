**Created on: February 19, 2021**


# Brother - System Integration Specification - SIS

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
This is an extension for the main SIS document based on the new tracking suggestion plan provided by `echidnainc`.
For more information about use cases used in this instructions please refer to the main SIS document.


## Document Revision History

Revision Number | Date| Revision Description | Author
------------ | ------------- | ------------ | ---------
1 | February 19, 2021| Last version | Ehsan Seyedian

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



# Index

**1. [Click from mega menu - Product](#markdown-header-1-click-from-mega-menu-product)**

**2. [Click from mega menu from Support and Service](#markdown-header-2-click-from-mega-menu-from-support-and-service)**

**3. [Measuring clicks on Catfish](#markdown-header-3-measuring-clicks-on-catfish)**

**4. [Measuring clicks on shop Supplies and Accessories from my account](#markdown-header-4-measuring-clicks-on-shop-supplies-and-accessories-from-my-account)**

**5. [Measuring clicks on shop Supplies and Accessories from PLP](#markdown-header-5-measuring-clicks-on-shop-supplies-and-accessories-from-plp)**

**6. [Measuring brother care pop up view](#markdown-header-6-measuring-brother-care-pop-up-view)**

**7. [Measuring clicks on No Thanks or Close button from brother care pop up](#markdown-header-7-measuring-clicks-on-no-thanks-or-close-button-from-brother-care-pop-up)**

**8. [Measuring homepage carousel click](#markdown-header-8-measuring-homepage-carousel-click)**

**9. [Measuring Brother Care clicks from promos from various pages](#markdown-header-9-measuring-brother-care-clicks-from-promos-from-various-pages)**

**10. [Measuring promotion impression](#markdown-header-10-measuring-promotion-impression)**

**11. [Measuring promotion click](#markdown-header-11-measuring-promotion-click)**

**12. [Product category optimization](#markdown-header-12-product-category-optimization)**

**13. [User status tracking](#markdown-header-13-user-status-tracking)**
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 1. Click from mega menu - Product

This use case happens when the user clicks on bordered links. 
Please find UCS069 in detail [here](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs069-customer-brother-new-website-2017-23-call-to-action-cta-buttons-or-links-non-pv).

![1.png](/5-tracking-suggestions/images/1.png)

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "<use: Top Page>",
    "eventLabel": "<Link label>"
});
```

Example
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "Top Page",
    "eventLabel": "Suplies & Accessories Finder"
});
```
> Please DO NOT COPY sample values

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)

## 2. Click from mega menu from Support and Service

This use case happens when the user clicks on bordered links. 
Please find UCS069 in detail [here](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs069-customer-brother-new-website-2017-23-call-to-action-cta-buttons-or-links-non-pv).

![2.png](/5-tracking-suggestions/images/2.png)

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "<use: Top Page>",
    "eventLabel": "<Link label>"
});
```

Example
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "Top Page",
    "eventLabel": "Return an Order"
});
```
> Please DO NOT COPY sample values

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)



## 3. Measuring clicks on Catfish

This use case happens when the user clicks on Catfish. 
Please find UCS069 in detail [here](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs069-customer-brother-new-website-2017-23-call-to-action-cta-buttons-or-links-non-pv).

![3.png](/5-tracking-suggestions/images/3.png)

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "<use: Pop up and catfish>",
    "eventLabel": "<use: Catfish click>"
});
```

Example
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "Pop up and catfish",
    "eventLabel": "Catfish click"
});
```
> Please DO NOT COPY sample values

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)

## 4. Measuring clicks on shop Supplies and Accessories from my account

This use case happens when the user clicks on shop Supplies and Accessories from `My account`.
Please find UCS069 in detail [here](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs069-customer-brother-new-website-2017-23-call-to-action-cta-buttons-or-links-non-pv).

![4.png](/5-tracking-suggestions/images/4.png)

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "<use: Account page>",
    "eventLabel": "<Link label>"
});
```

Example
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "Account page",
    "eventLabel": "Shop Supplies & Accessories"
});
```
> Please DO NOT COPY sample values

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)

## 5. Measuring clicks on shop Supplies and Accessories from PLP

This use case happens when the user clicks on shop Supplies and Accessories links from `product list pages`.
Please find UCS069 in detail [here](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs069-customer-brother-new-website-2017-23-call-to-action-cta-buttons-or-links-non-pv).

![5.png](/5-tracking-suggestions/images/5.png)

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "<use: Product list pages>",
    "eventLabel": "<Link label>"
});
```

Example
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "Product list pages",
    "eventLabel": "Colour Laser Digital Printers"
});
```
> Please DO NOT COPY sample values

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)



## 6. Measuring brother care pop up view
This use case happens when the user views brother care pop up.
Please find the UCS076 in detail [here](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs075-24-after-store-flow-6-login-pop-up-pv).

![6.png](/5-tracking-suggestions/images/6.png)

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS076",
        "trackType": "PV",
        "name": "24 - After store flow",
        "step": "7 - Pop up Brother Care Free"
    },
    "event": "VPV",
    "page": {
        "gaStep": "<Use:ga_step=before_store_flow_pop_up_bc1 or ga_step=ga_step=before_store_flow_pop_up_in_cart_offer>",
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
    }
});
```

Example
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS076",
        "trackType": "PV",
        "name": "24 - After store flow",
        "step": "7 - Pop up Brother Care Free"
    },
    "event": "VPV",
    "page": {
        "gaStep": "ga_step=before_store_flow_pop_up_bc1", //when the pop up displays before store
        "requestURI": "current/page/path/",
        "language": "fr",
        "province": "QC",
        "contentPage": "Before store",
        "contentCategory": "Bother Care Program pop up"
    },
    "user": {
        "userType": "BROTHERCARE1",
        "userHasAccount": "yes",
        "ageBracket": "28",
        "userID": "1321456"
    }
});
```
> Please DO NOT COPY sample values

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)



## 7. Measuring clicks on No Thanks or Close button from brother care pop up

This use case happens when the user clicks on `No thanks` or `close` button from the brother care pop up.
Please find UCS069 in detail [here](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs069-customer-brother-new-website-2017-23-call-to-action-cta-buttons-or-links-non-pv).

![7.png](/5-tracking-suggestions/images/7.png)

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "<use: Pop up and catfish>",
    "eventLabel": "<use : BC - No thanks>"
});
```

Example
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "Pop up and catfish",
    "eventLabel": "BC - No thanks"
});
```
> Please DO NOT COPY sample values

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)

## 8. Measuring homepage carousel click
This function will be invoked when a user clicks on any `Carousel` CTA on the homepage.(there are two carousels on the homepage)

![8.png](/5-tracking-suggestions/images/8.png)

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "<use: Carousel>",
    "eventLabel": "<use : page top or page middle>"
});
```

Example
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "Carousel",
    "eventLabel": "page top"
});
```

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)


## 9. Measuring Brother Care clicks from promos from various pages
This use case happens when a user clicks on `Learn More` button from Brother care promos.

![9.png](/5-tracking-suggestions/images/9.png)

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "<use: Brother care promos>",
    "eventLabel": "<page path>"
});
```

Example
```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS069",
        "trackType": "Non PV",
        "name": "23 - Call to Action - CTA",
        "step": "Buttons or Links"
    },
    "event": "userAction",
    "eventCategory": "CTA",
    "eventAction": "Brother care promos",
    "eventLabel": "/en/order-support"
});
```

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)

## 10. Measuring promotion impression
Please call the following function to measure a promotion impression. 

> **Note:**
> If the page contains other enhanced eCommerce such as product impression or detail page ,... please put them all together in one dataLayer push.
>

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "<use: Please keep the default use case id>",
        "trackType": "PV",
        "name": "<please keep the use case name as it is>",
        "step": "View of a promotion list"
    },
    "event": "PV",
    "page": {
        "gaStep": "<please keep the pageStep as it is>",
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
    'ecommerce': {
        'promoView': {
            'promotions': [                   .
            {
                'id': '<promotion ID>',   
                'name': 'promotion name',
                'creative': 'name of creative',
                'position': 'promotion position'
            }...]
        }
    }
});
```


Example

```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS001",
        "trackType": "PV",
        "name": "1- Generic pages",
        "step": "View of any page of www.brother.ca"
    },
    "event": "PV",
    "page": {
        "gaStep": "",
        "requestURI": "/en/tax-season",
        "language": "en",
        "province": "QC",
        "contentPage": "Deals",
        "contentCategory": "Category",
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
        "promoView": {
            "promotions": [                   .
            {
                "id": "JUNE_PROMO13",   
                "name": "June Sale",
                "creative": "banner1",
                "position": "slot1"
            }...]
        }
    }
});
```

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)

## 11. Measuring promotion click
The use case happens when a user clicks on a promotion banner.

Base code
```javascript
dataLayer.push({
    "useCase": {
        "id": "<Please keep the Use case id as it is>",
        "trackType": "PV",
        "name": "<please keep the use case name as it is>",
        "step": "<please keep the step as it is>"
    },
    "event": "PV",
    "page": {
        "gaStep": "<please keep the pageStep as it is>",
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
    'ecommerce': {
        'promoClick': {
            'promotions': [                   .
            {
                'id': '<promotion ID>',   
                'name': 'promotion name',
                'creative': 'name of creative',
                'position': 'promotion position'
            }...]
        }
    }
});
```


Example

```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS001",
        "trackType": "PV",
        "name": "1- Generic pages",
        "step": "View of any page of www.brother.ca"
    },
    "event": "PV",
    "page": {
        "gaStep": "",
        "requestURI": "/en/tax-season",
        "language": "en",
        "province": "QC",
        "contentPage": "Deals",
        "contentCategory": "Category",
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
        "promoClick": {
            "promotions": [                   .
            {
                "id": "JUNE_PROMO13",   
                "name": "June Sale",
                "creative": "banner1",
                "position": "slot1"
            }...]
        }
    }
});
```

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)



## 12. Product category optimization
The purpose of this part is to optimize product category to have a better insight into which categories are the best sellers. This midification should be applied to all Enhanced eCommerce such as Impression, product click, product detail, add to cart, checkout flows and purchase. The only required change is to add the following categories intot the product category. Please keep in mind we are allowed to put up to 5 category by using "/" as a delimiter. 

> **Important Note:**
> If the product has already a category, please add the appropriate new categories to it
>


#### Category Definitions


Index|Main category|Sub category Level 1|Sub category Level 2
-|---------------------------|--------------------------|------------------------------------------------------------
1|Printers|Laser|Black and white laser printer,	Colour laser printer, Multifunction laser
*|Printers|Inkjet|Inkjet Multifunction, Inkvestment tank
2|Labeling|Label Makers, Standalone, Computer Connected, Industrial label Makers, Label printer, Mobile Connected|
3|Sewing|Embroidery, Quilting, Sergers & Coverstitch, Multi-Needle, Software, Cutting Machines
4|Fax|Laser fax
5|Scanner|Desktop scanner, Portable scanner
6|Supplies and Accessories|Ink, Toner, Sewing, Labels, Other Accessories



Example

```javascript
dataLayer.push({
    "useCase": {
        "id": "UCS013",
        "trackType": "PV",
        "name": "5- Category pages",
        "step": "View of a category page (PLP)"
    },
    "event": "PV",
    "page": {
        "gaStep": "ga_step=category-page-overview",
        "requestURI": "/en-CA/Products/Printer",
        "language": "fr",
        "province": "QC",
        "contentPage": "Our People",
        "contentCategory": "Sample Products",
        "contentSubcategoryLevel1": "Printers",
        "contentSubcategoryLevel2": "Laser Fax"
    },
    "user": {
        "userType": "BROTHERCARE1",
        "userHasAccount": "yes",
        "ageBracket": "28",
        "userID": "a71dfs7f565"
    },
    "ecommerce": {
        "currencyCode": "CAD",
        "impressions": [
            {
                "name": "Brother HL-3140CW Digital Colour Printer",
                "id": "HL3140CW",
                "price": "319.79",
                "brand": "MACHINES - COLOR LASER FMC",
                "category": "463/Printers/Laser/Colour laser printer",  // ****************
                "list": "Search results",
                "position": "2"
            }
        ]
    }
});
```


** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)



## 13. User status tracking
We are going to track user login status as a custom dimention. In order to do it, we have to add a new field into the `user` object. The `userStatus` field should be added to any `user` object. Therefore after this implemetation, the `user` object will be as follows:

```javascript
dataLayer.push({
    ...
    "user": {
        "userType": "<User type based current subscription: 'BROTHERCARE1', 'BROTHERCARE2'...>",
        "userHasAccount": "<Use: 'yes' or 'no'.>",
        "ageBracket": "<User calcultaed age according to birth date. '35'>",
        "userID": "<User account ID.>",
        "userStatus: "<Use: 'Guest" or 'Logged-in'>"
    }
    ...
});
```

Example:
```javascript
dataLayer.push({
    ...
    "user": {
        "userType": "BROTHERCARE1",
        "userHasAccount": "yes",
        "ageBracket": "28",
        "userID": "a71dfs7f565",
        "useStatus": "Logged-in"
    }
    ...
});
```

** [Back to index ▲](#markdown-header-index)**

![redLine.png](/5-tracking-suggestions/images/redLine.png)

