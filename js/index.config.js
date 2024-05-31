var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.config.js
var index_config_exports = {};
__export(index_config_exports, {
  default: () => index_config_default
});
module.exports = __toCommonJS(index_config_exports);
var index_config_default = {
  kunyu77: {
    testcfg: {
      bbbb: "aaaaa"
    }
  },
  live: {
    contents: "",
    // https://gitee.com/galnt/cctv/raw/master/contents.txt,供参考,可以不添加
    url: [
      {
        name: "自有 ",
        url: "https://mirror.ghproxy.com/raw.githubusercontent.com/ssili126/tv/main/itvlist.m3u",
        index: "true"
      },
      {
        name: "优质源 ",
        url: "https://raw.gitmirror.com/wwb521/live/main/tv.txt",
        index: "false"
      }
    ]
  },
  ffm3u8: {
    url: "https://cj.ffzyapi.com/api.php/provide/vod/",
    categories: ["国产剧", "香港剧", "韩国剧", "欧美剧", "台湾剧", "日本剧", "海外剧", "泰国剧", "短剧", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "动漫片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "记录片"]
  },
  yiso: {
    url: "https://yiso.fun",
    cookie: ""
  },
  //wnlg: {url: 'https://tv.yydsys.top',},
  ikanbot: {
    url: "https://www.imoviebot.com/"
  },
  czzy: {
    url: "https://cz01.vip"
  },
  libvio: {
    url: "https://libvio.app"
  },
  ttkx: {
    url: "http://ttkx.live:3328"
  },
  // ysche: {url: 'https://www.weixine.link/',},
  wogg: {
    url: "https://www.wogg.net"
  },
  wobg: {
    url: "https://wobge.run.goorm.io"
  },
  tudou: {
    url: "https://tudou.lvdoui.top"
  },
  xxpan: {
    url: "https://xpanpan.site"
  },
  pikaso: {
    //name: '皮卡资源',
    url: "https://www.pikaso.top"
  },
  appys: {
    bro: [
      {
        name: "零刻",
        // '*': ['https://jx.quankan.app/?url='],
        url: "https://ys.51bro.cn/mogai_api.php/v1.vod",
        search: true
        //搜索开关 true开 false关
      }
    ],
    yanetflix: [
      {
        name: "鸭奈飞",
        url: "https://yanetflix.me/api.php/app/",
        search: true
      }
    ],
    mjlnl: [
      {
        name: "聚焦",
        url: "https://www.mjlnl.cn/api.php/v1.vod",
        search: true
      }
    ],
    netflixdog: [
      {
        name: "飞狗",
        url: "https://netflixdog.club/api.php/app/",
        search: true
      }
    ],
    yingszj: [
      {
        name: "鑫鑫",
        url: "http://yingszj.xn--654a.cc/api.php/app/",
        search: true
      }
    ],
    ttmja: [
      {
        name: "天天",
        url: "https://www.ttmja.com/api.php/app/",
        search: true
      }
    ],
    netfly: [
      {
        name: "奈飞",
        url: "https://www.netfly.tv/api.php/app/",
        search: true
      }
    ]
  },
  bili: {
    categories: "经典无损音乐合集#帕梅拉#太极拳#健身#舞蹈#音乐#歌曲#MV4K#演唱会4K#白噪音4K#知名UP主#说案#解说#演讲#时事#探索发现超清#纪录片超清#沙雕动画#沙雕穿越#沙雕#平面设计教学#软件教程#实用教程#旅游#风景4K#食谱#美食超清#搞笑#球星#动物世界超清#相声小品#戏曲#儿童#小姐姐4K#热门#旅行探险",
    cookie: "SESSDATA=de3e853b%2C1723128317%2C400d2%2A21CjC4eRI9g7jH9O4mspkY5tU1HhoRC8O9HJtFmtpN94S-bBR0qcak6kLvgqCpSGg0PbMSVlQ3NHJBT0xhQi1INUxuMV9EOE51ZV9NWEotbkdxWFlweFdrNEVyQ29VVUxSb1M0TzlHQVhnVUpQTUt3WjIwZTZ4Y1BLc0xER3I2eTR4ZkRKUUtCQjhBIIEC"
  },
  m3u8cj: {
    ffm3u8: [{
      name: "非凡",
      url: "https://cj.ffzyapi.com/api.php/provide/vod/from/ffm3u8/",
      categories: ["伦理片", "国产剧", "香港剧", "韩国剧", "欧美剧", "台湾剧", "日本剧", "海外剧", "泰国剧", "短剧", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "动漫片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "记录片"],
      search: true
    }],
    lzm3u8: [{
      name: "量子",
      url: "https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8/",
      categories: ["伦理片", "动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "短剧", "国产剧", "欧美剧", "香港剧", "韩国剧", "日本剧", "台湾剧", "海外剧", "泰国剧", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "记录片", "足球", "篮球", "网球", "斯诺克"],
      search: true
    }],
    hhm3u8: [{
      name: "火狐",
      url: "https://hhzyapi.com/api.php/provide/vod/from/hhm3u8/",
      categories: ["伦理片", "动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "灾难片", "悬疑片", "犯罪片", "奇幻片", "短剧", "内地剧", "欧美剧", "香港剧", "韩剧", "日剧", "马泰剧", "中国动漫", "日本动漫", "欧美动漫", "欧美动漫", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "记录片"],
      search: true
    }],
    subm3u8: [{
      name: "速播",
      url: "https://subocaiji.com/api.php/provide/vod/from/subm3u8/",
      categories: ["伦理片", "动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "动漫电影", "短剧", "大陆剧", "美剧", "港澳剧", "韩剧", "日剧", "台湾剧", "泰剧", "中国动漫", "日本动漫", "欧美动漫", "综艺", "纪录片"],
      search: true
    }],
    xlm3u8: [{
      name: "新浪",
      url: "https://api.xinlangapi.com/xinlangapi.php/provide/vod/from/xlm3u8/",
      categories: ["伦理片", "动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "动漫电影", "短剧", "大陆剧", "欧美剧", "港澳剧", "韩剧", "日剧", "台湾剧", "泰剧", "动漫", "综艺", "纪录片", "体育"],
      search: true
    }],
    wjm3u8: [{
      name: "无尽",
      url: "https://api.wujinapi.me/api.php/provide/vod/from/wjm3u8/",
      categories: ["伦理片", "动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "悬疑片", "动画片", "犯罪片", "奇幻片", "邵氏电影", "短剧", "国产剧", "美国剧", "香港剧", "韩国剧", "日本剧", "台湾剧", "泰剧", "海外剧", "国产动漫", "日韩动漫", "欧美动漫", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺", "体育赛事", "影视解说"],
      search: true
    }],
    baidu: [{
      name: "百度",
      url: "https://api.apibdzy.com/api.php/provide/vod/from/dbm3u8/",
      categories: ["伦理片", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "国产剧", "欧美剧", "韩剧", "日剧", "港剧", "台剧", "泰剧", "海外剧", "纪录片", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺", "国产动漫", "日韩动漫", "欧美动漫", "动画片", "港台动漫", "海外动漫", "悬疑片", "邵氏电影", "电影资讯", "明星资讯", "预告片"],
      search: true
    }],
    kuaikan: [{
      name: "快看",
      url: "https://kuaikan-api.com/api.php/provide/vod/from/kuaikan/",
      categories: ["网络电影", "惊悚片", "犯罪片", "灾难片", "悬疑片", "爱情片", "喜剧片", "奇幻片", "恐怖片", "剧情片", "战争片", "动作片", "冒险片", "动画电影", "热门短剧", "国产剧", "欧美剧", "港台剧", "韩国剧", "日本剧", "台剧", "泰剧", "国产动漫", "日本动漫", "欧美动漫", "港台动漫", "韩国动漫", "国产综艺", "日本综艺", "港台综艺", "欧美综艺", "韩国综艺", "纪录片", "电影解说"],
      search: true
    }],
    hnm3u8: [{
      name: "红牛",
      url: "https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/",
      categories: ["动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "动漫电影", "短剧", "国产剧", "欧美剧", "港澳剧", "韩剧", "日剧", "台湾剧", "泰剧", "动漫", "综艺", "纪录片", "体育赛事"],
      search: true
    }],
    lsm3u8: [{
      name: "乐视",
      url: "https://leshiapi.com/api.php/provide/vod/at/json/",
      categories: ["动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "犯罪片", "奇幻片", "灾难片", "悬疑片", "动画片", "短剧", "国产剧", "欧美剧", "香港剧", "韩国剧", "日剧", "台湾剧", "海外剧", "泰国剧", "国产动漫", "日本动漫", "欧美动漫", "海外动漫", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "纪录片"],
      search: true
    }],
    bfzy: [{
      name: "暴风",
      url: "https://bfzyapi.com/api.php/provide/vod/",
      search: true
    }],
    suonizy: [{
      name: "索尼",
      url: "https://suoniapi.com/api.php/provide/vod/from/snm3u8",
      search: true
    }],
    xkanzy: [{
      name: "享看",
      url: "https://xkanzy10.com/api.php/provide/vod",
      search: true
    }],
    _360zy: [{
      name: "360资源",
      url: "https://360zy.com/api.php/provide/vod/at/json",
      search: true
    }],
    apizui: [{
      name: "最大",
      url: "https://api.zuidapi.com/api.php/provide/vod/at/json",
      search: true
    }],
    huyade: [{
      name: "虎牙",
      url: "https://www.huyaapi.com/api.php/provide/vod/at/json",
      search: true
    }],
    hw8sds: [{
      name: "华为",
      url: "https://hw8.live/api.php/provide/vod/at/json",
      search: true
    }],
    ikunzy: [{
      name: "爱坤",
      url: "https://ikunzyapi.com/api.php/provide/vod/at/json",
      search: true
    }],
    kczyap: [{
      name: "快车",
      url: "https://caiji.kczyapi.com/api.php/provide/vod/at/json",
      search: true
    }],
    collec: [{
      name: "卧龙",
      url: "https://collect.wolongzyw.com/api.php/provide/vod/at/json",
      search: true
    }],
    m3u8ap: [{
      name: "樱花",
      url: "https://m3u8.apiyhzy.com/api.php/provide/vod/at/json",
      search: true
    }],
    p2100d: [{
      name: "飘零",
      url: "https://p2100.net/api.php/provide/vod/at/json",
      search: true
    }],
    movieg: [{
      name: "新马",
      url: "https://movie.gsl99.com/api.php/provide/vod/at/json",
      search: true
    }],
    sanjiu: [{
      name: "三九",
      url: "https://www.39kan.com/api.php/provide/vod/at/json",
      search: true
    }],
    z49zyw: [{
      name: "四九",
      url: "https://49zyw.com/api.php/provide/vod/at/json",
      search: true
    }],
    kuaiyu: [{
      name: "快云",
      url: "https://www.kuaiyunzy.com/api.php/provide/vod/at/json",
      search: true
    }],
    jszyap: [{
      name: "极速",
      url: "https://jszyapi.com/api.php/provide/vod/at/json",
      search: true
    }],
    qhzyap: [{
      name: "奇虎",
      url: "https://caiji.qhzyapi.com/api.php/provide/vod/at/json",
      search: true
    }],
    cjbaji: [{
      name: "八戒",
      url: "http://cj.bajiecaiji.com/inc/apijson_vod.php",
      search: true
    }],
    apitia: [{
      name: "天空",
      url: "https://api.tiankongapi.com/api.php/provide/vod/at/json",
      search: true
    }],
    cjvodi: [{
      name: "影图",
      url: "https://cj.vodimg.top/api.php/provide/vod/at/json",
      search: true
    }],
    inmsdf: [{
      name: "映迷",
      url: "https://www.inmi.app/api.php/provide/vod/at/json",
      search: true
    }]
  },
  ali: {
    token: "12b099b6f78a4918ab303f969792d41e", token280:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4OTE3MWFhMzNmZjc0ODFiOGU4MGMwZmU3YmRjZjZlZiIsImF1ZCI6Ijc2OTE3Y2NjY2Q0NDQxYzM5NDU3YTA0ZjYwODRmYjJmIiwiZXhwIjoxNzE0MTU0NjI4LCJpYXQiOjE3MDYzNzg2MjgsImp0aSI6IjAzNDZmNmZkYzVjYjQ1ZDRhZjUzOGExYzgxYWQ5ZDQ3In0.sQld96sxwGX9MKgOU6z-idS_l12DTfrvmsW_JiNwc97JsM125f7DDPCA4Or6dWiNMVEgdzRi1rXS0FRfgnuZHQ"
  },
  quark: {
    cookie: "_UP_A4A_11_=wb965181b9bd4db690e879b191959c2b; tfstk=fgujGZDVMtXXU-h7IodzPl55npa6LxTeG1NttfQV6rUAWAGgUSS2mlJsVAHzHq-03YwsTfba3jzv1AMKhlkssIVTBAH_Qm-y8jc0SPpF5e8EikNnwbgbWOl84qV1ip8e8jC3ZSskLCxO0F2g6PFYX-hJNS286SHTHuB8OW4TBAU9NuFU_5CYXPeRySl066N6c5hXQC-qu3Y7Qje55j07MosmM8_OW4i7cJQ_FNQtPSGuXynFRhyKx-rUpYLPlPG81xyrpeQ7ykin_5MXlZUq2000u4JCtoM_Fk3uVtIYOrwbvqEltwcLX0g7uqpGxbl7Hkar43v4brMjxJqvqLDsN-ktluBXURoEaqESpL7SIlin_5MXlZHd4WbUdyyhf_ZhW7weNQsGbOChAOZ-mZIgD7Vb4QO5FGqYZ7weNQsGjoFuG8RWNTsG.; __pus=ec8f71d1926b7ecbaeda1b64d320c035AATz9y4DJT8X7Z2M8sE8njiq6dWjq7uko6f+cFKJvPZROt26XzhuXAg5QD0H8Wlcmc1UPUy8Gytr/AGn670P3vsd; __kp=5e2321e0-113e-11ef-883f-97d4f9dbb3ea; __kps=AASgBByBxX+MrxQTeLviEY0t; __ktd=1LIZ2rA78UjuJNcpKbIb8w==; __uid=AASgBByBxX+MrxQTeLviEY0t; __puus=e942b4acb1df52333d227871c56a95c5AAT/MGhv2+YX6zX7/tcy8D/rpC3L10yB50z15FfPPBkGvyv9xQdgwE/vaNqdEwog1Y7jIS8nUwf4hreI7MqZeBIA5+4M+Tnep+DtVsapIIEgSxBqQJXSeF6kGo+tJ9SVBlYqg8OfWtk5XXGe07U19j9I+f0jQu18G6gK32XaFRFu+7UYJh6N0Gvu4fSWBAzUITTJO33FAMiTzgyPweUKgU0X"
  },
  alist: [
    {
      name: "🐉神族九帝",
      server: "https://alist.shenzjd.com"
    },
    {
      name: "💢repl",
      server: "https://ali.liucn.repl.co"
    },
    {
      name: "🦆鸭鸭",
      server: "http: //shicheng.wang:555/"
    },
    {
      name: "小新",
      server: "https://pan.cdnxin.top/"
    }
  ],
  color: [
    {
      light: {
        bg: "https://i2.100024.xyz/2024/03/29/fsqaxo.webp",
        bgMask: "0x50ffffff",
        primary: "0xff446732",
        onPrimary: "0xffffffff",
        primaryContainer: "0xffc5efab",
        onPrimaryContainer: "0xff072100",
        secondary: "0xff55624c",
        onSecondary: "0xffffffff",
        secondaryContainer: "0xffd9e7cb",
        onSecondaryContainer: "0xff131f0d",
        tertiary: "0xff386666",
        onTertiary: "0xffffffff",
        tertiaryContainer: "0xffbbebec",
        onTertiaryContainer: "0xff002020",
        error: "0xffba1a1a",
        onError: "0xffffffff",
        errorContainer: "0xffffdad6",
        onErrorContainer: "0xff410002",
        background: "0xfff8faf0",
        onBackground: "0xff191d16",
        surface: "0xfff8faf0",
        onSurface: "0xff191d16",
        surfaceVariant: "0xffe0e4d6",
        onSurfaceVariant: "0xff191d16",
        inverseSurface: "0xff2e312b",
        inverseOnSurface: "0xfff0f2e7",
        outline: "0xff74796d",
        outlineVariant: "0xffc3c8bb",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xffaad291",
        surfaceTint: "0xff446732"
      },
      dark: {
        bg: "https://i2.100024.xyz/2024/03/29/fsqax8.webp",
        bgMask: "0x50000000",
        primary: "0xffaad291",
        onPrimary: "0xff173807",
        primaryContainer: "0xff2d4f1c",
        onPrimaryContainer: "0xffc5efab",
        secondary: "0xffbdcbb0",
        onSecondary: "0xff283420",
        secondaryContainer: "0xff3e4a35",
        onSecondaryContainer: "0xffd9e7cb",
        tertiary: "0xffa0cfcf",
        onTertiary: "0xff003738",
        tertiaryContainer: "0xff1e4e4e",
        onTertiaryContainer: "0xffbbebec",
        error: "0xffffb4ab",
        onError: "0xff690005",
        errorContainer: "0xff93000a",
        onErrorContainer: "0xffffdad6",
        background: "0xff11140e",
        onBackground: "0xffe1e4d9",
        surface: "0xff11140e",
        onSurface: "0xffe1e4d9",
        surfaceVariant: "0xff43483e",
        onSurfaceVariant: "0xffe1e4d9",
        inverseSurface: "0xffe1e4d9",
        inverseOnSurface: "0xff2e312b",
        outline: "0xff8d9286",
        outlineVariant: "0xff43483e",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xff446732",
        surfaceTint: "0xffaad291"
      }
    },
    {
      light: {
        bg: "https://i2.100024.xyz/2024/03/29/fsqax8.webp",
        bgMask: "0x50ffffff",
        primary: "0xff666014",
        onPrimary: "0xffffffff",
        primaryContainer: "0xffeee58c",
        onPrimaryContainer: "0xff1f1c00",
        secondary: "0xff625f42",
        onSecondary: "0xffffffff",
        secondaryContainer: "0xffe9e4be",
        onSecondaryContainer: "0xff1e1c05",
        tertiary: "0xff3f6654",
        onTertiary: "0xffffffff",
        tertiaryContainer: "0xffc1ecd5",
        onTertiaryContainer: "0xff002114",
        error: "0xffba1a1a",
        onError: "0xffffffff",
        errorContainer: "0xffffdad6",
        onErrorContainer: "0xff410002",
        background: "0xfffef9eb",
        onBackground: "0xff1d1c14",
        surface: "0xfffef9eb",
        onSurface: "0xff1d1c14",
        surfaceVariant: "0xffe7e3d0",
        onSurfaceVariant: "0xff1d1c14",
        inverseSurface: "0xff323128",
        inverseOnSurface: "0xfff5f1e3",
        outline: "0xff7a7768",
        outlineVariant: "0xffcbc7b5",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xffd1c973",
        surfaceTint: "0xff666014"
      },
      dark: {
        bg: "https://i2.100024.xyz/2024/03/29/fsqaxo.webp",
        bgMask: "0x50000000",
        primary: "0xffd1c973",
        onPrimary: "0xff353100",
        primaryContainer: "0xff4d4800",
        onPrimaryContainer: "0xffeee58c",
        secondary: "0xffcdc8a3",
        onSecondary: "0xff333117",
        secondaryContainer: "0xff4a482c",
        onSecondaryContainer: "0xffe9e4be",
        tertiary: "0xffa6d0b9",
        onTertiary: "0xff0e3727",
        tertiaryContainer: "0xff274e3d",
        onTertiaryContainer: "0xffc1ecd5",
        error: "0xffffb4ab",
        onError: "0xff690005",
        errorContainer: "0xff93000a",
        onErrorContainer: "0xffffdad6",
        background: "0xff14140c",
        onBackground: "0xffe7e2d5",
        surface: "0xff14140c",
        onSurface: "0xffe7e2d5",
        surfaceVariant: "0xff49473a",
        onSurfaceVariant: "0xffe7e2d5",
        inverseSurface: "0xffe7e2d5",
        inverseOnSurface: "0xff323128",
        outline: "0xff949181",
        outlineVariant: "0xff49473a",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xff666014",
        surfaceTint: "0xffd1c973"
      }
    },
    {
      light: {
        bg: "https://i2.100024.xyz/2024/01/13/qrnuwt.webp",
        bgMask: "0x50ffffff",
        primary: "0xFF2B6C00",
        onPrimary: "0xFFFFFFFF",
        primaryContainer: "0xFFA6F779",
        onPrimaryContainer: "0xFF082100",
        secondary: "0xFF55624C",
        onSecondary: "0xFFFFFFFF",
        secondaryContainer: "0xFFD9E7CA",
        onSecondaryContainer: "0xFF131F0D",
        tertiary: "0xFF386666",
        onTertiary: "0xFFFFFFFF",
        tertiaryContainer: "0xFFBBEBEB",
        onTertiaryContainer: "0xFF002020",
        error: "0xFFBA1A1A",
        onError: "0xFFFFFFFF",
        errorContainer: "0xFFFFDAD6",
        onErrorContainer: "0xFF410002",
        background: "0xFFFDFDF5",
        onBackground: "0xFF1A1C18",
        surface: "0xFFFDFDF5",
        onSurface: "0xFF1A1C18",
        surfaceVariant: "0xFFE0E4D6",
        onSurfaceVariant: "0xFF1A1C18",
        inverseSurface: "0xFF2F312C",
        onInverseSurface: "0xFFF1F1EA",
        outline: "0xFF74796D",
        outlineVariant: "0xFFC3C8BB",
        shadow: "0xFF000000",
        scrim: "0xFF000000",
        inversePrimary: "0xFF8CDA60",
        surfaceTint: "0xFF2B6C00"
      },
      dark: {
        bg: "https://i2.100024.xyz/2024/01/13/qrc37o.webp",
        bgMask: "0x50000000",
        primary: "0xFF8CDA60",
        onPrimary: "0xFF133800",
        primaryContainer: "0xFF1F5100",
        onPrimaryContainer: "0xFFA6F779",
        secondary: "0xFFBDCBAF",
        onSecondary: "0xFF283420",
        secondaryContainer: "0xFF3E4A35",
        onSecondaryContainer: "0xFFD9E7CA",
        tertiary: "0xFFA0CFCF",
        onTertiary: "0xFF003737",
        tertiaryContainer: "0xFF1E4E4E",
        onTertiaryContainer: "0xFFBBEBEB",
        error: "0xFFFFB4AB",
        errorContainer: "0xFF93000A",
        onError: "0xFF690005",
        onErrorContainer: "0xFFFFDAD6",
        background: "0xFF1A1C18",
        onBackground: "0xFFE3E3DC",
        outline: "0xFF8D9286",
        onInverseSurface: "0xFF1A1C18",
        inverseSurface: "0xFFE3E3DC",
        inversePrimary: "0xFF2B6C00",
        shadow: "0xFF000000",
        surfaceTint: "0xFF8CDA60",
        outlineVariant: "0xFF43483E",
        scrim: "0xFF000000",
        surface: "0xFF1A1C18",
        onSurface: "0xFFC7C7C0",
        surfaceVariant: "0xFF43483E",
        onSurfaceVariant: "0xFFC7C7C0"
      }
    }
  ]
};
