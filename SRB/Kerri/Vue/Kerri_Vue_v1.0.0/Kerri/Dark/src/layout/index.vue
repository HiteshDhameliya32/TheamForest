<script>
import Navbar from "@/components/Navbar.vue"
import About from "@/components/About.vue"
import Service from "@/components/Service.vue"
import Client from "@/components/Client.vue"
import Portfolio from "@/components/Portfolio.vue"
import Blog from "@/components/Blog.vue"
import Contact from "@/components/Contacts.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: "INDEX",
    components: {
        Navbar, About, Service, Client, Portfolio, Blog, Contact, Footer
    }
}
</script>

<template>
    <Navbar />
    <slot />
    <About />
    <Service />
    <Client />
    <Portfolio />
    <Blog />
    <Contact />
    <Footer />
</template> 