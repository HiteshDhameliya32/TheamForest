import React from "react";
import Link from "next/link";
import Image from "next/image";

//import images
import work1 from "../public/images/work/1.png";
import work2 from "../public/images/work/2.png";
import work3 from "../public/images/work/3.png";
import work4 from "../public/images/work/4.png";
import work5 from "../public/images/work/5.png";
import work6 from "../public/images/work/6.png";

//import component
import Header from "../component/Header";
import Project from "../component/Project";
import Line from "../component/Line";
import Footer from "../component/Footer";
import Homebg from "../component/Homebg";

//workdata Start

const workData = [
  {
    id: 1,
    title: "Powering Social Proof for Modern Business",
    category: "branding",
    image: work1,
  },
  {
    id: 2,
    title: "Bringing a modern mobile experience learning",
    category: "Development",
    image: work2,
  },
  {
    id: 3,
    title: "Design for one of the major figures of fashion",
    category: "Design",
    image: work5,
  },
];
const workDataa = [
  {
    title: "Art direction for leading publishing company",
    category: "Development",
    image: work3,
  },
  {
    title: "Helping Australia's oldest banking company",
    category: "Design",
    image: work4,
  },
  {
    title: "Improving a business through design & strategy",
    category: "Branding",
    image: work6,
  },
];
//workdata End

export default function Work() {

  // Work title and category start
  const Title = 'Work';
  const Categories = ['Work'];
  const homeLink = 'Home';
 // Work title and category end

  return (
    <React.Fragment>
      <Header/>
      {/* work home Start */}
      <Homebg title={Title} categories={Categories} homeLink={homeLink} />
      {/* work home End */}
      <Line />
      {/* workdata Start  */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-[72px]">
            <div>
              <div className="space-y-6 md:space-y-[72px]">
                {workData.map((workItem) => (
                  <div
                    key={workItem.id}
                    className="bg-white rounded-2xl overflow-hidden"
                  >
                    <Link href="/workdetails">
                      <Image
                        src={workItem.image}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </Link>
                    <div className="p-8 md:max-w-[420px]">
                      <Link
                        href="/workdetails"
                        className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
                      >
                        {workItem.title}
                      </Link>
                      <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                        {workItem.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 mt-6 md:mt-32 md:space-y-[72px]">
              {workDataa.map((workItem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <Link href="/workdetail">
                    <Image
                      src={workItem.image}
                      className="object-cover w-full h-full"
                      alt=""
                    />
                  </Link>
                  <div className="p-8 md:max-w-[420px]">
                    <Link
                      href="/workdetail"
                      className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
                    >
                      {workItem.title}
                    </Link>
                    <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                      {workItem.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* workdata End */}
      <Line />
      <Project />
      <Footer/>
    </React.Fragment>
  );
}
