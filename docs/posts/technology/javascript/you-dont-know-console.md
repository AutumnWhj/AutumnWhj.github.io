---
title: 你不知道的 console.log 替代品😮
description: 你不知道的 console.log 替代品😮   这篇文章介绍了`console`意想不到的使用方法。
isOriginal: true
icon: javascript
date: 2022-08-07
category:
  - 技术文章
  - JavaScript
tag:
  - console

# 是否置顶
sticky: false
# 是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前
star: false
# 是否将该文章添加至文章列表中。
article: true
# 是否将该文章添加至时间线中。
timeline: true
---
<CountView></CountView>


> 这篇文章介绍了`console`意想不到的使用方法。


<!-- more -->



现在，认为您正在编写一些 `JS` 代码并且它不能正常工作。你做的第一件事是什么？你在`console.log`搞定它！所以我要告诉你一些替代方案`console.log`。

### 使用解构

通过使用 `javascript `对象的破坏能力，您可以这样做：

```js
const { log } = console;

log("hi");
log("testing");
```

您可以将`log`函数更改为您想要的任何其他名称，如下所示：

```js
const { log: myLog } = console;

myLog("hi");
myLog("testing");
```

### `console.group`

曾经想对您的日志进行分组吗？这个方法很适合你！

```js
console.group("groupName");
console.log("hi");
console.log("testing");
console.groupEnd();

console.group("groupName2");
console.log("hi");
console.log("testing");
console.groupEnd();
```


### `console.table`

用于打印数组。

```js
const arr = [1, 2, 3, 4, 5];
console.table(arr);
```

### `console.time`

此方法用于测量时间。例如，检查完成 x 任务花了多少秒？

```js
console.time("test");
setTimeout(() => {
    console.timeEnd("test");
}, 1000);
```

这将为我们提供以下结果：

```js
test: 1.000s
```

### `console.assert`

此方法用于检查条件是否为真。如果不是，它将引发错误。

```js
console.assert(/** Condition **/, /** Error message **/);


console.assert(1 === 1, "1 is equal to 1"); // No error
console.assert(0 === [], "0 is equal to []"); // Error in the console
```

### `console.count`

计算某件事发生的次数。

```js
console.count("counter 1");

for (let i = 0; i < 10; i++) {
    i % 2 == 0 ? console.count("counter 1") : console.count("counter 2");
}
```

### `console.trace`

此方法跟踪它被调用的位置。我有一个这样的 HTML 文件：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>

    <body>
        <script>
            "test";

            console.trace();

            i = 0;
        </script>
    </body>
</html>
```

现在你可以看到在哪里`console.trace`被调用了。

### `debugger`关键词

您可能没有听说过该`debugger`关键字。它是一个用于停止代码执行的关键字。

```js
const buggyCode = () => {
    debugger;
    console.log("hi");
};

// ...

buggyCode();

console.log("World");
```
它会告诉您调试器的调用位置。