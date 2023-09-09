import React from "react";
import Footer from "../components/Footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "../components/Header";

function Documentation() {
  const code = `  import React, { useEffect } from "react";
  import OwlCarousel from "react-owl-carousel";
  import "owl.carousel/dist/assets/owl.carousel.css";
  import "owl.carousel/dist/assets/owl.theme.default.css";
  import "magnific-popup/dist/jquery.magnific-popup";
  
  function Index1() {
  
      return (
          <>
              {/* <!-- start all cards --> */}
              {/* <!-- Start Home --> */}
              <section className="home_first section">
                  <div className="container">
                      ... ... ...
                  </div>
              </section>
              {/* <!-- Start Home --> */}
  
              {/* <!-- Start Logo --> */}
              <section className="img_logo section">
                  <div className="container bg-light rounded">
                      ... ... ...
                  </div>
              </section>
              {/* <!-- End Logo --> */}
  
              {/* <!-- Start Services --> */}
              <section className="section">
                  <div className="container">
                      ... ... ...
  
                  </div>
              </section>
              {/* <!-- End Services --> */}
  
              {/* <!-- Start Features --> */}
              <section className="section">
                  <div className="container">
                      ... ... ...
  
                  </div>
              </section>
              {/* <!-- End Features --> */}
  
              {/* <!-- Start Cta --> */}
              <section className="section">
                  <div className="container">
                      ... ... ...
  
                  </div>
              </section>
              {/* <!-- End Cta --> */}
  
              {/* <!-- Start Client --> */}
              <section className="section bg-light pb-0">
                  <div className="container">
                      ... ... ...
  
                  </div>
              </section>
              {/* <!-- End Client --> */}
  
              {/* <!-- Start Price --> */}
              <section className="section">
                  <div className="container">
                      ... ... ...
  
                  </div>
              </section>
              {/* <!-- End Price --> */}
  
              {/* <!-- Start FAQ --> */}
              <section className="section bg-light">
                  <div className="container">
                      ... ... ...
  
                  </div>
              </section>
              {/* <!-- End FAQ --> */}
  
              {/* <!-- Start Contact --> */}
              <section className="section bg-contact">
                  <div className="bg-overlay"></div>
                  <div className="container">
                      ... ... ...
                  </div>
              </section>
              {/* <!-- End Contact --> */}
  
              {/* <!-- end all cards --> */}
          </>
      );
  }
  
  export default Index1;
  `;

  return (
    <>
      <Header />
      {/* Start Banner */}
      <section className="bg-page-head section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pages_banner_content">
                <h1 className="fw-bold">Documentation</h1>
                <p>We have made well documentions for easy to use</p>
                <div>
                  <a href="contact.html" className="btn btn-custom btn-sm">
                    Contact US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Banner */}

      {/* Start Documentation  */}
      <section class="section doc_pages_custom">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="doc_menu">
                <div class="card mt-0">
                  <div class="card-header">
                    <h5 class="card-title mb-0 fw-bold">Documentation</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-0">
                      <li class="active">
                        <a href="#intro">Introduction</a>
                      </li>
                      <li>
                        <a href="#file_structure">File Structure</a>
                      </li>
                      <li>
                        <a href="#html">HTML</a>
                      </li>
                      <li>
                        <a href="#css">CSS</a>
                      </li>
                      <li>
                        <a href="#scss">SCSS</a>
                      </li>
                      <li>
                        <a href="#javascript">Javascript</a>
                      </li>
                      <li>
                        <a href="#features">Features</a>
                      </li>
                      <li>
                        <a href="#credit">Credit &amp; Resources</a>
                      </li>
                      <li>
                        <a href="#support">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="doc_detail">
                <div id="intro">
                  <div class="card mt-0">
                    <div class="card-header">
                      <h5 class="card-title mb-0 fw-bold">Introduction</h5>
                    </div>
                    <div class="card-body">
                      <p>
                        Landik is a superb, one of a kind, and present day HTML5
                        Template having multi-choices for Startups, App Landing,
                        and SaaS-based companies. It has 4 special points of
                        arrival with multi internal pages for different
                        purposes.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="file_structure">
                  <div class="card mt-3">
                    <div class="card-header">
                      <h5 class="card-title mb-0 fw-bold">File Structure</h5>
                    </div>
                    <div class="card-body">
                      <pre class="prettyprint">
 <i class="mdi mdi-folder-multiple"></i> Landik/ <br />
 ├── <i class="mdi mdi-folder-multiple"></i> landing/ <br />
 │   ├── <i class="mdi mdi-folder-multiple"></i> assets/ <br />
 │   │   ├── <i class="mdi mdi-folder-multiple"></i> css/ <br />
 │   │   │   └── <i class="mdi mdi-file-multiple"></i> All css files <br />
 │   │   ├── <i class="mdi mdi-folder-multiple"></i> fonts/ <br />
 │   │   │   └── <i class="mdi mdi-file-multiple"></i> All font files <br />
 │   │   ├── <i class="mdi mdi-folder-multiple"></i> images/ <br />
 │   │   │   └── <i class="mdi mdi-file-multiple"></i> All images files <br />
 │   │   ├── <i class="mdi mdi-folder-multiple"></i> js <br />
 │   │   │   └── <i class="mdi mdi-file-multiple"></i> All javascript files <br />
 │   │   └── <i class="mdi mdi-folder-multiple"></i> scss <br />
 │   │       └── <i class="mdi mdi-file-multiple"></i> All scss files <br />
 │   └── <i class="mdi mdi-file-multiple"></i>Index.html <br />
 │        ├──<i class="mdi mdi-folder-multiple"></i> src/ <br />
 │        │   ├── <i class="mdi mdi-folder-multiple"></i> Component/ <br />
 │        │   │    ├── <i class="mdi mdi-file-multiple"></i>Footer.jsx <br />
 │        │   │    ├── <i class="mdi mdi-file-multiple"></i>Footer2.jsx <br />
 │        │   │    ├── <i class="mdi mdi-file-multiple"></i>Footer3.jsx <br />
 │        │   │    ├── <i class="mdi mdi-file-multiple"></i>Footer4.jsx <br />
 │        │   │    └── <i class="mdi mdi-file-multiple"></i>Header.jsx <br />
 │        │   └──<i class="mdi mdi-folder-multiple"></i> Pages/ <br />
 │        │       ├── <i class="mdi mdi-folder-multiple"></i>Layouts/<br />
 │        │       │    ├── <i class="mdi mdi-file-multiple"></i>Layout.jsx<br />
 │        │       │    ├── <i class="mdi mdi-file-multiple"></i>Layout2.jsx<br />
 │        │       │    ├── <i class="mdi mdi-file-multiple"></i>Layout3.jsx<br />
 │        │       │    └── <i class="mdi mdi-file-multiple"></i>Layout4.jsx<br />
 │        │       ├── <i class="mdi mdi-file-multiple"></i>About.jsx<br />
 │        │       ├── <i class="mdi mdi-file-multiple"></i>All Pages <br />
 │        ├──<i class="mdi mdi-file-multiple"></i> App.js <br />
 │        └──<i class="mdi mdi-file-multiple"></i> Index.js <br />
 ├──<i class="mdi mdi-file-multiple"></i> package-lock.json <br />
 └──<i class="mdi mdi-file-multiple"></i> package.json <br />

 
       
                              {/* └── documentation.html - documentation file for documentation. <br /> */}
                      </pre>
                    </div>
                  </div>
                </div>
                <div id="html">
                  <div class="card mt-3">
                    <div class="card-header">
                      <h5 class="card-title mb-0 fw-bold">HTML</h5>
                    </div>
                    <div class="card-body">
                      {/* <!-- HTML generated using hilite.me --> */}
                      <SyntaxHighlighter language="jsx" style={vs}>
        {code}
      </SyntaxHighlighter>
                    



                      
                    </div>
                  </div>
                </div>
                <div id="css">
                  <div class="card mt-3">
                    <div class="card-header">
                      <h5 class="card-title mb-0 fw-bold">CSS</h5>
                    </div>
                    <div class="card-body">
                      <p>Landik Built with latest version of CSS3.</p>
                      <div class="table-responsive">
                        <table class="table m-0">
                          <thead>
                            <tr>
                              <th>File Name</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <code>bootstrap.min.css</code>
                              </td>
                              <td>Bootstrap v5.3.1 css file</td>
                            </tr>
                            <tr>
                              <td>
                                <code>materialdesignicons.min.css</code>
                              </td>
                              <td>Materialdesign icon css file</td>
                            </tr>
                            <tr>
                              <td>
                                <code>themify-icons.css</code>
                              </td>
                              <td>Themify icon css file</td>
                            </tr>
                            <tr>
                              <td>
                                <code>magnific-popup.css</code>
                              </td>
                              <td>Magnific Popup css file</td>
                            </tr>
                            <tr>
                              <td>
                                <code>owl.carousel.css</code>
                              </td>
                              <td>Owl Corousel css file</td>
                            </tr>
                            <tr>
                              <td>
                                <code>owl.theme.css</code>
                              </td>
                              <td>Owl Corousel Theme Default css file</td>
                            </tr>
                            <tr>
                              <td>
                                <code>owl.transitions.css</code>
                              </td>
                              <td>Owl Transitions Theme Default css file</td>
                            </tr>
                            <tr>
                              <td>
                                <code>style.css</code>
                              </td>
                              <td>Landik main css file</td>
                            </tr>
                            <tr>
                              <td>
                                <code>menu.css</code>
                              </td>
                              <td>Landik menu css file</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="scss">
                  <div class="card mt-3">
                    <div class="card-header">
                      <h5 class="card-title mb-0 fw-bold">SCSS</h5>
                    </div>
                    <div class="card-body">
                      <p class="m-t-20">
                        Install Live Sass Compiler extention in your{" "}
                        <a
                          class="text-custom fw-bold"
                          href="https://code.visualstudio.com/"
                          target="_blank"
                        >
                          {" "}
                          Visual Code Editor.{" "}
                        </a>{" "}
                        Click the Watch Sass button at the right side footer of
                        visual studio code. Contact us via{" "}
                        <a
                          class="text-custom fw-bold"
                          target="_blank"
                          href="https://themeforest.net/user/themesboss"
                        >
                          {" "}
                          Support
                        </a>{" "}
                        any issues
                      </p>
                    </div>
                  </div>
                </div>
                <div id="javascript">
                  <div class="card mt-3">
                    <div class="card-header">
                      <h5 class="card-title mb-0 fw-bold">Javascript</h5>
                    </div>
                    <div class="card-body">
                      <p>Landik Built with latest version of jQuery v3.5.1</p>
                      <div class="table-responsive">
                        <table class="table m-0">
                          <thead>
                            <tr>
                              <th>File Name</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <code>jquery.min.js</code>
                              </td>
                              <td>jQuery v3.5.1 js file</td>
                            </tr>
                            <tr>
                              <td>
                                <code>bootstrap.min.js</code>
                              </td>
                              <td>Bootstrap v5.3.1 js file</td>
                            </tr>



                            <tr>
                              <td>
                                <code>js/custom/*.js</code>
                              </td>
                              <td>All Custom js files</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="features">
                  <div class="card mt-3">
                    <div class="card-header">
                      <h5 class="card-title mb-0 fw-bold">Features</h5>
                    </div>
                    <div class="card-body">
                      <p>We are come with following features.</p>
                      <ul>
                        <li>
                          Created using Bootstrap <strong>v5.3.1</strong>
                        </li>
                        <li>
                          <strong>4</strong> Diffrent Landing Pages
                        </li>
                        <li>Built with HTML5 &#38; CSS3</li>
                        <li>Font Icons</li>
                        <li>Google Fonts</li>
                        <li>Easy to Customize</li>
                        <li>Clean code</li>
                        <li>Free Images</li>
                        <li>W3 Valid 100%</li>
                        <li>Browser Compatibility</li>
                        <li>Fully Customizable</li>
                        <li>Modern Design</li>
                        <li>And much more&#8230;</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="credit">
                  <div class="card mt-3">
                    <div class="card-header">
                      <h5 class="card-title mb-0 fw-bold">
                        Credit &amp; Resources
                      </h5>
                    </div>
                    <div class="card-body">
                      <p>We have used the following plugins.</p>
                      <ul class="feature-list">
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>react-owl-carousel</li>
                        <li>Magnific Popup</li>
                        <li>react-countup</li>
                        <li>react-scroll</li>
                        <li>react-router</li>
                        <li>Unsplash</li>
                        <li>Undraw.co</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="support">
                  <div class="card mt-3">
                    <div class="card-header">
                      <h5 class="card-title mb-0 fw-bold">Support</h5>
                    </div>
                    <div class="card-body">
                      <p>
                        Thank you for become a part of us. If you have any
                        query, suggestion and complain. Contact us anytime.
                      </p>
                      <a
                        class="text-custom fw-bold"
                        target="_blank"
                        href="https://themeforest.net/user/themesboss"
                      >
                        - support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Documentation  */}
      <Footer />
    </>
  );
}

export default Documentation;
