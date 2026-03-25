'use client'

import { useEffect, useRef } from 'react'

// VS Code Dark+ inspired syntax colors
const C = {
  keyword:  '#c678dd',  // const, async, import, type, if, return...
  builtin:  '#569cd6',  // new, true, false, null, undefined
  type:     '#4ec9b0',  // class/type names (CXDAI, BLESignal...)
  func:     '#dcdcaa',  // function/method calls
  prop:     '#9cdcfe',  // variable names, properties
  string:   '#ce9178',  // string literals
  number:   '#b5cea8',  // numbers
  comment:  '#6a9955',  // // comments
  op:       '#d4d4d4',  // operators, punctuation, default text
  bracket:  '#ffd700',  // matching brackets {}()[]
}

// Pre-tokenized code lines: [text, color][]
type Token = [string, string]
const LINES: Token[][] = [
  [[' const '         ,C.keyword],[' ai '         ,C.prop],['= '           ,C.op   ],['new '          ,C.builtin],['CXDAI'       ,C.type ],['(config)'     ,C.op   ]],
  [[' await '         ,C.keyword],['ble'           ,C.prop],['.'            ,C.op   ],['connect'       ,C.func   ],['(deviceId)'   ,C.op   ]],
  [[' type '          ,C.keyword],['BLESignal'     ,C.type],['  = { '       ,C.op   ],['heartRate'     ,C.prop   ],[': '           ,C.op   ],['number'        ,C.type ],['  ts'          ,C.prop ],['  Date '       ,C.type ],['}'             ,C.op   ]],
  [[' if '            ,C.keyword],['(heartRate '   ,C.prop],['>  threshold', C.op   ],[') {'           ,C.op   ]],
  [['   dispatch'     ,C.func   ],['('             ,C.op   ],['sceneUpdate'  ,C.func ],['(data))'       ,C.op   ]],
  [[' }'              ,C.op     ]],
  [[' export '        ,C.keyword],['const '        ,C.keyword],['sync'      ,C.prop ],['  = '          ,C.op   ],['async '       ,C.keyword],['() => {'       ,C.op   ]],
  [[' interface '     ,C.keyword],['CXDAIConfig'   ,C.type ],['  {'          ,C.op   ]],
  [['   model'        ,C.prop   ],[':'             ,C.op   ],[' string'      ,C.type ]],
  [['   sensitivity'  ,C.prop   ],[':'             ,C.op   ],[' number'      ,C.type ]],
  [['   platform'     ,C.prop   ],[':'             ,C.op   ],[' Platform'    ,C.type ]],
  [[' }'              ,C.op     ]],
  [[' const '         ,C.keyword],['ws '           ,C.prop ],['= '           ,C.op   ],['new '          ,C.builtin],['WebSocket'    ,C.type ],['(url)'         ,C.op   ]],
  [[' ws'             ,C.prop   ],['.onmessage '   ,C.prop ],['= '           ,C.op   ],['(e) => {'      ,C.op   ]],
  [['   const '       ,C.keyword],['data '         ,C.prop ],['= '           ,C.op   ],['JSON'          ,C.type   ],['.parse'        ,C.func ],['(e.data)'      ,C.op   ]],
  [['   setScene'     ,C.func   ],['(data'         ,C.op   ],['.scene)'      ,C.prop ]],
  [[' }'              ,C.op     ]],
  [[' import '        ,C.keyword],['{ supabase }'  ,C.prop ],['from '        ,C.op   ],['"@/lib"'       ,C.string ]],
  [[' const '         ,C.keyword],['{ data, error }',C.prop],[' = '          ,C.op   ],['await'         ,C.keyword]],
  [['   supabase'     ,C.prop   ],['.from'         ,C.func ],['('            ,C.op   ],['"sensors"'     ,C.string ],[')' ,C.op]],
  [['   .'            ,C.op     ],['select'        ,C.func ],['("*")'        ,C.string],['.'            ,C.op   ],['eq'            ,C.func ],['("id", sId)'   ,C.op   ]],
  [[' useEffect'      ,C.func   ],['(() => {'      ,C.op   ]],
  [['   ble'          ,C.prop   ],['.on'           ,C.func ],['("data", '    ,C.string],['handleSignal)'  ,C.prop ]],
  [['   return '      ,C.keyword],['() => '        ,C.op   ],['ble'          ,C.prop ],['.off'          ,C.func ],['("data")'      ,C.string]],
  [[' }'              ,C.op     ],[', '            ,C.op   ],['[deviceId]'   ,C.prop ],['])'            ,C.op   ]],
  [[' const '         ,C.keyword],['[scene, '      ,C.prop ],['setScene]'    ,C.prop ],[' = '           ,C.op   ],['useState'      ,C.func ],['('            ,C.builtin],['null'          ,C.builtin],[')'             ,C.op   ]],
  [[' Promise'        ,C.type   ],['.all'          ,C.func ],['(['           ,C.op   ],['sync'          ,C.func ],['(), '          ,C.op   ],['pair'          ,C.func ],['()])'          ,C.op   ]],
  [[' light'          ,C.prop   ],['.setColor'     ,C.func ],['(ambientRGB)' ,C.prop ]],
  [[' router'         ,C.prop   ],['.push'         ,C.func ],['("/demo")'    ,C.string]],
  [[' // CXD AI Engine v2.0'               ,C.comment]],
  [[' // Real-time scene orchestration'    ,C.comment]],
  [[' // BLE biometric signal pipeline'   ,C.comment]],
  [[' export default '  ,C.keyword],['function '   ,C.keyword],['App'        ,C.func ],['()'            ,C.op   ]],
  [[' return '        ,C.keyword],['<Provider>'    ,C.type   ],['{children}'  ,C.prop ],['</Provider>'   ,C.type ]],
  [[' ctx'            ,C.prop   ],['.fillRect'     ,C.func ],['(0, 0, w, h)' ,C.number]],
  [[' requestAnimationFrame'   ,C.func ],['(render)',C.op]],
  [[' Buffer'         ,C.type   ],['.from'         ,C.func ],['('            ,C.op   ],['"hex"'         ,C.string],[', '            ,C.op   ],['"utf8"'        ,C.string],[')' ,C.op]],
  [[' throw '         ,C.keyword],['new '          ,C.builtin],['Error'      ,C.type ],['("BLE timeout")',C.string]],
  [[' 0x1A2B '        ,C.number ],['^'             ,C.op   ],[' mask '       ,C.prop ],['>> '           ,C.op   ],['4'             ,C.number]],
]

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const fontSize = 13
    const lineHeight = 22
    const font = `${fontSize}px 'JetBrains Mono', 'Fira Code', 'Consolas', monospace`

    // Line state: y position + speed + which line index + x offset + opacity
    type LineState = { y: number; speed: number; li: number; xOffset: number; alpha: number }
    let lines: LineState[] = []
    let W = 0, H = 0

    function init() {
      W = canvas!.width  = window.innerWidth
      H = canvas!.height = window.innerHeight

      // 3× density: three staggered layers of lines covering full page
      const rowsPerLayer = Math.ceil(H / lineHeight) + 2
      const count = rowsPerLayer * 3
      lines = Array.from({ length: count }, (_, i) => {
        const layer = Math.floor(i / rowsPerLayer)
        return {
          y:       (i % rowsPerLayer) * lineHeight - lineHeight + layer * (lineHeight / 3),
          speed:   0.12 + Math.random() * 0.28,
          li:      Math.floor(Math.random() * LINES.length),
          xOffset: Math.random() * (W + 200) - 100,
          alpha:   0.15 + Math.random() * 0.29,
        }
      })
    }

    init()

    let rafId: number

    function draw() {
      ctx!.clearRect(0, 0, W, H)

      ctx!.font = font
      ctx!.textBaseline = 'top'

      for (const ls of lines) {
        const tokens = LINES[ls.li]
        let x = ls.xOffset

        for (const [text, color] of tokens) {
          ctx!.globalAlpha = ls.alpha
          ctx!.fillStyle = color
          ctx!.fillText(text, x, ls.y)
          x += ctx!.measureText(text).width
        }

        ls.y -= ls.speed

        // Wrap around: when line exits top, reset to bottom with a new line
        if (ls.y < -lineHeight) {
          ls.y = H + lineHeight
          ls.li = Math.floor(Math.random() * LINES.length)
          ls.xOffset = Math.random() * (W + 200) - 100
          ls.alpha = 0.15 + Math.random() * 0.29
          ls.speed = 0.12 + Math.random() * 0.28
        }
      }

      ctx!.globalAlpha = 1

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)

    function handleResize() { init() }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        filter: 'blur(1.2px)',
        left: 0,
        width:  '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
