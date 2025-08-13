import React from "react";
import BlogHero from "../sections/blog/BlogHero";
import TrendingBlogs from "../sections/blog/TrendingBlogs";
import LatestBlogs from "../sections/blog/LatestBlogs";
import PopularBlogs from "../sections/blog/PopularBlogs";

function Blog() {
  const heroData = "";
  const trendingBlogsData = "";
  const latestBlogsData = "";
  const popularBlogsData = "";
  return (
    <div>
      <BlogHero data={heroData} />
      <TrendingBlogs data={trendingBlogsData} />
      <LatestBlogs data={latestBlogsData} />
      <PopularBlogs data={popularBlogsData} />
    </div>
  );
}

export default Blog;
