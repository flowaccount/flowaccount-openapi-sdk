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

/**
 * data success
 **/
@ApiModel(description = "data success")
public class DeleteResponseData {
  
  @SerializedName("deleteStatus")
  private String deleteStatus = null;

  /**
   *  Status Delete Document or Product or Contact
   **/
  @ApiModelProperty(value = " Status Delete Document or Product or Contact")
  public String getDeleteStatus() {
    return deleteStatus;
  }
  public void setDeleteStatus(String deleteStatus) {
    this.deleteStatus = deleteStatus;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DeleteResponseData deleteResponseData = (DeleteResponseData) o;
    return (this.deleteStatus == null ? deleteResponseData.deleteStatus == null : this.deleteStatus.equals(deleteResponseData.deleteStatus));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.deleteStatus == null ? 0: this.deleteStatus.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class DeleteResponseData {\n");
    
    sb.append("  deleteStatus: ").append(deleteStatus).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
