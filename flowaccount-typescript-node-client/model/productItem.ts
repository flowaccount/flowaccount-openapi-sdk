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

export class ProductItem {
    /**
    * ประเภทสินค้า <br> 1 = บริการ (service) <br> 3 = สินค้าไม่นับสต๊อก (non inventory) <br> 5 = สินค้านับสต๊อก (inventory)
    */
    'type'?: number;
    /**
    * ชื่อสินค้า
    */
    'name': string;
    /**
    * รายละเอียดสินค้า
    */
    'description'?: string;
    /**
    * จำนวนสินค้า
    */
    'quantity': number;
    /**
    * หน่วยสินค้า
    */
    'unitName'?: string;
    /**
    * ราคาสินค้าต่อหน่วย
    */
    'pricePerUnit': number;
    /**
    * ราคารวมสินค้า
    */
    'total': number;
    /**
    * เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย <br> <ex>Example: 41111</ex>
    */
    'sellChartOfAccountCode'?: string;
    /**
    * เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ <br> <ex>Example: 51111.02</ex>
    */
    'buyChartOfAccountCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string"
        },
        {
            "name": "pricePerUnit",
            "baseName": "pricePerUnit",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "sellChartOfAccountCode",
            "baseName": "sellChartOfAccountCode",
            "type": "string"
        },
        {
            "name": "buyChartOfAccountCode",
            "baseName": "buyChartOfAccountCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProductItem.attributeTypeMap;
    }
}

