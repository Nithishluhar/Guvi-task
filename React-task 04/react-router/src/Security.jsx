import React from "react";
import Cards from "./Cards";

function Security() {
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
      img: "cyber security/img4.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      para: "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
    },
    {
      img: "cyber security/img5.webp",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
      para: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
    },
    {
      img: "career/img5.jpg",
      blog_link: "https://www.guvi.in/blog/best-automation-testing-tools/",
      title: "Top 7 Cyber Security Attacks in Real Life",
      para: "Cyber security attacks are the type of actions that are designed to destroy, steal, modify,",
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

export default Security;
