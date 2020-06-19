
# InlineProductItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **kotlin.String** | ชื่อสินค้า | 
**quantity** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนสินค้า | 
**pricePerUnit** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ราคาสินค้าต่อหน่วย | 
**total** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ราคารวมสินค้า | 
**type** | **kotlin.Int** | ประเภทสินค้า &lt;br&gt; 1 &#x3D; บริการ (service) &lt;br&gt; 3 &#x3D; สินค้าไม่นับสต๊อก (non inventory) &lt;br&gt; 5 &#x3D; สินค้านับสต๊อก (inventory) |  [optional]
**description** | **kotlin.String** | รายละเอียดสินค้า |  [optional]
**unitName** | **kotlin.String** | หน่วยสินค้า |  [optional]
**sellChartOfAccountCode** | **kotlin.String** | เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย &lt;br&gt; &lt;ex&gt;Example: 41111&lt;/ex&gt; |  [optional]
**buyChartOfAccountCode** | **kotlin.String** | เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ &lt;br&gt; &lt;ex&gt;Example: 51111.02&lt;/ex&gt; |  [optional]
**discountAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนส่วนลดสินค้า |  [optional]
**vatRate** | **kotlin.Int** | รูปแบบภาษี &lt;br&gt; 7 &#x3D; ภาษี 7% &lt;br&gt; 0 &#x3D; ภาษี 0% &lt;br&gt; -1 &#x3D; ยกเว้นภาษี |  [optional]



