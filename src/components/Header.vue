<template>
    <header id="header" class="fixed-top d-flex align-items-center ">
        <div class="container d-flex justify-content-between align-items-center">

            <div class="logo">
                <!-- <h1 class="text-light"><a href="index.html"><span>Moderna</span></a></h1> -->
                <!-- Uncomment below if you prefer to use an image logo -->
                <a href="index.html"><img src="assets/img/logopm.png" alt="" class="img-fluid"></a>
                <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->
            </div>

            <nav id="navbar" class="navbar">
                <ul>
                    <li><router-link :to="{ name: 'home' }">Inicio</router-link></li>
                    <li><router-link :to="{ name: 'about' }">Nosotros</router-link></li>
                    <li><router-link :to="{ name: 'services' }">Servicios</router-link></li>
                    <li><router-link :to="{ name: 'quote' }">Cotizar</router-link></li>
                    <li><button class="button" style="vertical-align:middle;margin-left: 20px;"><span>Portal clientes
                            </span></button></li>
                </ul>
                <!-- <router-link :to="{ name: 'home' }">Inicio</router-link>
        <router-link :to="{ name: 'about' }">Nosotros</router-link>
        <router-link :to="{ name: 'about' }">Servicios</router-link>
        <router-link :to="{ name: 'about' }">Clientes</router-link>
        <button type="button" class="btn btn-outline-info">Info</button> -->

            </nav><!-- .navbar -->

        </div>
    </header>
</template>

<script>
export default {
    data: function () {
        return {

        }
    },
    computed: {
        currentRouteName() {
            // return this.$route.name;
        }
    },


    // setup() {
    //         /**
    //    * Easy selector helper function
    //    */
    //         const select = (el, all = false) => {
    //             el = el.trim();
    //             if (all) {
    //                 return [...document.querySelectorAll(el)];
    //             } else {
    //                 return document.querySelector(el);
    //             }
    //         };

    //         /**
    //          * Easy event listener function
    //          */
    //         const on = (type, el, listener, all = false) => {
    //             let selectEl = select(el, all);
    //             if (selectEl) {
    //                 if (all) {
    //                     selectEl.forEach((e) => e.addEventListener(type, listener));
    //                 } else {
    //                     selectEl.addEventListener(type, listener);
    //                 }
    //             }
    //         };

    //         /**
    //          * Easy on scroll event listener
    //          */
    //         const onscroll = (el, listener) => {
    //             el.addEventListener("scroll", listener);
    //         };

    //         /**
    //          * Scrolls to an element with header offset
    //          */
    //         const scrollto = (el) => {
    //             let header = select("#header");
    //             let offset = header.offsetHeight;

    //             if (!header.classList.contains("header-scrolled")) {
    //                 offset -= 20;
    //             }

    //             let elementPos = select(el).offsetTop;
    //             window.scrollTo({
    //                 top: elementPos - offset,
    //                 behavior: "smooth",
    //             });
    //         };

    //         /**
    //          * Toggle .header-scrolled class to #header when page is scrolled
    //          */
    //         let selectHeader = select("#header");
    //         selectHeader.classList.add("header-transparent");
    //         if (selectHeader) {
    //             const headerScrolled = () => {
    //                 if (window.scrollY > 100) {
    //                     selectHeader.classList.add("header-scrolled");
    //                 } else {
    //                     selectHeader.classList.remove("header-scrolled");
    //                 }

    //             };
    //             window.addEventListener("load", headerScrolled);
    //             onscroll(document, headerScrolled);
    //         }
    //     }

}
</script>
<style>

</style>
