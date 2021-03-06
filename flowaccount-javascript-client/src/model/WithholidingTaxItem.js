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
 * The WithholidingTaxItem model module.
 * @module model/WithholidingTaxItem
 * @version 2-oas3
 */
class WithholidingTaxItem {
    /**
     * Constructs a new <code>WithholidingTaxItem</code>.
     * @alias module:model/WithholidingTaxItem
     * @param incomeType {Number} ประเภทเงินได้ที่จ่าย <br> 1 = 1. เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส ฯลฯ ตามมาตรา 40 (1) <br> 3 = 2. ค่าธรรมเนียม ค่านายหน้า ฯลฯ ตามมาตรา 40 (2) <br> 5 = 3. ค่าแห่งลิขสิทธิ์ ฯลฯ ตามมาตรา 40(3) <br> 7 = 4. (ก) ค่าดอกเบี้ย ฯลฯ ตามมาตรา 40(4) (ก) <br> 11 = 4. (ข)(1.1) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 25 ของกำไรสุทธิ <br> 13 = 4. (ข)(1.2) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 20 ของกำไรสุทธิ <br> 15 = 4. (ข)(1.3) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราอื่น ของกำไรสุทธิ (กรุณาระบุ) <br> 17 = 4. (ข)(2.1) กำไรสุทธิของกิจการที่ได้รับยกเว้นเงินได้นิติบุคคล <br> 19 = 4. (ข)(2.2) เงินปันผลหรือเงินส่วนแบ่งของกำไรที่ได้รับยกเว้น... <br> 21 = 4. (ข)(2.3) กำไรสุทธิส่วนที่ได้หักผลขาดทุนสิทธิยกมาไม่เกิน 5 ปี... <br> 23 = 4. (ข)(2.4) กำไรที่รับรู้ทางบัญชีโดยวิธีส่วนได้เสีย (equity method) <br> 25 = 4. (ข)(2.5) อื่นๆ (กรุณาระบุ) <br> 27 = 5. การจ่ายเงินได้ที่ต้องหักภาษี ณ ที่จ่ายตามคำสั่งกรมสรรพากร.... <br> 29 = 6. อื่นๆ (กรุณาระบุ)
     * @param taxRate {Number} อัตราภาษี หัก ณ ที่จ่าย <br> 3 = อัตราภาษี 3% <br> 5 = อัตราภาษี 5% <br> 0.5 = อัตราภาษี 0.5% <br> 0.75 = อัตราภาษี 0.75% <br> 1 = อัตราภาษี 1% <br> 2 = อัตราภาษี 2% <br> 10 = อัตราภาษี 10% <br> 15 = อัตราภาษี 15% <br> -1 = อัตราภาษีเป็นแบบจำนวนเงิน
     * @param taxAmount {Number} จำนวนเงินที่นำมาหักภาษี
     * @param taxAmountNoVat {Number} จำนวนเงินไม่รวมภาษีมูลค่าเพิ่ม
     * @param withheld {Number} จำนวนเงินภาษีหัก ณ ที่จ่าย
     * @param vatType {Number} ภาษีมูลค่าเพิ่ม <br> 1 = รวมภาษีมูลค่าเพิ่ม <br> 3 = ไม่รวมภาษีมูลค่าเพิ่ม <br>7 = ไม่มี/ยกเว้นภาษีมูลค่าเพิ่ม
     */
    constructor(incomeType, taxRate, taxAmount, taxAmountNoVat, withheld, vatType) { 
        
        WithholidingTaxItem.initialize(this, incomeType, taxRate, taxAmount, taxAmountNoVat, withheld, vatType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, incomeType, taxRate, taxAmount, taxAmountNoVat, withheld, vatType) { 
        obj['incomeType'] = incomeType;
        obj['taxRate'] = taxRate;
        obj['taxAmount'] = taxAmount;
        obj['taxAmountNoVat'] = taxAmountNoVat;
        obj['withheld'] = withheld;
        obj['vatType'] = vatType;
    }

    /**
     * Constructs a <code>WithholidingTaxItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WithholidingTaxItem} obj Optional instance to populate.
     * @return {module:model/WithholidingTaxItem} The populated <code>WithholidingTaxItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WithholidingTaxItem();

            if (data.hasOwnProperty('incomeType')) {
                obj['incomeType'] = ApiClient.convertToType(data['incomeType'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('taxRate')) {
                obj['taxRate'] = ApiClient.convertToType(data['taxRate'], 'Number');
            }
            if (data.hasOwnProperty('taxAmount')) {
                obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'Number');
            }
            if (data.hasOwnProperty('taxAmountNoVat')) {
                obj['taxAmountNoVat'] = ApiClient.convertToType(data['taxAmountNoVat'], 'Number');
            }
            if (data.hasOwnProperty('withheld')) {
                obj['withheld'] = ApiClient.convertToType(data['withheld'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('vatType')) {
                obj['vatType'] = ApiClient.convertToType(data['vatType'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * ประเภทเงินได้ที่จ่าย <br> 1 = 1. เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส ฯลฯ ตามมาตรา 40 (1) <br> 3 = 2. ค่าธรรมเนียม ค่านายหน้า ฯลฯ ตามมาตรา 40 (2) <br> 5 = 3. ค่าแห่งลิขสิทธิ์ ฯลฯ ตามมาตรา 40(3) <br> 7 = 4. (ก) ค่าดอกเบี้ย ฯลฯ ตามมาตรา 40(4) (ก) <br> 11 = 4. (ข)(1.1) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 25 ของกำไรสุทธิ <br> 13 = 4. (ข)(1.2) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 20 ของกำไรสุทธิ <br> 15 = 4. (ข)(1.3) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราอื่น ของกำไรสุทธิ (กรุณาระบุ) <br> 17 = 4. (ข)(2.1) กำไรสุทธิของกิจการที่ได้รับยกเว้นเงินได้นิติบุคคล <br> 19 = 4. (ข)(2.2) เงินปันผลหรือเงินส่วนแบ่งของกำไรที่ได้รับยกเว้น... <br> 21 = 4. (ข)(2.3) กำไรสุทธิส่วนที่ได้หักผลขาดทุนสิทธิยกมาไม่เกิน 5 ปี... <br> 23 = 4. (ข)(2.4) กำไรที่รับรู้ทางบัญชีโดยวิธีส่วนได้เสีย (equity method) <br> 25 = 4. (ข)(2.5) อื่นๆ (กรุณาระบุ) <br> 27 = 5. การจ่ายเงินได้ที่ต้องหักภาษี ณ ที่จ่ายตามคำสั่งกรมสรรพากร.... <br> 29 = 6. อื่นๆ (กรุณาระบุ)
 * @member {Number} incomeType
 * @default 1
 */
WithholidingTaxItem.prototype['incomeType'] = 1;

/**
 * รายละเอียดหัก ณ ที่จ่าย <br> สำหรับประเภทเงินได้ที่จ่าย ข้อ 4.(ข)(2.5) อื่นๆ และ ข้อ 6. อื่นๆ
 * @member {String} description
 */
WithholidingTaxItem.prototype['description'] = undefined;

/**
 * อัตราภาษี หัก ณ ที่จ่าย <br> 3 = อัตราภาษี 3% <br> 5 = อัตราภาษี 5% <br> 0.5 = อัตราภาษี 0.5% <br> 0.75 = อัตราภาษี 0.75% <br> 1 = อัตราภาษี 1% <br> 2 = อัตราภาษี 2% <br> 10 = อัตราภาษี 10% <br> 15 = อัตราภาษี 15% <br> -1 = อัตราภาษีเป็นแบบจำนวนเงิน
 * @member {Number} taxRate
 */
WithholidingTaxItem.prototype['taxRate'] = undefined;

/**
 * จำนวนเงินที่นำมาหักภาษี
 * @member {Number} taxAmount
 */
WithholidingTaxItem.prototype['taxAmount'] = undefined;

/**
 * จำนวนเงินไม่รวมภาษีมูลค่าเพิ่ม
 * @member {Number} taxAmountNoVat
 */
WithholidingTaxItem.prototype['taxAmountNoVat'] = undefined;

/**
 * จำนวนเงินภาษีหัก ณ ที่จ่าย
 * @member {Number} withheld
 */
WithholidingTaxItem.prototype['withheld'] = undefined;

/**
 * จำนวนเงินหลังหักภาษี ณ ที่จ่าย (taxAmount - withheld = total)
 * @member {Number} total
 */
WithholidingTaxItem.prototype['total'] = undefined;

/**
 * ภาษีมูลค่าเพิ่ม <br> 1 = รวมภาษีมูลค่าเพิ่ม <br> 3 = ไม่รวมภาษีมูลค่าเพิ่ม <br>7 = ไม่มี/ยกเว้นภาษีมูลค่าเพิ่ม
 * @member {Number} vatType
 * @default 1
 */
WithholidingTaxItem.prototype['vatType'] = 1;






export default WithholidingTaxItem;

