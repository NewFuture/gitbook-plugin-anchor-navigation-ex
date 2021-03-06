require('./log');

const defaultConfig = {
    // 标题是否显示层级序号
    showLevel: true,
    // 页面内的序号是否与 summary.md 中官方默认主题生成的序号相关联
    associatedWithSummary: true,
    //显示level 
    "level": {
        "h1": true,
        "h2": true,
        "h3": true
    },
    // 模式：分为三种：float：浮动导航、pageTop：页面内部顶部导航、null:不显示导航
    mode: "float",
    float: { //浮动导航设置
        showLevelIcon: false,  //是否显示层级图标
        level1Icon: "fa fa-hand-o-right",
        level2Icon: "fa fa-hand-o-right",
        level3Icon: "fa fa-hand-o-right"
    },
    pageTop: {
        showLevelIcon: false,  //是否显示层级图标
        level1Icon: "fa fa-hand-o-right",
        level2Icon: "fa fa-hand-o-right",
        level3Icon: "fa fa-hand-o-right"
    },
    // 官方默认主题 层级开关
    themeDefault: {
        showLevel: false
    }
}

/**
 * 处理默认参数
 * @param defaultConfig
 * @param config
 */
function handler(defaultConfig, config) {
    if (config) {
        for (var item in defaultConfig) {
            if (item in config) {
                defaultConfig[item] = config[item];
            }
        }
    }
}
/**
 * 处理所有的配置参数
 * @param bookIns
 */
function handlerAll(bookIns) {
    var config = bookIns.config.get('pluginsConfig')['anchor-navigation-ex'];
    var themeDefaultConfig = bookIns.config.get('pluginsConfig')['theme-default'];
    handler(defaultConfig, config);
    handler(defaultConfig.themeDefault, themeDefaultConfig);

    if (config.isRewritePageTitle) {
        console.error("error:".error +
            "plugins[anchor-navigation-ex]：isRewritePageTitle 配置只支持0.3.x 版本，" +
            "请到https://github.com/zq99299/gitbook-plugin-anchor-navigation-ex查看最新版本的配置项");
        console.log("");
        console.error("error:".error +
            "plugins[anchor-navigation-ex]：isRewritePageTitle Configuration only supports 0.3.x version，" +
            "Please check here https://github.com/zq99299/gitbook-plugin-anchor-navigation-ex  for the latest version of the configuration item");
    }
}
/**
 * 本类中 config 单例共享
 * @type {{config: {showLevel: boolean, associatedWithSummary: boolean,level: {h1: boolean,h2: boolean, h3: boolean}, mode: string, float: {showLevelIcon: boolean, level1Icon: string, level2Icon: string, level3Icon: string}, top: {showLevelIcon: boolean, level1Icon: string, level2Icon: string, level3Icon: string}, themeDefault: {showLevel: boolean}}, handler: handler, handlerAll: handlerAll}}
 */
module.exports = {
    config: defaultConfig,
    handler: handler,
    handlerAll: handlerAll
}
