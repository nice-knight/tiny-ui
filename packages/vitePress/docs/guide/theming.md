# 自定义主题

Tiny UI 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。 但是如果需要大规模替换样式，例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。

我们提供四种方法来改变样式变量。

```SCSS
$colors: () !default;
$colors: map.deep-merge(
  (
    'white': #ffffff,
    'black': #000000,
    'primary': (
      'base': #409eff,
    ),
    'success': (
      'base': #67c23a,
    ),
    'warning': (
      'base': #e6a23c,
    ),
    'danger': (
      'base': #f56c6c,
    ),
    'error': (
      'base': #f56c6c,
    ),
    'info': (
      'base': #909399,
    ),
  ),
  $colors
);
```