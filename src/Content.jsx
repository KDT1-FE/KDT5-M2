import React, { lazy, Suspense } from 'react'

import Spinner from './Spinner'
import Layout from './Layout'
import NavBar from './NavBar'

// * 사용자가 접속할 확률이 높은 컴포넌트라면 webpackPrefetch를 true로 설정합니다.
const Comments = lazy(() => import('./Comments' /* webpackPrefetch: true */))
const Sidebar = lazy(() => import('./Sidebar' /* webpackPrefetch: true */))
const Post = lazy(() => import('./Post' /* webpackPrefetch: true */))

export default function Content() {
  return (
    <Layout>
      <NavBar />
      <p className="text-3xl font-bold underline">TAIL WIND TEST</p>
      <aside className="sidebar">
        <Suspense fallback={<Spinner />}>
          <Sidebar />
        </Suspense>
      </aside>
      <article className="post">
        <Suspense fallback={<Spinner />}>
          <Post />
        </Suspense>
        <section className="comments">
          <h2>Comments</h2>
          <Suspense fallback={<Spinner />}>
            <Comments />
          </Suspense>
        </section>
        <h2>Super Vector</h2>
      </article>
    </Layout>
  )
}
