"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEmail_1 = require("./sendEmail");
class SendEmailSimple extends sendEmail_1.SendEmail {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SendEmailSimple.attributeTypeMap);
    }
}
SendEmailSimple.discriminator = undefined;
SendEmailSimple.attributeTypeMap = [];
exports.SendEmailSimple = SendEmailSimple;
//# sourceMappingURL=sendEmailSimple.js.map