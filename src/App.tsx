// 导入样式表
import './styles/reset.less'

// 导入组件
import Appbar from './components/Appbar'
import Banner from './components/Banner'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () =>
   <>
      <Appbar />
      <div className='placeholder' />
      <Banner />
      <Content />
      <Footer />
   </>

export default App
