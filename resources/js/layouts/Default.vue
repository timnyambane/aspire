<script setup>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import SideBar from "../components/SideBar.vue";
</script>

<template>
    <div class="flex flex-col">
        <Navbar class="w-screen" />

        <div class="flex flex-grow">
            <SideBar class="min-w-52 h-[calc(100vh-3rem)] overflow-y-auto" />
            <div
                class="flex flex-col flex-grow h-[calc(100vh-3rem)] overflow-auto"
            >
                <div class="flex-grow">
                    <slot />
                </div>
                <Footer class="" />
            </div>
        </div>
    </div>
</template>
