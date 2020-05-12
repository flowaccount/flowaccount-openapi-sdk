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

import { SimpleDocumentAllOf } from './simpleDocumentAllOf';
import { SimpleProductItem } from './simpleProductItem';
import { UpdateDocument } from './updateDocument';
import { UpgradeDocument } from './upgradeDocument';

export class UpdateSimpleDocument extends UpdateDocument {
    /**
    * รายการสินค้าใช้งานสำหรับเอกสาร Simple
    */
    'items'?: Array<SimpleProductItem>;
    /**
    * สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
    */
    'documentReference'?: Array<UpgradeDocument>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<SimpleProductItem>"
        },
        {
            "name": "documentReference",
            "baseName": "documentReference",
            "type": "Array<UpgradeDocument>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdateSimpleDocument.attributeTypeMap);
    }
}
