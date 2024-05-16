import { useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/core'
import hljsXml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('xml', hljsXml)

import 'highlight.js/styles/atom-one-light.min.css'

export default function CodeBlock({code}) {
   const preRef = useRef(null)

   useEffect(() => {
      if (preRef.current) {
         hljs.highlightBlock(preRef.current)
      }
   }, [code])

   return (
      <div className="code-block" style={{ position: 'relative', marginTop: 8 }}>
         <pre>
            <code ref={preRef}>{code}</code>
         </pre>
      </div>
   )
}