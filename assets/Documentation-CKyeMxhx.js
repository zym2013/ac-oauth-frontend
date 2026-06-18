import{_ as c}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as t,e as o,f as d,g as i,j as n,k as l,m as r,U as u}from"./index-CH8T5FEN.js";const s={},v={class:"public-wrapper"},p={class:"public-nav"};function h(_,a){const e=t("router-link");return o(),d("div",v,[i("header",p,[n(e,{to:"/",class:"public-brand"},{default:l(()=>[...a[0]||(a[0]=[r("← ArgCube OAuth",-1)])]),_:1})]),a[1]||(a[1]=u(`<article class="public-article" data-v-c2e4ca75><h1 data-v-c2e4ca75>开发者文档</h1><p class="muted" data-v-c2e4ca75>ArgCube OAuth 基于 OAuth 2.1 + OIDC 标准。</p><h2 data-v-c2e4ca75>快速开始</h2><ol data-v-c2e4ca75><li data-v-c2e4ca75>在「OAuth 应用」页面创建应用，获取 <code data-v-c2e4ca75>client_id</code> 与 <code data-v-c2e4ca75>client_secret</code></li><li data-v-c2e4ca75>将用户重定向至授权端点</li><li data-v-c2e4ca75>用户授权后，使用返回的 <code data-v-c2e4ca75>code</code> 换取 <code data-v-c2e4ca75>access_token</code></li><li data-v-c2e4ca75>使用 <code data-v-c2e4ca75>access_token</code> 调用 <code data-v-c2e4ca75>/oauth/userinfo</code> 获取用户信息</li></ol><h2 data-v-c2e4ca75>端点</h2><h3 data-v-c2e4ca75>授权端点</h3><pre data-v-c2e4ca75><code data-v-c2e4ca75>GET /api/oauth/authorize
?client_id=YOUR_CLIENT_ID
&amp;redirect_uri=https://your-app.com/callback
&amp;response_type=code
&amp;scope=openid profile email
&amp;state=RANDOM_STATE</code></pre><h3 data-v-c2e4ca75>令牌端点</h3><pre data-v-c2e4ca75><code data-v-c2e4ca75>POST /oauth/token
Content-Type: application/json

{
  &quot;grant_type&quot;: &quot;authorization_code&quot;,
  &quot;code&quot;: &quot;...&quot;,
  &quot;client_id&quot;: &quot;...&quot;,
  &quot;client_secret&quot;: &quot;...&quot;,
  &quot;redirect_uri&quot;: &quot;...&quot;
}</code></pre><h3 data-v-c2e4ca75>用户信息端点</h3><pre data-v-c2e4ca75><code data-v-c2e4ca75>GET /oauth/userinfo
Authorization: Bearer &lt;access_token&gt;</code></pre><h2 data-v-c2e4ca75>支持的 Scope</h2><ul data-v-c2e4ca75><li data-v-c2e4ca75><code data-v-c2e4ca75>openid</code> — 用户唯一标识（sub）</li><li data-v-c2e4ca75><code data-v-c2e4ca75>profile</code> — 用户名、显示名、头像、简介</li><li data-v-c2e4ca75><code data-v-c2e4ca75>email</code> — 邮箱与验证状态</li><li data-v-c2e4ca75><code data-v-c2e4ca75>link:github</code> / <code data-v-c2e4ca75>link:cpoauth</code> — 第三方绑定信息</li><li data-v-c2e4ca75><code data-v-c2e4ca75>cp:linked</code> — 所有第三方绑定</li></ul><h2 data-v-c2e4ca75>PKCE 支持</h2><p data-v-c2e4ca75>公共客户端（如 SPA）应使用 PKCE（Proof Key for Code Exchange）。授权时传入 <code data-v-c2e4ca75>code_challenge</code> 与 <code data-v-c2e4ca75>code_challenge_method=S256</code>，换令牌时传入 <code data-v-c2e4ca75>code_verifier</code>。</p></article>`,1))])}const f=c(s,[["render",h],["__scopeId","data-v-c2e4ca75"]]);export{f as default};
