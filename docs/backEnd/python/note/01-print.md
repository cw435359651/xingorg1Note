# print函数的用法
print - Python中打印信息的函数，可以打印代码运行结果，帮助我们了解代码执行状态。
> 注意⚠️：在python代码书写过程中，一定要切换成英文输入状态，保证print()函数的括号是用【英文括号】，并且其他默认所有正确的语法，包括标点符号都是【英文】。不小心用了中文标点的话，计算机会无法识别，然后报错syntaxError:invalid syntax（语法错误：无效语法）。
## 一、主要功能：
打印内容。  
打印的意思是：让计算机把你给它的指令结果，显示在屏幕的终端上。

参数：可以有多个，用英文逗号隔开。
## 二、传参用法示例
### 0、无引号
无引号时，只能在括号里输入数字或数学运算
```py
print(520) # 打印结果：520（下同）
# 打印一个int类型的整数

print(520.1314) # 520.1314
# 打印一个float类型的浮点数

print(1+519) # 520
# 打印一个数学运算公式，
```

### 1、单引号
```py
print('我爱你,Python!') # 我爱你,Python! 
# 打印一段字符串，单引号包裹的
```
> 注意⚠️：单引号是英文输入法下的单引号！
* 思考： 为什么打印文字的时候需要加上引号呢？  
答：计算机只能理解数字，却读不懂文字。因为数字和数学运算是标准化、有固定格式的，而文字却能够千变万化。当括号内有引号的时候，就相当于告诉计算机——你不需要执行多余的操作，我输入什么，你就打印什么。即**让计算机无需理解和运算，直接原样输出引号中的内容**
### 2、双引号
```py
print("I love u,Python!") # I love u,Python!
# 打印一段字符串,双引号包裹的
```
> 注意⚠️：双引号是英文输入法下的双引号！而不是两个单引号
* 思考：既然有了单引号为什么还要双引号？  
答：单引号和双引号可能会在括号内同时出现，比如下边的代码：
```py
print("this's my love, python.") # this's my love, python.
# 单双引号同时使用的情况。其中，单引号是需要打印的内容，双引号是print函数的语法内容
```

> 注意⚠️：要注意符号的统一，括号内前后两个引号都要统一用单引号/双引号。
### 3、三引号
print内部使用三引号''' 来实现**跨行（换行）**输出。示例代码如下：
```py
print(''' 第一行内容
第二行内容
哈哈哈，23333～''')
# 打印结果如下三行：
# 第一行内容
# 第二行内容
# 哈哈哈，23333～
```
> 注意⚠️：三引号是英文输入法下的三个单引号！

## 三、转义字符（第二种实现换行的办法）
使用转义字符\n，可以实现换行效果：
```py
print('第一行\n第二行\n哈哈，23333～')
# 打印结果如下三行：
# 第一行
# 第二行
# 哈哈，23333～
```
除了```\n```以外，还有很多转义字符：  
### 转义字符总结
特征：反斜杠(\\) + 想要实现的转义功能(转义字符)英文缩写首字母
转义字符 | 意义
-|-
\a | 响铃(BEL)。
\b | 退格(BS),将当前位置移到前一列。backspace
\f | 换页(FF),将当前位置移到下页开头。
\n | 换行(LF),将当前位置移到下一行开头。newline
\r | 回车(CR),将当前位置移到本行开头。return
\t | 水平制表(HT)（跳到下一个TAB位置）。
\v | 垂直制表(VT)。
\\ | 代表一个反斜线字符“\”。
\' | 代表一个单引号(撇号)字符。
\" | 代表一个双引号字符。
\? | 代表一个问号。
\0 | 空字符(NUL)。
\ddd | 1-3位八进制所代表的任意字符。
\xhh | 1-2位十六进制所代表的任意字符。

> 注意⚠️：区分，斜杠"/"与反斜杠"\"，此处不可互换