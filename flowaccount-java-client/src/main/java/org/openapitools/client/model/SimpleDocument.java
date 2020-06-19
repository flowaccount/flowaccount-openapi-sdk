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
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.Document;
import org.openapitools.client.model.SimpleDocumentAllOf;
import org.openapitools.client.model.SimpleProductItem;
import org.openapitools.client.model.UpgradeDocument;
import org.threeten.bp.LocalDate;

/**
 * SimpleDocument
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-19T11:31:57.605116+07:00[Asia/Bangkok]")
public class SimpleDocument extends Document {
  public static final String SERIALIZED_NAME_ITEMS = "items";
  @SerializedName(SERIALIZED_NAME_ITEMS)
  private List<SimpleProductItem> items = null;

  public static final String SERIALIZED_NAME_DOCUMENT_REFERENCE = "documentReference";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_REFERENCE)
  private List<UpgradeDocument> documentReference = null;


  public SimpleDocument items(List<SimpleProductItem> items) {
    
    this.items = items;
    return this;
  }

  public SimpleDocument addItemsItem(SimpleProductItem itemsItem) {
    if (this.items == null) {
      this.items = new ArrayList<SimpleProductItem>();
    }
    this.items.add(itemsItem);
    return this;
  }

   /**
   * รายการสินค้าใช้งานสำหรับเอกสาร Simple
   * @return items
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รายการสินค้าใช้งานสำหรับเอกสาร Simple")

  public List<SimpleProductItem> getItems() {
    return items;
  }


  public void setItems(List<SimpleProductItem> items) {
    this.items = items;
  }


  public SimpleDocument documentReference(List<UpgradeDocument> documentReference) {
    
    this.documentReference = documentReference;
    return this;
  }

  public SimpleDocument addDocumentReferenceItem(UpgradeDocument documentReferenceItem) {
    if (this.documentReference == null) {
      this.documentReference = new ArrayList<UpgradeDocument>();
    }
    this.documentReference.add(documentReferenceItem);
    return this;
  }

   /**
   * สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
   * @return documentReference
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)")

  public List<UpgradeDocument> getDocumentReference() {
    return documentReference;
  }


  public void setDocumentReference(List<UpgradeDocument> documentReference) {
    this.documentReference = documentReference;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SimpleDocument simpleDocument = (SimpleDocument) o;
    return Objects.equals(this.items, simpleDocument.items) &&
        Objects.equals(this.documentReference, simpleDocument.documentReference) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(items, documentReference, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SimpleDocument {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("    documentReference: ").append(toIndentedString(documentReference)).append("\n");
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

