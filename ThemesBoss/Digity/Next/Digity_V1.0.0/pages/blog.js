import React from "react";
import Link from "next/link";
import Image from "next/image";

//import images
import blog1 from "../public/images/blog/1.jpg";
import blog2 from "../public/images/blog/2.jpg";
import blog3 from "../public/images/blog/3.jpg";
import blog4 from "../public/images/blog/4.jpg";
import blog5 from "../public/images/blog/5.jpg";
import blog6 from "../public/images/blog/6.jpg";

//import component
import Header from "../component/Header"
import Footer from "../component/Footer"
import Project from "../component/Project";
import Line from "../component/Line";
import Homebg from "../component/Homebg";

//blogdata
const blogData = [
  {
    id: 1,
    date: "April 17, 2022",
    title: "How to bring Cosa to your company",
    category: "Development",
    imageSrc: blog1,
  },
  {
    id: 2,
    date: "April 17, 2022",
    title: "How to bring Cosa to your company",
    category: "Development",
    imageSrc: blog2,
  },
  {
    id: 3,
    date: "January 9, 2022",
    title: "Curating a workplace that inspires",
    category: "Design",
    imageSrc: blog4,
  },
  {
    id: 4,
    date: "June 16, 2022",
    title: "Designers who changed the webflow",
    category: "Design",
    imageSrc: blog3,
  },
  {
    id: 5,
    date: "March 12, 2022",
    title: "How to win new clients in development",
    category: "Development",
    imageSrc: blog5,
  },
  {
    id: 6,
    date: "February 28, 2022",
    title: "Why we switched to Figma",
    category: "Development",
    imageSrc: blog6,
  },
];

export default function Blog() {
  // blog title and category start
  const Title = 'Blog';
  const Categories = ['Blog'];
  const homeLink = 'Home';
 // blog title and category end
 
  return (
    <React.Fragment>
      <Header />
      <Homebg title={Title} categories={Categories} homeLink={homeLink} />
      <Line />
      {/* Blog Details Start */}
          <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="bg-white md:flex items-center rounded-2xl overflow-hidden"
              >
                <Image
                  src={blog.imageSrc}
                  className="max-h-[350px] md:max-w-[220px] md:h-full md:object-cover"
                  alt=""
                />
                <div className="p-8 flex-1">
                  <p className="font-medium text-sm text-dark-semilight tracking-[0.86px] uppercase">
                    {blog.date}
                  </p>
                  <h4 className="mt-4 text-[22px] leading-[34px] font-semibold hover:text-green duration-300">
                    <Link href="/blogdetails">{blog.title}</Link>
                  </h4>
                  <p className="mt-4 text-dark-light leading-7 text-[15px]">
                    Enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris
                  </p>
                  <Link
                    href="/blogdetails"
                    className="text-green mt-16 inline-block uppercase font-medium tracking-[0.86px]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
          </section>
      {/* Blog Details End */}
      <Line />
      <Project />
      <Footer />
    </React.Fragment>
  );
}

