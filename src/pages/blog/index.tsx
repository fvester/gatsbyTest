import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import "@style/about.scss"

const BlogPage: React.FC<PageProps> = () => {
  return (
    <div className="blog_content">
        <h1 className="blog_title">My blog</h1>
        <p>HiHi</p>
    </div>
  )
}
export const Head: HeadFC = () => <title>My blog</title>

export default BlogPage
