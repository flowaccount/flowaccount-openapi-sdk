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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SimpleDocumentResponseAllOfDataCompany model module.
 * @module model/SimpleDocumentResponseAllOfDataCompany
 * @version 2-oas3
 */
class SimpleDocumentResponseAllOfDataCompany {
    /**
     * Constructs a new <code>SimpleDocumentResponseAllOfDataCompany</code>.
     * ข้อมูลบริษัทของคุณในเอกสาร
     * @alias module:model/SimpleDocumentResponseAllOfDataCompany
     */
    constructor() { 
        
        SimpleDocumentResponseAllOfDataCompany.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimpleDocumentResponseAllOfDataCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleDocumentResponseAllOfDataCompany} obj Optional instance to populate.
     * @return {module:model/SimpleDocumentResponseAllOfDataCompany} The populated <code>SimpleDocumentResponseAllOfDataCompany</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleDocumentResponseAllOfDataCompany();

            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('companyNameEn')) {
                obj['companyNameEn'] = ApiClient.convertToType(data['companyNameEn'], 'String');
            }
            if (data.hasOwnProperty('companyAddress')) {
                obj['companyAddress'] = ApiClient.convertToType(data['companyAddress'], 'String');
            }
            if (data.hasOwnProperty('companyAddressEn')) {
                obj['companyAddressEn'] = ApiClient.convertToType(data['companyAddressEn'], 'String');
            }
            if (data.hasOwnProperty('companyTaxId')) {
                obj['companyTaxId'] = ApiClient.convertToType(data['companyTaxId'], 'String');
            }
            if (data.hasOwnProperty('companyBranch')) {
                obj['companyBranch'] = ApiClient.convertToType(data['companyBranch'], 'String');
            }
            if (data.hasOwnProperty('companyBranchEn')) {
                obj['companyBranchEn'] = ApiClient.convertToType(data['companyBranchEn'], 'String');
            }
            if (data.hasOwnProperty('companyPhone')) {
                obj['companyPhone'] = ApiClient.convertToType(data['companyPhone'], 'String');
            }
            if (data.hasOwnProperty('companyMobile')) {
                obj['companyMobile'] = ApiClient.convertToType(data['companyMobile'], 'String');
            }
            if (data.hasOwnProperty('companyFax')) {
                obj['companyFax'] = ApiClient.convertToType(data['companyFax'], 'String');
            }
            if (data.hasOwnProperty('companyWebsite')) {
                obj['companyWebsite'] = ApiClient.convertToType(data['companyWebsite'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ชื่อบริษัท
 * @member {String} companyName
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyName'] = undefined;

/**
 * ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
 * @member {String} companyNameEn
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyNameEn'] = undefined;

/**
 * ที่อยู่บริษัท
 * @member {String} companyAddress
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyAddress'] = undefined;

/**
 * ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
 * @member {String} companyAddressEn
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyAddressEn'] = undefined;

/**
 * เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
 * @member {String} companyTaxId
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyTaxId'] = undefined;

/**
 * ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
 * @member {String} companyBranch
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyBranch'] = undefined;

/**
 * ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>
 * @member {String} companyBranchEn
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyBranchEn'] = undefined;

/**
 * เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
 * @member {String} companyPhone
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyPhone'] = undefined;

/**
 * เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
 * @member {String} companyMobile
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyMobile'] = undefined;

/**
 * เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
 * @member {String} companyFax
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyFax'] = undefined;

/**
 * เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
 * @member {String} companyWebsite
 */
SimpleDocumentResponseAllOfDataCompany.prototype['companyWebsite'] = undefined;






export default SimpleDocumentResponseAllOfDataCompany;

