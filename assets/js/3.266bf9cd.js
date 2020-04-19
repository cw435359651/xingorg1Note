(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{156:function(t,s,a){t.exports=a.p+"assets/img/UnicodeDecodeError2.60a708dd.png"},301:function(t,s,a){t.exports=a.p+"assets/img/getDir1.1f05f7a0.png"},302:function(t,s,a){t.exports=a.p+"assets/img/getDir2.a9f8a34e.png"},303:function(t,s,a){t.exports=a.p+"assets/img/winDir.9587802e.png"},304:function(t,s,a){t.exports=a.p+"assets/img/getDir3.69858f65.png"},305:function(t,s,a){t.exports=a.p+"assets/img/pwd.b036e46e.png"},306:function(t,s,a){t.exports=a.p+"assets/img/writeIntError.fc5b2a74.png"},307:function(t,s,a){t.exports=a.p+"assets/img/fileReadError.c1f60185.png"},347:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"python中的文件读写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python中的文件读写"}},[t._v("¶")]),t._v(" python中的文件读写")]),t._v(" "),n("p",[t._v("文件读写，是Python代码调用电脑文件的主要功能，能被用于读取和写入文本、音频片段、Excel文档、邮件以及任何保存在电脑上的东西。")]),t._v(" "),n("p",[t._v("可使用python批量的操作本地文件，进行文件的读写。")]),t._v(" "),n("h2",{attrs:{id:"拓展路径小知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拓展路径小知识"}},[t._v("¶")]),t._v(" 拓展路径小知识")]),t._v(" "),n("p",[t._v("读写文件需要让计算机先找到文件的路径，而编写路径代码前我们人类得先准确找到文件路径。")]),t._v(" "),n("p",[t._v("以下整理路径相关知识")]),t._v(" "),n("h3",{attrs:{id:"相对路径和绝对路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相对路径和绝对路径"}},[t._v("¶")]),t._v(" 相对路径和绝对路径")]),t._v(" "),n("p",[t._v("绝对路径：就是最完整的路径")]),t._v(" "),n("p",[t._v("相对路径：指的就是【相对于当前python文件】的路径")]),t._v(" "),n("h3",{attrs:{id:"路径获取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路径获取"}},[t._v("¶")]),t._v(" 路径获取")]),t._v(" "),n("h4",{attrs:{id:"_1、文件拖拽的方式（mac）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、文件拖拽的方式（mac）"}},[t._v("¶")]),t._v(" 1、文件拖拽的方式（mac）")]),t._v(" "),n("p",[t._v("要获得你的文件路径，只需要把目标文件直接拖到编辑器终端的窗口里（我这里用的vscode的终端。或可以用电脑自带的命令行），就会显示出文件地址，然后复制一下就好。拖到终端获取的地址是绝对路径。\n"),n("img",{attrs:{src:a(301),alt:"路径获取小知识"}}),t._v("\n出现路径：\n"),n("img",{attrs:{src:a(302),alt:"路径获取小知识"}}),t._v("\n只针对mac。")]),t._v(" "),n("p",[t._v('因为win的vscode终端里，路径显示的很完整了。拷贝之后改为"\\\\"即可。\n'),n("img",{attrs:{src:a(303),alt:""}})]),t._v(" "),n("h4",{attrs:{id:"_2、vscode里的快捷选项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、vscode里的快捷选项"}},[t._v("¶")]),t._v(" 2、VScode里的快捷选项")]),t._v(" "),n("p",[t._v("用VS Code打开文件夹，选中文件后点击右键，选择“复制路径”或“复制相对路径”（mac和win通用）：\n"),n("img",{attrs:{src:a(304),alt:"路径获取小知识"}})]),t._v(" "),n("h4",{attrs:{id:"_3、pwd命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、pwd命令"}},[t._v("¶")]),t._v(" 3、pwd命令")]),t._v(" "),n("p",[t._v("mac电脑中，还可以在命令行中使用"),n("code",[t._v("pwd")]),t._v("获取当前cmd打开时所在文件夹的路径。\n"),n("img",{attrs:{src:a(305),alt:"pwd获取当前文件路径"}})]),t._v(" "),n("h3",{attrs:{id:"“-”在python中需要转义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#“-”在python中需要转义"}},[t._v("¶")]),t._v(" “\\”在python中需要转义")]),t._v(" "),n("p",[t._v("特殊的：Windows系统里，常用“\\”来表示绝对路径，但是“\\”在python中是转义字符，所以时常会有冲突。为了避坑，Windows的绝对路径通常要稍作处理，写成类似以下两种形式：")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#第一种：将'\\'替换成'\\\\'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\\\Users\\\\Ted\\\\Desktop\\\\test\\\\abc.txt'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#第二种：在路径前加上字母r")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'C:\\Users\\Ted\\Desktop\\test\\abc.txt'")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h2",{attrs:{id:"读取文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读取文件"}},[t._v("¶")]),t._v(" 读取文件")]),t._v(" "),n("p",[t._v("问，把大象放到冰箱需要几步？\n答：打开冰箱 - 放入大象 - 关上冰箱")]),t._v(" "),n("p",[t._v("再问，读取文件需要几步？\n答：打开文件 - 读取信息 - 关闭文件")]),t._v(" "),n("h3",{attrs:{id:"打开文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打开文件"}},[t._v("¶")]),t._v(" 打开文件")]),t._v(" "),n("p",[t._v("使用"),n("code",[t._v("open()")]),t._v("函数打开文件")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("openResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/.../demo.txt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# openResult变量用于存放open读取的文件数据，以便对其进行后续操作。")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("open各参数说明：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("地址参数")]),t._v(" "),n("td",[t._v("open函数内的第一个参数，表示文件的路径。可以是绝对路径、也可以是相对路径。")])]),t._v(" "),n("tr",[n("td",[t._v("r")]),t._v(" "),n("td",[t._v("第二个参数表示打开文件的模式。这里是字符串 'r'，表示 read，表示我们以读的模式打开了这个文件。")])]),t._v(" "),n("tr",[n("td",[t._v("encoding='utf-8'")]),t._v(" "),n("td",[t._v("表示的是返回的数据采用何种编码，一般采用'utf-8'或者'gbk'。")])])])]),t._v(" "),n("p",[t._v("注意：如果这里填写的编码类型和文件本身的编码格式不一致的话，就会报错。\n"),n("img",{attrs:{src:a(156),alt:"open文件时编码不正确"}}),t._v("\n上图用“utf-8”编码模式打开，但是文本的编码实际是“ANSI”。就报了这种错误。")]),t._v(" "),n("h3",{attrs:{id:"读取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读取"}},[t._v("¶")]),t._v(" 读取")]),t._v(" "),n("h4",{attrs:{id:"用read-函数将整个文件一次性读取出来"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用read-函数将整个文件一次性读取出来"}},[t._v("¶")]),t._v(" 用"),n("code",[t._v("read()")]),t._v("函数将整个文件一次性读取出来")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("readResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件读取后的字符串内容赋值给readResult变量")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("readResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以打印出读取的内容")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("read() 会从txt文件"),n("strong",[t._v("取出全部内容，是一个字符串。")])]),t._v(" "),n("h4",{attrs:{id:"用readlines-函数逐行读取文件的内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用readlines-函数逐行读取文件的内容"}},[t._v("¶")]),t._v(" 用"),n("code",[t._v("readlines()")]),t._v("函数逐行读取文件的内容")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("readResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readlines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 逐行读取")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("readResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("readlines() 会从txt文件"),n("strong",[t._v("取得一个列表")]),t._v("，列表中的每个字符串就是读取的文件中的每一行。而且每个字符串后面还有换行的\\n符号。")]),t._v(" "),n("p",[t._v("如有txt文件，内容如下：")]),t._v(" "),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("小石头 100 93 83\n郭菊锋 89 67 9\nxing.org1^ 23 48 100\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("则用上边的代码readlines()读取后，打印readResult的结果就是长这样的：")]),t._v(" "),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("['小石头 100 93 83\\n', '郭菊锋 89 67 9\\n', 'xing.org1^ 23 48 100']\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("这样就可以用for循环遍历列表，逐行处理数据。"),n("em",[t._v("（具体做法可以看最后边的小练习）")])]),t._v(" "),n("h3",{attrs:{id:"关闭文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭文件"}},[t._v("¶")]),t._v(" 关闭文件")]),t._v(" "),n("p",[t._v("使用的是close()函数")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("openResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接关闭即可")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h4",{attrs:{id:"文件关闭的必要性："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件关闭的必要性："}},[t._v("¶")]),t._v(" 文件关闭的必要性：")]),t._v(" "),n("p",[t._v("1.计算机能够打开的文件数量是有限制的，open()过多而不close()的话，就不能再打开文件了。")]),t._v(" "),n("p",[t._v("2.能保证写入的内容已经在文件里被保存好了。")]),t._v(" "),n("p",[n("strong",[t._v("文件关闭之后就不能再对这个文件进行读写了。")]),t._v("\n如果还需要读写这个文件的话，就要再次 open() 打开这个文件。")]),t._v(" "),n("h3",{attrs:{id:"读取文件总结三步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读取文件总结三步"}},[t._v("¶")]),t._v(" 读取文件总结三步")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("openResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/.../demo.txt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、打开")]),t._v("\nreadResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、读取")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("readResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2+1、可以对读取的文件进行使用操作")]),t._v("\nopenResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3、关闭")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h2",{attrs:{id:"文件写入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件写入"}},[t._v("¶")]),t._v(" 文件写入")]),t._v(" "),n("p",[t._v("问，把大象放到冰箱需要几步？\n答：打开冰箱 - 放入大象 - 关上冰箱")]),t._v(" "),n("p",[t._v("再问，文件写入需要几步？\n答：打开文件 - 写入信息 - 关闭文件")]),t._v(" "),n("h3",{attrs:{id:"打开文件-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打开文件-2"}},[t._v("¶")]),t._v(" 打开文件")]),t._v(" "),n("p",[t._v("同样还是使用open()函数打开文件")]),t._v(" "),n("p",[t._v("但第二个参数，打开的模式要改变一下：")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("openResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/.../demo.txt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# openResult变量用于存放open打开的文件的数据，以便对其进行后续操作。")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("或者另一种写法：")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("openResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/.../demo.txt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("open各参数说明（其他参数见上边表格，这里重点说第二个参数）：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("w")]),t._v(" "),n("td",[t._v("第二个参数表示打开文件时的模式。字符串'w'表示 write，即以写入的模式打开文件。不过值得注意的是，‘w’是覆盖式写入，新write的内容会覆盖该文件原有的内容。表现上就是先清空文件内容，再写入。")])]),t._v(" "),n("tr",[n("td",[t._v("a")]),t._v(" "),n("td",[t._v("字符串'a'表示append，顾名思义，就是向后追加的意思。其和'w'作用一样都是向文件中写入的模式。不过append更人性化的是，向原有文件的内容之后追加内容，而不是直接覆盖源文件的内容。")])])])]),t._v(" "),n("p",[n("strong",[t._v("在'w'和'a'模式下，如果你打开的文件不存在，那么open()函数会自动帮你创建一个，不会报错。")])]),t._v(" "),n("h3",{attrs:{id:"写入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写入"}},[t._v("¶")]),t._v(" 写入")]),t._v(" "),n("h4",{attrs:{id:"使用write-函数往文件中写入一个内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用write-函数往文件中写入一个内容"}},[t._v("¶")]),t._v(" 使用"),n("code",[t._v("write()")]),t._v("函数往文件中写入一个内容")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("openResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小石头\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向openResult中写入内容。write参数必须是字符串，表示要写入的内容")]),t._v("\nopenResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xing.org1^\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \\n表示换行符。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("openResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("注意，写入时，write函数内容不要尝试用数字，不然你会体会到报错的报复：\n"),n("img",{attrs:{src:a(306),alt:""}})]),t._v(" "),n("p",[t._v("那我们就想写入一个序列（列表）的话，该怎么做呢？")]),t._v(" "),n("h4",{attrs:{id:"使用writelines-函数向文本中写入序列内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用writelines-函数向文本中写入序列内容"}},[t._v("¶")]),t._v(" 使用"),n("code",[t._v("writelines()")]),t._v("函数向文本中写入序列内容")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("listVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小石头\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xing.org1^\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一个待写入的列表。要换行还要自己加入换行符")]),t._v("\nopenResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writelines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# writelines参数接受一个序列")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h3",{attrs:{id:"关闭文件-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭文件-2"}},[t._v("¶")]),t._v(" 关闭文件")]),t._v(" "),n("p",[t._v("关闭文件，依旧使用close()函数")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[t._v("openResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接关闭即可")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"总结三步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结三步"}},[t._v("¶")]),t._v(" 总结三步")]),t._v(" "),n("p",[t._v("重写文件内容：")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用write模式打开文件")]),t._v("\nopenResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/.../demo.txt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、打开（write）")]),t._v("\nopenResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小石头\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、覆盖源文件内容、写入")]),t._v("\nopenResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xing.org1^\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nopenResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3、关闭")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("或者，追加内容：")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用append模式打开文件")]),t._v("\nopenResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/.../demo.txt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、打开（append）")]),t._v("\nopenResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小石头\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、向源文件内容之后追加、写入")]),t._v("\nopenResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xing.org1^\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nopenResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3、关闭")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("此时可以观察，txt文件里的内容已经被修改了")]),t._v(" "),n("h2",{attrs:{id:"open函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#open函数"}},[t._v("¶")]),t._v(" open函数")]),t._v(" "),n("h3",{attrs:{id:"打开文件的几种模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打开文件的几种模式"}},[t._v("¶")]),t._v(" 打开文件的几种模式")]),t._v(" "),n("p",[t._v("参照上边的代码，open函数调用时，第二个参数就需要传入是r还是w亦或者是其他模式，表示只读还是只写还是其他等等。")]),t._v(" "),n("p",[t._v("为什么打开的时候就要决定是读还是写的模式，之后决定不行吗？")]),t._v(" "),n("p",[t._v("这是因为，计算机非常注意数据的保密性，在打开时就要决定以什么模式打开文件。")]),t._v(" "),n("p",[t._v("而除了'r'，还有'w'(写入)，'a'(追加)等模式，详见下表：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("模式")]),t._v(" "),n("th",[t._v("全写")]),t._v(" "),n("th",[t._v("含义")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("文件不存在")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("r")]),t._v(" "),n("td",[t._v("read")]),t._v(" "),n("td",[t._v("只读模式")]),t._v(" "),n("td",[t._v("读取文件")]),t._v(" "),n("td",[t._v("文件不存在就报错，"),n("br"),t._v("文件存在指针在开头"),n("br"),t._v("从头开始，扫描读取")])]),t._v(" "),n("tr",[n("td",[t._v("w")]),t._v(" "),n("td",[t._v("write")]),t._v(" "),n("td",[t._v("只写模式")]),t._v(" "),n("td",[t._v("覆盖源文件，写入新数据")]),t._v(" "),n("td",[t._v("文件不存在就新建，"),n("br"),t._v("存在就覆盖")])]),t._v(" "),n("tr",[n("td",[t._v("a")]),t._v(" "),n("td",[t._v("append")]),t._v(" "),n("td",[t._v("追加模式")]),t._v(" "),n("td",[t._v("在源文件内容的基础上"),n("br"),t._v("追加写入新内容")]),t._v(" "),n("td",[t._v("文件不存在新建，"),n("br"),t._v("存在指针放到末尾追加内容")])])])]),t._v(" "),n("ul",[n("li",[t._v("read文件不存在就报错\n"),n("img",{attrs:{src:a(307),alt:"read文件不存在就报错"}})])]),t._v(" "),n("h3",{attrs:{id:"二进制资源读写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二进制资源读写"}},[t._v("¶")]),t._v(" 二进制资源读写")]),t._v(" "),n("p",[t._v("w和a写入的都是文本内容。")]),t._v(" "),n("p",[t._v("如果想写入图片、视频、音频等这些以二进制形式进行存储的资源内容时，需要使用‘wb’这些以二进制的方式打开并读写文本的模式。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("模式"),n("br"),t._v("分类")]),t._v(" "),n("th",[t._v("普通"),n("br"),t._v("模式")]),t._v(" "),n("th",[t._v("b"),n("br"),t._v("(bytes,字节)")]),t._v(" "),n("th",[t._v("+")]),t._v(" "),n("th",[t._v("b+")]),t._v(" "),n("th",[t._v("文件"),n("br"),t._v("不存在")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("read"),n("br"),t._v("(读取)")]),t._v(" "),n("td",[t._v("r 只读")]),t._v(" "),n("td",[t._v("rb 二进制只读")]),t._v(" "),n("td",[t._v("r+ 读写")]),t._v(" "),n("td",[t._v("rb+ 二进制读写")]),t._v(" "),n("td",[t._v("报错")])]),t._v(" "),n("tr",[n("td",[t._v("write"),n("br"),t._v("(写入)")]),t._v(" "),n("td",[t._v("w 只写")]),t._v(" "),n("td",[t._v("wb 二进制只写")]),t._v(" "),n("td",[t._v("w+ 读写")]),t._v(" "),n("td",[t._v("wb+ 二进制读写")]),t._v(" "),n("td",[t._v("新建文件")])]),t._v(" "),n("tr",[n("td",[t._v("append"),n("br"),t._v("(追加)")]),t._v(" "),n("td",[t._v("a 追加")]),t._v(" "),n("td",[t._v("ab 二进制追加")]),t._v(" "),n("td",[t._v("a+ 追加且可读")]),t._v(" "),n("td",[t._v("ab+ 二进制追加且可读")]),t._v(" "),n("td",[t._v("新建文件")])])])]),t._v(" "),n("h2",{attrs:{id:"with关键字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#with关键字"}},[t._v("¶")]),t._v(" with关键字")]),t._v(" "),n("p",[t._v("使用"),n("code",[t._v("with")]),t._v("配合open函数来读取文件，可以不用写close()来关闭文件。这样可以防止我们代码最后忘记关闭文件或频繁关闭文件，造成资源占用或代码冗余的情况。")]),t._v(" "),n("h3",{attrs:{id:"格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[t._v("¶")]),t._v(" 格式")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("with open() as xxx:\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("¶")]),t._v(" 语法")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文件地址'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'读写模式'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 变量名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#格式：注意冒号")]),t._v("\n    变量名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'写入内容'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#冒号下对文件的操作要缩进")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#最后无需用close()关闭")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h3",{attrs:{id:"写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写法"}},[t._v("¶")]),t._v(" 写法")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./demo.txt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" openResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    openResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小石头'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h2",{attrs:{id:"python克隆图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python克隆图片"}},[t._v("¶")]),t._v(" python克隆图片")]),t._v(" "),n("p",[t._v("原理，用python读取一个图片文件，然后再写入一个新的图片文件。实现图片的拷贝克隆功能。")]),t._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'photo1.png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" photo1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开原图photo1.png，rb只读二进制资源模式")]),t._v("\n    result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" photo1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将读取结果赋值给result")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'photo2.jpg'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" photo2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开新图photo2.jpg，wb只写模式，没有该文件将创建一个新文件。")]),t._v("\n        photo2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建的新文件中，写入photo1的数据，实现图片克隆。")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h2",{attrs:{id:"小练习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小练习"}},[t._v("¶")]),t._v(" 小练习")]),t._v(" "),n("p",[t._v("文件读写操作小练习:")]),t._v(" "),n("p",[t._v("本地一个demo.txt文件，文件内容如下：")]),t._v(" "),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 原来的，demo.txt文件内容 --\x3e")]),t._v("\n小石头 100 93 83\n郭菊锋 89 67 9\nxing.org1^ 23 48 100\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("分别是三个人的语文、数学、英语成绩。")]),t._v(" "),n("p",[t._v("练习目标是读取文件后计算三人的总成绩。然后写到demo文件下，生成格式如：")]),t._v(" "),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 修改后，demo.txt文件内容 --\x3e")]),t._v("\n小石头 100 93 83\n郭菊锋 89 67 9\nxing.org1^ 23 48 100\n\n总分：\n小石头 276\n郭菊锋 165\nxing.org1^ 171\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://github.com/xingorg1/xingorg1Note/blob/master/docs/backEnd/python/files/17-file.py#L37",target:"_blank",rel:"noopener noreferrer"}},[t._v("练习参考答案及源代码"),n("OutboundLink")],1),t._v(" "),n("Vssue",{attrs:{title:"Python 文件读写"}})],1)])},[],!1,null,null,null);s.default=e.exports}}]);