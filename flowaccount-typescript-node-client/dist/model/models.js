"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./attachmentResponse"));
__export(require("./attachmentResponseData"));
__export(require("./authenResponse"));
__export(require("./bankAccount"));
__export(require("./bankAccountResponse"));
__export(require("./businessCategory"));
__export(require("./companyInfo"));
__export(require("./companyInfoResponse"));
__export(require("./companyInfoResponseAllOf"));
__export(require("./contact"));
__export(require("./contactResponse"));
__export(require("./contactResponseAllOf"));
__export(require("./deleteResponse"));
__export(require("./deleteResponseData"));
__export(require("./document"));
__export(require("./documentResponse"));
__export(require("./expenseDocument"));
__export(require("./expenseInlineDocument"));
__export(require("./expenseInlineDocumentAllOf"));
__export(require("./expenseInlineDocumentResponse"));
__export(require("./expenseInlineDocumentResponseAllOf"));
__export(require("./expenseInlineDocumentResponseAllOfData"));
__export(require("./expenseInlineProductItem"));
__export(require("./expenseResponse"));
__export(require("./expenseSimpleDocument"));
__export(require("./expenseSimpleDocumentAllOf"));
__export(require("./expenseSimpleDocumentResponse"));
__export(require("./expenseSimpleDocumentResponseAllOf"));
__export(require("./expenseSimpleDocumentResponseAllOfData"));
__export(require("./expenseSimpleProductItem"));
__export(require("./inlineDocument"));
__export(require("./inlineDocumentAllOf"));
__export(require("./inlineDocumentResponse"));
__export(require("./inlineDocumentResponseAllOf"));
__export(require("./inlineDocumentResponseAllOfData"));
__export(require("./inlineObject"));
__export(require("./inlineObject1"));
__export(require("./inlineObject2"));
__export(require("./inlineObject3"));
__export(require("./inlineObject4"));
__export(require("./inlineObject5"));
__export(require("./inlineObject6"));
__export(require("./inlineObject7"));
__export(require("./inlineObject8"));
__export(require("./inlineObject9"));
__export(require("./inlineProductItem"));
__export(require("./inlineProductItemAllOf"));
__export(require("./paymentDocumentResponse"));
__export(require("./paymentPaidCash"));
__export(require("./paymentPaidCheque"));
__export(require("./paymentPaidCreditCard"));
__export(require("./paymentPaidTransfer"));
__export(require("./paymentReceivingCash"));
__export(require("./paymentReceivingCheque"));
__export(require("./paymentReceivingCreditCard"));
__export(require("./paymentReceivingTransfer"));
__export(require("./productInventory"));
__export(require("./productInventoryBalance"));
__export(require("./productItem"));
__export(require("./productNonInventory"));
__export(require("./productResponse"));
__export(require("./productResponseData"));
__export(require("./productService"));
__export(require("./referencedByMe"));
__export(require("./referencedToMe"));
__export(require("./sendEmail"));
__export(require("./sendEmailCoppies"));
__export(require("./sendEmailCoppiesAllOf"));
__export(require("./sendEmailResponse"));
__export(require("./sendEmailResponseData"));
__export(require("./sendEmailSimple"));
__export(require("./shareDocument"));
__export(require("./shareDocumentResponse"));
__export(require("./shareDocumentResponseData"));
__export(require("./simpleDocument"));
__export(require("./simpleDocumentAllOf"));
__export(require("./simpleDocumentResponse"));
__export(require("./simpleDocumentResponseAllOf"));
__export(require("./simpleDocumentResponseAllOfData"));
__export(require("./simpleProductItem"));
__export(require("./statusDocument"));
__export(require("./updateDocument"));
__export(require("./updateExpenseDocument"));
__export(require("./updateExpenseInlineDocument"));
__export(require("./updateExpenseSimpleDocument"));
__export(require("./updateInlineDocument"));
__export(require("./updateSimpleDocument"));
__export(require("./updateWithholidingTaxDocument"));
__export(require("./upgradeDocument"));
__export(require("./withholidingTaxDocument"));
__export(require("./withholidingTaxDocumentResponse"));
__export(require("./withholidingTaxDocumentResponseData"));
__export(require("./withholidingTaxItem"));
const attachmentResponse_1 = require("./attachmentResponse");
const attachmentResponseData_1 = require("./attachmentResponseData");
const authenResponse_1 = require("./authenResponse");
const bankAccount_1 = require("./bankAccount");
const bankAccountResponse_1 = require("./bankAccountResponse");
const businessCategory_1 = require("./businessCategory");
const companyInfo_1 = require("./companyInfo");
const companyInfoResponse_1 = require("./companyInfoResponse");
const companyInfoResponseAllOf_1 = require("./companyInfoResponseAllOf");
const contact_1 = require("./contact");
const contactResponse_1 = require("./contactResponse");
const contactResponseAllOf_1 = require("./contactResponseAllOf");
const deleteResponse_1 = require("./deleteResponse");
const deleteResponseData_1 = require("./deleteResponseData");
const document_1 = require("./document");
const documentResponse_1 = require("./documentResponse");
const expenseDocument_1 = require("./expenseDocument");
const expenseInlineDocument_1 = require("./expenseInlineDocument");
const expenseInlineDocumentAllOf_1 = require("./expenseInlineDocumentAllOf");
const expenseInlineDocumentResponse_1 = require("./expenseInlineDocumentResponse");
const expenseInlineDocumentResponseAllOf_1 = require("./expenseInlineDocumentResponseAllOf");
const expenseInlineDocumentResponseAllOfData_1 = require("./expenseInlineDocumentResponseAllOfData");
const expenseInlineProductItem_1 = require("./expenseInlineProductItem");
const expenseResponse_1 = require("./expenseResponse");
const expenseSimpleDocument_1 = require("./expenseSimpleDocument");
const expenseSimpleDocumentAllOf_1 = require("./expenseSimpleDocumentAllOf");
const expenseSimpleDocumentResponse_1 = require("./expenseSimpleDocumentResponse");
const expenseSimpleDocumentResponseAllOf_1 = require("./expenseSimpleDocumentResponseAllOf");
const expenseSimpleDocumentResponseAllOfData_1 = require("./expenseSimpleDocumentResponseAllOfData");
const expenseSimpleProductItem_1 = require("./expenseSimpleProductItem");
const inlineDocument_1 = require("./inlineDocument");
const inlineDocumentAllOf_1 = require("./inlineDocumentAllOf");
const inlineDocumentResponse_1 = require("./inlineDocumentResponse");
const inlineDocumentResponseAllOf_1 = require("./inlineDocumentResponseAllOf");
const inlineDocumentResponseAllOfData_1 = require("./inlineDocumentResponseAllOfData");
const inlineObject_1 = require("./inlineObject");
const inlineObject1_1 = require("./inlineObject1");
const inlineObject2_1 = require("./inlineObject2");
const inlineObject3_1 = require("./inlineObject3");
const inlineObject4_1 = require("./inlineObject4");
const inlineObject5_1 = require("./inlineObject5");
const inlineObject6_1 = require("./inlineObject6");
const inlineObject7_1 = require("./inlineObject7");
const inlineObject8_1 = require("./inlineObject8");
const inlineObject9_1 = require("./inlineObject9");
const inlineProductItem_1 = require("./inlineProductItem");
const inlineProductItemAllOf_1 = require("./inlineProductItemAllOf");
const paymentDocumentResponse_1 = require("./paymentDocumentResponse");
const paymentPaidCash_1 = require("./paymentPaidCash");
const paymentPaidCheque_1 = require("./paymentPaidCheque");
const paymentPaidCreditCard_1 = require("./paymentPaidCreditCard");
const paymentPaidTransfer_1 = require("./paymentPaidTransfer");
const paymentReceivingCash_1 = require("./paymentReceivingCash");
const paymentReceivingCheque_1 = require("./paymentReceivingCheque");
const paymentReceivingCreditCard_1 = require("./paymentReceivingCreditCard");
const paymentReceivingTransfer_1 = require("./paymentReceivingTransfer");
const productInventory_1 = require("./productInventory");
const productInventoryBalance_1 = require("./productInventoryBalance");
const productItem_1 = require("./productItem");
const productNonInventory_1 = require("./productNonInventory");
const productResponse_1 = require("./productResponse");
const productResponseData_1 = require("./productResponseData");
const productService_1 = require("./productService");
const referencedByMe_1 = require("./referencedByMe");
const referencedToMe_1 = require("./referencedToMe");
const sendEmail_1 = require("./sendEmail");
const sendEmailCoppies_1 = require("./sendEmailCoppies");
const sendEmailCoppiesAllOf_1 = require("./sendEmailCoppiesAllOf");
const sendEmailResponse_1 = require("./sendEmailResponse");
const sendEmailResponseData_1 = require("./sendEmailResponseData");
const sendEmailSimple_1 = require("./sendEmailSimple");
const shareDocument_1 = require("./shareDocument");
const shareDocumentResponse_1 = require("./shareDocumentResponse");
const shareDocumentResponseData_1 = require("./shareDocumentResponseData");
const simpleDocument_1 = require("./simpleDocument");
const simpleDocumentAllOf_1 = require("./simpleDocumentAllOf");
const simpleDocumentResponse_1 = require("./simpleDocumentResponse");
const simpleDocumentResponseAllOf_1 = require("./simpleDocumentResponseAllOf");
const simpleDocumentResponseAllOfData_1 = require("./simpleDocumentResponseAllOfData");
const simpleProductItem_1 = require("./simpleProductItem");
const statusDocument_1 = require("./statusDocument");
const updateDocument_1 = require("./updateDocument");
const updateExpenseDocument_1 = require("./updateExpenseDocument");
const updateExpenseInlineDocument_1 = require("./updateExpenseInlineDocument");
const updateExpenseSimpleDocument_1 = require("./updateExpenseSimpleDocument");
const updateInlineDocument_1 = require("./updateInlineDocument");
const updateSimpleDocument_1 = require("./updateSimpleDocument");
const updateWithholidingTaxDocument_1 = require("./updateWithholidingTaxDocument");
const upgradeDocument_1 = require("./upgradeDocument");
const withholidingTaxDocument_1 = require("./withholidingTaxDocument");
const withholidingTaxDocumentResponse_1 = require("./withholidingTaxDocumentResponse");
const withholidingTaxDocumentResponseData_1 = require("./withholidingTaxDocumentResponseData");
const withholidingTaxItem_1 = require("./withholidingTaxItem");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {};
let typeMap = {
    "AttachmentResponse": attachmentResponse_1.AttachmentResponse,
    "AttachmentResponseData": attachmentResponseData_1.AttachmentResponseData,
    "AuthenResponse": authenResponse_1.AuthenResponse,
    "BankAccount": bankAccount_1.BankAccount,
    "BankAccountResponse": bankAccountResponse_1.BankAccountResponse,
    "BusinessCategory": businessCategory_1.BusinessCategory,
    "CompanyInfo": companyInfo_1.CompanyInfo,
    "CompanyInfoResponse": companyInfoResponse_1.CompanyInfoResponse,
    "CompanyInfoResponseAllOf": companyInfoResponseAllOf_1.CompanyInfoResponseAllOf,
    "Contact": contact_1.Contact,
    "ContactResponse": contactResponse_1.ContactResponse,
    "ContactResponseAllOf": contactResponseAllOf_1.ContactResponseAllOf,
    "DeleteResponse": deleteResponse_1.DeleteResponse,
    "DeleteResponseData": deleteResponseData_1.DeleteResponseData,
    "Document": document_1.Document,
    "DocumentResponse": documentResponse_1.DocumentResponse,
    "ExpenseDocument": expenseDocument_1.ExpenseDocument,
    "ExpenseInlineDocument": expenseInlineDocument_1.ExpenseInlineDocument,
    "ExpenseInlineDocumentAllOf": expenseInlineDocumentAllOf_1.ExpenseInlineDocumentAllOf,
    "ExpenseInlineDocumentResponse": expenseInlineDocumentResponse_1.ExpenseInlineDocumentResponse,
    "ExpenseInlineDocumentResponseAllOf": expenseInlineDocumentResponseAllOf_1.ExpenseInlineDocumentResponseAllOf,
    "ExpenseInlineDocumentResponseAllOfData": expenseInlineDocumentResponseAllOfData_1.ExpenseInlineDocumentResponseAllOfData,
    "ExpenseInlineProductItem": expenseInlineProductItem_1.ExpenseInlineProductItem,
    "ExpenseResponse": expenseResponse_1.ExpenseResponse,
    "ExpenseSimpleDocument": expenseSimpleDocument_1.ExpenseSimpleDocument,
    "ExpenseSimpleDocumentAllOf": expenseSimpleDocumentAllOf_1.ExpenseSimpleDocumentAllOf,
    "ExpenseSimpleDocumentResponse": expenseSimpleDocumentResponse_1.ExpenseSimpleDocumentResponse,
    "ExpenseSimpleDocumentResponseAllOf": expenseSimpleDocumentResponseAllOf_1.ExpenseSimpleDocumentResponseAllOf,
    "ExpenseSimpleDocumentResponseAllOfData": expenseSimpleDocumentResponseAllOfData_1.ExpenseSimpleDocumentResponseAllOfData,
    "ExpenseSimpleProductItem": expenseSimpleProductItem_1.ExpenseSimpleProductItem,
    "InlineDocument": inlineDocument_1.InlineDocument,
    "InlineDocumentAllOf": inlineDocumentAllOf_1.InlineDocumentAllOf,
    "InlineDocumentResponse": inlineDocumentResponse_1.InlineDocumentResponse,
    "InlineDocumentResponseAllOf": inlineDocumentResponseAllOf_1.InlineDocumentResponseAllOf,
    "InlineDocumentResponseAllOfData": inlineDocumentResponseAllOfData_1.InlineDocumentResponseAllOfData,
    "InlineObject": inlineObject_1.InlineObject,
    "InlineObject1": inlineObject1_1.InlineObject1,
    "InlineObject2": inlineObject2_1.InlineObject2,
    "InlineObject3": inlineObject3_1.InlineObject3,
    "InlineObject4": inlineObject4_1.InlineObject4,
    "InlineObject5": inlineObject5_1.InlineObject5,
    "InlineObject6": inlineObject6_1.InlineObject6,
    "InlineObject7": inlineObject7_1.InlineObject7,
    "InlineObject8": inlineObject8_1.InlineObject8,
    "InlineObject9": inlineObject9_1.InlineObject9,
    "InlineProductItem": inlineProductItem_1.InlineProductItem,
    "InlineProductItemAllOf": inlineProductItemAllOf_1.InlineProductItemAllOf,
    "PaymentDocumentResponse": paymentDocumentResponse_1.PaymentDocumentResponse,
    "PaymentPaidCash": paymentPaidCash_1.PaymentPaidCash,
    "PaymentPaidCheque": paymentPaidCheque_1.PaymentPaidCheque,
    "PaymentPaidCreditCard": paymentPaidCreditCard_1.PaymentPaidCreditCard,
    "PaymentPaidTransfer": paymentPaidTransfer_1.PaymentPaidTransfer,
    "PaymentReceivingCash": paymentReceivingCash_1.PaymentReceivingCash,
    "PaymentReceivingCheque": paymentReceivingCheque_1.PaymentReceivingCheque,
    "PaymentReceivingCreditCard": paymentReceivingCreditCard_1.PaymentReceivingCreditCard,
    "PaymentReceivingTransfer": paymentReceivingTransfer_1.PaymentReceivingTransfer,
    "ProductInventory": productInventory_1.ProductInventory,
    "ProductInventoryBalance": productInventoryBalance_1.ProductInventoryBalance,
    "ProductItem": productItem_1.ProductItem,
    "ProductNonInventory": productNonInventory_1.ProductNonInventory,
    "ProductResponse": productResponse_1.ProductResponse,
    "ProductResponseData": productResponseData_1.ProductResponseData,
    "ProductService": productService_1.ProductService,
    "ReferencedByMe": referencedByMe_1.ReferencedByMe,
    "ReferencedToMe": referencedToMe_1.ReferencedToMe,
    "SendEmail": sendEmail_1.SendEmail,
    "SendEmailCoppies": sendEmailCoppies_1.SendEmailCoppies,
    "SendEmailCoppiesAllOf": sendEmailCoppiesAllOf_1.SendEmailCoppiesAllOf,
    "SendEmailResponse": sendEmailResponse_1.SendEmailResponse,
    "SendEmailResponseData": sendEmailResponseData_1.SendEmailResponseData,
    "SendEmailSimple": sendEmailSimple_1.SendEmailSimple,
    "ShareDocument": shareDocument_1.ShareDocument,
    "ShareDocumentResponse": shareDocumentResponse_1.ShareDocumentResponse,
    "ShareDocumentResponseData": shareDocumentResponseData_1.ShareDocumentResponseData,
    "SimpleDocument": simpleDocument_1.SimpleDocument,
    "SimpleDocumentAllOf": simpleDocumentAllOf_1.SimpleDocumentAllOf,
    "SimpleDocumentResponse": simpleDocumentResponse_1.SimpleDocumentResponse,
    "SimpleDocumentResponseAllOf": simpleDocumentResponseAllOf_1.SimpleDocumentResponseAllOf,
    "SimpleDocumentResponseAllOfData": simpleDocumentResponseAllOfData_1.SimpleDocumentResponseAllOfData,
    "SimpleProductItem": simpleProductItem_1.SimpleProductItem,
    "StatusDocument": statusDocument_1.StatusDocument,
    "UpdateDocument": updateDocument_1.UpdateDocument,
    "UpdateExpenseDocument": updateExpenseDocument_1.UpdateExpenseDocument,
    "UpdateExpenseInlineDocument": updateExpenseInlineDocument_1.UpdateExpenseInlineDocument,
    "UpdateExpenseSimpleDocument": updateExpenseSimpleDocument_1.UpdateExpenseSimpleDocument,
    "UpdateInlineDocument": updateInlineDocument_1.UpdateInlineDocument,
    "UpdateSimpleDocument": updateSimpleDocument_1.UpdateSimpleDocument,
    "UpdateWithholidingTaxDocument": updateWithholidingTaxDocument_1.UpdateWithholidingTaxDocument,
    "UpgradeDocument": upgradeDocument_1.UpgradeDocument,
    "WithholidingTaxDocument": withholidingTaxDocument_1.WithholidingTaxDocument,
    "WithholidingTaxDocumentResponse": withholidingTaxDocumentResponse_1.WithholidingTaxDocumentResponse,
    "WithholidingTaxDocumentResponseData": withholidingTaxDocumentResponseData_1.WithholidingTaxDocumentResponseData,
    "WithholidingTaxItem": withholidingTaxItem_1.WithholidingTaxItem,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map