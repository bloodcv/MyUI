#### reference
[quto](https://segmentfault.com/a/1190000041103446/)

### 创建组件架构

```
packages
├── Button
│   ├── docs
│   │   ├── README.md  // 组件文档
│   │   └── demo.vue   // 交互式预览实例
│   ├── index.ts       // 模块导出文件
│   └── src
│       └── index.vue  // 组件本体
├── index.ts           // 组件库导出文件
└── list.json          // 组件列表
```

### 问题

- html 绝对路径改相对路径
> 改vite配置 加base './'

- 展示代码 获取不到文件
> 改fetch获取路径为 './xxxx'

- lang='ts' 模式的script 编译失败
> 更新 vue-tsc 版本 `vue-tsc --noEmit` 用于编译前的ts代码检测