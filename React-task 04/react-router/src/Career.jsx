import React from "react";
import Cards from "./Cards";

function Career() {
  const data = [
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

export default Career;
