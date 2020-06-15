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
// AttachmentResponse struct for AttachmentResponse
type AttachmentResponse struct {
	// action success
	Status bool `json:"status,omitempty"`
	// error message
	Message string `json:"message,omitempty"`
	// error code
	Code int32 `json:"code,omitempty"`
	Data AttachmentResponseData `json:"data,omitempty"`
}
