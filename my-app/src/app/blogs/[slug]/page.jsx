import React from 'react'

export default function BlogDetails({params}) {
    const blogs = [
        {
          slug: "mastering-vuejs",
          title: "Mastering Vue.js: A Comprehensive Guide",
          description: "Learn Vue.js from basics to advanced concepts with practical examples and tips for mastering this powerful framework."
        },
        {
          slug: "javascript-essentials",
          title: "JavaScript Essentials for Beginners",
          description: "An essential guide to understanding the core concepts of JavaScript and building a strong foundation for web development."
        },
        {
          slug: "responsive-design-tips",
          title: "10 Tips for Effective Responsive Web Design",
          description: "Discover key strategies and best practices to create responsive websites that look great on any device."
        },
        {
          slug: "web-performance-optimization",
          title: "Optimizing Web Performance: Best Practices",
          description: "Explore techniques to improve your website's speed and performance for a better user experience and higher rankings."
        },
        {
          slug: "introduction-to-nodejs",
          title: "Getting Started with Node.js",
          description: "A beginner-friendly introduction to Node.js, covering the basics of building scalable and efficient server-side applications."
        }
      ];
    console.log(params.slug);
    const {title, description} = blogs.find((blog) => blog.slug == params.slug)
  return (
    <div className='h-screen'>
        <h5>{title}</h5>
        <p>{description}</p>
    </div>
  )
}
