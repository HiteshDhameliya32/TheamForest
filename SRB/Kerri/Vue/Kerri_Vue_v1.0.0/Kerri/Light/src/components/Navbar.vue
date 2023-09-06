<script>
export default {
    name: "NAVBAR",
    data() {
        return {
            isNavSticky: false,
            sections: ['home', 'about', 'services', 'client', 'portfolio', 'blog', 'contact'],
            activeSection: "home"
        };
    },
    mounted() {
        window.addEventListener('scroll', this.onWindowScroll);
        window.addEventListener('scroll', this.setActiveSection);
    },
    methods: {
        onWindowScroll() {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                this.isNavSticky = true;
            } else {
                this.isNavSticky = false;
            }
        },
        /**
         * Toggle menu
         */
        toggleMenu() {
            document.getElementById("navbarNav").classList.toggle("show");
        },
        setActiveSection() {
            const scrollY = window.scrollY;

            for (let i = this.sections.length - 1; i >= 0; i--) {
                const section = this.sections[i];
                const el = document.getElementById(section);
                if (el.offsetTop <= scrollY + 100) {
                    this.activeSection = section;
                    return;
                }
            }
        }
    },
    unmounted() {
        window.removeEventListener('scroll', this.onWindowScroll);
        window.removeEventListener('scroll', this.setActiveSection);
    },
}
</script>

<template>
    <BNav class="navbar navbar-expand-lg custom-nav fixed-top sticky" id="navbar" :class="{ 'stickyadd': isNavSticky }">
        <div class="container">
            <a class="navbar-brand pt-0 logo" href="#">
                <img src="@/assets/images/logo.png" alt="" class="img-fluid logo-light">
                <img src="@/assets/images/logo-dark.png" alt="" class="img-fluid logo-dark">
            </a>
            <button @click="toggleMenu" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="mdi mdi-menu"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto" id="main_nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#home" :class="{ 'active': activeSection == 'home' }">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about" :class="{ 'active': activeSection == 'about' }">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services" :class="{ 'active': activeSection == 'services' }">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#client" :class="{ 'active': activeSection == 'client' }">Client</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio"
                            :class="{ 'active': activeSection == 'portfolio' }">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#blog" :class="{ 'active': activeSection == 'blog' }">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact" :class="{ 'active': activeSection == 'contact' }">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </BNav>
</template>