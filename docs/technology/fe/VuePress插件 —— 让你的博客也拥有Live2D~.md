<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanjun
 * @Date: 2019-08-16 10:23:00
 * @LastEditors: yanjun
 * @LastEditTime: 2019-08-16 10:28:40
 -->
## VuePress插件 —— 让你的博客也拥有Live2D~

#### 借用[@QiShaoXuan大佬的模型库](https://github.com/QiShaoXuan/live2DModel)，筛选出了自己喜欢的几个Model，分别是Epsilon2，z16，izumi,koharu，shizuku和miku，在大佬思路的基础上封装了这个小插件

- ### 使用方式
  ```shell
    npm i vuepress-plugin-live2d -S

  ```
  #### 然后在'/docs/.vuepress/config.js'里引入
  ```json
    plugins: [
      '@vuepress/back-to-top',
    ],
  ```