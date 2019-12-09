### 
# @Descripttion: 
 # @version: 
 # @Author: yanjun
 # @Date: 2019-08-01 19:56:11
 # @LastEditors: yanjun
 # @LastEditTime: 2019-08-19 10:10:19
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'yanjun-forever.cn' > CNAME

git init
git config user.name "yanjun0501"
git config user.email "i@yanjun-forever.cn"
git add .
git commit -m 'deploy: update blog'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目clea
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:yanjun0501/yanjun0501.github.io.git master 

cd -