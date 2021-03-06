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

import java.util.*;
import org.openapitools.client.model.BankAccountResponseData;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class AllBankAccountResponse {
  
  @SerializedName("status")
  private Boolean status = null;
  @SerializedName("message")
  private String message = null;
  @SerializedName("code")
  private Integer code = null;
  @SerializedName("data")
  private List<BankAccountResponseData> data = null;

  /**
   * action success
   **/
  @ApiModelProperty(value = "action success")
  public Boolean getStatus() {
    return status;
  }
  public void setStatus(Boolean status) {
    this.status = status;
  }

  /**
   * error message
   **/
  @ApiModelProperty(value = "error message")
  public String getMessage() {
    return message;
  }
  public void setMessage(String message) {
    this.message = message;
  }

  /**
   * error code
   **/
  @ApiModelProperty(value = "error code")
  public Integer getCode() {
    return code;
  }
  public void setCode(Integer code) {
    this.code = code;
  }

  /**
   * บัญชีธนาคารบริษัทเราทั้งหมด
   **/
  @ApiModelProperty(value = "บัญชีธนาคารบริษัทเราทั้งหมด")
  public List<BankAccountResponseData> getData() {
    return data;
  }
  public void setData(List<BankAccountResponseData> data) {
    this.data = data;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AllBankAccountResponse allBankAccountResponse = (AllBankAccountResponse) o;
    return (this.status == null ? allBankAccountResponse.status == null : this.status.equals(allBankAccountResponse.status)) &&
        (this.message == null ? allBankAccountResponse.message == null : this.message.equals(allBankAccountResponse.message)) &&
        (this.code == null ? allBankAccountResponse.code == null : this.code.equals(allBankAccountResponse.code)) &&
        (this.data == null ? allBankAccountResponse.data == null : this.data.equals(allBankAccountResponse.data));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.status == null ? 0: this.status.hashCode());
    result = 31 * result + (this.message == null ? 0: this.message.hashCode());
    result = 31 * result + (this.code == null ? 0: this.code.hashCode());
    result = 31 * result + (this.data == null ? 0: this.data.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class AllBankAccountResponse {\n");
    
    sb.append("  status: ").append(status).append("\n");
    sb.append("  message: ").append(message).append("\n");
    sb.append("  code: ").append(code).append("\n");
    sb.append("  data: ").append(data).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
