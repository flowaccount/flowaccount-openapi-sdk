/**
 * FlowAccount Open API
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package org.openapitools.client.model;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class AttachmentResponseData {
  
  @SerializedName("attachmentId")
  private Long attachmentId = null;
  @SerializedName("createdOn")
  private Object createdOn = null;
  @SerializedName("attachmentName")
  private String attachmentName = null;
  @SerializedName("orderNumber")
  private Long orderNumber = null;
  @SerializedName("isDisplay")
  private Boolean isDisplay = true;
  @SerializedName("attachmentPath")
  private String attachmentPath = null;

  /**
   * เลข Id ไฟล์แนบเอกสาร
   **/
  @ApiModelProperty(value = "เลข Id ไฟล์แนบเอกสาร")
  public Long getAttachmentId() {
    return attachmentId;
  }
  public void setAttachmentId(Long attachmentId) {
    this.attachmentId = attachmentId;
  }

  /**
   * วันที่แนบไฟล์เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
   **/
  @ApiModelProperty(value = "วันที่แนบไฟล์เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")
  public Object getCreatedOn() {
    return createdOn;
  }
  public void setCreatedOn(Object createdOn) {
    this.createdOn = createdOn;
  }

  /**
   * ชื่อไฟล์แนบเอกสาร
   **/
  @ApiModelProperty(value = "ชื่อไฟล์แนบเอกสาร")
  public String getAttachmentName() {
    return attachmentName;
  }
  public void setAttachmentName(String attachmentName) {
    this.attachmentName = attachmentName;
  }

  /**
   * ลำดับไฟล์แนบเอกสาร
   **/
  @ApiModelProperty(value = "ลำดับไฟล์แนบเอกสาร")
  public Long getOrderNumber() {
    return orderNumber;
  }
  public void setOrderNumber(Long orderNumber) {
    this.orderNumber = orderNumber;
  }

  /**
   * สถานะการแสดงไฟล์แนบเอกสาร
   **/
  @ApiModelProperty(value = "สถานะการแสดงไฟล์แนบเอกสาร")
  public Boolean getIsDisplay() {
    return isDisplay;
  }
  public void setIsDisplay(Boolean isDisplay) {
    this.isDisplay = isDisplay;
  }

  /**
   * path ที่อยู่ไฟล์แนบเอกสาร
   **/
  @ApiModelProperty(value = "path ที่อยู่ไฟล์แนบเอกสาร")
  public String getAttachmentPath() {
    return attachmentPath;
  }
  public void setAttachmentPath(String attachmentPath) {
    this.attachmentPath = attachmentPath;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AttachmentResponseData attachmentResponseData = (AttachmentResponseData) o;
    return (this.attachmentId == null ? attachmentResponseData.attachmentId == null : this.attachmentId.equals(attachmentResponseData.attachmentId)) &&
        (this.createdOn == null ? attachmentResponseData.createdOn == null : this.createdOn.equals(attachmentResponseData.createdOn)) &&
        (this.attachmentName == null ? attachmentResponseData.attachmentName == null : this.attachmentName.equals(attachmentResponseData.attachmentName)) &&
        (this.orderNumber == null ? attachmentResponseData.orderNumber == null : this.orderNumber.equals(attachmentResponseData.orderNumber)) &&
        (this.isDisplay == null ? attachmentResponseData.isDisplay == null : this.isDisplay.equals(attachmentResponseData.isDisplay)) &&
        (this.attachmentPath == null ? attachmentResponseData.attachmentPath == null : this.attachmentPath.equals(attachmentResponseData.attachmentPath));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.attachmentId == null ? 0: this.attachmentId.hashCode());
    result = 31 * result + (this.createdOn == null ? 0: this.createdOn.hashCode());
    result = 31 * result + (this.attachmentName == null ? 0: this.attachmentName.hashCode());
    result = 31 * result + (this.orderNumber == null ? 0: this.orderNumber.hashCode());
    result = 31 * result + (this.isDisplay == null ? 0: this.isDisplay.hashCode());
    result = 31 * result + (this.attachmentPath == null ? 0: this.attachmentPath.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class AttachmentResponseData {\n");
    
    sb.append("  attachmentId: ").append(attachmentId).append("\n");
    sb.append("  createdOn: ").append(createdOn).append("\n");
    sb.append("  attachmentName: ").append(attachmentName).append("\n");
    sb.append("  orderNumber: ").append(orderNumber).append("\n");
    sb.append("  isDisplay: ").append(isDisplay).append("\n");
    sb.append("  attachmentPath: ").append(attachmentPath).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
