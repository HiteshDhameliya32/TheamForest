import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function Homebg({ title, categories ,homeLink}) {

  return (

    <React.Fragment>
      <section className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]" style={{ backgroundImage: `url('/header-bg.png')` }}>
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="text-center">
            <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
              {title}
            </h2>
            <ul className="mt-2 text-center">
              <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                <Link href="/">{homeLink}</Link>
              </li>
              {categories.map((category, index) => (
                <li key={index} className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                  <Link href={`#${category.toLowerCase()}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  )
}
