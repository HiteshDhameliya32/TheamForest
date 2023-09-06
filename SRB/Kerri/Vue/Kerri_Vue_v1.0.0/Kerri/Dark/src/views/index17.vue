<script>
import Layout from "@/layout/index.vue"
export default {
    name: "INDEX17",
    components: {
        Layout
    }
}
</script>

<template>
    <Layout>
        <section class="section header-bg-img h-100vh align-items-center d-flex" id="home">
            <div class="bg-overlay"></div>
            <div class="container z-index">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="text-center header-content mx-auto">
                            <h4 class="text-white first-title mb-4">Welcome</h4>
                            <h1 class="header-name text-white text-capitalize mb-0">I'M <span
                                    class="element fw-bold d-none d-sm-inline-block">
                                    <VueWriter :speed="2000"
                                        :array="['Kerri Deo.', 'A Graphic Designer.', 'A Photographer.']" />
                                </span>
                            </h1>
                            <p class="text-white mx-auto header-desc mt-4">It is a long established fact that a reader will
                                be of a page when established fact looking at its layout.</p>
                            <div class="mt-4 pt-2">
                                <a href="javascript:void(0)" class="btn btn-outline-custom btn-round">Download Cv</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wave_sec">
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs></defs>
                    <path id="wave_img"
                        d="M 0 185.609 C 317.16666666666663 118.136 317.16666666666663 118.136 634.3333333333333 151.87 C 951.4999999999999 185.609 951.4999999999999 185.609 1268.6666666666665 116.402 C 1585.833333333333 47.195 1585.833333333333 47.195 1903 131.925 L 1903 507 L 0 507 Z"
                        fill="#2e3135"></path>
                </svg>
            </div>
        </section>
    </Layout>
</template>