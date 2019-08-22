## Github 因更换邮箱或账号丢失 commit 解决办法

#### 踩了两次坑，自己Mark一下。
```shell
git config user.name "当前用户名"
git config user.email "当前邮箱"

git filter-branch -f --env-filter '
  if [ "$GIT_AUTHOR_NAME" = "更换掉的用户名" ]
  then
  export GIT_AUTHOR_NAME="当前用户名"
  export GIT_AUTHOR_EMAIL="当前邮箱"
  fi
' HEAD
```