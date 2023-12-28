import React from 'react'
import team1 from "../public/images/team/1.png";
import team2 from "../public/images/team/2.png";
import team3 from "../public/images/team/3.png";
import team4 from "../public/images/team/4.png";
import team5 from "../public/images/team/5.png";
import team6 from "../public/images/team/6.png";
import team7 from "../public/images/team/7.png";
import team8 from "../public/images/team/8.png";
import Link from 'next/link';
import Image from 'next/image';

//TeamMembers Data Start
const teamMembers = [
    {
      name: "Shaw Johnson",
      position: "Founder",
      imgSrc: team1,
      link: "/teamdetails",
    },
    {
      name: "John Doe",
      position: "CEO",
      imgSrc: team2,
      link: "/teamdetails",
    },
    {
      name: "Shaw Johnson",
      position: "Founder",
      imgSrc: team3,
      link: "/teamdetails",
    },
    {
      name: "John Doe",
      position: "CEO",
      imgSrc: team4,
      link: "/teamdetails",
    },
    {
      name: "Shaw Johnson",
      position: "Founder",
      imgSrc: team5,
      link: "/teamdetails",
    },
    {
      name: "John Doe",
      position: "CEO",
      imgSrc: team6,
      link: "/teamdetails",
    },
    {
      name: "Shaw Johnson",
      position: "Founder",
      imgSrc: team7,
      link: "/teamdetails",
    },
    {
      name: "John Doe",
      position: "CEO",
      imgSrc: team8,
      link: "/teamdetails",
    },
  ];
  //TeamMembers Data End
  
export default function Teamcomponent() {

  return (

    <React.Fragment>

       {/* Team Start */}
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
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white duration-300 group pt-14 p-8 text-center hover:shadow-custom rounded-2xl"
              >
                <div className="border-4 border-white duration-300 group-hover:border-green inline-block rounded-full p-1">
                  <Image
                    src={member.imgSrc}
                    className="mx-auto rounded-full"
                    alt=""
                  />
                </div>
                <h5 className="mt-14 font-semibold text-lg leading-7 hover:text-green duration-300">
                  <Link href={member.link}>{member.name}</Link>
                </h5>
                <p className="mt-2 text-dark-semilight font-medium text-sm leading-5 uppercase tracking-[0.86px]">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team End */}
      
    </React.Fragment>

  )
}
