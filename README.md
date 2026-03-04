# SubTrack - 智能订阅管理专家

SubTrack 是一款专为个人用户设计的智能订阅管理工具。它可以帮助您轻松追踪、管理和优化所有的周期性支出（如 Netflix, Spotify, iCloud, 各种会员等）。

## ✨ 核心功能

- **多维度追踪**：记录订阅金额、周期、开始日期及下次扣款日。
- **多货币支持**：内置实时汇率转换，支持 CNY, USD, HKD, JPY, EUR, GBP 等主流货币，自动换算至您的主货币。
- **智能日历**：动态计算并展示未来月份的扣款计划，支出一目了然。
- **支出统计**：直观的仪表盘展示月度/年度支出概况及趋势分析。
- **个性化体验**：支持 浅色/深色/系统 模式切换。
- **AI 助手**：集成 Gemini AI，为您提供订阅优化建议和支出分析。

## 🚀 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 或 yarn

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone <your-repository-url>
   cd subtrack
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**
   复制 `.env.example` 并重命名为 `.env`，填入您的 API 密钥：
   ```env
   GEMINI_API_KEY=你的_GEMINI_API_KEY
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **访问应用**
   打开浏览器访问 `http://localhost:3000`

## 🛠️ 技术栈

- **前端**: React 18, TypeScript, Tailwind CSS
- **动画**: Motion (Framer Motion)
- **图标**: Lucide React
- **图表**: Recharts
- **AI**: Google Gemini API (@google/genai)

## 📄 许可证

MIT License
