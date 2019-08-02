## Node.js 开发环境搭建

### 安装 nvs 或 nvm 进行 Node.js 版本管理，这里优先推荐使用 nvs 进行管理

  + #### 安装 nvs
    - Windows 环境
      #### Windows 环境配置比较复杂，所以在 Windows 环境下还是推荐使用 msi 文件完成初始化工作。到 [https://github.com/jasongin/nvs/releases](https://github.com/jasongin/nvs/releases) 下载最新版本的 nvs.msi，然后双击安装即可。
    - Linux, macOS 等环境
      #### 直接从 GitHub clone nvs 到本地, 这里假设大家都使用 $HOME/git 目录存放 git 项目:
      ```shell
      export NVS_HOME="$HOME/git/nvs"
      git clone https://github.com/cnpm/nvs --depth=1 "$NVS_HOME"
      sh "$NVS_HOME/nvs.sh" install
      source "$NVS_HOME/nvs.sh"
      ```
      其中 sh "$NVS_HOME/nvs.sh" install 一行命令会自动将 nvs 设置到你的 ~/.bashrc, ~/.profile, ~/.bash_profile, 或者 ~/.zshrc 各种文件中去。
  + #### 设置 nvs 镜像
    #### [https://github.com/cnpm/nvs](https://github.com/cnpm/nvs) 已经默认设置了去 [https://npm.taobao.org/mirrors/node/](https://npm.taobao.org/mirrors/node/) 下载了。

    ```shell
    nvs add lates #使用此命令安装最新版本
    ```

  + #### 让 bash 自动 use latest 版本
    #### 默认的情况下，每次运行 nvs 只会在当前 bash 生效，如果你希望新开启的 bash 都能自动 use 一个最新版本的 node，那么你需要在 ~/.bashrc 配置文件最后一行加上 nvs use latest。可以通过下面一行命令快速添加
    ```shell
    echo "nvs use latest" >> ~/.bashrc
    ```

  + #### 安装任意版本的Node环境
    ```shell
    nvs add 6
    nvs add lts
    nvs add latest

    nvs ls #查看已安装的版本列表
    ```

  + #### 切换任意版本
    ```shell
    nvs use 6
    node -v
    nvm use lts
    node -v
    ```