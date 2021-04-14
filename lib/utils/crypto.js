const getMachineId = require('./get-machine-id');

/**
 * 加密
 * @param text
 */
const encrypt = async (text) => {
  const seed = await getMachineId();
  const cipher = crypto.createCipher('aes-256-cbc', seed);
  // noinspection SpellCheckingInspection
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

/**
 * 解密
 * @param text
 */
const decrypt = async (text) => {
  if (text) {
    try {
      const decipher = crypto.createDecipher('aes-256-cbc', await getMachineId());
      let decrypted = decipher.update(text, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    } catch (e) {
      return '';
    }
  }
  return text;
};

module.exports = {
  encrypt,
  decrypt,
};