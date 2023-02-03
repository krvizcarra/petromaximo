<template>
    <Header />
    <main id="main">

        <!-- ======= Contact Section ======= -->
        <section class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Cotizaciones</h2>
                    <ol>
                        <li><router-link :to="{ name: 'home' }">Inicio</router-link></li>
                        <li>Cotizar</li>
                    </ol>
                </div>

            </div>
        </section><!-- End Contact Section -->

        <!-- ======= Contact Section ======= -->
        <section class="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
            <div class="container">

                <div class="row">

                    <!-- <div class="col-lg-6">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="info-box">
                                    <i class="bx bx-map"></i>
                                    <h3>Our Address</h3>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-box">
                                    <i class="bx bx-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>info@example.com<br>contact@example.com</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-box">
                                    <i class="bx bx-phone-call"></i>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55<br>+1 6678 254445 41</p>
                                </div>
                            </div>
                        </div>

                    </div> -->

                    <div class="col-lg-12">
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                            <div class="row">
                                <div class="col-md-3 form-group">
                                    <select class="form-select form-control">
                                        <option selected disabled>Producto</option>
                                        <option value="1">Regular 87 Oct</option>
                                        <option value="2">Premium 91 Oct</option>
                                        <option value="3">Diesel Automotriz</option>
                                    </select>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="name" class="form-control" id="name"
                                        placeholder="Volumen requerido" required>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="name" class="form-control" id="name"
                                        placeholder="Precio solicitado" required>
                                </div>
                                <div class="col-md-3 form-group">
                                    <select class="form-select form-control">
                                        <option selected disabled>Frecuencia</option>
                                        <option value="1">Diario</option>
                                        <option value="2">Semanal</option>
                                        <option value="3">Mensual</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4 form-group">
                                    <select class="form-select form-control">
                                        <option selected disabled>Estado</option>
                                        <option value="1">Aguascalientes</option>
                                        <option value="2">Baja California Sur</option>
                                        <option value="3">Baja California</option>
                                        <option value="4">Campeche</option>
                                        <option value="5">Chiapas</option>
                                        <option value="6">Chihuahua</option>
                                        <option value="7">Ciudad de México</option>
                                        <option value="8">Coahuila de Zaragoza</option>
                                        <option value="9">Colima</option>
                                        <option value="10">Durango</option>
                                        <option value="11">Guanajuato</option>
                                        <option value="12">Guerrero</option>
                                        <option value="13">Hidalgo</option>
                                        <option value="14">Jalisco</option>
                                        <option value="15">México</option>
                                        <option value="16">Michoacán de Ocampo</option>
                                        <option value="17">Morelos</option>
                                        <option value="18">Nayarit</option>
                                        <option value="19">Nuevo León</option>
                                        <option value="20">Oaxaca</option>
                                        <option value="21">Puebla</option>
                                        <option value="22">Querétaro</option>
                                        <option value="23">Quintana Roo</option>
                                        <option value="24">San Luis Potosí</option>
                                        <option value="25">Sinaloa</option>
                                        <option value="26">Sonora</option>
                                        <option value="27">Tabasco</option>
                                        <option value="28">Tamaulipas</option>
                                        <option value="29">Tlaxcala</option>
                                        <option value="30">Veracruz de Ignacio de la Llave</option>
                                        <option value="31">Yucatán</option>
                                        <option value="32">Zacatecas</option>

                                    </select>
                                </div>
                                <div class="col-md-4 form-group">
                                    <select class="form-select form-control">
                                        <option selected disabled>Municipio</option>
                                        <option value="1">Cargar municipios segun estado</option>
                                    </select>
                                </div>
                                <div class="col-md-4 form-group">
                                    <select class="form-select form-control">
                                        <option selected disabled>Tipo de empresa</option>
                                        <option value="1">Estación de servicio</option>
                                        <option value="2">Grupo de estaciones (Mas de 5)</option>
                                        <option value="3">Autoconsumo</option>
                                        <option value="4">Comercializador</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mt-3">

                                <div class="col-md-12 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Nombre"
                                        required>
                                </div>

                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Telefono"
                                        required>
                                </div>

                                <div class="col-md-4 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Correo"
                                        required>
                                </div>
                                <div class="col-md-4 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Puesto"
                                        required>
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <textarea class="form-control" name="message" rows="5" placeholder="Mensaje"
                                    required></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div class="text-center"><button :disabled="enviar" v-on:click="enviarCorreo()" type="submit">Enviar</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section><!-- End Contact Section -->


    </main><!-- End #main -->
    <Footer />

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import axios from 'axios'

export default {

    components: {
        Header: defineAsyncComponent(() => import('../components/Header.vue')),
        Footer: defineAsyncComponent(() => import('../components/Footer.vue')),
    },
    data() {
        return {
            enviar: false
        }
    },
    mounted() {
        window.scrollTo(0, 0),
            document.title = 'PetroMaximo - Cotizar'
    },
    methods:{
        async enviarCorreo() {
            this.enviar = true;
            
            const response = await axios.post('http://localhost/api/correos/enviar',{
                
            })
            this.enviar = false;

            console.log(response);
            // this.catFacts = catFactsResponse.data
        },
    }

}
</script>

<style>

</style>