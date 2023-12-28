"use client"
import React from "react";
import { useState } from "react";

//import component
import Header from "../component/Header";
import Footer from "../component/Footer";
import Line from "../component/Line";
import Project from "../component/Project";
import Homebg from "../component/Homebg";

export default function Faqs() {
  // Faqs title and category start
  const Title = 'Faqs';
  const Categories = ['Faqs'];
  const homeLink = 'Home';
 // Faqs title and category end
 
  // FAQ panel open close logic start
  const [panels, setPanels] = useState({
    firstPanel: false,
    secondPanel: false,
    thirdPanel: false,
    forthPanel: false,
    fifthPanel: false,
  });
  
  const handleTogglePanel = (panelName) => {
    setPanels({
      ...panels,
      [panelName]: !panels[panelName],
    });
  };
    // FAQ panel open close logic end

  
  return (
    <React.Fragment>
      <Header />
    {/* Faqs home Start  */}
        <Homebg title={Title} categories={Categories} homeLink={homeLink} />
    {/* Faqs home End  */}
      <Line />
      {/* Question Answer Start  */}
        <section className="md:py-[120px] py-20">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="mx-auto w-full max-w-[752px]">
                <div className=" faq space-y-4">
                  <div className="ac mt-0 bg-white rounded-lg border-none ">
                    <h2 className="ac-header p-0" onClick={() => handleTogglePanel('firstPanel')}>
                      <button
                        type="button"
                        className="ac-trigger !px-8 !py-[18px] relative !flex w-full items-center justify-between gap-2 !text-lg !font-nunito !font-semibold !text-dark after:!hidden"
                      >
                        <span className="text-lg font-semibold">
                          How to get help?
                        </span>
                        <div className="leading-[22px] faq-arrow">
                          <svg
                            width={8}
                            height={6}
                            viewBox="0 0 8 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.0466659 0.744778L3.86978 5.53751C3.93301 5.61663 4.06672 5.61663 4.12995 5.53751L7.95348 0.744445C7.99899 0.68712 8.01247 0.601674 7.98793 0.527294C7.98285 0.511735 7.97719 0.499838 7.97245 0.490935C7.94325 0.436855 7.88717 0.403076 7.8256 0.403076H0.174128C0.112893 0.403076 0.0564835 0.436772 0.02753 0.490935C0.0226212 0.500004 0.0169636 0.511985 0.0122212 0.526378C-0.0124892 0.601674 0.000906017 0.687287 0.0466659 0.744778Z"
                              fill="#3EC37D"
                            />
                          </svg>
                        </div>
                      </button>
                    </h2>
                    {panels.firstPanel && (
                      <div className="ac-panel">
                        <p className="ac-text !p-9 !pt-3 !text-[15px] !font-normal !leading-7 !text-dark-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique.
                          Duis cursus, mi quis viverra ornare, eros dolor interdum
                          nulla, ut commodo diam libero vitae erat. Aenean
                          faucibus nibh
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="ac mt-0 bg-white rounded-lg border-none">
                    <h2 className="ac-header p-0" onClick={() => handleTogglePanel('secondPanel')}>
                      <button
                        type="button"
                        className="ac-trigger !px-8 !py-[18px] relative !flex w-full items-center justify-between gap-2 !text-lg !font-nunito !font-semibold !text-dark after:!hidden"
                      >
                        <span className="text-lg font-semibold">
                          What if I changed my decision?
                        </span>
                        <div className="leading-[22px] faq-arrow">
                          <svg
                            width={8}
                            height={6}
                            viewBox="0 0 8 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.0466659 0.744778L3.86978 5.53751C3.93301 5.61663 4.06672 5.61663 4.12995 5.53751L7.95348 0.744445C7.99899 0.68712 8.01247 0.601674 7.98793 0.527294C7.98285 0.511735 7.97719 0.499838 7.97245 0.490935C7.94325 0.436855 7.88717 0.403076 7.8256 0.403076H0.174128C0.112893 0.403076 0.0564835 0.436772 0.02753 0.490935C0.0226212 0.500004 0.0169636 0.511985 0.0122212 0.526378C-0.0124892 0.601674 0.000906017 0.687287 0.0466659 0.744778Z"
                              fill="#3EC37D"
                            />
                          </svg>
                        </div>
                      </button>
                    </h2>
                    {panels.secondPanel && (
                      <div className="ac-panel">
                        <p className="ac-text !p-9 !pt-3 !text-[15px] !font-normal !leading-7 !text-dark-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique.
                          Duis cursus, mi quis viverra ornare, eros dolor interdum
                          nulla, ut commodo diam libero vitae erat. Aenean
                          faucibus nibh
                        </p>
                      </div>
                  )}
                  </div>
                  <div className="ac mt-0 bg-white rounded-lg border-none">
                    <h2 className="ac-header p-0"onClick={() => handleTogglePanel('thirdPanel')}>
                      <button
                        type="button"
                        className="ac-trigger !px-8 !py-[18px] relative !flex w-full items-center justify-between gap-2 !text-lg !font-nunito !font-semibold !text-dark after:!hidden"
                      >
                        <span className="text-lg font-semibold">
                          Which currencies do yo accept?
                        </span>
                        <div className="leading-[22px] faq-arrow">
                          <svg
                            width={8}
                            height={6}
                            viewBox="0 0 8 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.0466659 0.744778L3.86978 5.53751C3.93301 5.61663 4.06672 5.61663 4.12995 5.53751L7.95348 0.744445C7.99899 0.68712 8.01247 0.601674 7.98793 0.527294C7.98285 0.511735 7.97719 0.499838 7.97245 0.490935C7.94325 0.436855 7.88717 0.403076 7.8256 0.403076H0.174128C0.112893 0.403076 0.0564835 0.436772 0.02753 0.490935C0.0226212 0.500004 0.0169636 0.511985 0.0122212 0.526378C-0.0124892 0.601674 0.000906017 0.687287 0.0466659 0.744778Z"
                              fill="#3EC37D"
                            />
                          </svg>
                        </div>
                      </button>
                    </h2>
                    {panels.thirdPanel && (
                      <div className="ac-panel">
                        <p className="ac-text !p-9 !pt-3 !text-[15px] !font-normal !leading-7 !text-dark-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique.
                          Duis cursus, mi quis viverra ornare, eros dolor interdum
                          nulla, ut commodo diam libero vitae erat. Aenean
                          faucibus nibh
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="ac mt-0 bg-white rounded-lg border-none">
                    <h2 className="ac-header p-0"  onClick={() => handleTogglePanel('forthPanel')} >
                      <button
                        type="button"
                        className="ac-trigger !px-8 !py-[18px] relative !flex w-full items-center justify-between gap-2 !text-lg !font-nunito !font-semibold !text-dark after:!hidden"
                      >
                        <span className="text-lg font-semibold">
                          What about product return?
                        </span>
                        <div className="leading-[22px] faq-arrow">
                          <svg
                            width={8}
                            height={6}
                            viewBox="0 0 8 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.0466659 0.744778L3.86978 5.53751C3.93301 5.61663 4.06672 5.61663 4.12995 5.53751L7.95348 0.744445C7.99899 0.68712 8.01247 0.601674 7.98793 0.527294C7.98285 0.511735 7.97719 0.499838 7.97245 0.490935C7.94325 0.436855 7.88717 0.403076 7.8256 0.403076H0.174128C0.112893 0.403076 0.0564835 0.436772 0.02753 0.490935C0.0226212 0.500004 0.0169636 0.511985 0.0122212 0.526378C-0.0124892 0.601674 0.000906017 0.687287 0.0466659 0.744778Z"
                              fill="#3EC37D"
                            />
                          </svg>
                        </div>
                      </button>
                    </h2>
                    {panels.forthPanel && (
                      <div className="ac-panel">
                        <p className="ac-text !p-9 !pt-3 !text-[15px] !font-normal !leading-7 !text-dark-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique.
                          Duis cursus, mi quis viverra ornare, eros dolor interdum
                          nulla, ut commodo diam libero vitae erat. Aenean
                          faucibus nibh
                        </p>
                      </div>
                  )}
                  </div>
                  <div className="ac mt-0 bg-white rounded-lg border-none">
                    <h2 className="ac-header p-0" onClick={() => handleTogglePanel('fifthPanel')}>
                      <button
                        type="button"
                        className="ac-trigger !px-8 !py-[18px] relative !flex w-full items-center justify-between gap-2 !text-lg !font-nunito !font-semibold !text-dark after:!hidden"
                      >
                        <span className="text-lg font-semibold">
                          Do you provide product support?
                        </span>
                        <div className="leading-[22px] faq-arrow">
                          <svg
                            width={8}
                            height={6}
                            viewBox="0 0 8 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.0466659 0.744778L3.86978 5.53751C3.93301 5.61663 4.06672 5.61663 4.12995 5.53751L7.95348 0.744445C7.99899 0.68712 8.01247 0.601674 7.98793 0.527294C7.98285 0.511735 7.97719 0.499838 7.97245 0.490935C7.94325 0.436855 7.88717 0.403076 7.8256 0.403076H0.174128C0.112893 0.403076 0.0564835 0.436772 0.02753 0.490935C0.0226212 0.500004 0.0169636 0.511985 0.0122212 0.526378C-0.0124892 0.601674 0.000906017 0.687287 0.0466659 0.744778Z"
                              fill="#3EC37D"
                            />
                          </svg>
                        </div>
                      </button>
                    </h2>
                      {panels.fifthPanel && ( 
                      <div className="ac-panel">
                        <p className="ac-text !p-9 !pt-3 !text-[15px] !font-normal !leading-7 !text-dark-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique.
                          Duis cursus, mi quis viverra ornare, eros dolor interdum
                          nulla, ut commodo diam libero vitae erat. Aenean
                          faucibus nibh
                        </p>
                      </div>
                    )} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Question Answer End  */}
      <Line />
      <Project />
      <Footer />
    </React.Fragment>
  );
}
