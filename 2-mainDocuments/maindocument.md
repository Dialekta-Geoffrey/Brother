**Created on: 6 June 2017**

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

![advisoLogo.png](/1-images/advisoLogo.png)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# Brother - Google Analytics- System Integration Specification (SIS)

This tagging clarifications implementation guide (System Integration Specification) is for **BROTHER** that are part of our mandate on web tracking for Google Analytics 360.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


# 1 Project Overview

The goal of this project is to update the analytics implementation on BROTHER's digital assets. The current document provides a complete overview of the tagging requirements for the web project.

# 2. Document Overview

**1. [Project Overview](/2-mainDocuments/maindocument.md?at=master&fileviewer=file-view-default#markdown-header-1-project-overview)**

**2. [Document Overview](/2-mainDocuments/maindocument.md?at=master&fileviewer=file-view-default#markdown-header-2-document-overview)**

**3. [Integration instructions](/2-mainDocuments/maindocument.md?at=master&fileviewer=file-view-default#markdown-header-3-integration-instructions)**

* **3.1     [Use Cases Steps - Implementation](/2-mainDocuments/maindocument.md?at=master&fileviewer=file-view-default#markdown-header-31-use-cases-steps-implementation)**

* **3.2 [VlookUp](/2-mainDocuments/maindocument.md?at=master&fileviewer=file-view-default#markdown-header-32-vlookup)**

**4     [General validation instructions](/2-mainDocuments/maindocument.md?at=master&fileviewer=file-view-default#markdown-header-4-general-validation-instructions)**


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# 3 Integration instructions

## Core Implementation

#### Code

The Google Tag Manager Container snippet is a small piece of JavaScript and non-JavaScript code that once placed into all pages, enables Tag Manager to fire tags.
To implement Google Tag Manager, copy the code snippets provided below (as is) and paste them into all pages of the website or templates as described below.


![UCS000.png](/1-images/UCS000.png)

#### Instructions & Specifications

Paste this code as high in the **<head>** of the page as possible on every page of the site including subdomains, microsites and error pages.

````html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KHPTK9W');</script>
<!-- End Google Tag Manager -->

<!-- dataLayer Initialization -->
<script>
	window.dataLayer = window.dataLayer || [];
</script>
<!-- dataLayer Initialization -->


````

Additionally, paste this code immediately after the opening **<body>** tag on every page of the site including subdomains, microsites and error pages.

````html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KHPTK9W"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
````


# 3.1 Use Cases Steps - Implementation

This section describes the most important Use Cases Steps on the web site. 

>> ## Specific Implementation
>> ### Customer / BROTHER - New website 2017
>> * **1- Generic pages**
>>     * [UCS001 - View of any page of www.brother.ca | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs001-customer-brother-new-website-2017-1-generic-pages-view-of-any-page-of-wwwbrotherca-pv)

>> * **2- Opt-ins management - Subscription**
>>     * [UCS002 - Validation of a newsletter subscription | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs002-customer-brother-new-website-2017-2-opt-ins-management-subscription-validation-of-a-newsletter-subscription-non-pv)
>>     * [UCS003 - Validation of a Brother Care level 1 subscription | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs003-customer-brother-new-website-2017-2-opt-ins-management-subscription-validation-of-a-brother-care-level-1-subscription-non-pv)
>>     * [UCS004 - Validation of a Brother Care level 2 subscription | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs004-customer-brother-new-website-2017-2-opt-ins-management-subscription-validation-of-a-brother-care-level-2-subscription-non-pv)
>>     * [UCS005 - Validation of a Brother Care level 3 subscription | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs005-customer-brother-new-website-2017-2-opt-ins-management-subscription-validation-of-a-brother-care-level-3-subscription-non-pv)

>> * **3- Opt-ins management - Unsubscription**
>>     * [UCS006 - Validation of a newsletter unsubscription | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs006-customer-brother-new-website-2017-3-opt-ins-management-unsubscription-validation-of-a-newsletter-unsubscription-non-pv)
>>     * [UCS007 - Validation of a Brother Care level 1 unsubscription | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs007-customer-brother-new-website-2017-3-opt-ins-management-unsubscription-validation-of-a-brother-care-level-1-unsubscription-non-pv)
>>     * [UCS008 - Validation of a Brother Care level 2 unsubscription | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs008-customer-brother-new-website-2017-3-opt-ins-management-unsubscription-validation-of-a-brother-care-level-2-unsubscription-non-pv)
>>     * [UCS009 - Validation of a Brother Care level 3 unsubscription | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs009-customer-brother-new-website-2017-3-opt-ins-management-unsubscription-validation-of-a-brother-care-level-3-unsubscription-non-pv)

>> * **4- Account creation / Login**
>>     * [UCS010 - View of the account creation form | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs010-customer-brother-new-website-2017-4-account-creation-login-view-of-the-account-creation-form-non-pv)
>>     * [UCS011 - Confirmation of an account creation | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs011-customer-brother-new-website-2017-4-account-creation-login-confirmation-of-an-account-creation-non-pv)
>>     * [UCS012 - Successful login | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs012-customer-brother-new-website-2017-4-account-creation-login-successful-login-non-pv)

>> * **5- Category pages**
>>     * [UCS013 - View of a category page (PLP) | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs013-customer-brother-new-website-2017-5-category-pages-view-of-a-category-page-plp-pv)
>>     * [UCS014 - Click on a product in the list | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs014-customer-brother-new-website-2017-5-category-pages-click-on-a-product-in-the-list-non-pv)
>>     * [UCS015 - Selection of a specific filter | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs015-customer-brother-new-website-2017-5-category-pages-selection-of-a-specific-filter-non-pv)

>> * **6- Products actions**
>>     * [UCS016 - Click to add a product to the cart on a product page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs016-customer-brother-new-website-2017-6-products-actions-click-to-add-a-product-to-the-cart-on-a-product-page-pv)
>>     * [UCS017 - View of a product detail page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs017-customer-brother-new-website-2017-6-products-actions-view-of-a-product-detail-page-pv)
>>     * [UCS018 - Submission of the out of stock reminder form | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs018-customer-brother-new-website-2017-6-products-actions-submission-of-the-out-of-stock-reminder-form-non-pv)
>>     * [UCS019 - Submission of a review for a product | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs019-customer-brother-new-website-2017-6-products-actions-submission-of-a-review-for-a-product-pv)
>>     * [UCS055 - Click to display the options availables : product overview | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs055-customer-brother-new-website-2017-6-products-actions-click-to-display-the-options-availables-product-overview-pv)
>>     * [UCS056 - Click to display the options availables : specifications | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases1.md?at=master&fileviewer=file-view-default#markdown-header-ucs056-customer-brother-new-website-2017-6-products-actions-click-to-display-the-options-availables-specifications-pv)
>>     * [UCS020 - Click to display the options availables : supplies & accessories | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs020-customer-brother-new-website-2017-6-products-actions-click-to-display-the-options-availables-supplies-accessories-pv)
>>     * [UCS057 - Click to display the options availables : reviews | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs057-customer-brother-new-website-2017-6-products-actions-click-to-display-the-options-availables-reviews-pv)
>>     * [UCS058 - Click to display the options availables : support & download | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs058-customer-brother-new-website-2017-6-products-actions-click-to-display-the-options-availables-support-download-pv)
>>     * [UCS059 - Click to display the options availables : warranty | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs059-customer-brother-new-website-2017-6-products-actions-click-to-display-the-options-availables-warranty-pv)
>>     * [UCS021 - Click to go to the support external site on the support section of a product page | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs021-customer-brother-new-website-2017-6-products-actions-click-to-go-to-the-support-external-site-on-the-support-section-of-a-product-page-non-pv)

>> * **7- Checkout steps**
>>     * [UCS022 - View of the cart page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs022-customer-brother-new-website-2017-7-checkout-steps-view-of-the-cart-page-pv)
>>     * [UCS023 - Click to add a product on the cart page | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs023-customer-brother-new-website-2017-7-checkout-steps-click-to-add-a-product-on-the-cart-page-non-pv)
>>     * [UCS024 - Click to remove a product on the cart page | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs024-customer-brother-new-website-2017-7-checkout-steps-click-to-remove-a-product-on-the-cart-page-non-pv)
>>     * [UCS025 - View the 'shipping information' step | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs025-customer-brother-new-website-2017-7-checkout-steps-view-the-shipping-information-step-pv)
>>     * [UCS026 - View the 'shipping method' step | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs026-customer-brother-new-website-2017-7-checkout-steps-view-the-shipping-method-step-pv)
>>     * [UCS027 - View the 'payment information' step | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs027-customer-brother-new-website-2017-7-checkout-steps-view-the-payment-information-step-pv)
>>     * [UCS028 - View the 'review and place order' step | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs028-customer-brother-new-website-2017-7-checkout-steps-view-the-review-and-place-order-step-pv)
>>     * [UCS029 - View the warning popup | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs029-customer-brother-new-website-2017-7-checkout-steps-view-the-warning-popup-pv)
>>     * [UCS030 - Checkout - upsell / product promotion | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs030-customer-brother-new-website-2017-7-checkout-steps-checkout-upsell-product-promotion-non-pv)

>> * **8- Transaction confirmation**
>>     * [UCS031 - View the transaction confirmation page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs031-customer-brother-new-website-2017-8-transaction-confirmation-view-the-transaction-confirmation-page-pv)

>> * **9- Internal search - Guided tool**
>>     * [UCS032 - View the 'what kind of product...' first page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs032-customer-brother-new-website-2017-9-internal-search-guided-tool-view-the-what-kind-of-product-first-page-pv)
>>     * [UCS033 - View the second page after selecting the first option | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs033-customer-brother-new-website-2017-9-internal-search-guided-tool-view-the-second-page-after-selecting-the-first-option-pv)
>>     * [UCS034 - View the search results page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs034-customer-brother-new-website-2017-9-internal-search-guided-tool-view-the-search-results-page-pv)
>>     * [UCS035 - Click to specify another guided option in the search results page | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs035-customer-brother-new-website-2017-9-internal-search-guided-tool-click-to-specify-another-guided-option-in-the-search-results-page-non-pv)

>> * **10- Internal search - Support tool**
>>     * [UCS036 - Submission of the support search form | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs036-customer-brother-new-website-2017-10-internal-search-support-tool-submission-of-the-support-search-form-non-pv)

>> * **11- Internal search - Accessories tool**
>>     * [UCS037 - Submission of the accessories search form | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases2.md?at=master&fileviewer=file-view-default#markdown-header-ucs037-customer-brother-new-website-2017-11-internal-search-accessories-tool-submission-of-the-accessories-search-form-non-pv)

>> * **12- Product registration**
>>     * [UCS038 - Submission of the product registration form | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs038-customer-brother-new-website-2017-12-product-registration-submission-of-the-product-registration-form-non-pv)

>> * **13- Wishlist**
>>     * [UCS039 - Click to add a product to the wishlist | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs039-customer-brother-new-website-2017-13-wishlist-click-to-add-a-product-to-the-wishlist-non-pv)

>> * **14- Product comparison**
>>     * [UCS040 - View of the comparision page after selecting the products to be compared | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs040-customer-brother-new-website-2017-14-product-comparison-view-of-the-comparision-page-after-selecting-the-products-to-be-compared-pv)

>> * **15- Brother for Business**
>>     * [UCS041 - View of the Brother for Business form | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs041-customer-brother-new-website-2017-15-brother-for-business-view-of-the-brother-for-business-form-pv)
>>     * [UCS042 - Submission of the Brother for Business form | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs042-customer-brother-new-website-2017-15-brother-for-business-submission-of-the-brother-for-business-form-pv)

>> * **16- Become a dealer**
>>     * [UCS043 - View of the Become a dealer form | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs043-customer-brother-new-website-2017-16-become-a-dealer-view-of-the-become-a-dealer-form-pv)
>>     * [UCS044 - Submission of the Become a dealer form | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs044-customer-brother-new-website-2017-16-become-a-dealer-submission-of-the-become-a-dealer-form-non-pv)

>> * **17- Order tracking**
>>     * [UCS045 - View of the page to check the order tracking | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs045-customer-brother-new-website-2017-17-order-tracking-view-of-the-page-to-check-the-order-tracking-pv)

>> * **18- Store locator**
>>     * [UCS046 - View of the store locator page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs046-customer-brother-new-website-2017-18-store-locator-view-of-the-store-locator-page-pv)
>>     * [UCS047 - Click to search for a store locator | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs047-customer-brother-new-website-2017-18-store-locator-click-to-search-for-a-store-locator-non-pv)

>> * **19- Chat actions**
>>     * [UCS048 - Start of a chat discussion | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs048-customer-brother-new-website-2017-19-chat-actions-start-of-a-chat-discussion-non-pv)
>>     * [UCS049 - End of a chat discussion | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs049-customer-brother-new-website-2017-19-chat-actions-end-of-a-chat-discussion-non-pv)
>>     * [UCS050 - View the unavailable chat page | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs050-customer-brother-new-website-2017-19-chat-actions-view-the-unavailable-chat-page-non-pv)
>>     * [UCS051 - View the page to enter payment information on the page sent by the chat | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs051-customer-brother-new-website-2017-19-chat-actions-view-the-page-to-enter-payment-information-on-the-page-sent-by-the-chat-pv)
>>     * [UCS052 - View the confirmation page from the chat | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs052-customer-brother-new-website-2017-19-chat-actions-view-the-confirmation-page-from-the-chat-pv)

>> * **20- Careers**
>>     * [UCS053 - Click to go the the job workday section | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs053-customer-brother-new-website-2017-20-careers-click-to-go-the-the-job-workday-section-non-pv)
>>     * [UCS054 - View of a page on workday section | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs054-customer-brother-new-website-2017-20-careers-view-of-a-page-on-workday-section-pv)

>> * **21- Internal Banners**
>>     * [UCS060 - View | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs060-customer-brother-new-website-2017-21-internal-banners-view-pv)
>>     * [UCS061 - Click | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs061-customer-brother-new-website-2017-21-internal-banners-click-non-pv)

>> * **22- Newsletter**
>>     * [UCS068 - Pop-up view | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs068-customer-brother-new-website-2017-22-newsletter-pop-up-view-pv)
>>     * [UCS062 - Click - Footer Subscribe | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases3.md?at=master&fileviewer=file-view-default#markdown-header-ucs062-customer-brother-new-website-2017-22-newsletter-click-footer-subscribe-pv)
>>     * [UCS063 - Click - Footer Link | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs063-customer-brother-new-website-2017-22-newsletter-click-footer-link-pv)
>>     * [UCS064 - Click - Pop-up Subscribe | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs064-customer-brother-new-website-2017-22-newsletter-click-pop-up-subscribe-pv)
>>     * [UCS065 - Click - Pop-up Cancel | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs065-customer-brother-new-website-2017-22-newsletter-click-pop-up-cancel-pv)
>>     * [UCS066 - Form Page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs066-customer-brother-new-website-2017-22-newsletter-form-page-pv)
>>     * [UCS067 - Thank you page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs067-customer-brother-new-website-2017-22-newsletter-thank-you-page-pv)

>> * **23 - Call to Action - CTA**
>>     * [UCS069 - Buttons or Links | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs069-customer-brother-new-website-2017-23-call-to-action-cta-buttons-or-links-non-pv)

>> * **24 - After store flow**
>>     * [UCS070 - 1 - Login page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs070-24-after-store-flow-1-login-page-pv)
>>     * [UCS071 - 2 - My products | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs071-24-after-store-flow-2-my-products-pv)
>>     * [UCS072 - 3 - User info | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs072-24-after-store-flow-3-user-info-pv)
>>     * [UCS073 - 4 - Product info | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs073-24-after-store-flow-4-product-info-pv)
>>     * [UCS074 - 5 - Brother Care Program | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs074-24-after-store-flow-5-brother-care-program-pv)
>>     * [UCS075 - 6 - Login pop up | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs075-24-after-store-flow-6-login-pop-up-pv)
>>     * [UCS076 - 7 - Pop up Brother Care Free | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs076-24-after-store-flow-7-pop-up-brother-care-free-pv)
>>     * [UCS077 - 8 - Thank you page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs077-24-after-store-flow-8-thank-you-page-pv)

>> * **25 - Green Environment Flow**
>>     * [UCS078 - 1 - Page loads | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs078-25-green-environment-flow-1-page-loads-pv)
>>     * [UCS079 - 2 - Form sent | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs079-25-green-environment-flow-2-form-sent-pv)
>>     * [UCS080 - 3 - Download label | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs080-25-green-environment-flow-3-download-label-pv)

>> * **26 - Mobile Solutions**
>>     * [UCS081 - Mobile Printers Page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs081-26-mobile-solutions-mobile-printers-page-pv)
>>     * [UCS082 - Solutions Page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs082-26-mobile-solutions-solutions-page-pv)
>>     * [UCS083 - Solutions - Subcategory Page | PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases4.md?at=master&fileviewer=file-view-default#markdown-header-ucs083-26-mobile-solutions-solutions-subcategory-page-pv)

>> * **27 - Error Tracking**
>>     * [UCS084 - User error | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases5.md?at=master&fileviewer=file-view-default#markdown-header-ucs084-27-error-tracking-user-error-non-pv)
>>     * [UCS085 - Site error | Non PV](https://bitbucket.org/adviso/brother-sis-main-sitecustomer-brother-new-website-2017/src/master/3-implementation/usecases5.md?at=master&fileviewer=file-view-default#markdown-header-ucs085-27-error-tracking-site-error-non-pv)


**  ➝➝ [Back to top ▲](#header)**
![grayLine.png](/1-images/grayLine.png)

# 3.2 VlookUp

This VlookUp table helps to give a quick view for the whole implementation variables across the Use Cases.  **Please note**, some UCS, even if the data is not available, the variable is set to empty. This, in order to give persistency for the objects usability.

![vlookup.png](/1-images/vlookup.png)

# 4. General validation instructions

**Steps:**

1) Open the console of the web browser by pressing F12 (for Internet Explorer) or Control-Shift-J for Chrome

2) Refresh the page to trigger the ``pageLoad`` event or perform a specific action to trigger the ``userAction`` event

3) Type: `dataLayer` on the console

Check if the dataLayer object has all the correct information.

**EXPECTED RESULT**

1) ``pageLoad`` event or ``userAction`` fires correctly

2) dataLayer object conforms to the specification object structure and types of data elements

3) Correct data is added to dataLayer object


![qa_image_GTM.png](/1-images/qa_image_GTM.png)


**  ➝➝ [Back to top ▲](#header)**

----------------------------------------------------
| **END OF DOCUMENT**
|:-----:
|
