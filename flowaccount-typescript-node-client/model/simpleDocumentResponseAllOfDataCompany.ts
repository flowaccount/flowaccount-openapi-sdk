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

import { RequestFile } from '../api';

/**
* ข้อมูลบริษัทของคุณในเอกสาร
*/
export class SimpleDocumentResponseAllOfDataCompany {
    /**
    * ชื่อบริษัท
    */
    'companyName'?: string;
    /**
    * ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
    */
    'companyNameEn'?: string;
    /**
    * ที่อยู่บริษัท
    */
    'companyAddress'?: string;
    /**
    * ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
    */
    'companyAddressEn'?: string;
    /**
    * เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
    */
    'companyTaxId'?: string;
    /**
    * ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
    */
    'companyBranch'?: string;
    /**
    * ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>
    */
    'companyBranchEn'?: string;
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
            "name": "companyName",
            "baseName": "companyName",
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
        return SimpleDocumentResponseAllOfDataCompany.attributeTypeMap;
    }
}

