1、看官网点击doc，找到create react app。使用npm安装create-react-app脚手架。我这里和文档的安装方法不一样，因为安装官方文档的安装方法安装失败。所以我这里的安装方法如下（按先后顺序用命令行在你想创建文件的盘里面依次执行）：
     npm install -g create-react-app
  create-react-app my-app （后面的my-app是自己创建项目的名称）
cd my-app/
npm run start（自动把react的项目启动起来）
2、精简代码，删除一些不需要用到的文件，比如样式文件（自己可以写），测试文件（暂时用不到）。
3、了解什么是组件：组件就是网页中的一部分
4、react使用jsx语法：允许使用标签方式向页面中添加元素，同时可以写{js表达式}来执行js的表达式，注意不能是语句的形式。
5、编写todolist功能：为元素绑定事件，添加列表项，删除列表项
    this.setState()即时更新类中的数据
    使用带的es6语法：箭头函数，扩展运算符，当键值名相同时可省略值。const
6、组件的拆分
    父组件通过属性的方式向子组件传递参数，子组件通过this.props接收父组件传递过来的参数。

7、子组件如何向父组件传值
    子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
8、react中添加css样式
    1、内联样式：style={{background-color:red,color:#fff}},外层括号表示里面是js表达式，内括号表示这是一个对象。
    2、外联样式：定义class。className="***";注意，定义了css文件，要将css文件引入到入口文件。
9、在render函数中的return中只能返回一个最顶层元素，否则会报错。我们可以选择这个元素为：<React.Fragment></React.Fragment>,这样返回元素中就不包含其他多余的元素，因为当返回的元素添加到dom中时，React.Fragment会自动删除。（类似于documentFragment）