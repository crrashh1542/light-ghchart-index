import '../styles/footer.less'
import config from '../../config'
import externalIcon from '../assets/images/external.svg'
// import miitIcon from '../assets/images/miit.png'

export default () => 
   <footer>
      <p>GitHub Chart API 由 <a href="https://github.com/2016rshah/githubchart-api">
            githubchart-api<img src={externalIcon} alt="iconfont-external" /></a> 驱动</p>
      <p>服务由 <a href={ 'https://github.com/' + config.username }>
         { config.nickname }<img src={externalIcon} alt="iconfont-external" /></a> 提供，
         本页由 <a href="https://github.com/crrashh1542">
         crrashh1542<img src={externalIcon} alt="iconfont-external" /></a> 制作</p>
      {/* <p><a href="https://beian.miit.gov.cn">
         <img src={miitIcon} alt="miit" className="miit" />
         ?ICP备??????????号-?
      </a></p> */}
   </footer>