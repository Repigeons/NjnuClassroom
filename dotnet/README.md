# [NjnuClassroom 南师教室](../README.md)
## 第二部分 数据服务器


### 1、简介
该部分为“南师教室”项目的服务端部分，主要用于提取并整理数据库中的数据，接受客户端发送的查询请求，根据请求内容返回相应数据。
该部分采用基于 .NET Core 的 api-service 开发模式，响应数据格式为`application/json`格式。


### 2、开发语言及环境
项目该部分采用JetBrains Rider (或 Visual Studio) 集成开发环境进行开发，选用了C#编程语言，ASP.NET Core 模块化框架。
ASP.NET Core 是由微软开发的开源跨平台Web框架，可支持包括C#在内的多种编程语言。


### 3、配置文件
在`conf`配置文件夹下，应包含`database.json`两个配置文件，为项目使用的数据库配置，文件格式参考`template.database.json`模板文件


### 4、编译方法
dotnet项目可采用MSBuild生成，也可单独使用dotnet sdk
[[下载地址](https://dotnet.microsoft.com/download)]
进行编译。编译命令为：
> dotnet build


### 5、运行方法
dotnet为跨平台模块化框架，支持运行在包括Windows, Linux, MacOS在内的多种操作系统中，
可以在 终端/命令行 中通过以下命令启动
> dotnet NjnuClassroom.dll

当然，我们更建议使用Docker容器进行部署，参考[配置文件](./Dockerfile)。部署方法及相关命令如下：
- 拉取依赖
> docker pull mcr.microsoft.com/dotnet/core/aspnet:3.1
- 拉取镜像
> docker pull repigeons/njnuclassroom_aspnetcore
- 或自行构建镜像
> docker build -t njnuclassroom_aspnetcore .
- 启动容器 (参数: --rm关闭后自动销毁 -d后台运行 -p端口映射)
> docker run --name="njnuclassroom_aspnetcore" --rm -d -p 5000:80 njnuclassroom_aspnetcore
- 查看日志
> docker logs njnuclassroom_aspnetcore
- 关闭容器
> docker stop njnuclassroom_aspnetcore
- 销毁容器
> docker rm njnuclassroom_aspnetcore

此外，在Windows环境下，亦可以将其部署于IIS进行托管，或直接运行经过编译的NjnuClassroom.exe。


### 6、项目结构
```
├── NjnuClassroom.sln       # 解决方案
└── NjnuClassroom           # 项目文件夹
    ├── appsettings.json    # 默认配置文件
    ├── conf                # 项目配置文件
    │   ├── database.json   # 项目使用的数据库配置
    │   └── template.*.json # 配置文件对应的模板
    ├── SettingService.cs   # 配置文件读取服务类
    ├── Program.cs          # 入口类
    ├── Startup.cs          # 启动类
    ├── Classroom.cs        # 教室信息实体类
    ├── ClassroomMapper.cs  # 数据库实体映射类
    ├── Today.cs            # 当日数据静态类
    ├── Index.cs            # 空教室查询业务类
    └── SearchMore.cs       # 更多查询业务类
```