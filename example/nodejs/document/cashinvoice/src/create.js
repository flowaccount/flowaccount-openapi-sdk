import {
  AuthenticationApi,
  ProductItem,
  SimpleDocument,
  CashInvoiceApi,
} from "@flowaccount/openapi-sdk";
import { config } from "./config.js";

const start = async function () {
  const accessToken = await getAccessToken();
  if (accessToken) {
    await createCashInvoice(accessToken);
  } else {
    console.log("access token is null.");
  }
};

start();

function createCashInvoice(accessToken) {
  return new Promise((resolve) => {
    // item
    const item = new ProductItem();
    item.name = "item name";
    item.quantity = 1;
    item.pricePerUnit = 100;
    item.total = 100;

    // document
    const model = new SimpleDocument();
    model.contactName = "contact name";
    model.publishedOn = new Date();
    model.dueDate = new Date();
    model.items = [item];
    model.subTotal = 100;
    model.totalAfterDiscount = 100;
    model.isVat = true;
    model.vatAmount = 7;
    model.grandTotal = 107;

    // post create cash invoice
    const cashInvoiceApi = new CashInvoiceApi(config.basePath);
    cashInvoiceApi
      .cashInvoicesPost("Bearer " + accessToken, model)
      .then((response) => {
        if (response && response.body && response.body.status === true) {
          console.log("createCashInvoice -> success.");
          resolve(true);
        } else {
          console.log("createCashInvoice -> response failed: ", response.body);
          resolve(false);
        }
      })
      .catch((reason) => {
        console.log("createCashInvoice -> error: ", reason);
        resolve(false);
      });
  });
}

function getAccessToken() {
  return new Promise((resolve) => {
    const authenticationApi = new AuthenticationApi(config.basePath);
    authenticationApi
      .tokenPost(
        "application/x-www-form-urlencoded",
        config.clientGrantType,
        config.clientScope,
        config.clientId,
        config.clientSecret
      )
      .then((response) => {
        if (response && response.body && response.body.accessToken) {
          const accessToken = response.body.accessToken;
          resolve(accessToken);
        } else {
          console.log("getAccessToken -> response failed: ", response.body);
          resolve(null);
        }
      })
      .catch((reason) => {
        console.log("getAccessToken -> error: ", reason);
        resolve(null);
      });
  });
}
