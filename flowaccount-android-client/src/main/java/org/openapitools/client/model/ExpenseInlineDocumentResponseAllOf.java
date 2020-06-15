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

import org.openapitools.client.model.ExpenseInlineDocumentResponseAllOfData;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class ExpenseInlineDocumentResponseAllOf {
  
  @SerializedName("data")
  private ExpenseInlineDocumentResponseAllOfData data = null;

  /**
   **/
  @ApiModelProperty(value = "")
  public ExpenseInlineDocumentResponseAllOfData getData() {
    return data;
  }
  public void setData(ExpenseInlineDocumentResponseAllOfData data) {
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
    ExpenseInlineDocumentResponseAllOf expenseInlineDocumentResponseAllOf = (ExpenseInlineDocumentResponseAllOf) o;
    return (this.data == null ? expenseInlineDocumentResponseAllOf.data == null : this.data.equals(expenseInlineDocumentResponseAllOf.data));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.data == null ? 0: this.data.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExpenseInlineDocumentResponseAllOf {\n");
    
    sb.append("  data: ").append(data).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}