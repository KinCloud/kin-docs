---
sidebar_position: 1
title: Reference
---

# Reference

Name: __`kin.cloud/module/oms`__

Version: __`v1.0`__

Order Intelligent Platform

## Connections

### Oauth2

Method: __`oms`__

#### Fields

* __`oms_app_id`__: _OMS App ID_

  Type: _string_

  Description: App ID on OMS setting page

* __`client_id`__: _Client ID_

  Type: _string_

  Description: Client ID of your app

* __`client_secret`__: _Client Secret_

  Type: _string_

  Description: Client Secret of your app

* __`signing_secret`__: _Signing Secret_

  Type: _string_

  Description: Signing secret for webhook payload

## Actions

### Get categories

Source: __`kin.cloud/module/oms/oms.(*Category).GetCategories`__



#### Authentication methods

* __`oms`__

#### Inputs

#### Outputs

* __`categories`__: _Categories_

  Type: _[]json.RawMessage_

  Description: 

### Get category by id

Source: __`kin.cloud/module/oms/oms.(*Category).GetCategory`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _ID_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`category`__: _Category_

  Type: _json.RawMessage_

  Description: 

### Get category by id

Source: __`kin.cloud/module/oms/oms.(*ChangeRecord).GetChangeRecord`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`changeRecordsResponse`__: _Change records response_

  Type: _json.RawMessage_

  Description: 

### Get category by id

Source: __`kin.cloud/module/oms/oms.(*ChangeRecord).GetChangeRecords`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`resourceId`__: _Resource id_

  Type: _string_

  Description: 

  Default value: `""`

* __`resourceType`__: _Resource type_

  Type: _string_

  Description: 

  Default value: `""`

* __`resourceAction`__: _Resource action_

  Type: _string_

  Description: 

  Default value: `""`

* __`requestFrom`__: _Request from_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _string_

  Description: 

  Default value: `""`

* __`limit`__: _Limit_

  Type: _string_

  Description: 

  Default value: `""`

* __`sort`__: _Sort_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`changeRecordsResponse`__: _Change records response_

  Type: _json.RawMessage_

  Description: 

### Add virtual warehouse to channel

Source: __`kin.cloud/module/oms/oms.(*Channel).AddChannelVirtualWarehouses`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`channelId`__: _Channel id_

  Type: _string_

  Description: 

  Default value: `""`

* __`virtualWarehouseId`__: _Virtual warehouses id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`virtualWarehouse`__: _Virtual warehouse_

  Type: _json.RawMessage_

  Description: 

### Create channels

Source: __`kin.cloud/module/oms/oms.(*Channel).CreateChannel`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`channel`__: _Channel_

  Type: _json.RawMessage_

  Description: 

### Get channels

Source: __`kin.cloud/module/oms/oms.(*Channel).GetChannel`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`channel`__: _Channel_

  Type: _json.RawMessage_

  Description: 

### Get channel virtual warehouses

Source: __`kin.cloud/module/oms/oms.(*Channel).GetChannelVirtualWarehouses`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`virtualWarehouses`__: _Virtual warehouses_

  Type: _[]json.RawMessage_

  Description: 

### Get channels

Source: __`kin.cloud/module/oms/oms.(*Channel).GetChannels`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`name`__: _Name_

  Type: _string_

  Description: 

  Default value: `""`

* __`module`__: _Module_

  Type: _string_

  Description: 

  Default value: `""`

* __`status`__: _Status_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _string_

  Description: 

  Default value: `""`

* __`limit`__: _Limit_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`channelsResponse`__: _Channels response_

  Type: _json.RawMessage_

  Description: 

### Remove virtual warehouse from channel

Source: __`kin.cloud/module/oms/oms.(*Channel).RemoveChannelVirtualWarehouses`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`channelId`__: _Channel id_

  Type: _string_

  Description: 

  Default value: `""`

* __`virtualWarehouseId`__: _Virtual warehouses id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

### Update channels

Source: __`kin.cloud/module/oms/oms.(*Channel).UpdateChannel`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`channel`__: _Channel_

  Type: _json.RawMessage_

  Description: 

### Create connection

Source: __`kin.cloud/module/oms/oms.(*Connection).CreateConnection`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`connection`__: _Connection_

  Type: _json.RawMessage_

  Description: 

### Delete connection

Source: __`kin.cloud/module/oms/oms.(*Connection).DeleteConnection`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

### Get connection

Source: __`kin.cloud/module/oms/oms.(*Connection).GetConnection`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`connection`__: _Connection_

  Type: _json.RawMessage_

  Description: 

### Get connections

Source: __`kin.cloud/module/oms/oms.(*Connection).GetConnections`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`name`__: _Name_

  Type: _string_

  Description: 

  Default value: `""`

* __`module`__: _Module_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`connections`__: _Connections_

  Type: _[]json.RawMessage_

  Description: 

### Update connection

Source: __`kin.cloud/module/oms/oms.(*Connection).UpdateConnection`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`connection`__: _Connection_

  Type: _json.RawMessage_

  Description: 

### Create custom field

Source: __`kin.cloud/module/oms/oms.(*CustomField).CreateCustomField`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`customField`__: _Custom field_

  Type: _json.RawMessage_

  Description: 

### Delete custom field

Source: __`kin.cloud/module/oms/oms.(*CustomField).DeleteCustomField`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

### Get custom field

Source: __`kin.cloud/module/oms/oms.(*CustomField).GetCustomField`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`customField`__: _Custom field_

  Type: _json.RawMessage_

  Description: 

### Get custom fields

Source: __`kin.cloud/module/oms/oms.(*CustomField).GetCustomFields`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`module`__: _Module_

  Type: _string_

  Description: 

  Default value: `""`

* __`customField`__: _Custom field_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _string_

  Description: 

  Default value: `""`

* __`limit`__: _Limit_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`customFieldResponse`__: _Custom fields response_

  Type: _json.RawMessage_

  Description: 

### Update custom field

Source: __`kin.cloud/module/oms/oms.(*CustomField).UpdateCustomField`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`customField`__: _Custom field_

  Type: _json.RawMessage_

  Description: 

### Create a customer

Source: __`kin.cloud/module/oms/oms.(*Customer).CreateCustomer`__



#### Authentication methods

* __`oms`__

#### Inputs

* __``__: __

  Type: _map[string]interface {}_

  Description: 

#### Outputs

* __`result`__: _Result_

  Type: _json.RawMessage_

  Description: 

### List customer addresses

Source: __`kin.cloud/module/oms/oms.(*Customer).ListCustomerAddresses`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`customer_id`__: _Customer ID_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`result`__: _Result_

  Type: _json.RawMessage_

  Description: 

### Search customers

Source: __`kin.cloud/module/oms/oms.(*Customer).SearchCustomers`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`ref_number`__: _Ref Number_

  Type: _string_

  Description: 

  Default value: `""`

* __`first_name`__: _First Name_

  Type: _string_

  Description: 

  Default value: `""`

* __`last_name`__: _Last Name_

  Type: _string_

  Description: 

  Default value: `""`

* __`email`__: _Email_

  Type: _string_

  Description: 

  Default value: `""`

* __`phone`__: _Phone_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`result`__: _Result_

  Type: _json.RawMessage_

  Description: 

### List inventories

Source: __`kin.cloud/module/oms/oms.(*Inventory).ListInventories`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`warehouse_id`__: _Warehouse ID_

  Type: _string_

  Description: 

  Default value: `""`

* __`sku`__: _SKU_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _int64_

  Description: 

  Default value: `0`

* __`limit`__: _Limit_

  Type: _int64_

  Description: 

  Default value: `0`

#### Outputs

* __`inventories`__: _Inventories_

  Type: _interface {}_

  Description: 

### Update stock by ID

Source: __`kin.cloud/module/oms/oms.(*Inventory).UpdateStockByID`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _ID_

  Type: _string_

  Description: 

  Default value: `""`

* __`stock_info`__: _Stock info_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

### Create order status

Source: __`kin.cloud/module/oms/oms.(*OrderStatus).CreateOrderStatus`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`orderStatus`__: _Order status_

  Type: _json.RawMessage_

  Description: 

### Delete order status

Source: __`kin.cloud/module/oms/oms.(*OrderStatus).DeleteOrderStatus`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

### Get order status

Source: __`kin.cloud/module/oms/oms.(*OrderStatus).GetOrderStatus`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`orderStatus`__: _Order status_

  Type: _json.RawMessage_

  Description: 

### Get order statuses

Source: __`kin.cloud/module/oms/oms.(*OrderStatus).GetOrderStatuses`__



#### Authentication methods

* __`oms`__

#### Inputs

#### Outputs

* __`orderStatuses`__: _Order statuses_

  Type: _[]json.RawMessage_

  Description: 

### Update order status

Source: __`kin.cloud/module/oms/oms.(*OrderStatus).UpdateOrderStatus`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`orderStatus`__: _Order status_

  Type: _json.RawMessage_

  Description: 

### Create payment method

Source: __`kin.cloud/module/oms/oms.(*PaymentMethod).CreatePaymentMethod`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`paymentMethod`__: _Payment method_

  Type: _json.RawMessage_

  Description: 

### Create payment method

Source: __`kin.cloud/module/oms/oms.(*PaymentMethod).GetPaymentMethod`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`paymentMethod`__: _Payment method_

  Type: _json.RawMessage_

  Description: 

### Get payment methods

Source: __`kin.cloud/module/oms/oms.(*PaymentMethod).GetPaymentMethods`__



#### Authentication methods

* __`oms`__

#### Inputs

#### Outputs

* __`paymentMethods`__: _Payment methods_

  Type: _[]json.RawMessage_

  Description: 

### Create payment method

Source: __`kin.cloud/module/oms/oms.(*PaymentMethod).UpdatePaymentMethod`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`paymentMethod`__: _Payment method_

  Type: _json.RawMessage_

  Description: 

### Create or update product

Source: __`kin.cloud/module/oms/oms.(*Product).CreateOrUpdateProduct`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _ID_

  Type: _string_

  Description: 

  Default value: `""`

* __`sku`__: _SKU_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`product`__: _Product_

  Type: _json.RawMessage_

  Description: 

### Create product

Source: __`kin.cloud/module/oms/oms.(*Product).CreateProduct`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`product`__: _Product_

  Type: _json.RawMessage_

  Description: 

### Export products

Source: __`kin.cloud/module/oms/oms.(*Product).ExportProducts`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`key`__: _Key_

  Type: _string_

  Description: 

  Default value: `""`

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`sku`__: _Sku_

  Type: _string_

  Description: 

  Default value: `""`

* __`name`__: _Name_

  Type: _string_

  Description: 

  Default value: `""`

* __`variantSku`__: _Variant sku_

  Type: _string_

  Description: 

  Default value: `""`

* __`status`__: _Status_

  Type: _string_

  Description: 

  Default value: `""`

* __`stockStatus`__: _Stock status_

  Type: _string_

  Description: 

  Default value: `""`

* __`categoryId`__: _Category id_

  Type: _string_

  Description: 

  Default value: `""`

* __`fromStock`__: _From stock_

  Type: _string_

  Description: 

  Default value: `""`

* __`toStock`__: _To stock_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _string_

  Description: 

  Default value: `""`

* __`limit`__: _Limit_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`url`__: _Url_

  Type: _string_

  Description: 

### Get product by ID or SKU

Source: __`kin.cloud/module/oms/oms.(*Product).GetProduct`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`sku`__: _SKU_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`product`__: _Product_

  Type: _json.RawMessage_

  Description: 

### Get product attributes

Source: __`kin.cloud/module/oms/oms.(*Product).GetProductAttributes`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`productAttributesResponse`__: _Product attributes response_

  Type: _json.RawMessage_

  Description: 

### Get product stocks

Source: __`kin.cloud/module/oms/oms.(*Product).GetProductStocks`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`productStocksResponse`__: _Product stocks response_

  Type: _json.RawMessage_

  Description: 

### Get product stocks

Source: __`kin.cloud/module/oms/oms.(*Product).GetProductVariants`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`variantSku`__: _Variant sku_

  Type: _string_

  Description: 

  Default value: `""`

* __`status`__: _Status_

  Type: _string_

  Description: 

  Default value: `""`

* __`stockStatus`__: _Stock status_

  Type: _string_

  Description: 

  Default value: `""`

* __`fromStock`__: _From stock_

  Type: _string_

  Description: 

  Default value: `""`

* __`toStock`__: _To stock_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _string_

  Description: 

  Default value: `""`

* __`limit`__: _Limit_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`productVariantsResponse`__: _Product variants response_

  Type: _json.RawMessage_

  Description: 

### Get products

Source: __`kin.cloud/module/oms/oms.(*Product).GetProducts`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`sku`__: _Sku_

  Type: _string_

  Description: 

  Default value: `""`

* __`name`__: _Name_

  Type: _string_

  Description: 

  Default value: `""`

* __`variantSku`__: _Variant sku_

  Type: _string_

  Description: 

  Default value: `""`

* __`status`__: _Status_

  Type: _string_

  Description: 

  Default value: `""`

* __`stockStatus`__: _Stock status_

  Type: _string_

  Description: 

  Default value: `""`

* __`categoryId`__: _Category id_

  Type: _string_

  Description: 

  Default value: `""`

* __`fromStock`__: _From stock_

  Type: _string_

  Description: 

  Default value: `""`

* __`toStock`__: _To stock_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _string_

  Description: 

  Default value: `""`

* __`limit`__: _Limit_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`productsResponse`__: _Products response_

  Type: _json.RawMessage_

  Description: 

### Get stock by sku

Source: __`kin.cloud/module/oms/oms.(*Product).GetStockBySku`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`sku`__: _Sku_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`stocksResponse`__: _Stock response_

  Type: _json.RawMessage_

  Description: 

### Get variant stocks

Source: __`kin.cloud/module/oms/oms.(*Product).GetVariantStocks`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`productId`__: _Product id_

  Type: _string_

  Description: 

  Default value: `""`

* __`variantId`__: _Variant id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`productStocksResponse`__: _Product stocks response_

  Type: _json.RawMessage_

  Description: 

### Import products from object storage key

Source: __`kin.cloud/module/oms/oms.(*Product).ImportProductsFromKey`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`file`__: _File URL_

  Type: _io.Reader_

  Description: 

#### Outputs

### Save product (DEPRECATED - Use CreateOrUpdateProduct instead)

Source: __`kin.cloud/module/oms/oms.(*Product).SaveProduct`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`sku`__: _SKU_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`product`__: _Product_

  Type: _json.RawMessage_

  Description: 

### Save products

Source: __`kin.cloud/module/oms/oms.(*Product).SaveProducts`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`products`__: _Products data_

  Type: _[]map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

### Create product

Source: __`kin.cloud/module/oms/oms.(*Product).UpdateProductByID`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _ID_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`product`__: _Product_

  Type: _json.RawMessage_

  Description: 

### Create product

Source: __`kin.cloud/module/oms/oms.(*Product).UpdateProductBySKU`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`sku`__: _SKU_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`product`__: _Product_

  Type: _json.RawMessage_

  Description: 

### Update product stocks

Source: __`kin.cloud/module/oms/oms.(*Product).UpdateProductStocks`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`warehouseId`__: _Warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

* __`mode`__: _Mode_

  Type: _int_

  Description: 

  Default value: `0`

* __`adjustQuantity`__: _Adjust quantity_

  Type: _int_

  Description: 

  Default value: `0`

#### Outputs

* __`productStocksResponse`__: _Product stocks response_

  Type: _json.RawMessage_

  Description: 

### Update stock by sku

Source: __`kin.cloud/module/oms/oms.(*Product).UpdateStockBySku`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`sku`__: _Sku_

  Type: _string_

  Description: 

  Default value: `""`

* __`warehouseId`__: _Warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

* __`mode`__: _Mode_

  Type: _int_

  Description: 

  Default value: `0`

* __`adjustQuantity`__: _Adjust quantity_

  Type: _int_

  Description: 

  Default value: `0`

#### Outputs

* __`stocksResponse`__: _Stock response_

  Type: _json.RawMessage_

  Description: 

### Update variant stocks

Source: __`kin.cloud/module/oms/oms.(*Product).UpdateVariantStocks`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`productId`__: _Product id_

  Type: _string_

  Description: 

  Default value: `""`

* __`variantId`__: _Variant id_

  Type: _string_

  Description: 

  Default value: `""`

* __`warehouseId`__: _Warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

* __`mode`__: _Mode_

  Type: _int_

  Description: 

  Default value: `0`

* __`adjustQuantity`__: _Adjust quantity_

  Type: _int_

  Description: 

  Default value: `0`

#### Outputs

* __`productStocksResponse`__: _Product stocks response_

  Type: _json.RawMessage_

  Description: 

### Create return order

Source: __`kin.cloud/module/oms/oms.(*SalesOrder).CreateReturn`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`request`__: _Request_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`result`__: _Result_

  Type: _json.RawMessage_

  Description: 

### Create sales order

Source: __`kin.cloud/module/oms/oms.(*SalesOrder).CreateSalesOrder`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`salesOrder`__: _Sales order_

  Type: _json.RawMessage_

  Description: 

### Create sales orders

Source: __`kin.cloud/module/oms/oms.(*SalesOrder).CreateSalesOrders`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`salesOrders`__: _Sales orders data_

  Type: _[]map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

### Delete sales order

Source: __`kin.cloud/module/oms/oms.(*SalesOrder).DeleteSalesOrder`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`seqId`__: _Seq id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

### Get sales order

Source: __`kin.cloud/module/oms/oms.(*SalesOrder).GetSalesOrder`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`seqId`__: _Seq id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`salesOrder`__: _Sales order_

  Type: _json.RawMessage_

  Description: 

### Get sales orders

Source: __`kin.cloud/module/oms/oms.(*SalesOrder).GetSalesOrders`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`seqId`__: _Seq id_

  Type: _string_

  Description: 

  Default value: `""`

* __`omsOrderNumber`__: _Oms order number_

  Type: _string_

  Description: 

  Default value: `""`

* __`channelOrderId`__: _Channel order Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`purchasedDateFrom`__: _Purchased date from_

  Type: _string_

  Description: 

  Default value: `""`

* __`purchasedDateTo`__: _Purchased date to_

  Type: _string_

  Description: 

  Default value: `""`

* __`email`__: _Email_

  Type: _string_

  Description: 

  Default value: `""`

* __`phone`__: _Phone_

  Type: _string_

  Description: 

  Default value: `""`

* __`channelId`__: _Channel id_

  Type: _string_

  Description: 

  Default value: `""`

* __`statusId`__: _Status Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`grandTotalAmountFrom`__: _Grand total amount from_

  Type: _string_

  Description: 

  Default value: `""`

* __`grandTotalAmountTo`__: _Grand total amount to_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _string_

  Description: 

  Default value: `""`

* __`limit`__: _Limit_

  Type: _string_

  Description: 

  Default value: `""`

* __`sort`__: _Sort_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`salesOrdersResponse`__: _Sales orders response_

  Type: _json.RawMessage_

  Description: 

### Get shipment info

Source: __`kin.cloud/module/oms/oms.(*SalesOrder).GetShipmentInfo`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`request`__: _Request_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`result`__: _Result_

  Type: _json.RawMessage_

  Description: 

### Update sales order

Source: __`kin.cloud/module/oms/oms.(*SalesOrder).UpdateSalesOrder`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`seqId`__: _Seq id_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`salesOrder`__: _Sales order_

  Type: _json.RawMessage_

  Description: 

### Update sales order

Source: __`kin.cloud/module/oms/oms.(*Settings).GetSettings`__



#### Authentication methods

* __`oms`__

#### Inputs

#### Outputs

* __`settings`__: _Settings_

  Type: _json.RawMessage_

  Description: 

### Update sales order

Source: __`kin.cloud/module/oms/oms.(*Settings).UpdateSettings`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`settings`__: _Settings_

  Type: _json.RawMessage_

  Description: 

### Create source

Source: __`kin.cloud/module/oms/oms.(*Source).CreateSource`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`source`__: _Source_

  Type: _json.RawMessage_

  Description: 

### Get source

Source: __`kin.cloud/module/oms/oms.(*Source).GetSource`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`name`__: _Name_

  Type: _string_

  Description: 

  Default value: `""`

* __`module`__: _Module_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`source`__: _Source_

  Type: _json.RawMessage_

  Description: 

### Update source

Source: __`kin.cloud/module/oms/oms.(*Source).UpdateSource`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`source`__: _Source_

  Type: _json.RawMessage_

  Description: 

### Create virtual warehouse

Source: __`kin.cloud/module/oms/oms.(*VirtualWarehouse).CreateVirtualWarehouse`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`virtualWarehouse`__: _Virtual warehouse_

  Type: _json.RawMessage_

  Description: 

### Get linked warehouses

Source: __`kin.cloud/module/oms/oms.(*VirtualWarehouse).GetLinkedWarehouses`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`virtualWarehouseId`__: _Virtual warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`linkedWarehouses`__: _Linked warehouses_

  Type: _[]map[string]interface {}_

  Description: 

### Get virtual warehouse

Source: __`kin.cloud/module/oms/oms.(*VirtualWarehouse).GetVirtualWarehouse`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`virtualWarehouseId`__: _Virtual warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`virtualWarehouse`__: _Virtual warehouse_

  Type: _json.RawMessage_

  Description: 

### Get virtual warehouses

Source: __`kin.cloud/module/oms/oms.(*VirtualWarehouse).GetVirtualWarehouses`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`name`__: _Name_

  Type: _string_

  Description: 

  Default value: `""`

* __`status`__: _Status_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _string_

  Description: 

  Default value: `""`

* __`limit`__: _Limit_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`virtualWarehousesResponse`__: _Virtual warehouses response_

  Type: _json.RawMessage_

  Description: 

### Link warehouse

Source: __`kin.cloud/module/oms/oms.(*VirtualWarehouse).LinkWarehouse`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`virtualWarehouseId`__: _Virtual warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

* __`warehouseId`__: _Warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`linkedWarehouse`__: _Linked warehouse_

  Type: _json.RawMessage_

  Description: 

### Unlink warehouse

Source: __`kin.cloud/module/oms/oms.(*VirtualWarehouse).UnlinkWarehouse`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`virtualWarehouseId`__: _Virtual warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

* __`warehouseId`__: _Warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

### Update virtual warehouse

Source: __`kin.cloud/module/oms/oms.(*VirtualWarehouse).UpdateVirtualWarehouse`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`virtualWarehouseId`__: _Virtual warehouse id_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`virtualWarehouse`__: _Virtual warehouse_

  Type: _json.RawMessage_

  Description: 

### Create warehouse

Source: __`kin.cloud/module/oms/oms.(*Warehouse).CreateWarehouse`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`warehouse`__: _Warehouse_

  Type: _json.RawMessage_

  Description: 

### Get warehouse

Source: __`kin.cloud/module/oms/oms.(*Warehouse).GetWarehouse`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`warehouse`__: _Warehouse_

  Type: _json.RawMessage_

  Description: 

### Get warehouses

Source: __`kin.cloud/module/oms/oms.(*Warehouse).GetWarehouses`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`name`__: _Name_

  Type: _string_

  Description: 

  Default value: `""`

* __`warehouseSourceId`__: _Warehouse source id_

  Type: _string_

  Description: 

  Default value: `""`

* __`status`__: _Status_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page_

  Type: _string_

  Description: 

  Default value: `""`

* __`limit`__: _Limit_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`warehousesResponse`__: _Warehouses response_

  Type: _json.RawMessage_

  Description: 

### Get warehouses with stocks

Source: __`kin.cloud/module/oms/oms.(*Warehouse).GetWarehousesWithStocks`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`skus`__: _List of SKUs in array_

  Type: _[]string_

  Description: 

  Default value: `null`

* __`channel_id`__: _Channel ID_

  Type: _string_

  Description: 

  Default value: `""`

* __`page`__: _Page (default: 1)_

  Type: _int_

  Description: 

  Default value: `0`

* __`limit`__: _Limit (default: 10)_

  Type: _int_

  Description: 

  Default value: `0`

#### Outputs

* __`result`__: _Result_

  Type: _json.RawMessage_

  Description: 

### Update warehouse

Source: __`kin.cloud/module/oms/oms.(*Warehouse).UpdateWarehouse`__



#### Authentication methods

* __`oms`__

#### Inputs

* __`id`__: _Id_

  Type: _string_

  Description: 

  Default value: `""`

* __`data`__: _Data_

  Type: _map[string]interface {}_

  Description: 

  Default value: `null`

#### Outputs

* __`warehouse`__: _Warehouse_

  Type: _json.RawMessage_

  Description: 

## Triggers

### `event`

OIP Event

#### Authentication Methods

* __`oms`__

#### Fields

* __`event_type`__: _Event Type_

  Type: _int_

  Description: Event Type

