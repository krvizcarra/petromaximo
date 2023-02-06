<template>
    <Header />
    <main id="main">

        <!-- ======= Our Services Section ======= -->
        <section class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2></h2>
                    <ol>
                        <li><router-link :to="{ name: 'home' }">Inicio</router-link></li>
                        <li>Servicios</li>
                    </ol>
                </div>

            </div>
        </section><!-- End Our Services Section -->

        <!-- ======= Why Us Section ======= -->
        <section class="why-us" data-aos="fade-up" date-aos-delay="200">
            <div class="container">

                <div class="row">
                    <div class="col-lg-6 video-box">
                        <img src="assets/img/services/gasoline.jpg" class="img-fluid" alt="">
                        <!-- <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4"
                            data-vbtype="video" data-autoplay="true"></a> -->
                    </div>

                    <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

                        <div class="icon-box">
                            <div class="icon"><i class="bx bx-world"></i></div>
                            <p class="description">Comercializamos combustibles nacionales e importados. Por toda la
                                republica mexicana.</p>
                        </div>

                        <div class="icon-box">
                            <div class="icon"><i class="bx bx-gas-pump"></i></div>
                            <p class="description">Contamos con 2 modalidades: entregamos el producto hasta su patio o
                                estación
                                de servicio y libre abordo (LAB), usted mismo puede pasar a cargar el producto.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section><!-- End Why Us Section -->

        <!-- ======= Services Section ======= -->
        <section class="services section-bg">
            <div class="container">

                <div class="row">
                    <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
                        <div class="icon-box icon-box-pink">
                            <img src="assets/img/services/regular.jpg" alt="..." style="width: 100%;">
                            <!-- <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident</p> -->
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div class="icon-box icon-box-cyan">
                            <img src="assets/img/services/premium.jpg" alt="..." style="width: 100%;">
                            <!-- <div class="icon"><i class="bx bx-file"></i></div>
                            <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur</p> -->
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div class="icon-box icon-box-green">
                            <img src="assets/img/services/diesel.jpg" alt="..." style="width: 100%;">
                            <!-- <div class="icon"><i class="bx bx-tachometer"></i></div>
                            <h4 class="title"><a href="">Magni Dolores</a></h4>
                            <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum</p> -->
                        </div>
                    </div>

                    <!-- <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div class="icon-box icon-box-blue">
                            <div class="icon"><i class="bx bx-world"></i></div>
                            <h4 class="title"><a href="">Nemo Enim</a></h4>
                            <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                    </div> -->

                </div>

            </div>
        </section><!-- End Services Section -->


        <!-- ======= Service Details Section ======= -->
        <section class="service-details">
            <div class="container">

                <div class="row">
                    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                        <div class="card">
                            <div class="card-img">
                                <img src="assets/img/services/camion.jpg" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><a href="#">Libre a Bordo</a></h5>
                                <p class="card-text">Usted podrá pasar a cargar su producto,  
                                    reduciendo así el costo de adquisición del combustible. Optimizando su proceso de traslado y logística.</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                        <div class="card">
                            <div class="card-img">
                                <img src="assets/img/services/descargando.jpg" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><a href="#">Pusto en Sitio</a></h5>
                                <p class="card-text">Nosotros nos encargamos de toda la logística de entrega. Llegando en tiempo y forma con el producto,
                                     hasta su patio o estación de servicio.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                        <div class="card">
                            <div class="card-img">
                                <img src="assets/img/services/administracion.jpg" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><a href="#">Asesoria crediticia</a></h5>
                                <p class="card-text">Contamos con asesoría integral para la obtención crediticia,
                                    a través de una SOFOM, la cual brinda el respaldo capital para distribuir y
                                    administrar de mejor manera sus recursos.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                        <div class="card">
                            <div class="card-img">
                                <img src="assets/img/services/trabajo_gasolinera.jpg" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><a href="#">Capacitación a personal en estaciones de servicio</a>
                                </h5>
                                <p class="card-text"> Proporcionamos capacitación a personal de piso para mejorar la
                                    atención
                                    al cliente, aumentar la venta de aceites y aditivos, asi como mejorar la percepción
                                    de ingresos. </p>

                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                        <div class="card">
                            <div class="card-img">
                                <img src="assets/img/service-details-4.jpg" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><a href="#">Our Care</a></h5>
                                <p class="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam
                                    laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque
                                    ipsum officiis qui nihil aut incidunt aut</p>
                                <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
                            </div>
                        </div>
                    </div> -->
                </div>

            </div>
        </section><!-- End Service Details Section -->

        <!-- ======= Pricing Section ======= -->


    </main><!-- End #main -->

    <Footer />
</template>

<script>

import { defineAsyncComponent } from '@vue/runtime-core';
export default {

    components: {
        Header: defineAsyncComponent(() => import('../components/Header.vue')),
        Footer: defineAsyncComponent(() => import('../components/Footer.vue')),
    },
    mounted() {
        window.scrollTo(0, 0),
            document.title = 'PetroMaximo - Servicios'
    },

}
</script>

<style>

</style>