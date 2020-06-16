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
import { InlineDocumentAllOf } from './inlineDocumentAllOf';
import { InlineProductItem } from './inlineProductItem';
import { UpdateDocument } from './updateDocument';
import { UpgradeDocument } from './upgradeDocument';

export class UpdateInlineDocument extends UpdateDocument {
    /**
    * รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)
    */
    'discountType'?: number;
    /**
    * inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
    */
    'useInlineDiscount'?: boolean;
    /**
    * inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
    */
    'useInlineVat'?: boolean;
    /**
    * ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
    */
    'exemptAmount'?: number | null;
    /**
    * ยอดขายที่คิดภาษีมูลค่าเพิ่ม
    */
    'vatableAmount'?: number | null;
    /**
    * รายการสินค้าใช้งานสำหรับเอกสาร Inline
    */
    'items'?: Array<InlineProductItem>;
    /**
    * สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
    */
    'documentReference'?: Array<UpgradeDocument>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "discountType",
            "baseName": "discountType",
            "type": "number"
        },
        {
            "name": "useInlineDiscount",
            "baseName": "useInlineDiscount",
            "type": "boolean"
        },
        {
            "name": "useInlineVat",
            "baseName": "useInlineVat",
            "type": "boolean"
        },
        {
            "name": "exemptAmount",
            "baseName": "exemptAmount",
            "type": "number"
        },
        {
            "name": "vatableAmount",
            "baseName": "vatableAmount",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<InlineProductItem>"
        },
        {
            "name": "documentReference",
            "baseName": "documentReference",
            "type": "Array<UpgradeDocument>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdateInlineDocument.attributeTypeMap);
    }
}

