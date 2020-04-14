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


export class PaymentPaidCreditCard {
    /**
    * ชำระเงิน ด้วยเช็ค
    */
    'paymentStructureType': string;
    /**
    * id เอกสาร
    */
    'documentId': number;
    /**
    * ประเภทการชำระเงิน <br> 7 = บัตรเครดิต
    */
    'paymentMethod': number;
    /**
    * วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    */
    'paymentDate': string;
    /**
    * จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
    */
    'collected': number;
    /**
    * เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
    */
    'withheldPercentage'?: number;
    /**
    * จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
    */
    'withheldAmount'?: number;
    /**
    * ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    */
    'creditCardBankAccountId'?: number;
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
            "name": "creditCardBankAccountId",
            "baseName": "creditCardBankAccountId",
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
        return PaymentPaidCreditCard.attributeTypeMap;
    }
}

