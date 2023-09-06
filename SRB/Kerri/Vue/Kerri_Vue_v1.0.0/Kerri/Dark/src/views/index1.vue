<script>
import Layout from "@/layout/index.vue"
export default {
    name: "INDEX1",
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
                            <h1 class="header-name text-white text-capitalize mb-0">I'M
                                <span class="element fw-bold d-none d-sm-inline-block">
                                    <VueWriter :speed="2000"
                                        :array="['Kerri Deo.', 'A Graphic Designer.', 'A Photographer.']" />
                                </span>
                            </h1>
                            <p class="text-white mx-auto header-desc mt-4">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                            <div class="mt-4 pt-2">
                                <a href="javascript:void(0)" class="btn btn-outline-custom btn-round">Download Cv</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scroll_down">
                <a href="#about" class="scroll">
                    <i class="text-white"></i>
                </a>
            </div>
        </section>
    </Layout>
</template>