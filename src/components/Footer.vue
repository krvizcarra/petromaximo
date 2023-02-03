<template>
    <!-- ======= Footer ======= -->
    <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-md-6 footer-links">
                        <h4>Enlaces</h4>
                        <ul>
                            <li><router-link :to="{ name: 'home' }">Inicio</router-link></li>
                            <li><router-link :to="{ name: 'about' }">Nosotros</router-link></li>
                            <li><router-link :to="{ name: 'about' }">Servicios</router-link></li>
                            <li><router-link :to="{ name: 'about' }">Clientes</router-link></li>
                        </ul>
                    </div>


                    <div class="col-lg-4 col-md-6 footer-contact">
                        <h4>Contactanos</h4>
                        <p>
                            <!-- A108 Adam Street <br>
                            New York, NY 535022<br>
                            United States <br><br> -->
                            <strong>Teléfono:</strong> +52 (667) 199 5808 <br>
                            <strong style="visibility: hidden;">Teléfono:</strong>  +52 (667) 375 4052<br>
                            <strong>Email:</strong> contacto@grupopetromaximo.com<br>
                        </p>

                    </div>

                    <div class="col-lg-4 col-md-6 footer-info">
                        <h3>PetroMaximo</h3>
                        <p>Comercializadora de hidrocarburos.</p>
                        <div class="social-links mt-3">
                            <!-- <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> -->
                            <a href="https://www.facebook.com/profile.php?id=100089340611799" target="_blank" class="facebook"><i
                                    class="bx bxl-facebook"></i></a>
                            <!-- <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a> -->
                            <a href="https://www.linkedin.com/in/grupo-petro-maximo/" target="_blank" class="linkedin"><i
                                    class="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                &copy; 2023 <strong><span>Petro Maximo</span></strong>. Todos los derechos reservados
            </div>
        </div>
    </footer><!-- End Footer -->
</template>


<script>

import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {

    data: function () {
        return {
            // isActive: currentRouteName()
        }
    },
    computed: {
        currentRouteName() {
            // return this.$route.name;
        }
    },


    setup() {

        const route = useRoute();

        /**
       * Easy selector helper function
       */
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all);
            if (selectEl) {
                if (all) {
                    selectEl.forEach((e) => e.addEventListener(type, listener));
                } else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };

        /**
         * Easy on scroll event listener
         */
        const onscroll = (el, listener) => {
            el.addEventListener("scroll", listener);
        };

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
            let header = select("#header");
            let offset = header.offsetHeight;

            if (!header.classList.contains("header-scrolled")) {
                offset -= 20;
            }

            let elementPos = select(el).offsetTop;
            window.scrollTo({
                top: elementPos - offset,
                behavior: "smooth",
            });
        };

        /**
         * Toggle .header-scrolled class to #header when page is scrolled
         */
        let selectHeader = select("#header");

        if (route.name == 'home') {
            selectHeader.classList.add("header-transparent");
            selectHeader.classList.remove("header-scrolled");

        } else {
            selectHeader.classList.add("header-scrolled");

        }
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add("header-scrolled");
                } else {
                    if (route.name == 'home') {
                        selectHeader.classList.remove("header-scrolled");
                    }
                }

            };
            window.addEventListener("load", headerScrolled);
            onscroll(document, headerScrolled);
        }

        /**
         * Back to top button
         */
        let backtotop = select(".back-to-top");
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add("active");
                } else {
                    backtotop.classList.remove("active");
                }
            };
            window.addEventListener("load", toggleBacktotop);
            onscroll(document, toggleBacktotop);
        }

        /**
         * Mobile nav toggle
         */
        on("click", ".mobile-nav-toggle", function (e) {
            select("#navbar").classList.toggle("navbar-mobile");
            this.classList.toggle("bi-list");
            this.classList.toggle("bi-x");
        });

        /**
         * Mobile nav dropdowns activate
         */
        on(
            "click",
            ".navbar .dropdown > a",
            function (e) {
                if (select("#navbar").classList.contains("navbar-mobile")) {
                    e.preventDefault();
                    this.nextElementSibling.classList.toggle("dropdown-active");
                }
            },
            true
        );

        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on(
            "click",
            ".scrollto",
            function (e) {
                if (select(this.hash)) {
                    e.preventDefault();

                    let navbar = select("#navbar");
                    if (navbar.classList.contains("navbar-mobile")) {
                        navbar.classList.remove("navbar-mobile");
                        let navbarToggle = select(".mobile-nav-toggle");
                        navbarToggle.classList.toggle("bi-list");
                        navbarToggle.classList.toggle("bi-x");
                    }
                    scrollto(this.hash);
                }
            },
            true
        );

        /**
         * Skills animation
         */
        let skilsContent = select(".skills-content");
        if (skilsContent) {
            new Waypoint({
                element: skilsContent,
                offset: "80%",
                handler: function (direction) {
                    let progress = select(".progress .progress-bar", true);
                    progress.forEach((el) => {
                        el.style.width = el.getAttribute("aria-valuenow") + "%";
                    });
                },
            });
        }

        /**
         * Testimonials slider
         */
        new Swiper(".testimonials-carousel", {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
        });

        /**
         * Porfolio isotope and filter
         */
        window.addEventListener("load", () => {
            let portfolioContainer = select(".portfolio-container");
            if (portfolioContainer) {
                let portfolioIsotope = new Isotope(portfolioContainer, {
                    itemSelector: ".portfolio-wrap",
                    layoutMode: "fitRows",
                });

                let portfolioFilters = select("#portfolio-flters li", true);

                on(
                    "click",
                    "#portfolio-flters li",
                    function (e) {
                        e.preventDefault();
                        portfolioFilters.forEach(function (el) {
                            el.classList.remove("filter-active");
                        });
                        this.classList.add("filter-active");

                        portfolioIsotope.arrange({
                            filter: this.getAttribute("data-filter"),
                        });
                        portfolioIsotope.on("arrangeComplete", function () {
                            AOS.refresh();
                        });
                    },
                    true
                );
            }
        });

        /**
         * Initiate portfolio lightbox
         */
        const portfolioLightbox = GLightbox({
            selector: ".portfolio-lightbox",
        });

        /**
         * Portfolio details slider
         */
        new Swiper(".portfolio-details-slider", {
            speed: 400,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
        });

        /**
         * Animation on scroll
         */
        window.addEventListener("load", () => {
            AOS.init({
                duration: 1000,
                easing: "ease-in-out",
                once: true,
                mirror: false,
            });
        });

        /**
         * Initiate Pure Counter
         */
        new PureCounter();
    }

}
</script>
