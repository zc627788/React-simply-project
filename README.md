### `npm i`
安装相关包

### `npm start`
启动项目

###`项目表述 用到`

                    业务

------------登录页面(LoginPage)--------------

    include(包括的组件)[FromBtn(登录按钮),IMG(登录图片logo) ]


    内部代码[ 两个input 加背景图]


    相关技术 [axios(异步加载) antd-mobile(移动蚂蚁ui) ]


    相关样式与事件( loginPages.less loginPages.js)




------------------首页(HomePage)------------------

    include(包括的组件)[Header(头部导航栏),Footer(尾部导航),banner(蚂蚁的轮播),Subject(点击图标导航),IMG(导航logo设置)]


    内部代码[item-list小列表页,tabs栏(没有点击事件)]


    相关技术 [ antd-mobile(移动蚂蚁ui)[WingBlank(左右留白),Flex[布局]] iconfont(阿里图标)   ]


    相关样式与事件(item-list.less,Tabs.less,iconfont.css)

    


-------------------详情页面(ListPage)---------------

    include(包括的组件)[Header(头部导航栏),LongList(长列表页,里面用到了蚂蚁的长列表功能)]


    内部代码[<div>相关咨询</div>]


    相关技术 [ 各组件里用到ant蚂蚁 ]
    

    相关样式与事件(在各自组件中,还有内联样式)


---相关介绍页面(VueDetailPage,ReactDetailPage,NodeDetailPage)-----


    include(包括的组件)[Header(头部导航栏),IMG(相关技术图)]


    内部代码[article(文章),item-list(小列表页),comment-list(评论)]


    相关技术 [ antd-mobile(移动蚂蚁ui)[Flex.Item布局,WingBlank(左右留白)]  ]
    

    相关样式与事件(DetailPage.less)



    -------------------路由逻辑:----------------

    登录(账号123456 密码654321)   -------->   首页(HomePage)点击图标(7个图标都一样)  ---------->   详情页(ListPage){点击不同的技术框}  -------->   相关技术文章

    返回按 < 或者 react图标