import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import $ from "jquery";
import 'owl.carousel/dist/assets/owl.carousel.css';
import OwlCarousel from 'react-owl-carousel';
import "magnific-popup";
import imagesLoaded from "imagesloaded";
import AOS from "aos";
import "aos/dist/aos.css";


import imgAbout from "../../assets/images/about.jpg"
import imgWorks1 from "../../assets/images/works/1.jpg"
import imgWorks2 from "../../assets/images/works/2.jpg"
import imgWorks3 from "../../assets/images/works/3.jpg"
import imgWorks4 from "../../assets/images/works/4.jpg"
import imgWorks5 from "../../assets/images/works/5.jpg"
import imgWorks6 from "../../assets/images/works/6.jpg"
import imgBlog1 from "../../assets/images/blog/blog-1.jpg"
import imgBlog2 from "../../assets/images/blog/blog-2.jpg"
import imgBlog3 from "../../assets/images/blog/blog-3.jpg"
import imgTesti1 from "../../assets/images/testi/testi-1.jpg"
import imgTesti2 from "../../assets/images/testi/testi-2.jpg"
import imgTesti3 from "../../assets/images/testi/testi-3.jpg"

function AosAllcontent() {
  const owlOptions = {
    items: 1,
    loop: true,
    autoplay: true,        
    autoplayTimeout: 5000, 
  };
  const clients = [
    {
      id: 1,
      name: "Ebony verty",
      company: "Landik",
      review:
        " “We cut our build times in half compared to our previous process. Love it.”",
      image: imgTesti1,
    },
    {
      id: 2,
      name: "Another Client",
      company: "Another Company",
      review:
        "Another review text goes here. Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      image: imgTesti2,
    },
    {
      id: 3,
      name: "Another Client",
      company: "Another Company",
      review:
        "Another review text goes here. Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      image: imgTesti3,
    },
  ];
  const [activeFilter, setActiveFilter] = useState("*");
  useEffect(() => {
    const $container = document.querySelector(".work-filter");
    const $filter = document.querySelector("#menu-filter");

    imagesLoaded($container, () => {
      const iso = new Isotope($container, {
        itemSelector: ".work_item",
        layoutMode: "masonry",
        animationOptions: {
          duration: 750,
          easing: "linear",
        },
      });
      $(".img-zoom").magnificPopup({
        type: "image",
        gallery: { enabled: true },
      });
      $filter.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const selector = link.getAttribute("data-filter");
          setActiveFilter(selector);
          iso.arrange({ filter: selector });
        });
      });
    });
  }, []);
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-sine",
      duration: 1000,
    });
  });
  return (
    <>
      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mt-3">
                <img
                  src={imgAbout}
                  alt=""
                  className="img-fluid mx-auto d-block img-thumbnail"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-3">
                <h2>
                  <span className="fw-bold">About</span> Me
                </h2>
                <h4 className="mt-4">
                  Hello!{" "}
                  <span className="text-custom fw-bold">I'M Kerri Deo.</span>
                </h4>
                <p className="text-muted mt-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
                <p className="text-muted mt-2">
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p className="text-muted mt-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <div>
                  <ul className="mb-0 about-social list-inline mt-4">
                    <li className="list-inline-item">
                      <a href="/#"  onClick={(e) => e.preventDefault()} >
                        <i className="mdi mdi-dribbble"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#"  onClick={(e) => e.preventDefault()} >
                        <i className="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#"  onClick={(e) => e.preventDefault()} >
                        <i className="mdi mdi-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#"  onClick={(e) => e.preventDefault()} >
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  END ABOUT */}
      {/* START SERVICES  */}
      <section className="section bg-light" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center" data-aos="fade-up">
                <h2>
                  Our <span className="fw-bold">Services</span>
                </h2>
                <p className="text-muted mx-auto section-subtitle mt-3">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div
                className="text-center services-boxes rounded p-4 mt-4"
                data-aos="fade-up"
              >
                <div className="services-boxes-icon">
                  <i className="mbri-growing-chart text-custom display-4"></i>
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Graphic Design</h5>
                  <div className="services-title-border"></div>
                  <p className="text-muted mt-3">
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="text-center services-boxes rounded p-4 mt-4"
                data-aos="fade-up"
              >
                <div className="services-boxes-icon">
                  <i className="mbri-hot-cup text-custom display-4"></i>
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Unlimited Color</h5>
                  <div className="services-title-border"></div>
                  <p className="text-muted mt-3">
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="text-center services-boxes rounded p-4 mt-4"
                data-aos="fade-up"
              >
                <div className="services-boxes-icon">
                  <i className="mbri-upload text-custom display-4"></i>
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Media Marketing</h5>
                  <div className="services-title-border"></div>
                  <p className="text-muted mt-3">
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="text-center services-boxes rounded p-4 mt-4"
                data-aos="fade-up"
              >
                <div className="services-boxes-icon">
                  <i className="mbri-layers text-custom display-4"></i>
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Unlimited Wifi</h5>
                  <div className="services-title-border"></div>
                  <p className="text-muted mt-3">
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="text-center services-boxes rounded p-4 mt-4"
                data-aos="fade-up"
              >
                <div className="services-boxes-icon">
                  <i className="mbri-website-theme text-custom display-4"></i>
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Responsive Design</h5>
                  <div className="services-title-border"></div>
                  <p className="text-muted mt-3">
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="text-center services-boxes rounded p-4 mt-4"
                data-aos="fade-up"
              >
                <div className="services-boxes-icon">
                  <i className="mbri-edit text-custom display-4"></i>
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Easy to customize</h5>
                  <div className="services-title-border"></div>
                  <p className="text-muted mt-3">
                    There are many variations of passages of but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SERVICES --> */}
      {/* <!-- START CTA --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center" data-aos="fade-up">
                <h2 className="fw-bold">I Am Available For Freelancer.</h2>
              </div>
              <div className="text-center mt-4" data-aos="fade-up">
                <a href="/#"  onClick={(e) => e.preventDefault()}  className="btn btn-custom">
                  Hire Me!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END CTA --> */}

      {/* <!-- START CLIENT --> */}
      <section className="section bg-light" id="client">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center" data-aos="fade-up">
                <h2>
                  Our <span className="fw-bold">Client</span>
                </h2>
                <p className="text-muted mx-auto section-subtitle mt-3">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 pt-4">
            <div className="col-lg-12">
              <OwlCarousel className="owl-carousel"   dots={true} nav={false} {...owlOptions}>
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="text-center testi_boxes mx-auto"
                  >
                    <div className="tam_testi_icon text-custom">
                      <i className="mbri-quote-left"></i>
                    </div>
                    <div className="mt-2">
                      <div className="img_testi">
                        <img
                          src={client.image}
                          alt=""
                          className="mx-auto img-thumbnail img-fluid rounded-circle"
                        />
                      </div>
                      <p className="client_review fst-italic mt-4 text-center text-muted">
                        {client.review}
                      </p>
                      <p className="client_name text-center mb-0 mt-4">
                        - {client.name},{" "}
                        <span className="fw-bold">{client.company}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END CLIENT --> */}
      {/* <!-- START WORK -->    */}
      <section className="section text-center" id="portfolio">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center" data-aos="fade-up">
                <h2>
                  Our <span className="fw-bold">Works</span>
                </h2>
                <p className="text-muted mx-auto section-subtitle mt-3">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <ul
              className="col list-unstyled list-inline mb-0 text-uppercase work_menu"
              id="menu-filter"
            >
              <li className="list-inline-item">
                <a
                href="!#"
                  className={activeFilter === "*" ? "active" : ""}
                  data-filter="*"
                >
                  All
                </a>
              </li>
              <li className="list-inline-item">
                <a
                href="!#"
                  className={activeFilter === ".seo" ? "active" : ""}
                  data-filter=".seo"
                >
                  Seo
                </a>
              </li>
              <li className="list-inline-item">
                <a
                href="!#"
                  className={activeFilter === ".webdesign" ? "active" : ""}
                  data-filter=".webdesign"
                >
                  Webdesign
                </a>
              </li>
              <li className="list-inline-item">
                <a
                href="!#"
                  className={activeFilter === ".WORK" ? "active" : ""}
                  data-filter=".WORK"
                >
                  WORK
                </a>
              </li>
              <li className="list-inline-item">
                <a
                href="!#"
                  className={activeFilter === ".wordpress" ? "active" : ""}
                  data-filter=".wordpress"
                >
                  Wordpress
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4 work-filter">
            <div
              className="col-lg-4 work_item webdesign wordpress"
              data-aos="fade-up"
            >
              <a href={imgWorks1} className="img-zoom">
                <div className="work_box">
                  <div className="work_img">
                    <img
                      src={imgWorks1}
                      className="img-fluid mx-auto d-block rounded"
                      alt="work-img"
                    />
                  </div>
                  <div className="work_detail">
                    <p className="mb-2">Category</p>
                    <h4 className="mb-0">Project Title</h4>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-4 work_item WORK webdesign seo"
              data-aos="fade-up"
            >
              <a href={imgWorks2} className="img-zoom">
                <div className="work_box">
                  <div className="work_img">
                    <img
                      src={imgWorks2}
                      className="img-fluid mx-auto d-block rounded"
                      alt="work-img"
                    />
                  </div>
                  <div className="work_detail">
                    <p className="mb-2">Category</p>
                    <h4 className="mb-0">Project Title</h4>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-4 work_item seo wordpress"
              data-aos="fade-up"
            >
              <a href={imgWorks3} className="img-zoom">
                <div className="work_box">
                  <div className="work_img">
                    <img
                      src={imgWorks3}
                      className="img-fluid mx-auto d-block rounded"
                      alt="work-img"
                    />
                  </div>
                  <div className="work_detail">
                    <p className="mb-2">Category</p>
                    <h4 className="mb-0">Project Title</h4>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-4 work_item wordpress WORK webdesign"
              data-aos="fade-up"
            >
              <a href={imgWorks4} className="img-zoom">
                <div className="work_box">
                  <div className="work_img">
                    <img
                      src={imgWorks4}
                      className="img-fluid mx-auto d-block rounded"
                      alt="work-img"
                    />
                  </div>
                  <div className="work_detail">
                    <p className="mb-2">Category</p>
                    <h4 className="mb-0">Project Title</h4>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-4 work_item seo webdesign"
              data-aos="fade-up"
            >
              <a href={imgWorks5} className="img-zoom">
                <div className="work_box">
                  <div className="work_img">
                    <img
                      src={imgWorks5}
                      className="img-fluid mx-auto d-block rounded"
                      alt="work-img"
                    />
                  </div>
                  <div className="work_detail">
                    <p className="mb-2">Category</p>
                    <h4 className="mb-0">Project Title</h4>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-4 work_item devlopment webdesign"
              data-aos="fade-up"
            >
              <a href={imgWorks6} className="img-zoom">
                <div className="work_box">
                  <div className="work_img">
                    <img
                      src={imgWorks6}
                      className="img-fluid mx-auto d-block rounded"
                      alt="work-img"
                    />
                  </div>
                  <div className="work_detail">
                    <p className="mb-2">Category</p>
                    <h4 className="mb-0">Project Title</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END WORK --> */}
      {/* <!-- START BLOG --> */}
      <section className="section bg-light" id="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center" data-aos="fade-up">
                <h2>
                  Our <span className="fw-bold">Blog</span>
                </h2>
                <p className="text-muted mx-auto section-subtitle mt-3">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mt-3">
              <div className="rounded blog_color p-2" data-aos="fade-up">
                <div className="img_blog">
                  <img
                    src={imgBlog1}
                    alt=""
                    className="img-fluid rounded mx-auto d-block"
                  />
                </div>
                <div className="content_blog p-3">
                  <div>
                    <h5 className="fw-bold mb-0">
                      <a href="/#"  onClick={(e) => e.preventDefault()}  className="text-white">
                        There are many variations
                      </a>
                    </h5>
                  </div>
                  <div className="mt-3">
                    <p className="h6 text-muted date_blog mb-0">
                      11 March 2018{" "}
                      <a href="/#"  onClick={(e) => e.preventDefault()}  className="text-custom fw-bold">
                        By Kerri
                      </a>
                    </p>
                    <p className="mt-3 desc_blog text-muted">
                      Sit sagittis vulputate laoreet sodales tortor nulla
                      lobortis bibendum netus primis fames. Lobortis ultricies.
                    </p>
                    <p className="h6 mb-0">
                      <a href="/#"  onClick={(e) => e.preventDefault()}  className="text-muted fw-bold">
                        Read More...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className="rounded blog_color p-2" data-aos="fade-up">
                <div className="img_blog">
                  <img
                    src={imgBlog2}
                    alt=""
                    className="img-fluid rounded mx-auto d-block"
                  />
                </div>
                <div className="content_blog p-3">
                  <div>
                    <h5 className="fw-bold mb-0">
                      <a href="/#"  onClick={(e) => e.preventDefault()}  className="text-white">
                        Contrary to popular belief
                      </a>
                    </h5>
                  </div>
                  <div className="mt-3">
                    <p className="h6 text-muted date_blog mb-0">
                      18 March 2018{" "}
                      <a href="/#"  onClick={(e) => e.preventDefault()}  className="text-custom fw-bold">
                        By Kerri
                      </a>
                    </p>
                    <p className="mt-3 desc_blog text-muted">
                      Sit sagittis vulputate laoreet sodales tortor nulla
                      lobortis bibendum netus primis fames. Lobortis ultricies.
                    </p>
                    <p className="h6 mb-0">
                      <a href="/#"  onClick={(e) => e.preventDefault()}  className="text-muted fw-bold">
                        Read More...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className="rounded blog_color p-2" data-aos="fade-up">
                <div className="img_blog">
                  <img
                    src={imgBlog3}
                    alt=""
                    className="img-fluid rounded mx-auto d-block"
                  />
                </div>
                <div className="content_blog p-3">
                  <div>
                    <h5 className="fw-bold mb-0">
                      <a href="/#"  onClick={(e) => e.preventDefault()}  className="text-white">
                        Lorem Ipsum is not simply
                      </a>
                    </h5>
                  </div>
                  <div className="mt-3">
                    <p className="h6 text-muted date_blog mb-0">
                      22 March 2018{" "}
                      <a href="/#"  onClick={(e) => e.preventDefault()}  className="text-custom fw-bold">
                        By Kerri
                      </a>
                    </p>
                    <p className="mt-3 desc_blog text-muted">
                      Sit sagittis vulputate laoreet sodales tortor nulla
                      lobortis bibendum netus primis fames. Lobortis ultricies.
                    </p>
                    <p className="h6 mb-0">
                      <a href="/#"  onClick={(e) => e.preventDefault()}  className="text-muted fw-bold">
                        Read More...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END BLOG --> */}
      {/* <!-- START CONTACT --> */}
      <section className="section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  <span className="fw-bold">Contact</span> Us
                </h2>
                <p className="text-muted mx-auto section-subtitle mt-3">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="text-center">
                <div>
                  <i className="mbri-mobile2 text-custom h1"></i>
                </div>
                <div className="mt-3">
                  <h5 className="mb-0 contact_detail-title fw-bold">
                    Call Us On
                  </h5>
                  <p className="text-muted">+985 123 7856</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <div>
                  <i className="mbri-letter text-custom h1"></i>
                </div>
                <div className="mt-3">
                  <h5 className="mb-0 contact_detail-title fw-bold">
                    Email Us At
                  </h5>
                  <p className="text-muted">Website.Kerri@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <div>
                  <i className="mbri-pin text-custom h1"></i>
                </div>
                <div className="mt-3">
                  <h5 className="mb-0 contact_detail-title fw-bold">
                    Visit Office
                  </h5>
                  <p className="text-muted">202, Grasselli Street , Conway.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="form-kerri contact_form">
                <div id="message"></div>
                <form
                  method="post"
                  action="php/contact.php"
                  name="contact-form"
                  id="working_form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-2">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Your name..."
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-2">
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Your email..."
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mt-2">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Your Subject.."
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Your message..."
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-end mt-2">
                      <button
                        type="submit"
                        id="submit"
                        className="submitBnt btn btn-custom"
                      >
                        Send Massage
                      </button>
                      <div id="simple-msg"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END CONTACT --> */}
    </>
  );
}

export default AosAllcontent;
