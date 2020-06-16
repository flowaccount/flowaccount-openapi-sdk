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

export class ProductInventoryBalance {
    /**
    * สร้างสินค้าประเภท นับสต๊อก พร้อมตั้งค่ายอดเริ่มต้น
    */
    'productStructureType'?: string | null;
    /**
    * ประเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก
    */
    'type': number;
    /**
    * รหัสสินค้า / SKU <br> <ex>Example: P001</ex>
    */
    'code'?: string;
    /**
    * ชื่อสินค้า <br> <ex>Example: Product</ex>
    */
    'name': string;
    /**
    * รายละเอียดสินค้า ฝั่งขาย
    */
    'sellDescription'?: string;
    /**
    * ราคาขายสินค้า
    */
    'sellPrice'?: number;
    /**
    * ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี
    */
    'sellVatType'?: number;
    /**
    * หน่วยสินค้า
    */
    'unitName': string;
    /**
    * หมวดสินค้า
    */
    'categoryName'?: string;
    /**
    * บาร์โค้ด
    */
    'barcode'?: string;
    /**
    * รายละเอียดสินค้า ฝั่งซื้อ
    */
    'buyDescription'?: string;
    /**
    * ราคาซื้อสินค้า
    */
    'buyPrice'?: number;
    /**
    * ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี
    */
    'buyVatType'?: number;
    /**
    * วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    */
    'inventoryPublishedOn': string;
    /**
    * จำนวนยอดตั้งต้นสินค้า
    */
    'inventoryQuantity': number;
    /**
    * ราคาซื้อสินค้า
    */
    'inventoryPrice': number;

    static discriminator: string | undefined = "productStructureType";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "productStructureType",
            "baseName": "productStructureType",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "sellDescription",
            "baseName": "sellDescription",
            "type": "string"
        },
        {
            "name": "sellPrice",
            "baseName": "sellPrice",
            "type": "number"
        },
        {
            "name": "sellVatType",
            "baseName": "sellVatType",
            "type": "number"
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string"
        },
        {
            "name": "categoryName",
            "baseName": "categoryName",
            "type": "string"
        },
        {
            "name": "barcode",
            "baseName": "barcode",
            "type": "string"
        },
        {
            "name": "buyDescription",
            "baseName": "buyDescription",
            "type": "string"
        },
        {
            "name": "buyPrice",
            "baseName": "buyPrice",
            "type": "number"
        },
        {
            "name": "buyVatType",
            "baseName": "buyVatType",
            "type": "number"
        },
        {
            "name": "inventoryPublishedOn",
            "baseName": "inventoryPublishedOn",
            "type": "string"
        },
        {
            "name": "inventoryQuantity",
            "baseName": "inventoryQuantity",
            "type": "number"
        },
        {
            "name": "inventoryPrice",
            "baseName": "inventoryPrice",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ProductInventoryBalance.attributeTypeMap;
    }
}

