import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import App from '../src/App'
import { MovieProvider } from '../src/context/movieContext'

import { getSearchMovies } from '../service/api.js'

// * 서버에서 라우터 정보를 react-router-dom에게 보냅니다. StaticRouter가 없다면 SSR시 StaticRouter가 감싸는 컴포넌트 내에서 useRoutes context를 사용할 수 없습니다.
// StaticRouter(서버 라우터) == BrowserRouter(클라이언트 라우터)
import { StaticRouter } from 'react-router-dom/server'

import { ABORT_DELAY } from './delays'
import dotenv from 'dotenv'
dotenv.config()

let assets = {
  'main.js': '/main.js',
  'main.css': '/main.css',
}

let metaData = {
  title: 'Home',
  description: 'Home Page',
  keywords: 'Home, Page',
}

export default async function render(url, res) {
  res.socket.on('error', (error) => {
    console.error('soket연결애 실패했습니다.\n', error)
  })
  let didError = false
  const searchData = await getSearchMovies()
  const stringifySearchData = JSON.stringify(searchData)
  /**
   * @description react 18이전엔 아래와 같이 사용했습니다.
   * @example import {renderToString} from 'react-dom/server';
   *  res.send(
   *   '<!DOCTYPE html>' +
   *   renderToString(
   *     <DataProvider data={data}>
   *       <App assets={assets} />
   *     </DataProvider>,
   *   )
   */

  // * TEST CODE
  const stream = renderToPipeableStream(
    <MovieProvider data={stringifySearchData}>
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='shortcut icon' href='favicon.ico' />
          <link rel='stylesheet' href={assets['main.css']} />
          <title>Movie App</title>
        </head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<b>Enable JavaScript to run this app.</b>`,
            }}
          />
        </body>
        <div id='root'>
          <StaticRouter location={url}>
            <App assets={assets} />
          </StaticRouter>

          {/* NextJS 12버전에서 SSR시 html 최하단에 서버 데이터를 stringify해서 삽입하는 전략을 따라했습니다. */}
        </div>
        <script id='__SERVER_DATA__' type='application/json'>
          {stringifySearchData}
        </script>
        {/* // ? 이 부분에 삽입된 데이터는 HTML Entity가 되는데 변환시키지 않고 보낼 방법을 아직 못 찾았습니니다. (추가적으로 decode해줘야하기 떄문에 필요할 것 같습니다.) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `assetManifest = ${JSON.stringify(assets)};`,
          }}
        />
      </html>
    </MovieProvider>,
    {
      // SSR시 bootstrapScripts를 지정해줘야 서버에서 js파일을 먼저 로드합니다.
      bootstrapScripts: [assets['main.js']],
      onShellReady() {
        // Streaming이 시작 되기전 에러가 발생한다면 이 곳에서 error code를 접근합니다.
        res.statusCode = didError ? 500 : 200
        // 한글을 사용하기 떄문에 utf-8로 Content-type을 설정합니다.
        res.setHeader('Content-type', 'text/html;charset=UTF-8')
        stream.pipe(res)
      },
      onError(x) {
        didError = true
        console.error(x)
      },
    },
  )
  // 충분한 시간이(현제 10초) 지나면 SSR을 포기하고 CSR으로 전환합니다.
  setTimeout(() => stream.abort(), ABORT_DELAY)
}
