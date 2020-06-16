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
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.InlineDocumentResponseAllOfData;

/**
 * AllDocumentResponseData
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-17T00:38:54.499089+07:00[Asia/Bangkok]")
public class AllDocumentResponseData {
  public static final String SERIALIZED_NAME_LIST = "list";
  @SerializedName(SERIALIZED_NAME_LIST)
  private List<InlineDocumentResponseAllOfData> list = null;


  public AllDocumentResponseData list(List<InlineDocumentResponseAllOfData> list) {
    
    this.list = list;
    return this;
  }

  public AllDocumentResponseData addListItem(InlineDocumentResponseAllOfData listItem) {
    if (this.list == null) {
      this.list = new ArrayList<InlineDocumentResponseAllOfData>();
    }
    this.list.add(listItem);
    return this;
  }

   /**
   * ข้อมูลรายการสินค้า
   * @return list
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ข้อมูลรายการสินค้า")

  public List<InlineDocumentResponseAllOfData> getList() {
    return list;
  }


  public void setList(List<InlineDocumentResponseAllOfData> list) {
    this.list = list;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AllDocumentResponseData allDocumentResponseData = (AllDocumentResponseData) o;
    return Objects.equals(this.list, allDocumentResponseData.list);
  }

  @Override
  public int hashCode() {
    return Objects.hash(list);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AllDocumentResponseData {\n");
    sb.append("    list: ").append(toIndentedString(list)).append("\n");
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

