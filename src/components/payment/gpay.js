import React from "react";
import GooglePayButton from "@google-pay/button-react";
const paymentRequest = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [
    {
      type: "CARD",
      parameters: {
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        allowedCardNetworks: ["MASTERCARD", "VISA"],
      },
      tokenizationSpecification: {
        type: "PAYMENT_GATEWAY",
        parameters: {
          gateway: "example",
          gatewayMerchantId: "exampleGatewayMerchantId",
        },
      },
    },
  ],
  merchantInfo: {
    merchantId: "BCR2DN6TW6JNDUCO",
    merchantName:
      "VIRADVISWAKARMA EDUCATIONAL & INDUSTRIAL DEVELOPMENT CHARITABLE FOUNDATION",
  },
  transactionInfo: {
    totalPriceStatus: "FINAL",
    totalPriceLabel: "Total",
    totalPrice: "1.00",
    currencyCode: "INR",
    countryCode: "IN",
  },
  shippingAddressRequired: true,
  callbackIntents: ["PAYMENT_AUTHORIZATION"],
};
export default function Gpay() {
  return (
    <GooglePayButton
      environment="PRODUCTION"
      buttonType={"buy"}
      paymentRequest={paymentRequest}
      onLoadPaymentData={(paymentRequest) => {
        console.log("Success load", paymentRequest);
      }}
      onPaymentAuthorized={(paymentData) => {
        console.log("payment done", paymentData);
        return { transactionState: "SUCCESS" };
      }}
      existingPaymentMethodRequired="false"
      style={{ width: 240, height: 40 }}
    />
  );
}
