import React from "react";
import Image from "next/image";

//import images
import detail from "../public/images/team/detail-1.png";
import fb from "../public/images/fb.svg";
import twitter from "../public/images/twiiter.svg";
import linkdin from "../public/images/linkedin.svg";
import Team2 from "../public/images/team/2.png";
import Team3 from "../public/images/team/3.png";
import Team4 from "../public/images/team/4.png";
import Team5 from "../public/images/team/5.png";

//import component
import Header from "../component/Header";
import Line from "../component/Line";
import Project from "../component/Project";
import Footer from "../component/Footer";
import Link from "next/link";

//Teamdata Start
const teamData = [
  {
    name: "John Doe",
    role: "CEO",
    imageSrc: Team2,
  },
  {
    name: "Atena Stak",
    role: "Manager",
    imageSrc: Team3,
  },
  {
    name: "Mike Wong",
    role: "UI/UX",
    imageSrc: Team4,
  },
  {
    name: "Victoria Gomez",
    role: "Developer",
    imageSrc: Team5,
  },
];
//Teamdata End

export default function Teamdetails() {

  return (

    <React.Fragment>
      <Header />
      {/* Team-details start */}
      <section
        className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
        style={{ backgroundImage: `url('/header-bg.png')` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center max-w-3xl mx-auto">
              <div className="md:border-[6px] border-4 duration-300 border-green inline-block rounded-full p-1 md:p-1.5">
                <Image
                  src={detail}
                  className="mx-auto max-w-[160px] rounded-full md:max-w-[224px]"
                  alt=""
                />
              </div>
              <div className="md:mt-12 mt-8">
                <h4 className="md:text-5xl text-4xl md:leading-[62px] font-semibold">
                  Shaw Johnson
                </h4>
                <p className="uppercase mt-4 text-sm font-medium tracking-[0.86px] text-dark-semilight">
                  Founder
                </p>
                <p className="mt-12 text-[15px] leading-7 text-dark-light">
                  Praesent ac sem eget est egestas volutpat. Aenean tellus
                  metus, bibendum sed, posuere ac, mattis non, nunc. Curabitur
                  suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus
                  pulvinar, hendrerit id, lorem. Etiam rhoncus.Sed magna purus,
                  fermentum eu, tincidunt eu, varius ut, felis. Pellentesque
                  egestas, neque sit amet convallis pulvinar, justo nulla
                  eleifend augue
                </p>
              </div>
              <div className="md:mt-14 mt-8">
                <ul className="flex gap-2 justify-center items-center">
                  <li>
                    <Link
                      href="/#"
                      className="bg-dark rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      <Image src={fb} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="bg-dark rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      <Image src={twitter} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="bg-dark rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      <Image src={linkdin} alt="" />
                    </Link>
                  </li>
                </ul>
                <p className="text-[15px] leading-7 mt-6">shaw@johnson.com</p>
                <p className="text-[15px] leading-7">800 123-456</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team-details End */}
      <Line />
      {/* team start  */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="max-w-[461px] text-center mx-auto">
              <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                Team
              </p>
              <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px]">
                We work hard for your success
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="bg-white duration-300 group pt-14 p-8 text-center hover:shadow-custom rounded-2xl"
              >
                <div className="border-4 border-white duration-300 group-hover:border-green inline-block rounded-full p-1">
                  <Image
                    src={member.imageSrc}
                    className="mx-auto rounded-full"
                    alt={member.name}
                  />
                </div>
                <h5 className="mt-14 font-semibold text-lg leading-7 hover:text-green duration-300">
                  <Link href="/#">{member.name}</Link>
                </h5>
                <p className="mt-2 text-dark-semilight font-medium text-sm leading-5 uppercase tracking-[0.86px]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* team End  */}
      <Line />
      <Project />
      <Footer />
    </React.Fragment>
  );
}
