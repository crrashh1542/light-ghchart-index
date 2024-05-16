import Catalog from './widgets/Catalog'
import CodeBlock from "./widgets/CodeBlock"

import config from '../../config'
import '../styles/content.less'

const codeDefault = '<img src="' + config.site + '/{username}" alt="{username}\'s GitHub chart" />'
const codeCustom = '<img src="' + config.site + '/{hex}/{username}" alt="{username}\'s GitHub chart" />'

export default () =>
   <main>

      <Catalog>默认配置</Catalog>
      <p>在你的项目中加入以下代码，并将 <code>{'\{username\}'}</code> 替换为你自己的 GitHub 用户名即可。</p>
      <CodeBlock code={codeDefault} />
      <p>举个栗子，当 <code>{'\{username\}'}</code> 为 <code>{ config.username }</code> 时效果如下：</p>
      <div className="img-placeholder">
         <img src={ config.site + '/' + config.username }
              alt={ config.username + '\'s GitHub Chart' } />
      </div>

      <br /><br />
      
      <Catalog>自定义主题色</Catalog>
      <p>在以上内容的基础上，找一个你喜欢的颜色<b>并将其加深</b>，并将 <code>{'\{hex\}'}</code> 替换为获取其十六进制值即可。</p>
      <CodeBlock code={codeCustom} />
      <p>再举个栗子，当 <code>{'\{hex\}'}</code> 为 <code>{ config.imgThemeColor }</code> 时效果如下：</p>
      <div className="img-placeholder">
         <img src={ config.site + '/' + config.imgThemeColor + '/' + config.username }
              alt={ config.username + '\'s GitHub Chart' } />
      </div>

   </main>