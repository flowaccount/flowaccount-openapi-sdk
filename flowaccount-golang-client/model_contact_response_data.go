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
// ContactResponseData struct for ContactResponseData
type ContactResponseData struct {
	// จำนวนรายชื่อติดต่อทั้งหมด
	Total int32 `json:"total,omitempty"`
	// หน้าที่แสดงรายชื่อผู้ติดต่อ
	CurrentPage int32 `json:"currentPage,omitempty"`
	// ข้อมูลรายชื่อผู้ติดต่อ
	List []Contact `json:"list,omitempty"`
	// database
	IsDB bool `json:"isDB,omitempty"`
}
