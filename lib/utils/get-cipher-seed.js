const { machineId } = require('node-machine-id');

/**
 * 获取机器唯一码
 */
const getMachineId = async () => {
  let machineIdentity;
  try {
    machineIdentity = await machineId();
  } catch (e) {
    machineIdentity = 'e453a4a6-4db2-402e-9b6c-b2050ddf8112';
  }
  return machineIdentity;
};

module.exports = getMachineId;
