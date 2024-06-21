<script setup>
import { Link } from "@inertiajs/vue3";
</script>
<template>
    <nav class="flex items-center justify-between h-12 shadow px-10 bg-white">
        <Link :href="route('home')" class="logo">
            <img src="../images/main-logo.svg" alt="" class="h-8" />
        </Link>
        <div class="text">Text</div>
    </nav>
</template>
