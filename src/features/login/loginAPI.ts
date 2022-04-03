import axios from "axios";

export function generateOtp(mobileNumber: number) {
  const headers = {
    transactionId: "react_interview"
  };
  return axios.post(
    `https://stage-services.truemeds.in/CustomerService/sendOtp?mobileNo=${mobileNumber}`,
    undefined,
    { headers }
  );
}

export function validateOtp(mobileNumber: number, otp: number) {
  return axios.post(
    `https://stage-services.truemeds.in/CustomerService/verifyOtp?mobileNo=${mobileNumber}&otp=${otp}&de
    viceKey=abcd&isIos=false&source=react_interview`,
    null,
    {
      headers: {
        transactionId: "react_interview",
      },
    }
  );
}
