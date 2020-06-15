/*
 * FlowAccount Open API
 *
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * API version: 2-oas3
 * Contact: developer_support@flowaccount.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// ProductItem struct for ProductItem
type ProductItem struct {
	DocumentStructureType *string `json:"documentStructureType"`
	// ประเภทสินค้า <br> 1 = บริการ (service) <br> 3 = สินค้าไม่นับสต๊อก (non inventory) <br> 5 = สินค้านับสต๊อก (inventory)
	Type int32 `json:"type,omitempty"`
	// ชื่อสินค้า
	Name string `json:"name"`
	// รายละเอียดสินค้า
	Description string `json:"description,omitempty"`
	// จำนวนสินค้า
	Quantity float32 `json:"quantity"`
	// หน่วยสินค้า
	UnitName string `json:"unitName,omitempty"`
	// ราคาสินค้าต่อหน่วย
	PricePerUnit float32 `json:"pricePerUnit"`
	// ราคารวมสินค้า
	Total float32 `json:"total"`
	// เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย <br> <ex>Example: 41111</ex>
	SellChartOfAccountCode string `json:"sellChartOfAccountCode,omitempty"`
	// เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ <br> <ex>Example: 51111.02</ex>
	BuyChartOfAccountCode string `json:"buyChartOfAccountCode,omitempty"`
}
