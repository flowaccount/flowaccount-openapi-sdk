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
 * The CompanyInfo model module.
 * @module model/CompanyInfo
 * @version 2-oas3
 */
class CompanyInfo {
    /**
     * Constructs a new <code>CompanyInfo</code>.
     * @alias module:model/CompanyInfo
     * @param compnayName {String} ชื่อบริษัท
     */
    constructor(compnayName) { 
        
        CompanyInfo.initialize(this, compnayName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, compnayName) { 
        obj['compnayName'] = compnayName;
    }

    /**
     * Constructs a <code>CompanyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfo} obj Optional instance to populate.
     * @return {module:model/CompanyInfo} The populated <code>CompanyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyInfo();

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
 * ประเภทธุรกิจ <br> 10 = บริษัท - จดภาษีมูลค่าเพิ่มแล้ว <br> 20 = บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 30 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 40 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 50 = ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว <br> 60 = ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม
 * @member {String} companyType
 * @default '10'
 */
CompanyInfo.prototype['companyType'] = '10';

/**
 * ชื่อบริษัท
 * @member {String} compnayName
 */
CompanyInfo.prototype['compnayName'] = undefined;

/**
 * ชื่อบริษัท ภาษาอังกฤษ
 * @member {String} companyNameEn
 */
CompanyInfo.prototype['companyNameEn'] = undefined;

/**
 * ที่อยู่บริษัท
 * @member {String} companyAddress
 */
CompanyInfo.prototype['companyAddress'] = undefined;

/**
 * ที่อยู่บริษัท ภาษาอังกฤษ
 * @member {String} companyAddressEn
 */
CompanyInfo.prototype['companyAddressEn'] = undefined;

/**
 * รหัสไปรษณีย์ บริษัท <br><ex>Example: 10150</ex>
 * @member {String} companyZipCode
 */
CompanyInfo.prototype['companyZipCode'] = undefined;

/**
 * เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
 * @member {String} companyTaxId
 */
CompanyInfo.prototype['companyTaxId'] = undefined;

/**
 * ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่</ex>
 * @member {String} companyBranch
 * @default 'สำนักงานใหญ่'
 */
CompanyInfo.prototype['companyBranch'] = 'สำนักงานใหญ่';

/**
 * ชื่อ และ รหัสสาขา ภาษาอังกฤษ <br><ex>Example: Head Office</ex>
 * @member {String} companyBranchEn
 */
CompanyInfo.prototype['companyBranchEn'] = undefined;

/**
 * รหัสสาขา <br><ex>Example: 00000</ex>
 * @member {String} companyBranchCode
 */
CompanyInfo.prototype['companyBranchCode'] = undefined;

/**
 * เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
 * @member {String} companyPhone
 */
CompanyInfo.prototype['companyPhone'] = undefined;

/**
 * เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
 * @member {String} companyMobile
 */
CompanyInfo.prototype['companyMobile'] = undefined;

/**
 * เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
 * @member {String} companyFax
 */
CompanyInfo.prototype['companyFax'] = undefined;

/**
 * เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
 * @member {String} companyWebsite
 */
CompanyInfo.prototype['companyWebsite'] = undefined;






export default CompanyInfo;

