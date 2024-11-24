import React from 'react'

export default function SpecialBlogsDetails({params}) {
    const phoneBlogs = [
        {
          id: "latest-smartphones-2024",
          title: "Top 5 Smartphones of 2024",
          description: "A detailed look at the best smartphones of 2024, comparing features, performance, and value for money."
        },
        {
          id: "android-vs-ios",
          title: "Android vs iOS: Which is Right for You?",
          description: "A comprehensive comparison of Android and iOS platforms, helping you decide which suits your needs better."
        },
        {
          id: "phone-camera-tips",
          title: "10 Tips to Take Stunning Photos with Your Phone",
          description: "Learn how to make the most of your smartphone's camera with these simple and effective photography tips."
        },
        {
          id: "battery-life-guide",
          title: "How to Extend Your Smartphone’s Battery Life",
          description: "Practical advice and tips to improve your smartphone's battery performance and keep it lasting longer."
        },
        {
          id: "foldable-phones-2024",
          title: "Are Foldable Phones the Future?",
          description: "An analysis of foldable phone technology, its advantages, and what it means for the future of smartphones."
        }
      ];

      const {title, description} = phoneBlogs.find((phoneBlog) => phoneBlog.id == params.id)
  return (
    <div className='h-screen'>
        <h3>{title}</h3>
        <h5>{description}</h5>
    </div>
  )
}
