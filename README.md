AngularJS1 Component Single Direction Binding Demo
==================================================

Note:
1. `bindings` in component definition binds the name to tag property, not `$scope`
2. We have to pass the arguments manually in `<hello-component ???=??? />`
3. 注意当前component中`$ctrl.message`中的`$ctrl`指的是为该component默认生成的一个controller对象，不是外面那个controller
4. 当外面的outerMessage改变时，component中的message会随之而变，相反而不会变

```
npm install
open index.html
```
