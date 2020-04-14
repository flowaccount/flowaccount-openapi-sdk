# ProductNonInventory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_structure_type** | **str** | สร้างสินค้าประเภท ไม่นับสต๊อก | [optional] 
**type** | **int** | ระเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก | [default to 1]
**code** | **str** | รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**name** | **str** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | 
**sell_description** | **str** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**sell_price** | **float** | ราคาขายสินค้า | [optional] 
**sell_vat_type** | **int** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**unit_name** | **str** | หน่วยสินค้า | [optional] 
**category_name** | **str** | หมวดสินค้า | [optional] 
**barcode** | **str** | บาร์โค้ด | [optional] 
**buy_description** | **str** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**buy_price** | **float** | ราคาซื้อสินค้า | [optional] 
**buy_vat_type** | **int** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


