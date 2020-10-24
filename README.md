# NjnuClassroom 南师教室
## 总览

### 1、概述
本项目(NjnuClassroom, 南师教室)由南京师范大学[Repigeons团队](https://repigeons.github.io/)设计并完成全栈开发，旨在为南师在校学生提供更便捷的服务。
本项目力求做到数据的实时化更新，为各位同学提供最准确可靠的教室信息，并通过智能排序算法，从多维度属性出发，计算出空教室的推荐系数，让同学们获得最优的使用体验。
本项目完全开源，采用 [`GNU General Public License v3.0` 开源许可证](./LICENSE)，我们希望能为大家提供一个思路，同时也欢迎更多的人加入到我们的社区中来，共同维护这一项目，不断优化，为尽可能多的同学提供尽可能多的帮助。再次感谢您的关心与支持。


### 2、项目结构
该项目共分为三部分，分别为：
（一）[数据采集器](python/README.md)，
（二）[数据服务器](flask/README.md)，
（三）[小程序](wechat/README.md)。

**以下将对各部分进行简要介绍**

（一） [数据采集器](python/README.md)

该部分为“南师教室”项目的数据采集部分，采用基于Python的爬虫技术，获取一站式事务中心提供的数据，对数据进行统一化处理并存入数据库。

（二） [数据服务器](flask/README.md)

该部分为“南师教室”项目的服务端部分，采用 ASP.NET Core 框架，用于接受小程序发出的查询请求并根据请求返回相应数据。

（三） [小程序](wechat/README.md)

该部分为“南师教室”项目的客户端部分，采用TypeScript编程语言，用于前端事件响应与数据处理，将查询到的数据展示给用户。
