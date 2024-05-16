import React from 'react'
import '../../styles/widgets/catalog.less'

// 允许用户传入 HTML
type enabledProps = {
   children: React.ReactNode
}

export default (props: enabledProps) => 
   <div className="catalog">
      { props.children }
   </div>