<template>
  <Header />
  <main id="main">

    <!-- ======= About Us Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2></h2>
          <ol>
            <li><router-link :to="{ name: 'home' }">Inicio</router-link></li>
            <li>Nosotros</li>
          </ol>
        </div>

      </div>
    </section><!-- End About Us Section -->

    <!-- ======= About Section ======= -->
    <section class="about" data-aos="fade-up">
      <div class="container">

        <div class="row">
          <div class="col-lg-6">
            <img src="assets/img/about/img7.jpg" style="    width: -webkit-fill-available;" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>Grupo Petro Maximo</h3>
            <p class="fw-light">
              Somos una empresa joven y dinámica dedicada a la comercialización de Diésel enfocada al mercado nacional
              de autoconsumos y estaciones de servicio que otorga ideas nuevas con servicios de valor agregado,
              rompiendo
              los paradigmas de la comercialización tradicional bajo un modelo de negocio más humano y cercano a
              nuestros socios comerciales.
            </p>
            <ul>
              <li><i class=" bi bi-check2-circle"></i> Distribución.</li>
              <li><i class="bi bi-check2-circle"></i> Servicio.</li>
              <li><i class="bi bi-check2-circle"></i> Calidad.</li>
            </ul>
            <!-- <p class="fw-light">
              Es lo que nos Son los Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p> -->
          </div>
        </div>
        <h2 style="    
    position: fixed;    
    left: 50%;
    transform: translate(-50%, 230%);">Valores</h2>
      </div>

    </section><!-- End About Section -->

    <!-- ======= Services Section ======= -->
    <!-- <section class="services section-bg" style="padding-top:100px">
      <div class="container">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
            <div class="icon-box icon-box-pink">
              
              <div class="icon ">
                <img src="assets/img/about/responsabilidad.png" class="img-fluid img-val" alt="">
              
              </div>
              <h4 class="title"><a href="">Responsabilidad</a></h4>
              <p class="description"></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box icon-box-cyan">
              <div class="icon">
                <img src="assets/img/about/respeto.png" class="img-fluid img-val" alt="">
              </div>
              <h4 class="title"><a href="">Respeto</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-green">
              <div class="icon"><img src="assets/img/about/compromiso.png" class="img-fluid img-val" alt=""></div>
              <h4 class="title"><a href="">Compromiso</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-blue">
              <div class="icon"><img src="assets/img/about/humildad.png" class="img-fluid img-val" alt=""></div>
              <h4 class="title"><a href="">Humilda</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>

        </div>

      </div>
    </section> -->
    <!-- End Services Section -->

    <!-- ======= Why Us Section ======= -->
    <section class="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 video-box">
            <img src="assets/img/about/valores.jpg" class="img-fluid" alt="">
            <!-- <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video"
              data-autoplay="true"></a> -->
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

            <div class="icon-box">
              <div class="icon"><img src="assets/img/about/responsabilidad.png" class="img-fluid img-val" alt=""></div>
              <h4 class="title"><a href="">Responsabilidad</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div class="icon-box">
              <div class="icon"><img src="assets/img/about/respeto.png" class="img-fluid img-val" alt=""></div>
              <h4 class="title"><a href="">Respeto</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque</p>
            </div>

            <div class="icon-box">
              <div class="icon"><img src="assets/img/about/compromiso.png" class="img-fluid img-val" alt=""></div>
              <h4 class="title"><a href="">Compromiso</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque</p>
            </div>

            <div class="icon-box">
              <div class="icon"><img src="assets/img/about/humildad.png" class="img-fluid img-val" alt=""></div>
              <h4 class="title"><a href="">Humildad</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    <!-- End Why Us Section -->

    <!-- ======= Service Details Section ======= -->
    <section class="service-details">
      <div class="container">

        <div class="row">
          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div class="card">
              <div class="card-img">
                <img src="assets/img/about/Mision.jpg" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="#">Misión</a></h5>
                <p class="card-text text-justify">Somos un grupo de emprendedores con la filosofía de hacer el bien y
                  con la misión
                  de desarrollar un modelo de comercialización basado en el factor humano, con una oferta integral
                  única. Con la firme intención de crear un sano desarrollo en la industria de los hidrocarburos.
                  Aportando a la soberanía del país con la importación, comercialización y distribución a través de
                  todos los modelos de negocio.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div class="card">
              <div class="card-img">
                <img src="assets/img/about/Vision.jpg" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="#">Visión</a></h5>
                <p class="card-text text-justify">Nacimos con el deseo de ser un referente en México como fuerza
                  vinculadora. Con la potencia y empuje en nuestro ADN, para establecer un vínculo comercial con al
                  menos el 70% de la industria de los hidrocarburos en el país.</p>

              </div>
            </div>

          </div>


        </div>

      </div>
    </section><!-- End Service Details Section -->



  </main><!-- End #main -->

  <Footer />

</template>


<script>
import { mapState } from "vuex";
import { Icon } from '@iconify/vue';

import { defineAsyncComponent } from '@vue/runtime-core';
export default {

  components: {
    Header: defineAsyncComponent(() => import('../components/Header.vue')),
    Footer: defineAsyncComponent(() => import('../components/Footer.vue')),
    Icon,
  },
  mounted() {
    window.scrollTo(0, 0),
      document.title = 'PetroMaximo - Nosotros'

  },
  setup() {

    // /**
    //    * Easy selector helper function
    //    */
    const select = (el, all = false) => {
      el = el.trim();
      console.log('Entro');
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };


    // /**
    //  * Easy event listener function
    //  */
    // const on = (type, el, listener, all = false) => {
    //   let selectEl = select(el, all);
    //   if (selectEl) {
    //     if (all) {
    //       selectEl.forEach((e) => e.addEventListener(type, listener));
    //     } else {
    //       selectEl.addEventListener(type, listener);
    //     }
    //   }
    // };

    // /**
    //  * Easy on scroll event listener
    //  */
    // const onscroll = (el, listener) => {
    //   el.addEventListener("scroll", listener);
    // };

    // /**
    //  * Scrolls to an element with header offset
    //  */
    // const scrollto = (el) => {
    //   let header = select("#header");
    //   let offset = header.offsetHeight;

    //   if (!header.classList.contains("header-scrolled")) {
    //     offset -= 20;
    //   }
    //   console.log('entro');
    //   let elementPos = select(el).offsetTop;
    //   window.scrollTo({
    //     top: elementPos - offset,
    //     behavior: "smooth",
    //   });
    // };

    // let selectHeader = select("#header");
    // console.log(selectHeader);

  }
}
</script>
