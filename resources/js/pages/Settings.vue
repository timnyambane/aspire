<script setup>
import { Head } from "@inertiajs/vue3";
import Navbar from "../Components/Navbar.vue";
import Footer from "../Components/Footer.vue";
</script>

<template>
    <Head title="Settings" />
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <div class="flex flex-col flex-grow mt-14">
            <div class="flex-grow">Settings</div>
            <Footer />
        </div>
    </div>
</template>
