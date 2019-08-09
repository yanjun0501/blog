## Chrome v72+ 出现Provisional headers are shown解决办法

#### Chrome在升级到v72+版本后(当然也就是现在的大多数版本)，在查看network记录时，大多数请求的Request Headers都会提示Provisional headers are shown。这个问题困扰了我很久，尝试了各种解决办法，网上的回答也是驴唇不对马嘴，最终在stackoverflow的一个普通回答中找到了正解。

* 输入chrome://flags/ disable三个选项
* 第一个选项 Disable site isolation
* 第二个选项 Enable network service
* 第三个选项 Runs network service in-process

#### 完成后重启Chrome，问题即可解决