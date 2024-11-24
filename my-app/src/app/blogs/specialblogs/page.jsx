import Link from 'next/link';
import React from 'react'

export default function SpecialBlogs() {
    const phoneBlogs = [
        {
          slug: "latest-smartphones-2024",
          title: "Top 5 Smartphones of 2024",
          description: "A detailed look at the best smartphones of 2024, comparing features, performance, and value for money."
        },
        {
          slug: "android-vs-ios",
          title: "Android vs iOS: Which is Right for You?",
          description: "A comprehensive comparison of Android and iOS platforms, helping you decide which suits your needs better."
        },
        {
          slug: "phone-camera-tips",
          title: "10 Tips to Take Stunning Photos with Your Phone",
          description: "Learn how to make the most of your smartphone's camera with these simple and effective photography tips."
        },
        {
          slug: "battery-life-guide",
          title: "How to Extend Your Smartphone’s Battery Life",
          description: "Practical advice and tips to improve your smartphone's battery performance and keep it lasting longer."
        },
        {
          slug: "foldable-phones-2024",
          title: "Are Foldable Phones the Future?",
          description: "An analysis of foldable phone technology, its advantages, and what it means for the future of smartphones."
        }
      ];
      
  return (
    <div className='h-screen flex bg-white'>
        {
            phoneBlogs.map((phoneBlog)=>
                <div key={phoneBlog.slug} className='bg-red-400 p-5 text-white w-1/4 mx-1'>
                    <h3>{phoneBlog.title}</h3>
                    <p>{phoneBlog.description}</p>
                    <Link href={`/blogs/specialblogs/${phoneBlog.slug}`} className='text-white p-3 mt-5 block text-center bg-black'>Details</Link>
                </div>
            )
        }
    </div>
  )
}
