| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-badge.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-badge.svg?style=flat-square)

[![xy-badge](https://nodei.co/npm/xy-badge.png)](https://npmjs.org/package/xy-badge)

# xy-badge

徽章组件

## 安装

```bash
# yarn
yarn add xy-badge utils-hooks classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Badge, BadgeDot, ScrollNumber, ScrollNumberItem } from "xy-badge";
ReactDOM.render(
    <Badge count={10}>
        <a>Link</a>
    </Badge>,
    container
);
```

## API

| 属性          | 说明                                                                 | 类型                | 默认值 |
| ------------- | -------------------------------------------------------------------- | ------------------- | ------ |
| positionStyle | 悬浮 Badge 样式                                                      | React.CSSProperties | -      |
| dot           | 点模式, 不展示详细数字, 值显示一个小红点                             | boolean             | false  |
| status        | 状态, 可选值: "success"，"processing"，"default"，"error"，"warning" | string              | -      |
| text          | 设置状态点时的文本                                                   | React.ReactNode     | -      |
| children      | 包裹内容                                                             | React.ReactNode     | -      |
| count         | 要展示的徽标数                                                       | number              | -      |
| overflowCount | 封顶数值,超过封顶值不滚动数字，而是最追加一个+字符                   | number              | -      |
| showZero      | 是否显示 0                                                           | boolean             | false  |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-badge is released under the MIT license.
