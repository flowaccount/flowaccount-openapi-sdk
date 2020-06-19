
# ProductService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **kotlin.Long** | ประเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก | 
**name** | **kotlin.String** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | 
**productStructureType** | **kotlin.String** | สร้างสินค้าประเภท บริการ |  [optional]
**code** | **kotlin.String** | รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; |  [optional]
**sellDescription** | **kotlin.String** | รายละเอียดสินค้า ฝั่งขาย |  [optional]
**sellPrice** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ราคาขายสินค้า |  [optional]
**sellVatType** | **kotlin.Long** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี |  [optional]
**unitName** | **kotlin.String** | หน่วยสินค้า |  [optional]
**categoryName** | **kotlin.String** | หมวดสินค้า |  [optional]
**barcode** | **kotlin.String** | บาร์โค้ด |  [optional]



