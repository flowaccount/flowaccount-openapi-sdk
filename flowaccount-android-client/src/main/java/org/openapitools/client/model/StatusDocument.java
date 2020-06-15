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
public class StatusDocument {
  
  @SerializedName("status")
  private Integer status = null;
  @SerializedName("statusString")
  private Integer statusString = null;
  @SerializedName("documentType")
  private Integer documentType = null;
  @SerializedName("allowDelete")
  private Boolean allowDelete = null;

  /**
   * เลขสถานะเอกสารฉบับนี้
   **/
  @ApiModelProperty(value = "เลขสถานะเอกสารฉบับนี้")
  public Integer getStatus() {
    return status;
  }
  public void setStatus(Integer status) {
    this.status = status;
  }

  /**
   * ชื่อสถานะเอกสารฉบับนี้
   **/
  @ApiModelProperty(value = "ชื่อสถานะเอกสารฉบับนี้")
  public Integer getStatusString() {
    return statusString;
  }
  public void setStatusString(Integer statusString) {
    this.statusString = statusString;
  }

  /**
   * เลขประเภทเอกสารฉบับนี้
   **/
  @ApiModelProperty(value = "เลขประเภทเอกสารฉบับนี้")
  public Integer getDocumentType() {
    return documentType;
  }
  public void setDocumentType(Integer documentType) {
    this.documentType = documentType;
  }

  /**
   * สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้
   **/
  @ApiModelProperty(value = "สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้")
  public Boolean getAllowDelete() {
    return allowDelete;
  }
  public void setAllowDelete(Boolean allowDelete) {
    this.allowDelete = allowDelete;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StatusDocument statusDocument = (StatusDocument) o;
    return (this.status == null ? statusDocument.status == null : this.status.equals(statusDocument.status)) &&
        (this.statusString == null ? statusDocument.statusString == null : this.statusString.equals(statusDocument.statusString)) &&
        (this.documentType == null ? statusDocument.documentType == null : this.documentType.equals(statusDocument.documentType)) &&
        (this.allowDelete == null ? statusDocument.allowDelete == null : this.allowDelete.equals(statusDocument.allowDelete));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.status == null ? 0: this.status.hashCode());
    result = 31 * result + (this.statusString == null ? 0: this.statusString.hashCode());
    result = 31 * result + (this.documentType == null ? 0: this.documentType.hashCode());
    result = 31 * result + (this.allowDelete == null ? 0: this.allowDelete.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class StatusDocument {\n");
    
    sb.append("  status: ").append(status).append("\n");
    sb.append("  statusString: ").append(statusString).append("\n");
    sb.append("  documentType: ").append(documentType).append("\n");
    sb.append("  allowDelete: ").append(allowDelete).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}