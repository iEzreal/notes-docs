---
sidebar: auto
---

**目录**
[[toc]]

# 第一章 ECMAScript 相关介绍

## 1.1 什么是ECMA

ECMA（European Computer Manufactrers Association）欧洲计算机制造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994年后改名为Ecma国际。

## 1.2 什么是ECMAScript

ECMAScript 是由Ecma国际通过ECMA-262标准化的脚本程序设计语言

## 1.3 什么是ECMA-262

Ecma国际制定了很多标准，而ECMA-262是其中一个

## 1.4 为什么要学习ES6

* ES6的版本变动内容较多
* ES6加入许多的语法特性，编程实现更简单，更高效
* ES6是前端发展趋势，就业必备技能

# 第二章

## 2.1 let 变量声明及声明特性

1. 声明不能重复
2. 块级作用域
3. 不存在变量提升
4. 不影响作用域链

## 2.2 const 变量声明及特点

1. 一定要赋初始值
2. 一般常量用大写
3. 常量的值不能修改
4. 块级作用域

## 2.3 解构赋值

ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

```javascript
//数组解构
const F4 = ['小沈阳', '刘能', '赵四', '宋小宝']
let [xiao, liu, zhao, song] = F4
```

```javascript
// 对象解构
const obj = {
  name: '赵本上',
  age: '60'
}
let {name, age} = obj
```

## 2.4 模板字符串

ES6 引入新的声明字符串的方式  **``** 

* 内容中可以直接出现换行符

```javascript
let str = `<ul>
            <li>沈腾</li>
            <li>玛丽</li>
            <li>魏翔</li>
            <li>艾伦</li>
           </ul>`
```

* 变量拼接

```javascript
let lovest = '魏翔'
let out = `$(lovest)是我心目中最搞笑的演员！！！`
```



