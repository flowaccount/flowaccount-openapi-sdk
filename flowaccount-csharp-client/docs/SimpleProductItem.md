
# Flowaccount.OpenAPITools.Model.SimpleProductItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DocumentStructureType** | **string** |  | 
**Type** | **int** | ประเภทสินค้า &lt;br&gt; 1 &#x3D; บริการ (service) &lt;br&gt; 3 &#x3D; สินค้าไม่นับสต๊อก (non inventory) &lt;br&gt; 5 &#x3D; สินค้านับสต๊อก (inventory) | [optional] [default to 1]
**Name** | **string** | ชื่อสินค้า | 
**Description** | **string** | รายละเอียดสินค้า | [optional] 
**Quantity** | **decimal** | จำนวนสินค้า | 
**UnitName** | **string** | หน่วยสินค้า | [optional] 
**PricePerUnit** | **decimal** | ราคาสินค้าต่อหน่วย | 
**Total** | **decimal** | ราคารวมสินค้า | 
**SellChartOfAccountCode** | **string** | เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย &lt;br&gt; &lt;ex&gt;Example: 41111&lt;/ex&gt; | [optional] 
**BuyChartOfAccountCode** | **string** | เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ &lt;br&gt; &lt;ex&gt;Example: 51111.02&lt;/ex&gt; | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

