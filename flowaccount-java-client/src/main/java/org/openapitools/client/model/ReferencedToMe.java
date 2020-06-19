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
 * ReferencedToMe
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-19T11:31:57.605116+07:00[Asia/Bangkok]")
public class ReferencedToMe {
  public static final String SERIALIZED_NAME_REFERENCE_ID = "referenceId";
  @SerializedName(SERIALIZED_NAME_REFERENCE_ID)
  private Integer referenceId;

  public static final String SERIALIZED_NAME_REFERENCE_DOCUMENT_TYPE = "referenceDocumentType";
  @SerializedName(SERIALIZED_NAME_REFERENCE_DOCUMENT_TYPE)
  private Integer referenceDocumentType;

  public static final String SERIALIZED_NAME_REFERENCE_DOCUMENT_SERIAL = "referenceDocumentSerial";
  @SerializedName(SERIALIZED_NAME_REFERENCE_DOCUMENT_SERIAL)
  private String referenceDocumentSerial;

  public static final String SERIALIZED_NAME_DOCUMENT_ID = "documentId";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_ID)
  private Integer documentId;

  public static final String SERIALIZED_NAME_DOCUMENT_SERIAL = "documentSerial";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_SERIAL)
  private Integer documentSerial;

  public static final String SERIALIZED_NAME_TYPE = "type";
  @SerializedName(SERIALIZED_NAME_TYPE)
  private Integer type = 1;


  public ReferencedToMe referenceId(Integer referenceId) {
    
    this.referenceId = referenceId;
    return this;
  }

   /**
   * ID เอกสารฉบับนี้
   * @return referenceId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ID เอกสารฉบับนี้")

  public Integer getReferenceId() {
    return referenceId;
  }


  public void setReferenceId(Integer referenceId) {
    this.referenceId = referenceId;
  }


  public ReferencedToMe referenceDocumentType(Integer referenceDocumentType) {
    
    this.referenceDocumentType = referenceDocumentType;
    return this;
  }

   /**
   * ประเภทของเอกสารฉบับนี้
   * @return referenceDocumentType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ประเภทของเอกสารฉบับนี้")

  public Integer getReferenceDocumentType() {
    return referenceDocumentType;
  }


  public void setReferenceDocumentType(Integer referenceDocumentType) {
    this.referenceDocumentType = referenceDocumentType;
  }


  public ReferencedToMe referenceDocumentSerial(String referenceDocumentSerial) {
    
    this.referenceDocumentSerial = referenceDocumentSerial;
    return this;
  }

   /**
   * เลขที่เอกสารฉบับนี้
   * @return referenceDocumentSerial
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลขที่เอกสารฉบับนี้")

  public String getReferenceDocumentSerial() {
    return referenceDocumentSerial;
  }


  public void setReferenceDocumentSerial(String referenceDocumentSerial) {
    this.referenceDocumentSerial = referenceDocumentSerial;
  }


  public ReferencedToMe documentId(Integer documentId) {
    
    this.documentId = documentId;
    return this;
  }

   /**
   * ID เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้
   * @return documentId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ID เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้")

  public Integer getDocumentId() {
    return documentId;
  }


  public void setDocumentId(Integer documentId) {
    this.documentId = documentId;
  }


  public ReferencedToMe documentSerial(Integer documentSerial) {
    
    this.documentSerial = documentSerial;
    return this;
  }

   /**
   * เลขที่เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้
   * @return documentSerial
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลขที่เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้")

  public Integer getDocumentSerial() {
    return documentSerial;
  }


  public void setDocumentSerial(Integer documentSerial) {
    this.documentSerial = documentSerial;
  }


  public ReferencedToMe type(Integer type) {
    
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getType() {
    return type;
  }


  public void setType(Integer type) {
    this.type = type;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReferencedToMe referencedToMe = (ReferencedToMe) o;
    return Objects.equals(this.referenceId, referencedToMe.referenceId) &&
        Objects.equals(this.referenceDocumentType, referencedToMe.referenceDocumentType) &&
        Objects.equals(this.referenceDocumentSerial, referencedToMe.referenceDocumentSerial) &&
        Objects.equals(this.documentId, referencedToMe.documentId) &&
        Objects.equals(this.documentSerial, referencedToMe.documentSerial) &&
        Objects.equals(this.type, referencedToMe.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(referenceId, referenceDocumentType, referenceDocumentSerial, documentId, documentSerial, type);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReferencedToMe {\n");
    sb.append("    referenceId: ").append(toIndentedString(referenceId)).append("\n");
    sb.append("    referenceDocumentType: ").append(toIndentedString(referenceDocumentType)).append("\n");
    sb.append("    referenceDocumentSerial: ").append(toIndentedString(referenceDocumentSerial)).append("\n");
    sb.append("    documentId: ").append(toIndentedString(documentId)).append("\n");
    sb.append("    documentSerial: ").append(toIndentedString(documentSerial)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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

