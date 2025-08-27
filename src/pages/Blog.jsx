import React from 'react'
import BlogHero from '../sections/blog/BlogHero'
import TrendingBlogs from '../sections/blog/TrendingBlogs'
import LatestBlogs from '../sections/blog/LatestBlogs'
import PopularBlogs from '../sections/blog/PopularBlogs'

function Blog() {
    const blogHero = "";
    const trendingBlogs = "";
    const latestBlogs = "";
    const popularBlogs = "";
  return (
    <div>
        <BlogHero data={blogHero}/>
        <div className="" id='trending-blogs'>
        <TrendingBlogs data={trendingBlogs} />
        </div>
        <div className="" id='latest-blogs'>
        <LatestBlogs data={latestBlogs} />
        </div>
        <div className="" id='popular-blogs'>
        <PopularBlogs data={[1,2,3]} />
        </div>

    </div>
  )
}

export default Blog