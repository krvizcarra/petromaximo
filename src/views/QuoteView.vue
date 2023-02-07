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
                                    <select class="form-select form-control" v-model="formulario.producto">
                                        <option selected disabled>Producto</option>
                                        <option value="Regular 87 Oct">Regular 87 Oct</option>
                                        <option value="Premium 91 Oct">Premium 91 Oct</option>
                                        <option value="Diesel Automotriz">Diesel Automotriz</option>
                                    </select>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="name" class="form-control" id="name"
                                        placeholder="Volumen requerido" required v-model="formulario.volumen">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="name" class="form-control" id="name"
                                        placeholder="Precio solicitado" required v-model="formulario.precio">
                                </div>
                                <div class="col-md-3 form-group">
                                    <select class="form-select form-control" v-model="formulario.frecuencia">
                                        <option selected disabled>Frecuencia</option>
                                        <option value="Diario">Diario</option>
                                        <option value="Semanal">Semanal</option>
                                        <option value="Mensual">Mensual</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4 form-group">
                                    <select class="form-select form-control" @change="selecccionarMunicipios($event)" v-model="formulario.estado">
                                        <option selected disabled>Estado</option>
                                        <option :value="item.Nombre"
                                                 v-for="item in estados"
                                                 >{{ item.Nombre }}</option>
                                    </select>
                                </div>
                                <div class="col-md-4 form-group">
                                    <select class="form-select form-control" v-model="formulario.municipio">
                                        <option selected disabled>Municipio</option>
                                        <option :value="item?.Nombre" v-for="item in municipios">{{ item?.Nombre }}</option>
                                    </select>
                                </div>
                                <div class="col-md-4 form-group">
                                    <select class="form-select form-control" v-model="formulario.tipo">
                                        <option selected disabled>Tipo de empresa</option>
                                        <option value="Estación de servicio">Estación de servicio</option>
                                        <option value="Grupo de estaciones (Mas de 5)">Grupo de estaciones (Mas de 5)</option>
                                        <option value="Autoconsumo">Autoconsumo</option>
                                        <option value="Comercializador">Comercializador</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mt-3">

                                <div class="col-md-12 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" v-model="formulario.nombre"
                                        required>
                                </div>

                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Telefono" v-model="formulario.telefono"
                                        required>
                                </div>

                                <div class="col-md-4 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Correo" v-model="formulario.correo"
                                        required>
                                </div>
                                <div class="col-md-4 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Puesto" v-model="formulario.puesto"
                                        required>
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" v-model="formulario.mensaje"
                                    required></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>

                            <div class="text-center">
                                <button :disabled="enviar" @click="enviarCorreo($event)" type="submit">Enviar
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="enviar"></span>
                                </button>
                            </div>
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
import axios from 'axios';
import Swal from 'sweetalert2';
import Municipios from './municipios.json';
import Estados from './estados.json'



export default {

    components: {
        Header: defineAsyncComponent(() => import('../components/Header.vue')),
        Footer: defineAsyncComponent(() => import('../components/Footer.vue')),
    },
    data() {
        return {
            enviar: false,
            estados: Estados,
            municipios: [],
            formulario :{
                producto: undefined,
                volumen: undefined,
                precio: undefined,
                frecuencia: undefined,
                tipo: undefined,
                nombre: undefined,
                telefono: undefined,
                correo: undefined,
                puesto: undefined,
                mensaje: undefined,
                estado:undefined,
                municipio: undefined
            }
        }
    },
    mounted() {
        window.scrollTo(0, 0),
            document.title = 'PetroMaximo - Cotizar'
    },
    methods:{
        selecccionarMunicipios (evento) {
            const estadoId = evento.target.value;
            this.municipios = [];
             Municipios.forEach(item =>{
                if (item?.EntidadFederativa?.Nombre === estadoId) {
                    this.municipios.push(item);
                }
            });
        },

        async enviarCorreo(evento) {
            evento.preventDefault();
            // console.log(this.formulario);
            for (const property in this.formulario) {
                if (!this.formulario[property]) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Todos los campos son requeridos.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
            }
            this.enviar = true;

          
            axios.post('http://grupopetromaximo.com:3000/api/correos/enviar',{
                "destinatario": "contacto.petromaximo@gmail.com",
                "asunto": `Cotización pagina: ${this.formulario.nombre}`,
                "template": `<table border="1">
                                <tbody>
                                    <tr>
                                        <td>Producto</td>
                                        <td>${this.formulario.producto}</td>
                                    </tr>
                                    <tr>
                                        <td>Volumen</td>
                                        <td>${this.formulario.volumen}</td>
                                    </tr>
                                    <tr>
                                        <td>Precio</td>
                                        <td>${this.formulario.precio}</td>
                                    </tr>
                                    <tr>
                                        <td>Frecuencia</td>
                                        <td>${this.formulario.frecuencia}</td>
                                    </tr>
                                    <tr>
                                        <td>Estado</td>
                                        <td>${this.formulario.estado}</td>
                                    </tr>
                                    <tr>
                                        <td>Municipio</td>
                                        <td>${this.formulario.municipio}</td>
                                    </tr>
                                    <tr>
                                        <td>Tipo Empresa</td>
                                        <td>${this.formulario.tipo}</td>
                                    </tr>
                                    <tr>
                                        <td>Nombre</td>
                                        <td>${this.formulario.nombre}</td>
                                    </tr>
                                    <tr>
                                        <td>Telefono</td>
                                        <td>${this.formulario.telefono}</td>
                                    </tr>
                                    <tr>
                                        <td>Correo</td>
                                        <td>${this.formulario.correo}</td>
                                    </tr>

                                    <tr>
                                        <td>Puesto</td>
                                        <td>${this.formulario.puesto}</td>
                                    </tr>
                                    <tr>
                                        <td>Mensaje</td>
                                        <td>${this.formulario.mensaje}</td>
                                    </tr>
                                </tbody>
                            </table>`,
                // "formulario": this.formulario
            }).then((res) => {
                this.enviar = false;
                //limpiar form
                for (const property in this.formulario) {
                    this.formulario[property] = undefined;
                }

                Swal.fire({
                    title: 'Exito!',
                    text: 'Correo enviado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }).catch((err)=>{
                this.enviar = false;
                Swal.fire({
                    title: 'Error!',
                    text: 'Error al enviar correo, intente de nuevo más tarde.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            });
            
        },
    }

}
</script>

<style>

</style>