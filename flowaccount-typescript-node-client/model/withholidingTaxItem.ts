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


export class WithholidingTaxItem {
    /**
    * ประเภทเงินได้ที่จ่าย <br> 1 = 1. เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส ฯลฯ ตามมาตรา 40 (1) <br> 3 = 2. ค่าธรรมเนียม ค่านายหน้า ฯลฯ ตามมาตรา 40 (2) <br> 5 = 3. ค่าแห่งลิขสิทธิ์ ฯลฯ ตามมาตรา 40(3) <br> 7 = 4. (ก) ค่าดอกเบี้ย ฯลฯ ตามมาตรา 40(4) (ก) <br> 11 = 4. (ข)(1.1) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 25 ของกำไรสุทธิ <br> 13 = 4. (ข)(1.2) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 20 ของกำไรสุทธิ <br> 15 = 4. (ข)(1.3) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราอื่น ของกำไรสุทธิ (กรุณาระบุ) <br> 17 = 4. (ข)(2.1) กำไรสุทธิของกิจการที่ได้รับยกเว้นเงินได้นิติบุคคล <br> 19 = 4. (ข)(2.2) เงินปันผลหรือเงินส่วนแบ่งของกำไรที่ได้รับยกเว้น... <br> 21 = 4. (ข)(2.3) กำไรสุทธิส่วนที่ได้หักผลขาดทุนสิทธิยกมาไม่เกิน 5 ปี... <br> 23 = 4. (ข)(2.4) กำไรที่รับรู้ทางบัญชีโดยวิธีส่วนได้เสีย (equity method) <br> 25 = 4. (ข)(2.5) อื่นๆ (กรุณาระบุ) <br> 27 = 5. การจ่ายเงินได้ที่ต้องหักภาษี ณ ที่จ่ายตามคำสั่งกรมสรรพากร.... <br> 29 = 6. อื่นๆ (กรุณาระบุ)
    */
    'incomeType': number;
    /**
    * รายละเอียดหัก ณ ที่จ่าย <br> สำหรับประเภทเงินได้ที่จ่าย ข้อ 4.(ข)(2.5) อื่นๆ และ ข้อ 6. อื่นๆ
    */
    'description'?: string;
    /**
    * อัตราภาษี หัก ณ ที่จ่าย <br> 3 = อัตราภาษี 3% <br> 5 = อัตราภาษี 5% <br> 0.5 = อัตราภาษี 0.5% <br> 0.75 = อัตราภาษี 0.75% <br> 1 = อัตราภาษี 1% <br> 2 = อัตราภาษี 2% <br> 10 = อัตราภาษี 10% <br> 15 = อัตราภาษี 15% <br> -1 = อัตราภาษีเป็นแบบจำนวนเงิน
    */
    'taxRate': number;
    /**
    * จำนวนเงินที่นำมาหักภาษี
    */
    'taxAmount': number;
    /**
    * จำนวนเงินไม่รวมภาษีมูลค่าเพิ่ม
    */
    'taxAmountNoVat': number;
    /**
    * จำนวนเงินภาษีหัก ณ ที่จ่าย
    */
    'withheld': number;
    /**
    * จำนวนเงินหลังหักภาษี ณ ที่จ่าย (taxAmount - withheld = total)
    */
    'total'?: number;
    /**
    * ภาษีมูลค่าเพิ่ม <br> 1 = รวมภาษีมูลค่าเพิ่ม <br> 3 = ไม่รวมภาษีมูลค่าเพิ่ม <br>7 = ไม่มี/ยกเว้นภาษีมูลค่าเพิ่ม
    */
    'vatType': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "incomeType",
            "baseName": "incomeType",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "taxRate",
            "baseName": "taxRate",
            "type": "number"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number"
        },
        {
            "name": "taxAmountNoVat",
            "baseName": "taxAmountNoVat",
            "type": "number"
        },
        {
            "name": "withheld",
            "baseName": "withheld",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "vatType",
            "baseName": "vatType",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return WithholidingTaxItem.attributeTypeMap;
    }
}

