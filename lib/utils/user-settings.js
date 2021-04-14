const packageName = require('../../package.json').name;
const userSettings = require('user-settings');

/**
 * 将当前项目的 package name 转成文件名可以用格式
 */
const validPackageNameAsFilename = packageName.replace('/', '.');
/**
 * 设置
 */
const settings = userSettings.file(`.${validPackageNameAsFilename}`);

/**
 * 用户配置文件
 */
class UserSettings {
  /**
   * 将内容设置到 user settings 中
   * 基本的 key/value 设置值
   */
  static set(key, value) {
    settings.set(key, value);
  }

  /**
   * 通过 key 获取配置文件 value 值
   */
  static get(key) {
    return settings.get(key);
  }

  /**
   * 通过 key 删除配置文件 value 值
   * @param key
   */
  static unset(key) {
    settings.unset(key);
  }
}

module.exports = UserSettings;
