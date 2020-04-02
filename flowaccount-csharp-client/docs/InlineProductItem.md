
# Flowaccount.OpenAPITools.Model.InlineProductItem

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
**DiscountAmount** | **decimal** | จำนวนส่วนลดสินค้า | [optional] [default to 0M]
**VatRate** | **int** | รูปแบบภาษี &lt;br&gt; 7 &#x3D; ภาษี 7% &lt;br&gt; 0 &#x3D; ภาษี 0% &lt;br&gt; -1 &#x3D; ยกเว้นภาษี | [optional] [default to 7]

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

