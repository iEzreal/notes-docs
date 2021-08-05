---
sidebar: auto
sidebarDepth: 2
---

# ES6-ES11

## ES6-箭头函数
* 基础语法：`(参数1, 参数2, …, 参数N) => { 函数声明 }`

  ```js
  let fun= (m, n) => {
    return m + n
  }
  console.log(fun(3, 6))
  ```

* 箭头函数简写

  ```js
  // 省略小括号（有且只有一个参数）
  let fun = name => {
    return name + '你好帅！'
  }
  
  // 省略花括号（代码只有一条语句）
  let fun = (name) => return name + '你好帅！'
  
  // 省略小括号、花括号
  let fun = name => return name + '你好帅！'
  
  console.log(fun('小明'))
  ```

  

* this指针

  箭头函数不会创建自己的 `this` 它只会从自己的作用域链的上一层继承 `this`

  `this` 是静态的 `this` 始终指向函数声明所在作用域的 `this` 的值

  ```js
  function getName1() {
    console.log(this.name)
  }
  			
  let getName2 = () => {
    console.log(this.name)
  }
  
  window.name = '小明同学'
  const school = {
    name: '大明同学'
  }
  			
  // 直接调用 
  getName1() // 输出：小明同学
  getName2() // 输出：小明同学
  			
  // call 方法调佣
  getName1.call(school) // 输出：大明同学 this作用域改变
  getName2.call(school) // 输出：小明同学 this始终指向全局作用域
  ```

* 不能作为构造函数实例化对象

  ```js
  let Person = (name, age) => {
    this.name = name
    this.age = age
  }
  var person = new Person('小明', 13)
  console.log(person)
  
  错误：Uncaught TypeError: Person is not a constructor
  ```

* 不能使用 arguments 变量

  ```js
  let fun = () => {
    console.log(arguments)
  }
  fun('a', 'b', 'c')
  
  错误：Uncaught ReferenceError: arguments is not defined
  ```

## ES6-函数参数的默认值

ES6 允许给函数参数赋值初始值

* 形参初始值（一般位置要靠后）

  ```js
  function fun(a, b, c=9) {
    return a + b + c
  }
  let result = fun(3, 6)
  console.log(result)
  ```

* 与解构赋值结合

  ```js
  function sayHello({name, talk='你最傻'}) {
    return name + talk
  }
  let result = sayHello({
    name: '小明',
    talk: '你最帅'
  })
  console.log(result)
  ```

## ES6-rest参数

ES6 引入 `rest` 参数，用于获取函数的实参，用来代替 `arguments`

* ES5 获取实参的方式

  ```js
  function star() {
    console.log(arguments)
  }
  star('王源', '王俊凯', '易烊千玺')

  注意：arguments 数组类型
  ```
  
* ES6 获取实参的方式 (rest参数一般放在最后)

  ```js
  function star(...args) {
    console.log(args)
  }
  star('王源', '王俊凯', '易烊千玺')

  注意：args 对象类型
  ```

  