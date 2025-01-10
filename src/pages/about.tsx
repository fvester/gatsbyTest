import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import "@style/about.scss"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
        <h1 className="title">About Me</h1>
        <p>HiHi</p>
    </main>
  )
}
export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage
