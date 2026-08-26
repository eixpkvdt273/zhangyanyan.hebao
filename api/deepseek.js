// Vercel 无服务器函数：DeepSeek 代理
// 作用：把 API Key 放在服务端环境变量，前端通过同源 /api/deepseek 调用，避免 CORS 与密钥泄露。
// 前端请求体：{ model, messages, temperature, max_tokens }
// 部署前请在 Vercel 项目里设置环境变量 DEEPSEEK_API_KEY。
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Missing DEEPSEEK_API_KEY env" });
    return;
  }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const upstream = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: body.model || "deepseek-chat",
        messages: body.messages || [],
        temperature: body.temperature != null ? body.temperature : 0.6,
        max_tokens: body.max_tokens != null ? body.max_tokens : 420
      })
    });
    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (e) {
    res.status(502).json({ error: String(e) });
  }
}
