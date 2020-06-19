# OpenapiClient::BusinessCategoryData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | id ของหมวดหมู่ค่าใช้จ่าย | [optional] 
**system_code** | **Integer** | เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) | [optional] 
**category_id** | **Integer** | เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) | [optional] 
**category_name_local** | **String** | ชื่อหมวดหมู่ค่าใช้จ่าย | [optional] 
**category_name_foreign** | **String** | ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) | [optional] 
**debit_id** | **Integer** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต | [optional] 
**debit_category** | **Integer** | เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย | [optional] 
**debit_code** | **String** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต | [optional] 
**debit_name_local** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต | [optional] 
**debit_name_foreign** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) | [optional] 
**credit_id** | **Integer** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต | [optional] 
**credit_category** | **Integer** | เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย | [optional] 
**credit_code** | **String** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต | [optional] 
**credit_name_local** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต  | [optional] 
**credit_name_foreign** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) | [optional] 
**keywords** | **String** | keyword | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::BusinessCategoryData.new(id: null,
                                 system_code: null,
                                 category_id: null,
                                 category_name_local: null,
                                 category_name_foreign: null,
                                 debit_id: null,
                                 debit_category: null,
                                 debit_code: null,
                                 debit_name_local: null,
                                 debit_name_foreign: null,
                                 credit_id: null,
                                 credit_category: null,
                                 credit_code: null,
                                 credit_name_local: null,
                                 credit_name_foreign: null,
                                 keywords: null)
```


