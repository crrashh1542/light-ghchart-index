import '../styles/banner.less'
import externalIcon from '../assets/images/external.svg'

export default () =>
   <div className="banner">
      <div className="title">GitHub Chart API</div>
      <div className="subtitle">
         一个基于 <a href="https://github.com/2016rshah/githubchart-api">
            githubchart-api
            <img src={externalIcon} alt="iconfont-external" />
         </a> 的 GitHub 贡献表生成 API
      </div>
   </div>