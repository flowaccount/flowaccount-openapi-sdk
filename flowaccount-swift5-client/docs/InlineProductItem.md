# InlineProductItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **Int** | ประเภทสินค้า &lt;br&gt; 1 &#x3D; บริการ (service) &lt;br&gt; 3 &#x3D; สินค้าไม่นับสต๊อก (non inventory) &lt;br&gt; 5 &#x3D; สินค้านับสต๊อก (inventory) | [optional] [default to 1]
**name** | **String** | ชื่อสินค้า | 
**description** | **String** | รายละเอียดสินค้า | [optional] 
**quantity** | **Double** | จำนวนสินค้า | 
**unitName** | **String** | หน่วยสินค้า | [optional] 
**pricePerUnit** | **Double** | ราคาสินค้าต่อหน่วย | 
**total** | **Double** | ราคารวมสินค้า | 
**sellChartOfAccountCode** | **String** | เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย &lt;br&gt; &lt;ex&gt;Example: 41111&lt;/ex&gt; | [optional] 
**buyChartOfAccountCode** | **String** | เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ &lt;br&gt; &lt;ex&gt;Example: 51111.02&lt;/ex&gt; | [optional] 
**discountAmount** | **Double** | จำนวนส่วนลดสินค้า | [optional] [default to 0]
**vatRate** | **Int** | รูปแบบภาษี &lt;br&gt; 7 &#x3D; ภาษี 7% &lt;br&gt; 0 &#x3D; ภาษี 0% &lt;br&gt; -1 &#x3D; ยกเว้นภาษี | [optional] [default to 7]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


