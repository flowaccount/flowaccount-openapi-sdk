/**
 * FlowAccount Open API
 * FlowAccount.com โปรแกรมบัญชีออนไลน์ใช้งานง่าย สำหรับธุรกิจที่พึ่งเริ่มต้น   # Introduction **Servers Production**    site: https://www.flowaccount.com    api url: https://openapi.flowaccount.com/v1    **Beta test**   site: http://sandbox-new.flowaccount.com/    api url: https://openapi.flowaccount.com/test    **PostMan Collection**   site: https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CompanyInfo } from './companyInfo';
import { CompanyInfoResponseAllOf } from './companyInfoResponseAllOf';

export class CompanyInfoResponse {
    /**
    * รหัสบริษัท
    */
    'companyId'?: number;
    /**
    * ประเภทธุรกิจ <br> 10 = บริษัท - จดภาษีมูลค่าเพิ่มแล้ว <br> 20 = บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 30 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 40 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 50 = ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว <br> 60 = ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม
    */
    'companyType'?: string;
    /**
    * ชื่อบริษัท
    */
    'compnayName': string;
    /**
    * ชื่อบริษัท ภาษาอังกฤษ
    */
    'companyNameEn'?: string;
    /**
    * ที่อยู่บริษัท
    */
    'companyAddress'?: string;
    /**
    * ที่อยู่บริษัท ภาษาอังกฤษ
    */
    'companyAddressEn'?: string;
    /**
    * รหัสไปรษณีย์ บริษัท <br><ex>Example: 10150</ex>
    */
    'companyZipCode'?: string;
    /**
    * เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
    */
    'companyTaxId'?: string;
    /**
    * ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่</ex>
    */
    'companyBranch'?: string;
    /**
    * ชื่อ และ รหัสสาขา ภาษาอังกฤษ <br><ex>Example: Head Office</ex>
    */
    'companyBranchEn'?: string;
    /**
    * รหัสสาขา <br><ex>Example: 00000</ex>
    */
    'companyBranchCode'?: string;
    /**
    * เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
    */
    'companyPhone'?: string;
    /**
    * เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
    */
    'companyMobile'?: string;
    /**
    * เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
    */
    'companyFax'?: string;
    /**
    * เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
    */
    'companyWebsite'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "number"
        },
        {
            "name": "companyType",
            "baseName": "companyType",
            "type": "string"
        },
        {
            "name": "compnayName",
            "baseName": "compnayName",
            "type": "string"
        },
        {
            "name": "companyNameEn",
            "baseName": "companyNameEn",
            "type": "string"
        },
        {
            "name": "companyAddress",
            "baseName": "companyAddress",
            "type": "string"
        },
        {
            "name": "companyAddressEn",
            "baseName": "companyAddressEn",
            "type": "string"
        },
        {
            "name": "companyZipCode",
            "baseName": "companyZipCode",
            "type": "string"
        },
        {
            "name": "companyTaxId",
            "baseName": "companyTaxId",
            "type": "string"
        },
        {
            "name": "companyBranch",
            "baseName": "companyBranch",
            "type": "string"
        },
        {
            "name": "companyBranchEn",
            "baseName": "companyBranchEn",
            "type": "string"
        },
        {
            "name": "companyBranchCode",
            "baseName": "companyBranchCode",
            "type": "string"
        },
        {
            "name": "companyPhone",
            "baseName": "companyPhone",
            "type": "string"
        },
        {
            "name": "companyMobile",
            "baseName": "companyMobile",
            "type": "string"
        },
        {
            "name": "companyFax",
            "baseName": "companyFax",
            "type": "string"
        },
        {
            "name": "companyWebsite",
            "baseName": "companyWebsite",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CompanyInfoResponse.attributeTypeMap;
    }
}
