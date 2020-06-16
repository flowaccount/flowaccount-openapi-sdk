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
 * CompanyInfo
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-17T00:38:54.499089+07:00[Asia/Bangkok]")
public class CompanyInfo {
  public static final String SERIALIZED_NAME_COMPANY_TYPE = "companyType";
  @SerializedName(SERIALIZED_NAME_COMPANY_TYPE)
  private String companyType = "10";

  public static final String SERIALIZED_NAME_COMPNAY_NAME = "compnayName";
  @SerializedName(SERIALIZED_NAME_COMPNAY_NAME)
  private String compnayName;

  public static final String SERIALIZED_NAME_COMPANY_NAME_EN = "companyNameEn";
  @SerializedName(SERIALIZED_NAME_COMPANY_NAME_EN)
  private String companyNameEn;

  public static final String SERIALIZED_NAME_COMPANY_ADDRESS = "companyAddress";
  @SerializedName(SERIALIZED_NAME_COMPANY_ADDRESS)
  private String companyAddress;

  public static final String SERIALIZED_NAME_COMPANY_ADDRESS_EN = "companyAddressEn";
  @SerializedName(SERIALIZED_NAME_COMPANY_ADDRESS_EN)
  private String companyAddressEn;

  public static final String SERIALIZED_NAME_COMPANY_ZIP_CODE = "companyZipCode";
  @SerializedName(SERIALIZED_NAME_COMPANY_ZIP_CODE)
  private String companyZipCode;

  public static final String SERIALIZED_NAME_COMPANY_TAX_ID = "companyTaxId";
  @SerializedName(SERIALIZED_NAME_COMPANY_TAX_ID)
  private String companyTaxId;

  public static final String SERIALIZED_NAME_COMPANY_BRANCH = "companyBranch";
  @SerializedName(SERIALIZED_NAME_COMPANY_BRANCH)
  private String companyBranch = "สำนักงานใหญ่";

  public static final String SERIALIZED_NAME_COMPANY_BRANCH_EN = "companyBranchEn";
  @SerializedName(SERIALIZED_NAME_COMPANY_BRANCH_EN)
  private String companyBranchEn;

  public static final String SERIALIZED_NAME_COMPANY_BRANCH_CODE = "companyBranchCode";
  @SerializedName(SERIALIZED_NAME_COMPANY_BRANCH_CODE)
  private String companyBranchCode;

  public static final String SERIALIZED_NAME_COMPANY_PHONE = "companyPhone";
  @SerializedName(SERIALIZED_NAME_COMPANY_PHONE)
  private String companyPhone;

  public static final String SERIALIZED_NAME_COMPANY_MOBILE = "companyMobile";
  @SerializedName(SERIALIZED_NAME_COMPANY_MOBILE)
  private String companyMobile;

  public static final String SERIALIZED_NAME_COMPANY_FAX = "companyFax";
  @SerializedName(SERIALIZED_NAME_COMPANY_FAX)
  private String companyFax;

  public static final String SERIALIZED_NAME_COMPANY_WEBSITE = "companyWebsite";
  @SerializedName(SERIALIZED_NAME_COMPANY_WEBSITE)
  private String companyWebsite;


  public CompanyInfo companyType(String companyType) {
    
    this.companyType = companyType;
    return this;
  }

   /**
   * ประเภทธุรกิจ &lt;br&gt; 10 &#x3D; บริษัท - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 20 &#x3D; บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 30 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 40 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 50 &#x3D; ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 60 &#x3D; ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม
   * @return companyType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ประเภทธุรกิจ <br> 10 = บริษัท - จดภาษีมูลค่าเพิ่มแล้ว <br> 20 = บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 30 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 40 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 50 = ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว <br> 60 = ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม")

  public String getCompanyType() {
    return companyType;
  }


  public void setCompanyType(String companyType) {
    this.companyType = companyType;
  }


  public CompanyInfo compnayName(String compnayName) {
    
    this.compnayName = compnayName;
    return this;
  }

   /**
   * ชื่อบริษัท
   * @return compnayName
  **/
  @ApiModelProperty(required = true, value = "ชื่อบริษัท")

  public String getCompnayName() {
    return compnayName;
  }


  public void setCompnayName(String compnayName) {
    this.compnayName = compnayName;
  }


  public CompanyInfo companyNameEn(String companyNameEn) {
    
    this.companyNameEn = companyNameEn;
    return this;
  }

   /**
   * ชื่อบริษัท ภาษาอังกฤษ
   * @return companyNameEn
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อบริษัท ภาษาอังกฤษ")

  public String getCompanyNameEn() {
    return companyNameEn;
  }


  public void setCompanyNameEn(String companyNameEn) {
    this.companyNameEn = companyNameEn;
  }


  public CompanyInfo companyAddress(String companyAddress) {
    
    this.companyAddress = companyAddress;
    return this;
  }

   /**
   * ที่อยู่บริษัท
   * @return companyAddress
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ที่อยู่บริษัท")

  public String getCompanyAddress() {
    return companyAddress;
  }


  public void setCompanyAddress(String companyAddress) {
    this.companyAddress = companyAddress;
  }


  public CompanyInfo companyAddressEn(String companyAddressEn) {
    
    this.companyAddressEn = companyAddressEn;
    return this;
  }

   /**
   * ที่อยู่บริษัท ภาษาอังกฤษ
   * @return companyAddressEn
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ที่อยู่บริษัท ภาษาอังกฤษ")

  public String getCompanyAddressEn() {
    return companyAddressEn;
  }


  public void setCompanyAddressEn(String companyAddressEn) {
    this.companyAddressEn = companyAddressEn;
  }


  public CompanyInfo companyZipCode(String companyZipCode) {
    
    this.companyZipCode = companyZipCode;
    return this;
  }

   /**
   * รหัสไปรษณีย์ บริษัท &lt;br&gt;&lt;ex&gt;Example: 10150&lt;/ex&gt;
   * @return companyZipCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รหัสไปรษณีย์ บริษัท <br><ex>Example: 10150</ex>")

  public String getCompanyZipCode() {
    return companyZipCode;
  }


  public void setCompanyZipCode(String companyZipCode) {
    this.companyZipCode = companyZipCode;
  }


  public CompanyInfo companyTaxId(String companyTaxId) {
    
    this.companyTaxId = companyTaxId;
    return this;
  }

   /**
   * เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt;
   * @return companyTaxId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>")

  public String getCompanyTaxId() {
    return companyTaxId;
  }


  public void setCompanyTaxId(String companyTaxId) {
    this.companyTaxId = companyTaxId;
  }


  public CompanyInfo companyBranch(String companyBranch) {
    
    this.companyBranch = companyBranch;
    return this;
  }

   /**
   * ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่&lt;/ex&gt;
   * @return companyBranch
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่</ex>")

  public String getCompanyBranch() {
    return companyBranch;
  }


  public void setCompanyBranch(String companyBranch) {
    this.companyBranch = companyBranch;
  }


  public CompanyInfo companyBranchEn(String companyBranchEn) {
    
    this.companyBranchEn = companyBranchEn;
    return this;
  }

   /**
   * ชื่อ และ รหัสสาขา ภาษาอังกฤษ &lt;br&gt;&lt;ex&gt;Example: Head Office&lt;/ex&gt;
   * @return companyBranchEn
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อ และ รหัสสาขา ภาษาอังกฤษ <br><ex>Example: Head Office</ex>")

  public String getCompanyBranchEn() {
    return companyBranchEn;
  }


  public void setCompanyBranchEn(String companyBranchEn) {
    this.companyBranchEn = companyBranchEn;
  }


  public CompanyInfo companyBranchCode(String companyBranchCode) {
    
    this.companyBranchCode = companyBranchCode;
    return this;
  }

   /**
   * รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: 00000&lt;/ex&gt;
   * @return companyBranchCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รหัสสาขา <br><ex>Example: 00000</ex>")

  public String getCompanyBranchCode() {
    return companyBranchCode;
  }


  public void setCompanyBranchCode(String companyBranchCode) {
    this.companyBranchCode = companyBranchCode;
  }


  public CompanyInfo companyPhone(String companyPhone) {
    
    this.companyPhone = companyPhone;
    return this;
  }

   /**
   * เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt;
   * @return companyPhone
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>")

  public String getCompanyPhone() {
    return companyPhone;
  }


  public void setCompanyPhone(String companyPhone) {
    this.companyPhone = companyPhone;
  }


  public CompanyInfo companyMobile(String companyMobile) {
    
    this.companyMobile = companyMobile;
    return this;
  }

   /**
   * เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt;
   * @return companyMobile
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>")

  public String getCompanyMobile() {
    return companyMobile;
  }


  public void setCompanyMobile(String companyMobile) {
    this.companyMobile = companyMobile;
  }


  public CompanyInfo companyFax(String companyFax) {
    
    this.companyFax = companyFax;
    return this;
  }

   /**
   * เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt;
   * @return companyFax
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>")

  public String getCompanyFax() {
    return companyFax;
  }


  public void setCompanyFax(String companyFax) {
    this.companyFax = companyFax;
  }


  public CompanyInfo companyWebsite(String companyWebsite) {
    
    this.companyWebsite = companyWebsite;
    return this;
  }

   /**
   * เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt;
   * @return companyWebsite
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>")

  public String getCompanyWebsite() {
    return companyWebsite;
  }


  public void setCompanyWebsite(String companyWebsite) {
    this.companyWebsite = companyWebsite;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CompanyInfo companyInfo = (CompanyInfo) o;
    return Objects.equals(this.companyType, companyInfo.companyType) &&
        Objects.equals(this.compnayName, companyInfo.compnayName) &&
        Objects.equals(this.companyNameEn, companyInfo.companyNameEn) &&
        Objects.equals(this.companyAddress, companyInfo.companyAddress) &&
        Objects.equals(this.companyAddressEn, companyInfo.companyAddressEn) &&
        Objects.equals(this.companyZipCode, companyInfo.companyZipCode) &&
        Objects.equals(this.companyTaxId, companyInfo.companyTaxId) &&
        Objects.equals(this.companyBranch, companyInfo.companyBranch) &&
        Objects.equals(this.companyBranchEn, companyInfo.companyBranchEn) &&
        Objects.equals(this.companyBranchCode, companyInfo.companyBranchCode) &&
        Objects.equals(this.companyPhone, companyInfo.companyPhone) &&
        Objects.equals(this.companyMobile, companyInfo.companyMobile) &&
        Objects.equals(this.companyFax, companyInfo.companyFax) &&
        Objects.equals(this.companyWebsite, companyInfo.companyWebsite);
  }

  @Override
  public int hashCode() {
    return Objects.hash(companyType, compnayName, companyNameEn, companyAddress, companyAddressEn, companyZipCode, companyTaxId, companyBranch, companyBranchEn, companyBranchCode, companyPhone, companyMobile, companyFax, companyWebsite);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CompanyInfo {\n");
    sb.append("    companyType: ").append(toIndentedString(companyType)).append("\n");
    sb.append("    compnayName: ").append(toIndentedString(compnayName)).append("\n");
    sb.append("    companyNameEn: ").append(toIndentedString(companyNameEn)).append("\n");
    sb.append("    companyAddress: ").append(toIndentedString(companyAddress)).append("\n");
    sb.append("    companyAddressEn: ").append(toIndentedString(companyAddressEn)).append("\n");
    sb.append("    companyZipCode: ").append(toIndentedString(companyZipCode)).append("\n");
    sb.append("    companyTaxId: ").append(toIndentedString(companyTaxId)).append("\n");
    sb.append("    companyBranch: ").append(toIndentedString(companyBranch)).append("\n");
    sb.append("    companyBranchEn: ").append(toIndentedString(companyBranchEn)).append("\n");
    sb.append("    companyBranchCode: ").append(toIndentedString(companyBranchCode)).append("\n");
    sb.append("    companyPhone: ").append(toIndentedString(companyPhone)).append("\n");
    sb.append("    companyMobile: ").append(toIndentedString(companyMobile)).append("\n");
    sb.append("    companyFax: ").append(toIndentedString(companyFax)).append("\n");
    sb.append("    companyWebsite: ").append(toIndentedString(companyWebsite)).append("\n");
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

