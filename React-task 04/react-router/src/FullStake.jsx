import React from "react";
import Cards from "./Cards";
function FullStake() {
  const data = [
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
  ];
  console.log(data[1].img);
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

export default FullStake;
