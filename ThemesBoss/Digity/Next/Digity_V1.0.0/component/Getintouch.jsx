import React from 'react'
import getintouch from "../public/images/getin.png";
import Image from 'next/image';

export default function Getintouch() {

  return (

    <React.Fragment>

      {/* Getin Touch Start */}
       <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <Image src={getintouch} className="rounded-full" alt="" />
            </div>
            <div>
              <div className="lg:max-w-[461px] lg:ml-auto">
                <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                  Get in touch
                </p>
                <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px] text-left p-0">
                  Subscribe to our newsletter
                </h2>
                <form className="mt-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Enter your name"
                        id='one'
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="Enter your email"
                        id='two'
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <input
                        type="button"
                        className="btn-green w-full"
                        defaultValue="subscribe now"
                        id='three'
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 mt-6">
                    <input
                      type="checkbox"
                      id="term"
                      className="form-checkbox"
                    />
                    <label
                      htmlFor="term"
                      className="ml-1 relative top-[1px] text-[15px] leading-7 text-dark-light"
                    >
                      I agree with&nbsp;
                      <span className="text-[15px] leading-7 font-medium text-dark">
                        Terms &amp; Condition
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Getin Touch End */}
       
    </React.Fragment>
    
  )
}
