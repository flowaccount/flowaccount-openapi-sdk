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
import org.openapitools.client.model.ExpenseSimpleProductItem;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class ExpenseSimpleDocumentAllOf {
  
  @SerializedName("items")
  private List<ExpenseSimpleProductItem> items = null;

  /**
   * รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
   **/
  @ApiModelProperty(value = "รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense")
  public List<ExpenseSimpleProductItem> getItems() {
    return items;
  }
  public void setItems(List<ExpenseSimpleProductItem> items) {
    this.items = items;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExpenseSimpleDocumentAllOf expenseSimpleDocumentAllOf = (ExpenseSimpleDocumentAllOf) o;
    return (this.items == null ? expenseSimpleDocumentAllOf.items == null : this.items.equals(expenseSimpleDocumentAllOf.items));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.items == null ? 0: this.items.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExpenseSimpleDocumentAllOf {\n");
    
    sb.append("  items: ").append(items).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
