import React from "react";
import Cards from "./Cards";

function AllFeild() {
  const data = [
    {
      img: "cyber security/img1.gif",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      para: "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    },
    {
      img: "cyber security/img2.webp",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      para: "Look around today, you will witness that we are more reliant on technology and devices",
    },
    {
      img: "cyber security/img3.gif",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
      para: "Did you know that according to the University of Maryland hackers attack every 39 seconds",
    },
    {
      img: "career/img1.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "UI/UX Project Showcase: UX-perience Elevated ",
      para: "Are you a professional UI/UX designer who finds it hard to attract your clients or",
    },
    {
      img: "career/img2.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "Top 10 Ethical Hacking Books for Beginner to Advanced ",
      para: "Did you know that according to the University of Maryland hackers attack every 39 seconds",
    },
    {
      img: "career/img3.png",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      para: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
    },
    {
      img: "FSD 6/img1.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title:
        "The Top 10 Tools Every Full Stack Developer Should Master in 2023 ",
      para: "As a full stack developer, having the right set of tools is crucial for your",
    },
    {
      img: "FSD 6/img2.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title:
        "The Ultimate Guide to Real-World Full Stack Development Applications ",
      para: "Full stack development has become increasingly popular in recent years, with companies seeking professionals who",
    },
    {
      img: "FSD 6/img3.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "Best Ways to Learn Full Stack Development in 2023 ",
      para: "Full stack development is and will be a promising and an in-demand career in the",
    },
    {
      img: "FSD 6/img4.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: " How Long Would It Take to Be a Full Stack Developer?",
      para: "Have you ever wondered how much time it would take to become a skilled Full",
    },

    {
      img: "data science/img1.webp",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "10 Best Data Science Online Courses for Beginners | 2023",
      para: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
    },

    {
      img: "data science/img6.png",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "Data Science Webinars and Workshops",
      para: "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data",
    },

    {
      img: "data science/img2.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "10 Best Data Science Frameworks in 2023",
      para: "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
    },

    {
      img: "data science/img3.webp",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title:
        "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
      para: "Data science has become one of the most sought-after skills in the current job market.",
    },

    {
      img: "data science/img4.png",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "Everything about Data Scientist Salary in India | 2023",
      para: "Are you curious about the highly sought-after field of data science and the potential it",
    },

    {
      img: "data science/img5.webp",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "How Long Would It Take to Learn Data Science?",
      para: "Have you ever wondered how much time it takes to learn data science? It’s an",
    },
    {
      img: "FSD 6/img5.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "Top Full Stack Development Webinars and Workshops ",
      para: "Are you keen to elevate your web development skills and master the art of Full",
    },
    {
      img: "FSD 6/img6.webp",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "The Future & Scope of Full Stack Developers in India",
      para: "Have you ever wondered about the future of full stack developers in India? These talented",
    },
    {
      img: "career/img4.png",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: " Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      para: "Cybersecurity & Ethical hacking and have been key in making sure that your  online",
    },
    {
      img: "career/img5.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: " 10 Best  Science Online Courses for Beginners | 2023",
      para: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
    },

    {
      img: "ui_ux.gif",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "How to Become a UI/UX Designer: 10 Steps to Master the Craft ",
      para: "Have you ever wondered what it takes to create captivating designs that leave users delighted",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 mt-5 ">
          {data && data.length > 0
            ? data.map((item, i) => <Cards key={i} item={item} index={i} />)
            : "no data available"}
        </div>
      </div>
    </>
  );
}

export default AllFeild;
