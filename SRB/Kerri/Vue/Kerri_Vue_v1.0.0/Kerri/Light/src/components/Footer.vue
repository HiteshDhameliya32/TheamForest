<script>
export default {
    name: "FOOTER",
    Method: {
        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    },
    mounted() {

        let backtoTop = document.getElementById("back-to-top");

        if (backtoTop) {
            backtoTop = document.getElementById("back-to-top");
            window.onscroll = function () {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    backtoTop.style.display = "block";
                } else {
                    backtoTop.style.display = "none";
                }
            };
        }
    }

}
</script>

<template>
    <footer class="footer bg-light">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-12">
                    <div class="text-center text-white footer-alt">
                        <ul class="list-unstyled list-inline mb-0">
                            <li class="list-inline-item"><a href="javascript:void(0)"><i class="mdi mdi-facebook"></i></a>
                            </li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><i class="mdi mdi-linkedin"></i></a>
                            </li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><i class="mdi mdi-pinterest"></i></a>
                            </li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><i class="mdi mdi-twitter"></i></a>
                            </li>
                        </ul>
                        <p class="copyright_content mb-0 mt-3">
                            {{ new Date().getFullYear() }} &copy; SRBThemes. Design by
                            <a class="copyright_content" target="_blank" href="https://themeforest.net/user/SRBThemes">
                                SRBThemes.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <a href="#" class="back_top" variant="danger" @click="topFunction" id="back-to-top"> <i class="mdi mdi-chevron-up"> </i>
    </a>
</template>