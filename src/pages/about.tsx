import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import "@style/about.scss"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <div className="about_content">
        <h1 className="about_title">About Me</h1>
        <p>HiHi</p>
    </div>
  )
}
export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage
