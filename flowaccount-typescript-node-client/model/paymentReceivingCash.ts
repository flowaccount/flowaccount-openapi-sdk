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

export class PaymentReceivingCash {
    /**
    * รับชำระเงิน ด้วยเงินสด
    */
    'paymentStructureType': string | null;
    /**
    * id เอกสาร
    */
    'documentId': number;
    /**
    * ประเภทการเก็บเงิน <br> 1 = เงินสด
    */
    'paymentMethod': number;
    /**
    * วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    */
    'paymentDate': string;
    /**
    * จำนวนเงินยอดรับสุทธิ <br> <ex> Example : 100.00 </ex>
    */
    'collected': number;
    /**
    * ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br>
    */
    'paymentDeductionType'?: number;
    /**
    * จำนวนเงินยอดรายการปรับลด <br> <ex> Example : 100.00 </ex>
    */
    'paymentDeductionAmount'?: number;
    /**
    * เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
    */
    'withheldPercentage'?: number;
    /**
    * จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
    */
    'withheldAmount'?: number;
    /**
    * หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
    */
    'paymentRemarks'?: string;
    /**
    * สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
    */
    'remainingCollectedType'?: number;
    /**
    * จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
    */
    'remainingCollected'?: number;

    static discriminator: string | undefined = "paymentStructureType";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentStructureType",
            "baseName": "paymentStructureType",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "number"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "number"
        },
        {
            "name": "paymentDate",
            "baseName": "paymentDate",
            "type": "string"
        },
        {
            "name": "collected",
            "baseName": "collected",
            "type": "number"
        },
        {
            "name": "paymentDeductionType",
            "baseName": "paymentDeductionType",
            "type": "number"
        },
        {
            "name": "paymentDeductionAmount",
            "baseName": "paymentDeductionAmount",
            "type": "number"
        },
        {
            "name": "withheldPercentage",
            "baseName": "withheldPercentage",
            "type": "number"
        },
        {
            "name": "withheldAmount",
            "baseName": "withheldAmount",
            "type": "number"
        },
        {
            "name": "paymentRemarks",
            "baseName": "paymentRemarks",
            "type": "string"
        },
        {
            "name": "remainingCollectedType",
            "baseName": "remainingCollectedType",
            "type": "number"
        },
        {
            "name": "remainingCollected",
            "baseName": "remainingCollected",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PaymentReceivingCash.attributeTypeMap;
    }
}

