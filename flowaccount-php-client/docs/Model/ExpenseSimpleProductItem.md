# # ExpenseSimpleProductItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_code** | **int** | เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) | 
**category_id** | **int** | เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) &lt;br&gt; &lt;ex&gt;Example: 40238&lt;/ex&gt; | 
**description** | **string** | รายละเอียดค่าใช้จ่าย | 
**name_local** | **string** | ชื่อหมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: การตลาดและโฆษณา&lt;/ex&gt; | 
**name_foreign** | **string** | ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: Marketing &amp; Advertising&lt;/ex&gt; | 
**credit_category** | **int** | เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: 2&lt;/ex&gt; | 
**credit_id** | **int** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต &lt;br&gt; &lt;ex&gt;Example: 1081994&lt;/ex&gt; | 
**credit_code** | **string** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399&lt;/ex&gt; | 
**credit_name_local** | **string** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399 / เจ้าหนี้อื่นๆ&lt;/ex&gt; | 
**credit_name_foreign** | **string** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 21399 / Other Payables&lt;/ex&gt; | 
**debit_category** | **int** | เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย | 
**debit_id** | **int** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 1082099&lt;/ex&gt; | 
**debit_code** | **string** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029&lt;/ex&gt; | 
**debit_name_local** | **string** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ&lt;/ex&gt; | 
**debit_name_foreign** | **string** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 53029 / Other advertising and marketing expenses&lt;/ex&gt; | 
**quantity** | **float** | จำนวนรายการค่าใช้จ่าย | 
**unit_name** | **string** | หน่วยรายการค่าใช้จ่าย | [optional] 
**price_per_unit** | **float** | ราคาต่อหน่วยค่าใช้จ่าย | 
**total** | **float** | ราคารวมค่าใช้จ่าย | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


