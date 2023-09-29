---
sidebar_position: 1
---

# Magento 2

Name: __`kin.cloud/module/m2`__

Version: __`v1.0`__

Module implementation for Magento 2

## Connections

### API Key

Method: __`api_key`__

#### Fields

* __`host`__: _Host_

  Type: _string_

  Description: Host

* __`access_token`__: _Access token_

  Type: _string_

  Description: Access token

* __`x-kincloud-shared-secret`__: _Shared Secret_

  Type: _string_

  Description: User-defined secret to validate webhook from M2. Use as "x-kincloud-shared-secret" header

## Actions

### Update customer group

Source: __`kin.cloud/module/m2/m2.(*Customer).UpdateCustomerGroup`__

Update customer group

#### Authentication methods

* __`api_key`__

#### Inputs

* __`customer_id`__: _Customer ID_

  Type: _int_

  Description: Customer ID

  Default value: `0`

* __`group_id`__: _Group ID_

  Type: _int_

  Description: Group ID

  Default value: `0`

#### Outputs

### Cancel order

Source: __`kin.cloud/module/m2/m2.(*Order).CancelOrder`__

Cancel order

#### Authentication methods

* __`api_key`__

#### Inputs

* __`order_id`__: _Order ID_

  Type: _int_

  Description: Order ID

  Default value: `0`

#### Outputs

### Export orders

Source: __`kin.cloud/module/m2/m2.(*Order).ExportOrders`__

Export orders

#### Authentication methods

* __`api_key`__

#### Inputs

* __`key`__: _Key_

  Type: _string_

  Description: Key

  Default value: `""`

* __`filters`__: _Filters_

  Type: _[]m2.OrderFilterParam_

  Description: 

  Default value: `null`

* __`output_format`__: _Output format_

  Type: _string_

  Description: csv, json or leave blank

  Default value: `""`

* __`sample_size`__: _Sample size_

  Type: _int_

  Description: Set to <=0 to export all

  Default value: `0`

#### Outputs

* __`url`__: _URL_

  Type: _string_

  Description: URL

### Get order

Source: __`kin.cloud/module/m2/m2.(*Order).GetOrder`__

Get order information

#### Authentication methods

* __`api_key`__

#### Inputs

* __`order_id`__: _Order ID_

  Type: _int_

  Description: Order ID

  Default value: `0`

#### Outputs

* __`order`__: _Order information_

  Type: _interface {}_

  Description: Order information

### List oder invoices

Source: __`kin.cloud/module/m2/m2.(*Order).ListOderInvoices`__

List oder invoices

#### Authentication methods

* __`api_key`__

#### Inputs

* __`order_id`__: _Order ID_

  Type: _string_

  Description: Order ID

  Default value: `""`

#### Outputs

* __`invoices`__: _List order invoices_

  Type: _[]m2.Invoice_

  Description: List order invoices

  Sample value: `[
    {
      "base_currency_code": "string",
      "base_discount_amount": 0,
      "base_grand_total": 0,
      "base_discount_tax_compensation_amount": 0,
      "base_shipping_amount": 0,
      "base_shipping_discount_tax_compensation_amnt": 0,
      "base_shipping_incl_tax": 0,
      "base_shipping_tax_amount": 0,
      "base_subtotal": 0,
      "base_subtotal_incl_tax": 0,
      "base_tax_amount": 0,
      "base_to_global_rate": 0,
      "base_to_order_rate": 0,
      "billing_address_id": 0,
      "created_at": "string",
      "discount_amount": 0,
      "entity_id": 0,
      "global_currency_code": "string",
      "grand_total": 0,
      "discount_tax_compensation_amount": 0,
      "increment_id": "string",
      "order_currency_code": "string",
      "order_id": 0,
      "shipping_address_id": 0,
      "shipping_amount": 0,
      "shipping_discount_tax_compensation_amount": 0,
      "shipping_incl_tax": 0,
      "shipping_tax_amount": 0,
      "state": 0,
      "store_currency_code": "string",
      "store_id": 0,
      "store_to_base_rate": 0,
      "store_to_order_rate": 0,
      "subtotal": 0,
      "subtotal_incl_tax": 0,
      "tax_amount": 0,
      "total_qty": 0,
      "transaction_id": "string",
      "updated_at": "string",
      "items": null,
      "comments": null
    }
  ]`

### List orders

Source: __`kin.cloud/module/m2/m2.(*Order).ListOrders`__

List orders

#### Authentication methods

* __`api_key`__

#### Inputs

* __`filters`__: _Filters_

  Type: _[]m2.OrderFilterParam_

  Description: [\n\t{\n\t\t"field": "field_name",\n\t\t"value": "field_value",\n\t\t"condition_type": "" // one of: eq, neq, like, nlike, is, in, nin, notnull, null, moreq, gt, lt, gteq, lteq, finset, from, to\n\t}\n]

  Default value: `null`

* __`sorts`__: _Sorts_

  Type: _[]m2.OrderSortParam_

  Description: [\n\t{\n\t\t"field": "field_name",\n\t\t"direction": "" // one of: asc, desc\n\t}\n]

  Default value: `null`

* __`page`__: _page_

  Type: _int_

  Description: Page

  Default value: `0`

* __`limit`__: _Limit_

  Type: _int_

  Description: Limit

  Default value: `0`

#### Outputs

* __`result`__: _Orders list_

  Type: _interface {}_

  Description: Orders list

### Refund order

Source: __`kin.cloud/module/m2/m2.(*Order).RefundOrder`__

Refund order

#### Authentication methods

* __`api_key`__

#### Inputs

* __`store_code`__: _Store code_

  Type: _string_

  Description: Store code

  Default value: `""`

* __`order_id`__: _Order ID_

  Type: _string_

  Description: Order ID

  Default value: `""`

#### Outputs

### Submit order invoice

Source: __`kin.cloud/module/m2/m2.(*Order).SubmitOrderInvoice`__

Submit order invoice

#### Authentication methods

* __`api_key`__

#### Inputs

* __`order_id`__: _Order ID_

  Type: _int_

  Description: Order ID

  Default value: `0`

#### Outputs

### Submit order shipment

Source: __`kin.cloud/module/m2/m2.(*Order).SubmitOrderShipment`__

Submit order shipment

#### Authentication methods

* __`api_key`__

#### Inputs

* __`order_id`__: _Order ID_

  Type: _int_

  Description: Order ID

  Default value: `0`

#### Outputs

### Update order status

Source: __`kin.cloud/module/m2/m2.(*Order).UpdateOrderStatus`__

Update order status

#### Authentication methods

* __`api_key`__

#### Inputs

* __`order_id`__: _Order ID_

  Type: _int_

  Description: Order ID

  Default value: `0`

* __`status`__: _Status_

  Type: _string_

  Description: Status

  Default value: `""`

* __`comment`__: _Comment_

  Type: _string_

  Description: Comment

  Default value: `""`

#### Outputs

### Add product to category

Source: __`kin.cloud/module/m2/m2.(*Product).AddProductToCategory`__

Add product to category

#### Authentication methods

* __`api_key`__

#### Inputs

* __`product_id`__: _Product ID_

  Type: _int_

  Description: Product ID

  Default value: `0`

* __`category_id`__: _Category ID_

  Type: _int_

  Description: Category ID

  Default value: `0`

#### Outputs

### Add product to many categories

Source: __`kin.cloud/module/m2/m2.(*Product).AddProductToManyCategories`__

Add product to many categories

#### Authentication methods

* __`api_key`__

#### Inputs

* __`product_id`__: _Product ID_

  Type: _int_

  Description: Product ID

  Default value: `0`

* __`category_id`__: _Category IDs_

  Type: _[]int_

  Description: Category IDs

  Default value: `null`

#### Outputs

### Adjust product stock

Source: __`kin.cloud/module/m2/m2.(*Product).AdjustProductStock`__

Adjust product stock

#### Authentication methods

* __`api_key`__

#### Inputs

* __`sku`__: _Sku_

  Type: _string_

  Description: Product SKU

  Default value: `""`

* __`quantity`__: _Quantity_

  Type: _int64_

  Description: Stock quantity

  Default value: `0`

#### Outputs

### Get product

Source: __`kin.cloud/module/m2/m2.(*Product).GetProduct`__

Get product by ID

#### Authentication methods

* __`api_key`__

#### Inputs

* __`product_id`__: _Product ID_

  Type: _int_

  Description: Product ID

  Default value: `0`

#### Outputs

* __`product`__: _Product_

  Type: _interface {}_

  Description: Product

  Sample value: `{
    "attribute_set_id": 16,
    "created_at": "2022-08-09 10:38:05",
    "custom_attributes": [
      {
        "attribute_code": "image",
        "value": "/w/b/wb05-red-0.jpg"
      },
      {
        "attribute_code": "small_image",
        "value": "/w/b/wb05-red-0.jpg"
      },
      {
        "attribute_code": "special_price",
        "value": "24.000000"
      },
      {
        "attribute_code": "thumbnail",
        "value": "/w/b/wb05-red-0.jpg"
      },
      {
        "attribute_code": "special_from_date",
        "value": "2022-08-09 00:00:00"
      },
      {
        "attribute_code": "options_container",
        "value": "container2"
      },
      {
        "attribute_code": "url_key",
        "value": "savvy-shoulder-tote"
      },
      {
        "attribute_code": "gift_message_available",
        "value": "0"
      },
      {
        "attribute_code": "msrp_display_actual_price_type",
        "value": "0"
      },
      {
        "attribute_code": "required_options",
        "value": "0"
      },
      {
        "attribute_code": "has_options",
        "value": "0"
      },
      {
        "attribute_code": "image_label",
        "value": "Image"
      },
      {
        "attribute_code": "small_image_label",
        "value": "Image"
      },
      {
        "attribute_code": "thumbnail_label",
        "value": "Image"
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "category_ids",
        "value": [
          "3",
          "4",
          "7"
        ]
      },
      {
        "attribute_code": "description",
        "value": "\u003cp\u003ePowerwalking to the gym or strolling to the local coffeehouse, the Savvy Shoulder Tote lets you stash your essentials in sporty style! A top-loading compartment provides quick and easy access to larger items, while zippered pockets on the front and side hold cash, credit cards and phone.\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eWater-resistant shell.\u003c/li\u003e\n\u003cli\u003eWater bottle pocket.\u003c/li\u003e\n\u003cli\u003ePadded, articulating shoulder strap.\u003c/li\u003e\n\u003cli\u003eDimensions: W 21\" x H 15\" x D 10\".\u003c/li\u003e\n\u003c/ul\u003e"
      },
      {
        "attribute_code": "is_returnable",
        "value": "2"
      },
      {
        "attribute_code": "activity",
        "value": "20,17"
      },
      {
        "attribute_code": "style_bags",
        "value": "38,39"
      },
      {
        "attribute_code": "color",
        "value": "58"
      },
      {
        "attribute_code": "strap_bags",
        "value": "70,71,75,76"
      },
      {
        "attribute_code": "features_bags",
        "value": "81,84"
      },
      {
        "attribute_code": "eco_collection",
        "value": "0"
      },
      {
        "attribute_code": "performance_fabric",
        "value": "0"
      },
      {
        "attribute_code": "erin_recommends",
        "value": "1"
      },
      {
        "attribute_code": "new",
        "value": "0"
      },
      {
        "attribute_code": "sale",
        "value": "1"
      }
    ],
    "extension_attributes": {
      "category_links": [
        {
          "category_id": "3",
          "position": 0
        },
        {
          "category_id": "4",
          "position": 0
        },
        {
          "category_id": "7",
          "position": 0
        }
      ],
      "website_ids": [
        1
      ]
    },
    "id": 10,
    "media_gallery_entries": [
      {
        "disabled": false,
        "file": "/w/b/wb05-red-0.jpg",
        "id": 13,
        "label": "Image",
        "media_type": "image",
        "position": 1,
        "types": [
          "image",
          "small_image",
          "thumbnail"
        ]
      }
    ],
    "name": "Savvy Shoulder Tote",
    "options": [],
    "price": 32,
    "product_links": [
      {
        "link_type": "crosssell",
        "linked_product_sku": "24-WG088",
        "linked_product_type": "simple",
        "position": 2,
        "sku": "24-WB05"
      },
      {
        "link_type": "crosssell",
        "linked_product_sku": "24-WG082-pink",
        "linked_product_type": "simple",
        "position": 3,
        "sku": "24-WB05"
      },
      {
        "link_type": "crosssell",
        "linked_product_sku": "24-WG085",
        "linked_product_type": "simple",
        "position": 1,
        "sku": "24-WB05"
      },
      {
        "link_type": "crosssell",
        "linked_product_sku": "24-WG087",
        "linked_product_type": "simple",
        "position": 4,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB01",
        "linked_product_type": "simple",
        "position": 1,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB03",
        "linked_product_type": "simple",
        "position": 3,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB05",
        "linked_product_type": "simple",
        "position": 4,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB06",
        "linked_product_type": "simple",
        "position": 5,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB02",
        "linked_product_type": "simple",
        "position": 2,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-UB02",
        "linked_product_type": "simple",
        "position": 6,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-WB06",
        "linked_product_type": "simple",
        "position": 9,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-WB03",
        "linked_product_type": "simple",
        "position": 7,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-WB07",
        "linked_product_type": "simple",
        "position": 10,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-WB04",
        "linked_product_type": "simple",
        "position": 8,
        "sku": "24-WB05"
      }
    ],
    "sku": "24-WB05",
    "status": 1,
    "tier_prices": [],
    "type_id": "simple",
    "updated_at": "2022-09-09 06:41:53",
    "visibility": 4
  }`

### Get product by SKU

Source: __`kin.cloud/module/m2/m2.(*Product).GetProductBySKU`__

Get product by SKU

#### Authentication methods

* __`api_key`__

#### Inputs

* __`sku`__: _Product SKU_

  Type: _string_

  Description: Product SKU

  Default value: `""`

* __`store_id`__: _Store ID_

  Type: _int_

  Description: Store ID

  Default value: `0`

#### Outputs

* __`product`__: _Product_

  Type: _interface {}_

  Description: Product

  Sample value: `{
    "attribute_set_id": 16,
    "created_at": "2022-08-09 10:38:05",
    "custom_attributes": [
      {
        "attribute_code": "image",
        "value": "/w/b/wb05-red-0.jpg"
      },
      {
        "attribute_code": "small_image",
        "value": "/w/b/wb05-red-0.jpg"
      },
      {
        "attribute_code": "special_price",
        "value": "24.000000"
      },
      {
        "attribute_code": "thumbnail",
        "value": "/w/b/wb05-red-0.jpg"
      },
      {
        "attribute_code": "special_from_date",
        "value": "2022-08-09 00:00:00"
      },
      {
        "attribute_code": "options_container",
        "value": "container2"
      },
      {
        "attribute_code": "url_key",
        "value": "savvy-shoulder-tote"
      },
      {
        "attribute_code": "gift_message_available",
        "value": "0"
      },
      {
        "attribute_code": "msrp_display_actual_price_type",
        "value": "0"
      },
      {
        "attribute_code": "required_options",
        "value": "0"
      },
      {
        "attribute_code": "has_options",
        "value": "0"
      },
      {
        "attribute_code": "image_label",
        "value": "Image"
      },
      {
        "attribute_code": "small_image_label",
        "value": "Image"
      },
      {
        "attribute_code": "thumbnail_label",
        "value": "Image"
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "category_ids",
        "value": [
          "3",
          "4",
          "7"
        ]
      },
      {
        "attribute_code": "description",
        "value": "\u003cp\u003ePowerwalking to the gym or strolling to the local coffeehouse, the Savvy Shoulder Tote lets you stash your essentials in sporty style! A top-loading compartment provides quick and easy access to larger items, while zippered pockets on the front and side hold cash, credit cards and phone.\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eWater-resistant shell.\u003c/li\u003e\n\u003cli\u003eWater bottle pocket.\u003c/li\u003e\n\u003cli\u003ePadded, articulating shoulder strap.\u003c/li\u003e\n\u003cli\u003eDimensions: W 21\" x H 15\" x D 10\".\u003c/li\u003e\n\u003c/ul\u003e"
      },
      {
        "attribute_code": "is_returnable",
        "value": "2"
      },
      {
        "attribute_code": "activity",
        "value": "20,17"
      },
      {
        "attribute_code": "style_bags",
        "value": "38,39"
      },
      {
        "attribute_code": "color",
        "value": "58"
      },
      {
        "attribute_code": "strap_bags",
        "value": "70,71,75,76"
      },
      {
        "attribute_code": "features_bags",
        "value": "81,84"
      },
      {
        "attribute_code": "eco_collection",
        "value": "0"
      },
      {
        "attribute_code": "performance_fabric",
        "value": "0"
      },
      {
        "attribute_code": "erin_recommends",
        "value": "1"
      },
      {
        "attribute_code": "new",
        "value": "0"
      },
      {
        "attribute_code": "sale",
        "value": "1"
      }
    ],
    "extension_attributes": {
      "category_links": [
        {
          "category_id": "3",
          "position": 0
        },
        {
          "category_id": "4",
          "position": 0
        },
        {
          "category_id": "7",
          "position": 0
        }
      ],
      "website_ids": [
        1
      ]
    },
    "id": 10,
    "media_gallery_entries": [
      {
        "disabled": false,
        "file": "/w/b/wb05-red-0.jpg",
        "id": 13,
        "label": "Image",
        "media_type": "image",
        "position": 1,
        "types": [
          "image",
          "small_image",
          "thumbnail"
        ]
      }
    ],
    "name": "Savvy Shoulder Tote",
    "options": [],
    "price": 32,
    "product_links": [
      {
        "link_type": "crosssell",
        "linked_product_sku": "24-WG088",
        "linked_product_type": "simple",
        "position": 2,
        "sku": "24-WB05"
      },
      {
        "link_type": "crosssell",
        "linked_product_sku": "24-WG082-pink",
        "linked_product_type": "simple",
        "position": 3,
        "sku": "24-WB05"
      },
      {
        "link_type": "crosssell",
        "linked_product_sku": "24-WG085",
        "linked_product_type": "simple",
        "position": 1,
        "sku": "24-WB05"
      },
      {
        "link_type": "crosssell",
        "linked_product_sku": "24-WG087",
        "linked_product_type": "simple",
        "position": 4,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB01",
        "linked_product_type": "simple",
        "position": 1,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB03",
        "linked_product_type": "simple",
        "position": 3,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB05",
        "linked_product_type": "simple",
        "position": 4,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB06",
        "linked_product_type": "simple",
        "position": 5,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-MB02",
        "linked_product_type": "simple",
        "position": 2,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-UB02",
        "linked_product_type": "simple",
        "position": 6,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-WB06",
        "linked_product_type": "simple",
        "position": 9,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-WB03",
        "linked_product_type": "simple",
        "position": 7,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-WB07",
        "linked_product_type": "simple",
        "position": 10,
        "sku": "24-WB05"
      },
      {
        "link_type": "upsell",
        "linked_product_sku": "24-WB04",
        "linked_product_type": "simple",
        "position": 8,
        "sku": "24-WB05"
      }
    ],
    "sku": "24-WB05",
    "status": 1,
    "tier_prices": [],
    "type_id": "simple",
    "updated_at": "2022-09-09 06:41:53",
    "visibility": 4
  }`

### Get product stock

Source: __`kin.cloud/module/m2/m2.(*Product).GetProductSock`__

Get product stock

#### Authentication methods

* __`api_key`__

#### Inputs

* __`sku`__: _Sku_

  Type: _string_

  Description: Product SKU

  Default value: `""`

#### Outputs

* __`stock_result`__: _Stock result_

  Type: _interface {}_

  Description: Stock result

  Sample value: `{
    "item_id": 0,
    "product_id": 0,
    "stock_id": 0,
    "qty": 0,
    "is_in_stock": true,
    "is_qty_decimal": true,
    "show_default_notification_message": true,
    "use_config_min_qty": true,
    "min_qty": 0,
    "use_config_min_sale_qty": 0,
    "min_sale_qty": 0,
    "use_config_max_sale_qty": true,
    "max_sale_qty": 0,
    "use_config_backorders": true,
    "backorders": 0,
    "use_config_notify_stock_qty": true,
    "notify_stock_qty": 0,
    "use_config_qty_increments": true,
    "qty_increments": 0,
    "use_config_enable_qty_inc": true,
    "enable_qty_increments": true,
    "use_config_manage_stock": true,
    "manage_stock": true,
    "low_stock_date": "string",
    "is_decimal_divided": true,
    "stock_status_changed_auto": 0,
    "extension_attributes": {}
  }`

### Get source items by SKU

Source: __`kin.cloud/module/m2/m2.(*Product).GetSourceItemsBySKU`__

Get source items by SKU

#### Authentication methods

* __`api_key`__

#### Inputs

* __`sku`__: _Sku_

  Type: _string_

  Description: Product SKU

  Default value: `""`

#### Outputs

* __`source_items`__: _Source items_

  Type: _interface {}_

  Description: Source items

### List products

Source: __`kin.cloud/module/m2/m2.(*Product).ListProducts`__

List products

#### Authentication methods

* __`api_key`__

#### Inputs

* __`product_type`__: _Product type_

  Type: _string_

  Description: simple or configurable

  Default value: `""`

* __`page`__: _Page number_

  Type: _uint_

  Description: Page number

  Default value: `0`

* __`size`__: _Page size_

  Type: _uint_

  Description: Page size

  Default value: `0`

#### Outputs

* __`products`__: _Product list_

  Type: _interface {}_

  Description: Product list

  Sample value: `[
    {
      "attribute_set_id": 16,
      "created_at": "2022-08-09 10:38:05",
      "custom_attributes": [
        {
          "attribute_code": "image",
          "value": "/w/b/wb04-red-0.jpg"
        },
        {
          "attribute_code": "small_image",
          "value": "/w/b/wb04-red-0.jpg"
        },
        {
          "attribute_code": "special_price",
          "value": "24.000000"
        },
        {
          "attribute_code": "thumbnail",
          "value": "/w/b/wb04-red-0.jpg"
        },
        {
          "attribute_code": "special_from_date",
          "value": "2022-08-09 00:00:00"
        },
        {
          "attribute_code": "options_container",
          "value": "container2"
        },
        {
          "attribute_code": "url_key",
          "value": "savvy-shoulder-tote"
        },
        {
          "attribute_code": "gift_message_available",
          "value": "0"
        },
        {
          "attribute_code": "msrp_display_actual_price_type",
          "value": "0"
        },
        {
          "attribute_code": "required_options",
          "value": "0"
        },
        {
          "attribute_code": "has_options",
          "value": "0"
        },
        {
          "attribute_code": "image_label",
          "value": "Image"
        },
        {
          "attribute_code": "small_image_label",
          "value": "Image"
        },
        {
          "attribute_code": "thumbnail_label",
          "value": "Image"
        },
        {
          "attribute_code": "tax_class_id",
          "value": "2"
        },
        {
          "attribute_code": "category_ids",
          "value": [
            "3",
            "4",
            "7"
          ]
        },
        {
          "attribute_code": "description",
          "value": "\u003cp\u003ePowerwalking to the gym or strolling to the local coffeehouse, the Savvy Shoulder Tote lets you stash your essentials in sporty style! A top-loading compartment provides quick and easy access to larger items, while zippered pockets on the front and side hold cash, credit cards and phone.\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eWater-resistant shell.\u003c/li\u003e\n\u003cli\u003eWater bottle pocket.\u003c/li\u003e\n\u003cli\u003ePadded, articulating shoulder strap.\u003c/li\u003e\n\u003cli\u003eDimensions: W 21\" x H 15\" x D 10\".\u003c/li\u003e\n\u003c/ul\u003e"
        },
        {
          "attribute_code": "is_returnable",
          "value": "2"
        },
        {
          "attribute_code": "activity",
          "value": "20,17"
        },
        {
          "attribute_code": "style_bags",
          "value": "38,39"
        },
        {
          "attribute_code": "color",
          "value": "58"
        },
        {
          "attribute_code": "strap_bags",
          "value": "70,71,75,76"
        },
        {
          "attribute_code": "features_bags",
          "value": "81,84"
        },
        {
          "attribute_code": "eco_collection",
          "value": "0"
        },
        {
          "attribute_code": "performance_fabric",
          "value": "0"
        },
        {
          "attribute_code": "erin_recommends",
          "value": "1"
        },
        {
          "attribute_code": "new",
          "value": "0"
        },
        {
          "attribute_code": "sale",
          "value": "1"
        }
      ],
      "extension_attributes": {
        "category_links": [
          {
            "category_id": "3",
            "position": 0
          },
          {
            "category_id": "4",
            "position": 0
          },
          {
            "category_id": "7",
            "position": 0
          }
        ],
        "website_ids": [
          1
        ]
      },
      "id": 9,
      "media_gallery_entries": [
        {
          "disabled": false,
          "file": "/w/b/WB04-red-0.jpg",
          "id": 13,
          "label": "Image",
          "media_type": "image",
          "position": 1,
          "types": [
            "image",
            "small_image",
            "thumbnail"
          ]
        }
      ],
      "name": "Savvy Shoulder Tote",
      "options": [],
      "price": 32,
      "product_links": [
        {
          "link_type": "crosssell",
          "linked_product_sku": "24-WG088",
          "linked_product_type": "simple",
          "position": 2,
          "sku": "24-WB04"
        },
        {
          "link_type": "crosssell",
          "linked_product_sku": "24-WG082-pink",
          "linked_product_type": "simple",
          "position": 3,
          "sku": "24-WB04"
        },
        {
          "link_type": "crosssell",
          "linked_product_sku": "24-WG085",
          "linked_product_type": "simple",
          "position": 1,
          "sku": "24-WB04"
        },
        {
          "link_type": "crosssell",
          "linked_product_sku": "24-WG087",
          "linked_product_type": "simple",
          "position": 4,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB01",
          "linked_product_type": "simple",
          "position": 1,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB03",
          "linked_product_type": "simple",
          "position": 3,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB05",
          "linked_product_type": "simple",
          "position": 4,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB06",
          "linked_product_type": "simple",
          "position": 5,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB02",
          "linked_product_type": "simple",
          "position": 2,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-UB02",
          "linked_product_type": "simple",
          "position": 6,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-WB06",
          "linked_product_type": "simple",
          "position": 9,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-WB03",
          "linked_product_type": "simple",
          "position": 7,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-WB07",
          "linked_product_type": "simple",
          "position": 10,
          "sku": "24-WB04"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-WB04",
          "linked_product_type": "simple",
          "position": 8,
          "sku": "24-WB04"
        }
      ],
      "sku": "24-WB04",
      "status": 1,
      "tier_prices": [],
      "type_id": "simple",
      "updated_at": "2022-09-09 06:41:53",
      "visibility": 4
    },
    {
      "attribute_set_id": 16,
      "created_at": "2022-08-09 10:38:05",
      "custom_attributes": [
        {
          "attribute_code": "image",
          "value": "/w/b/wb05-red-0.jpg"
        },
        {
          "attribute_code": "small_image",
          "value": "/w/b/wb05-red-0.jpg"
        },
        {
          "attribute_code": "special_price",
          "value": "24.000000"
        },
        {
          "attribute_code": "thumbnail",
          "value": "/w/b/wb05-red-0.jpg"
        },
        {
          "attribute_code": "special_from_date",
          "value": "2022-08-09 00:00:00"
        },
        {
          "attribute_code": "options_container",
          "value": "container2"
        },
        {
          "attribute_code": "url_key",
          "value": "savvy-shoulder-tote"
        },
        {
          "attribute_code": "gift_message_available",
          "value": "0"
        },
        {
          "attribute_code": "msrp_display_actual_price_type",
          "value": "0"
        },
        {
          "attribute_code": "required_options",
          "value": "0"
        },
        {
          "attribute_code": "has_options",
          "value": "0"
        },
        {
          "attribute_code": "image_label",
          "value": "Image"
        },
        {
          "attribute_code": "small_image_label",
          "value": "Image"
        },
        {
          "attribute_code": "thumbnail_label",
          "value": "Image"
        },
        {
          "attribute_code": "tax_class_id",
          "value": "2"
        },
        {
          "attribute_code": "category_ids",
          "value": [
            "3",
            "4",
            "7"
          ]
        },
        {
          "attribute_code": "description",
          "value": "\u003cp\u003ePowerwalking to the gym or strolling to the local coffeehouse, the Savvy Shoulder Tote lets you stash your essentials in sporty style! A top-loading compartment provides quick and easy access to larger items, while zippered pockets on the front and side hold cash, credit cards and phone.\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eWater-resistant shell.\u003c/li\u003e\n\u003cli\u003eWater bottle pocket.\u003c/li\u003e\n\u003cli\u003ePadded, articulating shoulder strap.\u003c/li\u003e\n\u003cli\u003eDimensions: W 21\" x H 15\" x D 10\".\u003c/li\u003e\n\u003c/ul\u003e"
        },
        {
          "attribute_code": "is_returnable",
          "value": "2"
        },
        {
          "attribute_code": "activity",
          "value": "20,17"
        },
        {
          "attribute_code": "style_bags",
          "value": "38,39"
        },
        {
          "attribute_code": "color",
          "value": "58"
        },
        {
          "attribute_code": "strap_bags",
          "value": "70,71,75,76"
        },
        {
          "attribute_code": "features_bags",
          "value": "81,84"
        },
        {
          "attribute_code": "eco_collection",
          "value": "0"
        },
        {
          "attribute_code": "performance_fabric",
          "value": "0"
        },
        {
          "attribute_code": "erin_recommends",
          "value": "1"
        },
        {
          "attribute_code": "new",
          "value": "0"
        },
        {
          "attribute_code": "sale",
          "value": "1"
        }
      ],
      "extension_attributes": {
        "category_links": [
          {
            "category_id": "3",
            "position": 0
          },
          {
            "category_id": "4",
            "position": 0
          },
          {
            "category_id": "7",
            "position": 0
          }
        ],
        "website_ids": [
          1
        ]
      },
      "id": 10,
      "media_gallery_entries": [
        {
          "disabled": false,
          "file": "/w/b/wb05-red-0.jpg",
          "id": 13,
          "label": "Image",
          "media_type": "image",
          "position": 1,
          "types": [
            "image",
            "small_image",
            "thumbnail"
          ]
        }
      ],
      "name": "Savvy Shoulder Tote",
      "options": [],
      "price": 32,
      "product_links": [
        {
          "link_type": "crosssell",
          "linked_product_sku": "24-WG088",
          "linked_product_type": "simple",
          "position": 2,
          "sku": "24-WB05"
        },
        {
          "link_type": "crosssell",
          "linked_product_sku": "24-WG082-pink",
          "linked_product_type": "simple",
          "position": 3,
          "sku": "24-WB05"
        },
        {
          "link_type": "crosssell",
          "linked_product_sku": "24-WG085",
          "linked_product_type": "simple",
          "position": 1,
          "sku": "24-WB05"
        },
        {
          "link_type": "crosssell",
          "linked_product_sku": "24-WG087",
          "linked_product_type": "simple",
          "position": 4,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB01",
          "linked_product_type": "simple",
          "position": 1,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB03",
          "linked_product_type": "simple",
          "position": 3,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB05",
          "linked_product_type": "simple",
          "position": 4,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB06",
          "linked_product_type": "simple",
          "position": 5,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-MB02",
          "linked_product_type": "simple",
          "position": 2,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-UB02",
          "linked_product_type": "simple",
          "position": 6,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-WB06",
          "linked_product_type": "simple",
          "position": 9,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-WB03",
          "linked_product_type": "simple",
          "position": 7,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-WB07",
          "linked_product_type": "simple",
          "position": 10,
          "sku": "24-WB05"
        },
        {
          "link_type": "upsell",
          "linked_product_sku": "24-WB04",
          "linked_product_type": "simple",
          "position": 8,
          "sku": "24-WB05"
        }
      ],
      "sku": "24-WB05",
      "status": 1,
      "tier_prices": [],
      "type_id": "simple",
      "updated_at": "2022-09-09 06:41:53",
      "visibility": 4
    }
  ]`

* __`total`__: _Total count_

  Type: _uint_

  Description: Total count

### Remove product from category

Source: __`kin.cloud/module/m2/m2.(*Product).RemoveProductFromCategory`__

Remove product from category

#### Authentication methods

* __`api_key`__

#### Inputs

* __`category_id`__: _Category ID_

  Type: _int_

  Description: Category ID

  Default value: `0`

* __`product_id`__: _Product ID_

  Type: _string_

  Description: Product ID

  Default value: `""`

#### Outputs

### Update product stock

Source: __`kin.cloud/module/m2/m2.(*Product).UpdateProductStock`__

Update product stock

#### Authentication methods

* __`api_key`__

#### Inputs

* __`sku`__: _Sku_

  Type: _string_

  Description: Product SKU

  Default value: `""`

* __`quantity`__: _Quantity_

  Type: _int64_

  Description: Stock quantity

  Default value: `0`

#### Outputs

## Triggers

### `webhook`

Magento webhook

#### Authentication Methods

* __`api_key`__

#### Fields

