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
 * BankAccountResponseData
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-17T00:38:54.499089+07:00[Asia/Bangkok]")
public class BankAccountResponseData {
  public static final String SERIALIZED_NAME_BANK_ACCOUNT_ID = "bankAccountId";
  @SerializedName(SERIALIZED_NAME_BANK_ACCOUNT_ID)
  private Long bankAccountId;

  public static final String SERIALIZED_NAME_BANK_ACCOUNT_NUMBER = "bankAccountNumber";
  @SerializedName(SERIALIZED_NAME_BANK_ACCOUNT_NUMBER)
  private String bankAccountNumber;

  public static final String SERIALIZED_NAME_BANK_ACCOUNT_NAME = "bankAccountName";
  @SerializedName(SERIALIZED_NAME_BANK_ACCOUNT_NAME)
  private String bankAccountName;

  public static final String SERIALIZED_NAME_BANK_ACCOUNT_TYPE = "bankAccountType";
  @SerializedName(SERIALIZED_NAME_BANK_ACCOUNT_TYPE)
  private Long bankAccountType;

  public static final String SERIALIZED_NAME_BANK_BRANCH = "bankBranch";
  @SerializedName(SERIALIZED_NAME_BANK_BRANCH)
  private String bankBranch;

  public static final String SERIALIZED_NAME_BANK_ID = "bankId";
  @SerializedName(SERIALIZED_NAME_BANK_ID)
  private Long bankId;

  public static final String SERIALIZED_NAME_BANK_NAME = "bankName";
  @SerializedName(SERIALIZED_NAME_BANK_NAME)
  private String bankName;


  public BankAccountResponseData bankAccountId(Long bankAccountId) {
    
    this.bankAccountId = bankAccountId;
    return this;
  }

   /**
   * เลข id บัญชีธนาคาร
   * @return bankAccountId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลข id บัญชีธนาคาร")

  public Long getBankAccountId() {
    return bankAccountId;
  }


  public void setBankAccountId(Long bankAccountId) {
    this.bankAccountId = bankAccountId;
  }


  public BankAccountResponseData bankAccountNumber(String bankAccountNumber) {
    
    this.bankAccountNumber = bankAccountNumber;
    return this;
  }

   /**
   * เลขบัญชี &lt;br&gt; &lt;ex&gt;Example: 0048620000 &lt;/ex&gt;
   * @return bankAccountNumber
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลขบัญชี <br> <ex>Example: 0048620000 </ex>")

  public String getBankAccountNumber() {
    return bankAccountNumber;
  }


  public void setBankAccountNumber(String bankAccountNumber) {
    this.bankAccountNumber = bankAccountNumber;
  }


  public BankAccountResponseData bankAccountName(String bankAccountName) {
    
    this.bankAccountName = bankAccountName;
    return this;
  }

   /**
   * ชื่อบัญชี &lt;br&gt; &lt;ex&gt;Example: บัญชีใช้รับเงิน&lt;/ex&gt;
   * @return bankAccountName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อบัญชี <br> <ex>Example: บัญชีใช้รับเงิน</ex>")

  public String getBankAccountName() {
    return bankAccountName;
  }


  public void setBankAccountName(String bankAccountName) {
    this.bankAccountName = bankAccountName;
  }


  public BankAccountResponseData bankAccountType(Long bankAccountType) {
    
    this.bankAccountType = bankAccountType;
    return this;
  }

   /**
   * ประเภทบัญชีธนาคาร &lt;br&gt; 1 &#x3D; บัญชีออมทรัพย์  &lt;br&gt; 3 &#x3D; บัญชีกระรายวัน &lt;br&gt; 7  &#x3D; บัญชีฝากประจำ
   * @return bankAccountType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ประเภทบัญชีธนาคาร <br> 1 = บัญชีออมทรัพย์  <br> 3 = บัญชีกระรายวัน <br> 7  = บัญชีฝากประจำ")

  public Long getBankAccountType() {
    return bankAccountType;
  }


  public void setBankAccountType(Long bankAccountType) {
    this.bankAccountType = bankAccountType;
  }


  public BankAccountResponseData bankBranch(String bankBranch) {
    
    this.bankBranch = bankBranch;
    return this;
  }

   /**
   * ชื่อสาขาธนาคาร
   * @return bankBranch
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อสาขาธนาคาร")

  public String getBankBranch() {
    return bankBranch;
  }


  public void setBankBranch(String bankBranch) {
    this.bankBranch = bankBranch;
  }


  public BankAccountResponseData bankId(Long bankId) {
    
    this.bankId = bankId;
    return this;
  }

   /**
   * เลข id ธนาคาร
   * @return bankId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลข id ธนาคาร")

  public Long getBankId() {
    return bankId;
  }


  public void setBankId(Long bankId) {
    this.bankId = bankId;
  }


  public BankAccountResponseData bankName(String bankName) {
    
    this.bankName = bankName;
    return this;
  }

   /**
   * ชื่อธนาคาร
   * @return bankName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อธนาคาร")

  public String getBankName() {
    return bankName;
  }


  public void setBankName(String bankName) {
    this.bankName = bankName;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BankAccountResponseData bankAccountResponseData = (BankAccountResponseData) o;
    return Objects.equals(this.bankAccountId, bankAccountResponseData.bankAccountId) &&
        Objects.equals(this.bankAccountNumber, bankAccountResponseData.bankAccountNumber) &&
        Objects.equals(this.bankAccountName, bankAccountResponseData.bankAccountName) &&
        Objects.equals(this.bankAccountType, bankAccountResponseData.bankAccountType) &&
        Objects.equals(this.bankBranch, bankAccountResponseData.bankBranch) &&
        Objects.equals(this.bankId, bankAccountResponseData.bankId) &&
        Objects.equals(this.bankName, bankAccountResponseData.bankName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(bankAccountId, bankAccountNumber, bankAccountName, bankAccountType, bankBranch, bankId, bankName);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankAccountResponseData {\n");
    sb.append("    bankAccountId: ").append(toIndentedString(bankAccountId)).append("\n");
    sb.append("    bankAccountNumber: ").append(toIndentedString(bankAccountNumber)).append("\n");
    sb.append("    bankAccountName: ").append(toIndentedString(bankAccountName)).append("\n");
    sb.append("    bankAccountType: ").append(toIndentedString(bankAccountType)).append("\n");
    sb.append("    bankBranch: ").append(toIndentedString(bankBranch)).append("\n");
    sb.append("    bankId: ").append(toIndentedString(bankId)).append("\n");
    sb.append("    bankName: ").append(toIndentedString(bankName)).append("\n");
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

