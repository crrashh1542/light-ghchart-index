## Light UI for GitHub Chart API

鉴于 [GitHub Chart API](https://github.com/2016rshah/githubchart-api) 的引导 UI 长年停更且丑得要死，故开坑给 API 镜像站使用，同时为练习 React 之用。

### 技术栈
React + TypeScript + Less + Vite

### 用法
1. 克隆项目源码
```shell
git clone https://github.com/2016rshah/githubchart-api backend --depth=1
git clone https://github.com/crrashh1542/light-ghchart-index frontend --depth=1
```
2. 进入 `frontend`（即本项目）目录，按照注释修改 [`config.ts`](./config.ts) 中相关配置。

3. 构建前端项目
```shell
# 已安装 pnpm 的可以跳过这一步
npm install pnpm -g

pnpm install
pnpm build
``` 

4. 将 `dist` 目录下产生的内容放入 `../backend/public` 目录下，同时按照原 API 项目要求启动即可。

### 示例
感谢 [@ltzXiaoYanMo](https://github.com/ltzXiaoYanMo) 提供的试验田：https://chart.ymbit.cn
