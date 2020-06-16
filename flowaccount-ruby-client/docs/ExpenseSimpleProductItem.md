# OpenapiClient::ExpenseSimpleProductItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_code** | **Integer** | เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) | 
**category_id** | **Integer** | เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) &lt;br&gt; &lt;ex&gt;Example: 40238&lt;/ex&gt; | 
**description** | **String** | รายละเอียดค่าใช้จ่าย | 
**name_local** | **String** | ชื่อหมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: การตลาดและโฆษณา&lt;/ex&gt; | 
**name_foreign** | **String** | ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: Marketing &amp; Advertising&lt;/ex&gt; | 
**credit_category** | **Integer** | เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: 2&lt;/ex&gt; | 
**credit_id** | **Integer** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต &lt;br&gt; &lt;ex&gt;Example: 1081994&lt;/ex&gt; | 
**credit_code** | **String** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399&lt;/ex&gt; | 
**credit_name_local** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399 / เจ้าหนี้อื่นๆ&lt;/ex&gt; | 
**credit_name_foreign** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 21399 / Other Payables&lt;/ex&gt; | 
**debit_category** | **Integer** | เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย | 
**debit_id** | **Integer** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 1082099&lt;/ex&gt; | 
**debit_code** | **String** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029&lt;/ex&gt; | 
**debit_name_local** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ&lt;/ex&gt; | 
**debit_name_foreign** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 53029 / Other advertising and marketing expenses&lt;/ex&gt; | 
**quantity** | **Float** | จำนวนรายการค่าใช้จ่าย | 
**unit_name** | **String** | หน่วยรายการค่าใช้จ่าย | [optional] 
**price_per_unit** | **Float** | ราคาต่อหน่วยค่าใช้จ่าย | 
**total** | **Float** | ราคารวมค่าใช้จ่าย | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ExpenseSimpleProductItem.new(system_code: 1001,
                                 category_id: 40238,
                                 description: null,
                                 name_local: การตลาดและโฆษณา,
                                 name_foreign: Marketing &amp; Advertising,
                                 credit_category: 2,
                                 credit_id: 1081994,
                                 credit_code: 21399,
                                 credit_name_local: 21399 / เจ้าหนี้อื่นๆ,
                                 credit_name_foreign: 21399 / Other Payables,
                                 debit_category: 5,
                                 debit_id: 1082099,
                                 debit_code: 53029,
                                 debit_name_local: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ,
                                 debit_name_foreign: 53029 / Other advertising and marketing expenses,
                                 quantity: null,
                                 unit_name: null,
                                 price_per_unit: null,
                                 total: null)
```


