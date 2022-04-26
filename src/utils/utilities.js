import CryptoES from "crypto-es";

export const decrypt = (message = "", password = "") => {
    var key = CryptoES.enc.Utf8.parse(password.substr(0, 16));
    var code = CryptoES.AES.decrypt(message, key, {
      mode: CryptoES.mode.ECB
    });
    var decryptedMessage = code.toString(CryptoES.enc.Utf8);
    // window.GlobalFunctions.consoleLog(decryptedMessage)
    return decryptedMessage;
};