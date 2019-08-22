## VuePress插件 —— 让你的博客也拥有Live2D~

#### 借用[@QiShaoXuan大佬的模型库](https://github.com/QiShaoXuan/live2DModel)，筛选出了自己喜欢的几个Model，分别是Epsilon2，z16，izumi，koharu，shizuku和miku，在大佬思路的基础上封装了这个小插件

- ### 使用方式
  ```shell
    npm i vuepress-plugin-live2d -S

  ```
  #### 然后在'/docs/.vuepress/config.js'里引入
  ```javascript
    plugins: [
      [
        "vuepress-plugin-live2d",
        {
          "modelName": "" // 可选值8个类型（z16，Epsilon2.1，izumi，koharu，shizuku，miku, hijiki, tororo
          "mobileShow": ""
        }
      ]
    ]
  ```