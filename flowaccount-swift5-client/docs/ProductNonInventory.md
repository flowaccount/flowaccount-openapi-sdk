# ProductNonInventory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productStructureType** | **String** | สร้างสินค้าประเภท ไม่นับสต๊อก | [optional] 
**type** | **Int64** | ระเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก | [default to 1]
**code** | **String** | รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**name** | **String** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | 
**sellDescription** | **String** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**sellPrice** | **Double** | ราคาขายสินค้า | [optional] 
**sellVatType** | **Int64** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**unitName** | **String** | หน่วยสินค้า | [optional] 
**categoryName** | **String** | หมวดสินค้า | [optional] 
**barcode** | **String** | บาร์โค้ด | [optional] 
**buyDescription** | **String** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**buyPrice** | **Double** | ราคาซื้อสินค้า | [optional] 
**buyVatType** | **Int64** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


