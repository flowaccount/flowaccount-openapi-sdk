# ProductItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_structure_type** | **str** |  | 
**type** | **int** | ประเภทสินค้า &lt;br&gt; 1 &#x3D; บริการ (service) &lt;br&gt; 3 &#x3D; สินค้าไม่นับสต๊อก (non inventory) &lt;br&gt; 5 &#x3D; สินค้านับสต๊อก (inventory) | [optional] [default to 1]
**name** | **str** | ชื่อสินค้า | 
**description** | **str** | รายละเอียดสินค้า | [optional] 
**quantity** | **float** | จำนวนสินค้า | 
**unit_name** | **str** | หน่วยสินค้า | [optional] 
**price_per_unit** | **float** | ราคาสินค้าต่อหน่วย | 
**total** | **float** | ราคารวมสินค้า | 
**sell_chart_of_account_code** | **str** | เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย &lt;br&gt; &lt;ex&gt;Example: 41111&lt;/ex&gt; | [optional] 
**buy_chart_of_account_code** | **str** | เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ &lt;br&gt; &lt;ex&gt;Example: 51111.02&lt;/ex&gt; | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


