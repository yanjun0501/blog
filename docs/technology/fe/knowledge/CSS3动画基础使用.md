## CSS3动画基础使用

#### CSS3 动画相关常用新特性
  - #### border-radius
    ```javascript
      border-radius：[ <length> | <percentage> ]{1,4} [ / [ <length> | <percentage> ]{1,4} ]?
      <length>：用长度值设置对象的圆角半径长度。不允许负值
      <percentage>：用百分比设置对象的圆角半径长度。不允许负值
    ```
    #### 其中圆形和四分之一扇形可以分别通过border-radius: 50%和border-radius: 100% 0 0 0;来实现。
  - #### box-shadow
    ```javascript
      box-shadow：none|[inset? && [<offset-x><offset-y><blur-radius>?<spread-radius>?<color>?]]#
      <inset>：设置对象的阴影类型为内阴影。该值为空时，则对象的阴影类型为外阴影
      <offset-x>: 这是第一个 length值设置水平偏移量，如果是负值则阴影位于元素左边。
      <offset-y>: 这是第二个 length值设置垂直偏移量，如果是负值则阴影位于元素上面。
      <blur-radius>:这是第三个 length值。值越大，糊糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利。
      <color>：设置对象的阴影的颜色。
    ```
  - #### transform
    ```javascript
      transform ： none | <transform-function> [ <transform-function> ]*
      transform-function list:
      matrix() = matrix(<number>[,<number>]{5,5}) // 矩阵 a,d缩放 e,f平移 a,b,c,d旋转
      matrix3d() = matrix3d(<number>[,<number>]{15,15})
      translate() = translate(<translation-value>[,<translation-value>]?) // 平移
      translate3d() = translate3d(<translation-value>,<translation-value>,<length>)
      translatex() = translatex(<translation-value>)
      translatey() = translatey(<translation-value>)
      translatez() = translatez(<length>)
      rotate() = rotate(<angle>) // 旋转
      rotate3d() = rotate3d(<number>,<number>,<number>,<angle>)
      rotatex() = rotatex(<angle>)
      rotatey() = rotatey(<angle>)
      rotatez() = rotatez(<angle>)
      scale() = scale(<number>[,<number>]?) // 缩放
      scale3d() = scale3d(<number>,<number>,<number>)
      scalex() = scalex(<number>)
      scaley() = scaley(<number>)
      scalez() = scalez(<number>)
      skew() = skew(<angle>[,<angle>]?) //倾斜
      skewx() = skewx(<angle>)
      skewy() = skewy(<angle>)
      <translation-value> = <length> | <percentage>
    ```
  - #### transition
    ```css
      transition ：[<'transition-property'> || <'transition-duration'> ||
      <'transition-timing-function'> || <'transition-delay'> [, [<'transition-property'> 
      || <'transition-duration'> || <'transition-timing-function'> || <'transition-delay'>]]]
      <transition-property> ： none | all | [ <ident> ] [, <ident> ] 检索或设置对象中的参与过渡的属性
      <transition-duration> ： <time> [, <time>] 检索或设置对象过渡的持续时间
      <transition-timing-function> ：ease | linear | ease-in | ease-out | ease-in-out | step-start 
      | step-end | steps(<integer>[, [ start | end ] ]?) | cubic-bezier(<number>, <number>, <number>, <number>)
      [,ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(<integer>[, 
      [ start | end ] ]?) | cubic-bezier(<number>, <number>, <number>, <number>)] 检索或设置对象中过渡的动画类型
      <transition-delay> ： <time> [, <time>] 检索或设置对象延迟过渡的时间
    ```
  - #### animation
    ```css
      animation：<single-animation>[,<single-animation>]*
      <single-animation> = <single-animation-name> || <time> || <single-animation-timing-function>
      || <time> || <single-animation-iteration-count> || <single-animation-direction> ||
        <single-animation-fill-mode> || <single-animation-play-state>
      <animation-name>：检索或设置对象所应用的动画名称
      <animation-duration>：检索或设置对象动画的持续时间
      <animation-timing-function>：检索或设置对象动画的过渡类型
      <animation-delay>：检索或设置对象动画延迟的时间
      <animation-iteration-count>：检索或设置对象动画的循环次数
      <animation-direction>：检索或设置对象动画在循环中是否反向运动
      <animation-fill-mode>：检索或设置对象动画时间之外的状态
      <animation-play-state>：检索或设置对象动画的状态。
      @keyframes IDENT {
        0% {
          Properties:Properties value;
        }
        Percentage {
          Properties:Properties value;
        }
        100% {
          Properties:Properties value;
        }
      }
    ```