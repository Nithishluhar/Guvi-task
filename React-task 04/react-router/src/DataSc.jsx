import React from "react";
import Cards from "./Cards";

function DataSc() {
  const data = [
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

export default DataSc;
