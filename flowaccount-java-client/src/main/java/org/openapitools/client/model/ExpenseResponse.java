/*
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

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * ExpenseResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-19T11:31:57.605116+07:00[Asia/Bangkok]")

public class ExpenseResponse {
  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private Boolean status;

  public static final String SERIALIZED_NAME_MESSAGE = "message";
  @SerializedName(SERIALIZED_NAME_MESSAGE)
  private String message;

  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private Integer code;

  public static final String SERIALIZED_NAME_EXPENSE_STRUCTURE_TYPE = "expenseStructureType";
  @SerializedName(SERIALIZED_NAME_EXPENSE_STRUCTURE_TYPE)
  protected String expenseStructureType;

  public ExpenseResponse() {
    this.expenseStructureType = this.getClass().getSimpleName();
  }

  public ExpenseResponse status(Boolean status) {
    
    this.status = status;
    return this;
  }

   /**
   * action success
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "action success")

  public Boolean getStatus() {
    return status;
  }


  public void setStatus(Boolean status) {
    this.status = status;
  }


  public ExpenseResponse message(String message) {
    
    this.message = message;
    return this;
  }

   /**
   * error message
   * @return message
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "error message")

  public String getMessage() {
    return message;
  }


  public void setMessage(String message) {
    this.message = message;
  }


  public ExpenseResponse code(Integer code) {
    
    this.code = code;
    return this;
  }

   /**
   * error code
   * @return code
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "error code")

  public Integer getCode() {
    return code;
  }


  public void setCode(Integer code) {
    this.code = code;
  }


  public ExpenseResponse expenseStructureType(String expenseStructureType) {
    
    this.expenseStructureType = expenseStructureType;
    return this;
  }

   /**
   * Get expenseStructureType
   * @return expenseStructureType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getExpenseStructureType() {
    return expenseStructureType;
  }


  public void setExpenseStructureType(String expenseStructureType) {
    this.expenseStructureType = expenseStructureType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExpenseResponse expenseResponse = (ExpenseResponse) o;
    return Objects.equals(this.status, expenseResponse.status) &&
        Objects.equals(this.message, expenseResponse.message) &&
        Objects.equals(this.code, expenseResponse.code) &&
        Objects.equals(this.expenseStructureType, expenseResponse.expenseStructureType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(status, message, code, expenseStructureType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExpenseResponse {\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    expenseStructureType: ").append(toIndentedString(expenseStructureType)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

