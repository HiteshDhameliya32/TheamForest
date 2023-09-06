<script>
export default {
    name: "PORTFOLIO"
}
</script>

<template>
    <section class="section text-center" id="portfolio">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="text-center">
                        <h2>Our <span class="fw-bold">Works</span></h2>
                        <p class="text-muted mx-auto section-subtitle mt-3">It is a long established fact that a reader will
                            be of a page when established fact looking at its layout.</p>
                    </div>
                </div>
            </div>
            <div class="row mt-5 ">
                <ul class="col list-unstyled list-inline mb-0 text-uppercase work_menu" id="menu-filter">
                    <li class="list-inline-item"><a class="active" data-filter="*">All</a></li>
                    <li class="list-inline-item"><a class="" data-filter=".seo">Seo</a></li>
                    <li class="list-inline-item"><a class="" data-filter=".webdesign">Webdesign</a></li>
                    <li class="list-inline-item"><a class="" data-filter=".WORK">WORK</a></li>
                    <li class="list-inline-item"><a class="" data-filter=".wordpress">Wordpress</a></li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="row mt-4 work-filter">
                <div class="col-lg-4 work_item webdesign wordpress">
                    <a href="@/assets/images/works/1.jpg" class="img-zoom">
                        <div class="work_box">
                            <div class="work_img">
                                <img src="@/assets/images/works/1.jpg" class="img-fluid mx-auto d-block rounded"
                                    alt="work-img">
                            </div>
                            <div class="work_detail">
                                <p class="mb-2">Category</p>
                                <h4 class="mb-0">Project Title</h4>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-lg-4 work_item WORK webdesign seo">
                    <a href="@/assets/images/works/2.jpg" class="img-zoom">
                        <div class="work_box">
                            <div class="work_img">
                                <img src="@/assets/images/works/2.jpg" class="img-fluid mx-auto d-block rounded"
                                    alt="work-img">
                            </div>
                            <div class="work_detail">
                                <p class="mb-2">Category</p>
                                <h4 class="mb-0">Project Title</h4>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-lg-4 work_item seo wordpress">
                    <a href="@/assets/images/works/3.jpg" class="img-zoom">
                        <div class="work_box">
                            <div class="work_img">
                                <img src="@/assets/images/works/3.jpg" class="img-fluid mx-auto d-block rounded"
                                    alt="work-img">
                            </div>
                            <div class="work_detail">
                                <p class="mb-2">Category</p>
                                <h4 class="mb-0">Project Title</h4>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-lg-4 work_item wordpress WORK webdesign">
                    <a href="@/assets/images/works/4.jpg" class="img-zoom">
                        <div class="work_box">
                            <div class="work_img">
                                <img src="@/assets/images/works/4.jpg" class="img-fluid mx-auto d-block rounded"
                                    alt="work-img">
                            </div>
                            <div class="work_detail">
                                <p class="mb-2">Category</p>
                                <h4 class="mb-0">Project Title</h4>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-lg-4 work_item seo webdesign">
                    <a href="@/assets/images/works/5.jpg" class="img-zoom">
                        <div class="work_box">
                            <div class="work_img">
                                <img src="@/assets/images/works/5.jpg" class="img-fluid mx-auto d-block rounded"
                                    alt="work-img">
                            </div>
                            <div class="work_detail">
                                <p class="mb-2">Category</p>
                                <h4 class="mb-0">Project Title</h4>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-lg-4 work_item devlopment webdesign">
                    <a href="@/assets/images/works/6.jpg" class="img-zoom">
                        <div class="work_box">
                            <div class="work_img">
                                <img src="@/assets/images/works/6.jpg" class="img-fluid mx-auto d-block rounded"
                                    alt="work-img">
                            </div>
                            <div class="work_detail">
                                <p class="mb-2">Category</p>
                                <h4 class="mb-0">Project Title</h4>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>