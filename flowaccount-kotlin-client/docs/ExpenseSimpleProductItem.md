
# ExpenseSimpleProductItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemCode** | **kotlin.Int** | เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) | 
**categoryId** | **kotlin.Int** | เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) &lt;br&gt; &lt;ex&gt;Example: 40238&lt;/ex&gt; | 
**description** | **kotlin.String** | รายละเอียดค่าใช้จ่าย | 
**nameLocal** | **kotlin.String** | ชื่อหมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: การตลาดและโฆษณา&lt;/ex&gt; | 
**nameForeign** | **kotlin.String** | ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: Marketing &amp; Advertising&lt;/ex&gt; | 
**creditCategory** | **kotlin.Int** | เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: 2&lt;/ex&gt; | 
**creditId** | **kotlin.Int** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต &lt;br&gt; &lt;ex&gt;Example: 1081994&lt;/ex&gt; | 
**creditCode** | **kotlin.String** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399&lt;/ex&gt; | 
**creditNameLocal** | **kotlin.String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399 / เจ้าหนี้อื่นๆ&lt;/ex&gt; | 
**creditNameForeign** | **kotlin.String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 21399 / Other Payables&lt;/ex&gt; | 
**debitCategory** | **kotlin.Int** | เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย | 
**debitId** | **kotlin.Int** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 1082099&lt;/ex&gt; | 
**debitCode** | **kotlin.String** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029&lt;/ex&gt; | 
**debitNameLocal** | **kotlin.String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ&lt;/ex&gt; | 
**debitNameForeign** | **kotlin.String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 53029 / Other advertising and marketing expenses&lt;/ex&gt; | 
**quantity** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนรายการค่าใช้จ่าย | 
**pricePerUnit** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ราคาต่อหน่วยค่าใช้จ่าย | 
**total** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ราคารวมค่าใช้จ่าย | 
**unitName** | **kotlin.String** | หน่วยรายการค่าใช้จ่าย |  [optional]



