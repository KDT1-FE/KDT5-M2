import React, { lazy, Suspense } from 'react'

import Spinner from '../components/Spinner'
import Layout from '../layouts/Layout'
import NavBar from '../components/NavBar'

// * 사용자가 접속할 확률이 높은 컴포넌트라면 webpackPrefetch를 true로 설정합니다.
const Comments = lazy(() => import('../components/Comments' /* webpackPrefetch: true */))
const Sidebar = lazy(() => import('../components/Sidebar' /* webpackPrefetch: true */))
const Post = lazy(() => import('../components/Post' /* webpackPrefetch: true */))

export default function Home() {
  return (
    <Layout>
      <h1>OMDb API THE OPEN MOVIE DATABASE</h1>
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
