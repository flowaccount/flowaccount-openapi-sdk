# OpenapiClient::ProductResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **Integer** | จำนวนสินค้าทั้งหมด | [optional] 
**current_page** | **Integer** | หน้าที่แสดงรายการสินค้า | [optional] 
**list** | [**Array&lt;Product&gt;**](Product.md) | ข้อมูลรายการสินค้า | [optional] 
**is_db** | **Boolean** | database | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ProductResponseData.new(total: null,
                                 current_page: null,
                                 list: null,
                                 is_db: null)
```


