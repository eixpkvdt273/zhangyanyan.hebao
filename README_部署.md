# 核保小帮手 3.0 · Vercel 部署说明

本目录是要部署到 Vercel 的完整内容（交给有 GitHub 账号的朋友部署即可）。

```
vercel/
├── index.html          # 核保小帮手 3.0 主页面（单文件）
├── api/
│   └── deepseek.js     # 服务端代理：转发 DeepSeek 请求，密钥存环境变量
└── README_部署.md      # 本说明
```

## 一、要点（先看）
- **密钥不在前端**：`index.html` 里没有任何 DeepSeek Key。Key 只存在服务端（`api/deepseek.js` 读环境变量 `DEEPSEEK_API_KEY`）。
- 前端只调用同源的 `/api/deepseek`，因此**不存在 CORS 问题**（同域请求）。
- 若未设置环境变量或未部署代理：页面仍可正常打开，规则匹配结论照常出，**仅 AI 分析话术会走内置默认文案**——不影响功能。

## 二、部署步骤（朋友操作）
1. 把本 `vercel/` 目录内容推送到一个 GitHub 仓库（或新建仓库只放这 3 个文件）。
2. 在 [Vercel](https://vercel.com) 用 GitHub 账号导入该仓库。
   - Framework Preset 选 **Other**（无需构建）。
   - Root Directory 指向包含 `index.html` 与 `api/` 的那一层。
3. 在 Vercel 项目 → Settings → Environment Variables，新增：
   - `DEEPSEEK_API_KEY` = 你的 DeepSeek Key（`sk-...`）
4. 点击 Deploy。完成后访问分配的 `https://xxx.vercel.app` 即可使用。

> 也可本地用 Vercel CLI：`vercel env add DEEPSEEK_API_KEY` 后 `vercel --prod`。

## 三、本地先测 AI 功能（可选，部署前验证）
不想等部署？在本机跑同目录外层的 `proxy.py`（与 `核保小帮手3.0.html` 同目录）：
```bash
python proxy.py
```
浏览器打开 `http://localhost:8080` 即可使用完整 AI 核保分析（同源，无 CORS，密钥在服务端）。

## 四、常见问题
- **AI 话术没出来 / 显示“由 AI 辅助生成”但实际是默认文案**：检查 Vercel 环境变量 `DEEPSEEK_API_KEY` 是否已设置并重新部署；或本地用 `proxy.py` 验证 Key 是否有效。
- **页面能开但结论卡片正常**：说明规则引擎本地运行正常，仅 AI 增强未接通，属预期降级。
- **修改页面后重新部署**：更新 `index.html` 并重新 push / redeploy 即可（`api/deepseek.js` 一般不用改）。

## 五、免责
本工具结论为基于通用核保规则的初步参考，最终承保结论以各保险公司正式核保审核为准。
