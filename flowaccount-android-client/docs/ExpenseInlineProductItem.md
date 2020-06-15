

# ExpenseInlineProductItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemCode** | **Integer** | เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) | 
**categoryId** | **Integer** | เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) &lt;br&gt; &lt;ex&gt;Example: 40238&lt;/ex&gt; | 
**description** | **String** | รายละเอียดค่าใช้จ่าย | 
**nameLocal** | **String** | ชื่อหมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: การตลาดและโฆษณา&lt;/ex&gt; | 
**nameForeign** | **String** | ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: Marketing &amp; Advertising&lt;/ex&gt; | 
**creditCategory** | **Integer** | เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: 2&lt;/ex&gt; | 
**creditId** | **Integer** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต &lt;br&gt; &lt;ex&gt;Example: 1081994&lt;/ex&gt; | 
**creditCode** | **String** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399&lt;/ex&gt; | 
**creditNameLocal** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399 / เจ้าหนี้อื่นๆ&lt;/ex&gt; | 
**creditNameForeign** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 21399 / Other Payables&lt;/ex&gt; | 
**debitCategory** | **Integer** | เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย | 
**debitId** | **Integer** | เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 1082099&lt;/ex&gt; | 
**debitCode** | **String** | เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029&lt;/ex&gt; | 
**debitNameLocal** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ&lt;/ex&gt; | 
**debitNameForeign** | **String** | ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 53029 / Other advertising and marketing expenses&lt;/ex&gt; | 
**quantity** | [**BigDecimal**](BigDecimal.md) | จำนวนรายการค่าใช้จ่าย | 
**unitName** | **String** | หน่วยรายการค่าใช้จ่าย |  [optional]
**pricePerUnit** | [**BigDecimal**](BigDecimal.md) | ราคาต่อหน่วยค่าใช้จ่าย | 
**discountAmount** | **Integer** | จำนวนส่วนลดรายการค่าใช้จ่าย | 
**vatRate** | **Integer** | รูปแบบภาษี &lt;br&gt; 7 &#x3D; ภาษี 7% &lt;br&gt; 0 &#x3D; ภาษี 0% &lt;br&gt; -1 &#x3D; ยกเว้นภาษี | 
**total** | [**BigDecimal**](BigDecimal.md) | มูลค่ารวม | 




