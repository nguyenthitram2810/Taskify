<template>
  <div id="bg">
    <div class="page-wraper">
      <!-- Header -->
      <header class="site-header header-transparent text-black mo-left">
        <!-- Main Header -->
        <div class="is-fixed main-bar-wraper navbar-expand-lg">
          <div class="main-bar clearfix">
            <div class="container clearfix">
              <!-- Website Logo -->
              <div class="logo-header mostion logo-dark">
                <a><img src="/images/logo_taskify.png" alt="" /></a>
              </div>
              <!-- Nav Toggle Button -->
              <button
                class="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div
                class="header-nav navbar-collapse collapse justify-content-end"
                id="navbarNavDropdown"
              >
                <div class="logo-header">
                  <a><img src="/images/logo_taskify.png" alt="" /></a>
                </div>
                <ul class="nav navbar-nav navbar">
                  <li>
                    <nuxt-link to="/"><span>Home</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/task"><span>Task</span></nuxt-link>
                  </li>
                  <li>
                    <a href="#services"><span>Services</span></a>
                  </li>
                  <li>
                    <a href="#features"><span>Features</span></a>
                  </li>
                  <li>
                    <a href="#contact"><span>Contact Us</span></a>
                  </li>
                  <li>
                    <a @click="logOut"><span><i class="fas fa-sign-out-alt" style="font-size: 20px;"></i></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Main Header End -->
      </header>
      <!-- Header End -->

      <div class="page-content bg-white">
        <!-- Slider -->
        <div
          id="home"
          class="banner-one"
          style="background-image: url(/images/main-slider/slider1/pic2.png)"
        >
          <div class="container">
            <div class="banner-inner">
              <div class="img1">
                <img src="/images/main-slider/slider1/pic3.png" alt="" />
              </div>
              <div class="img2">
                <img src="/images/main-slider/slider1/pic4.png" alt="" />
              </div>
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="banner-content">
                    <h6
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                      class="wow fadeInUp sub-title text-primary"
                    >
                      We Create Ideas
                    </h6>
                    <h1
                      data-wow-duration="1.2s"
                      data-wow-delay="1s"
                      class="wow fadeInUp"
                    >
                      Build Taskify
                      <span class="text-primary">Website</span> Manage Team
                    </h1>
                    <p
                      data-wow-duration="1.4s"
                      data-wow-delay="1.5s"
                      class="wow fadeInUp m-b30"
                    >
                      Morbi sed lacus nec risus finibus feugiat et fermentum
                      nibh. Pellentesque vitae ante at elit fringilla ac at
                      purus.
                    </p>
                    <a
                      data-wow-duration="1.6s"
                      data-wow-delay="2s"
                      class="wow fadeInUp btn btn-link d-inline-flex align-items-center"
                      href="#"
                      ><i class="fa fa-angle-right m-r10"></i>Learn More</a
                    >
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    class="dz-media move-box wow fadeIn"
                    data-wow-duration="1.6s"
                    data-wow-delay="0.8s"
                  >
                    <img class="move-1" src="/images/move/pic1.png" alt="" />
                    <img class="move-2" src="/images/move/pic2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Service -->
        <section
          id="services"
          class="content-inner-2"
          style="background-image: url(/images/background/bg1.png)"
        >
          <div class="container">
            <div class="section-head style-1 text-center">
              <h6 class="sub-title bgl-primary m-b20 text-primary">Services</h6>
              <h2 class="title">Provide Awesome Service To You</h2>
            </div>
            <div class="row">
              <div
                class="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div class="icon-bx-wraper style-1 box-hover text-center m-b30">
                  <div class="icon-bx-md radius bg-yellow shadow-yellow">
                    <a href="javascript:void(0);" class="icon-cell">
                      <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="icon-content">
                    <h4 class="dlab-title">Strategy & Research</h4>
                    <p>
                      Fusce sit amet dui vitae urna tristique imperdiet. Donec
                      eget sapien euismod, faucibus nibh non, consequat elit.
                      Praesent sed vehicula.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div class="icon-bx-wraper style-1 box-hover text-center m-b30">
                  <div class="icon-bx-md radius bg-red shadow-red">
                    <a href="javascript:void(0);" class="icon-cell">
                      <i class="fas fa-window-restore"></i>
                    </a>
                  </div>
                  <div class="icon-content">
                    <h4 class="dlab-title">Web Development</h4>
                    <p>
                      Fusce sit amet dui vitae urna tristique imperdiet. Donec
                      eget sapien euismod, faucibus nibh non, consequat elit.
                      Praesent sed vehicula.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div class="icon-bx-wraper style-1 box-hover text-center m-b30">
                  <div class="icon-bx-md radius bg-green shadow-green">
                    <a href="javascript:void(0);" class="icon-cell">
                      <i class="fas fa-chart-pie"></i>
                    </a>
                  </div>
                  <div class="icon-content">
                    <h4 class="dlab-title">Web Solution</h4>
                    <p>
                      Fusce sit amet dui vitae urna tristique imperdiet. Donec
                      eget sapien euismod, faucibus nibh non, consequat elit.
                      Praesent sed vehicula.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Fetures -->
        <section id="features" class="content-inner-2">
          <div class="container">
            <div class="row align-items-center">
              <div
                class="col-xl-6 col-lg-7 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div class="section-head style-1">
                  <h6 class="sub-title bgl-primary m-b20 text-primary">
                    Fetures
                  </h6>
                  <h2 class="title">
                    Our Working Process To Help Your Boost Your Business
                  </h2>
                </div>
                <div class="section-wraper-one">
                  <div class="icon-bx-wraper style-2 left m-b30">
                    <div class="icon-bx-md radius bg-white text-red">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="fas fa-lightbulb"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <h4 class="dlab-title">Idea & Analysis Gathering</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div class="icon-bx-wraper style-2 left m-b30">
                    <div class="icon-bx-md radius bg-white text-yellow">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="fas fa-chart-line"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <h4 class="dlab-title">Designing & Developing</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et.
                      </p>
                    </div>
                  </div>
                  <div class="icon-bx-wraper style-2 left m-b30">
                    <div class="icon-bx-md radius bg-white text-green">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="fas fa-rocket"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <h4 class="dlab-title">Testing & Lunching</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-6 col-lg-5 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div class="dlab-media">
                  <img src="/images/about/img5.png" class="move-2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Get A Quote -->
        <section
          id="contact"
          class="content-inner"
          style="background-image: url(/images/background/bg1.png)"
        >
          <div class="container">
            <div class="row align-items-center">
              <div
                class="col-xl-6 col-lg-7 m-b30 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div class="section-head style-1">
                  <h6 class="sub-title bgl-primary m-b20 text-primary">
                    Contact Us
                  </h6>
                  <h2 class="title">
                    We Love To Help Great Companies To Enlarge Their Revenues.
                  </h2>
                </div>
                <form
                  class="dlab-form dzForm"
                  method="POST"
                  action="https://samar.dexignzone.com/xhtml/script/contact.php"
                >
                  <div class="dzFormMsg"></div>
                  <input
                    type="hidden"
                    class="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="far fa-user"></i
                          ></span>
                        </div>
                        <input
                          name="dzName"
                          type="text"
                          required
                          class="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="far fa-user"></i
                          ></span>
                        </div>
                        <input
                          name="dzOther[last_name]"
                          type="text"
                          class="form-control"
                          required
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="far fa-envelope"></i
                          ></span>
                        </div>
                        <input
                          name="dzEmail"
                          type="text"
                          required
                          class="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fas fa-phone-alt"></i
                          ></span>
                        </div>
                        <input
                          name="dzOther[phone]"
                          type="text"
                          required
                          class="form-control"
                          placeholder="Phone No."
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="far fa-file-alt"></i
                          ></span>
                        </div>
                        <input
                          name="dzOther[project_title]"
                          type="text"
                          class="form-control"
                          required
                          placeholder="Project Title"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fas fa-list"></i
                          ></span>
                        </div>
                        <select
                          name="dzOther[choose_service]"
                          class="form-control"
                          required
                        >
                          <option selected>Choose Service</option>
                          <option value="1">Web Development</option>
                          <option value="2">Web Design</option>
                          <option value="3">Strategy & Research</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="far fa-comment-alt"></i
                          ></span>
                        </div>
                        <textarea
                          name="dzMessage"
                          required
                          class="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="input-group">
                        <div
                          class="g-recaptcha"
                          data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                          data-callback="verifyRecaptchaCallback"
                          data-expired-callback="expiredRecaptchaCallback"
                        ></div>
                        <input
                          class="form-control d-none"
                          style="display: none"
                          data-recaptcha="true"
                          required
                          data-error="Please complete the Captcha"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        class="btn btn-link d-inline-flex align-items-center"
                      >
                        <i class="fa fa-angle-right m-r10"></i>Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div
                class="col-xl-6 col-lg-5 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div class="dlab-media cf-r-img">
                  <img src="/images/about/img2.png" class="move-1" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Footer -->
      <footer
        class="site-footer style-1"
        id="footer"
        style="background-image: url(/images/background/bg10.png)"
      >
        <div class="footer-top">
          <div class="container">
            <div
              class="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div class="row align-items-center">
                <div class="col-xl-6 col-md-4">
                  <div class="footer-logo">
                    <a><img src="/images/logo_taskify.png" alt="" /></a>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6">
                  <div class="icon-bx-wraper left m-b10">
                    <div class="icon-lg">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="fas fa-envelope-open-text"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <p>+91 987-654-3210<br />info@example.com</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6">
                  <div class="icon-bx-wraper left m-b10">
                    <div class="icon-lg">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="fas fa-map-marked-alt"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <p>Marmora Road Chi Minh City, Vietnam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div class="widget widget_about">
                  <h5 class="footer-title">About Us</h5>
                  <p>
                    Maecenas pellentesque placerat quam, in finibus nisl
                    tincidunt sed. Aliquam magna augue, malesuada ut feugiat
                    eget, cursus eget felis.
                  </p>
                  <div class="dlab-social-icon">
                    <ul>
                      <li>
                        <i
                          class="fab fa-facebook-square mr-2"
                          style="font-size: 35px"
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fab fa-instagram mr-2"
                          style="font-size: 35px"
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fab fa-twitter-square"
                          style="font-size: 35px"
                        ></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-3 col-lg-2 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div class="widget widget_services">
                  <h5 class="footer-title">Our links</h5>
                  <ul>
                    <li><a href="javascript:void(0);">Home</a></li>
                    <li><a href="javascript:void(0);">About Us</a></li>
                    <li><a href="javascript:void(0);">Services</a></li>
                    <li><a href="javascript:void(0);">Team</a></li>
                    <li><a href="javascript:void(0);">Blog</a></li>
                  </ul>
                </div>
              </div>
              <div
                class="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div class="widget widget_services">
                  <h5 class="footer-title">Our Services</h5>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">Strategy & Research</a>
                    </li>
                    <li><a href="javascript:void(0);">Web Development</a></li>
                    <li><a href="javascript:void(0);">Web Solution</a></li>
                    <li><a href="javascript:void(0);">Digital Marketing</a></li>
                    <li><a href="javascript:void(0);">App Design </a></li>
                  </ul>
                </div>
              </div>
              <div
                class="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div class="widget widget_services">
                  <h5 class="footer-title">Other links</h5>
                  <ul>
                    <li><a href="javascript:void(0);">FAQ</a></li>
                    <li><a href="javascript:void(0);">Portfolio</a></li>
                    <li><a href="javascript:void(0);">Privacy Policy</a></li>
                    <li>
                      <a href="javascript:void(0);">Terms & Conditions</a>
                    </li>
                    <li><a href="javascript:void(0);">Support </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- footer bottom part -->
        <div
          class="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <span class="copyright-text"
                  >Copyright © 2021
                  <a href="https://dexignzone.com/" target="_blank"
                    >DexignZone</a
                  >. All rights reserved.</span
                >
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
@import url("./style.scss");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
</style>