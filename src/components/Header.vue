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
                    <li>
                        <button class="button" style="vertical-align:middle;margin-left: 20px;"><span>Portal clientes
                            </span></button>
                    </li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
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




}
</script>
<style>

</style>
