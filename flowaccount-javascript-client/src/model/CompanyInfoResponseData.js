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
 * The CompanyInfoResponseData model module.
 * @module model/CompanyInfoResponseData
 * @version 2-oas3
 */
class CompanyInfoResponseData {
    /**
     * Constructs a new <code>CompanyInfoResponseData</code>.
     * @alias module:model/CompanyInfoResponseData
     */
    constructor() { 
        
        CompanyInfoResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyInfoResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfoResponseData} obj Optional instance to populate.
     * @return {module:model/CompanyInfoResponseData} The populated <code>CompanyInfoResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyInfoResponseData();

            if (data.hasOwnProperty('companyId')) {
                obj['companyId'] = ApiClient.convertToType(data['companyId'], 'Number');
            }
            if (data.hasOwnProperty('companyType')) {
                obj['companyType'] = ApiClient.convertToType(data['companyType'], 'String');
            }
            if (data.hasOwnProperty('compnayName')) {
                obj['compnayName'] = ApiClient.convertToType(data['compnayName'], 'String');
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
            if (data.hasOwnProperty('companyZipCode')) {
                obj['companyZipCode'] = ApiClient.convertToType(data['companyZipCode'], 'String');
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
            if (data.hasOwnProperty('companyBranchCode')) {
                obj['companyBranchCode'] = ApiClient.convertToType(data['companyBranchCode'], 'String');
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
 * รหัสบริษัท
 * @member {Number} companyId
 * @default 0
 */
CompanyInfoResponseData.prototype['companyId'] = 0;

/**
 * ประเภทธุรกิจ <br> 10 = บริษัท - จดภาษีมูลค่าเพิ่มแล้ว <br> 20 = บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 30 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 40 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 50 = ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว <br> 60 = ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม
 * @member {String} companyType
 * @default '10'
 */
CompanyInfoResponseData.prototype['companyType'] = '10';

/**
 * ชื่อบริษัท
 * @member {String} compnayName
 */
CompanyInfoResponseData.prototype['compnayName'] = undefined;

/**
 * ชื่อบริษัท ภาษาอังกฤษ
 * @member {String} companyNameEn
 */
CompanyInfoResponseData.prototype['companyNameEn'] = undefined;

/**
 * ที่อยู่บริษัท
 * @member {String} companyAddress
 */
CompanyInfoResponseData.prototype['companyAddress'] = undefined;

/**
 * ที่อยู่บริษัท ภาษาอังกฤษ
 * @member {String} companyAddressEn
 */
CompanyInfoResponseData.prototype['companyAddressEn'] = undefined;

/**
 * รหัสไปรษณีย์ บริษัท <br><ex>Example: 10150</ex>
 * @member {String} companyZipCode
 */
CompanyInfoResponseData.prototype['companyZipCode'] = undefined;

/**
 * เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
 * @member {String} companyTaxId
 */
CompanyInfoResponseData.prototype['companyTaxId'] = undefined;

/**
 * ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่</ex>
 * @member {String} companyBranch
 * @default 'สำนักงานใหญ่'
 */
CompanyInfoResponseData.prototype['companyBranch'] = 'สำนักงานใหญ่';

/**
 * ชื่อ และ รหัสสาขา ภาษาอังกฤษ <br><ex>Example: Head Office</ex>
 * @member {String} companyBranchEn
 */
CompanyInfoResponseData.prototype['companyBranchEn'] = undefined;

/**
 * รหัสสาขา <br><ex>Example: 00000</ex>
 * @member {String} companyBranchCode
 */
CompanyInfoResponseData.prototype['companyBranchCode'] = undefined;

/**
 * เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
 * @member {String} companyPhone
 */
CompanyInfoResponseData.prototype['companyPhone'] = undefined;

/**
 * เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
 * @member {String} companyMobile
 */
CompanyInfoResponseData.prototype['companyMobile'] = undefined;

/**
 * เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
 * @member {String} companyFax
 */
CompanyInfoResponseData.prototype['companyFax'] = undefined;

/**
 * เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
 * @member {String} companyWebsite
 */
CompanyInfoResponseData.prototype['companyWebsite'] = undefined;






export default CompanyInfoResponseData;

