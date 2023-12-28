import React from 'react'
import Link from 'next/link'

export default function Projectstart() {

  return (

    <React.Fragment>
       
       {/* project section Start */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="max-w-[780px] text-center mx-auto">
              <h2 className="text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px] font-semibold">
                Build your project with Digity
              </h2>
              <p className="mt-8 text-lg leading-[30px] text-dark-light">
                We design and build beautiful websites, apps and branding
              </p>
              <div className="mt-12">
                <Link href="/contact" className="btn-green">
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project section End */}

    </React.Fragment>
    
  )
}
