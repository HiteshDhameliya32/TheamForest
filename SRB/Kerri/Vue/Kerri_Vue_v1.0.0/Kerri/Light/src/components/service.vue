<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: "SERVICE",
    mounted() {
        AOS.init({
            easing: 'ease-in-out-sine',
            duration: 1000
        }); // Initialize AOS
    }
}
</script>

<template>
    <section class="section bg-light" id="services">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="text-center" data-aos="fade-up">
                        <h2>Our <span class="fw-bold">Services</span></h2>
                        <p class="text-muted mx-auto section-subtitle mt-3">It is a long established fact that a reader will
                            be of a page when established fact looking at its layout.</p>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-4">
                    <div class="text-center services-boxes rounded p-4 mt-4" data-aos="fade-up">
                        <div class="services-boxes-icon">
                            <i class="mbri-growing-chart text-custom display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Graphic Design</h5>
                            <div class="services-title-border"></div>
                            <p class="text-muted mt-3">There are many variations of passages of but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="text-center services-boxes rounded p-4 mt-4" data-aos="fade-up">
                        <div class="services-boxes-icon">
                            <i class="mbri-hot-cup text-custom display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Unlimited Color</h5>
                            <div class="services-title-border"></div>
                            <p class="text-muted mt-3">There are many variations of passages of but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="text-center services-boxes rounded p-4 mt-4" data-aos="fade-up">
                        <div class="services-boxes-icon">
                            <i class="mbri-upload text-custom display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Media Marketing</h5>
                            <div class="services-title-border"></div>
                            <p class="text-muted mt-3">There are many variations of passages of but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-center services-boxes rounded p-4 mt-4" data-aos="fade-up">
                        <div class="services-boxes-icon">
                            <i class="mbri-layers text-custom display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Unlimited Wifi</h5>
                            <div class="services-title-border"></div>
                            <p class="text-muted mt-3">There are many variations of passages of but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="text-center services-boxes rounded p-4 mt-4" data-aos="fade-up">
                        <div class="services-boxes-icon">
                            <i class="mbri-website-theme text-custom display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Responsive Design</h5>
                            <div class="services-title-border"></div>
                            <p class="text-muted mt-3">There are many variations of passages of but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="text-center services-boxes rounded p-4 mt-4" data-aos="fade-up">
                        <div class="services-boxes-icon">
                            <i class="mbri-edit text-custom display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Easy to customize</h5>
                            <div class="services-title-border"></div>
                            <p class="text-muted mt-3">There are many variations of passages of but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <h2 class="fw-bold">I Am Available For Freelancer.</h2>
                    </div>
                    <div class="text-center mt-4">
                        <BButton href="#" class="btn btn-custom">Hire Me!</BButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>