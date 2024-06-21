<script setup>
import { Head, Link } from "@inertiajs/vue3";
import Unauthenticated from "../layouts/Unauthenticated.vue";

defineOptions({ layout: Unauthenticated });
</script>

<template>
    <Head title="Home" />
    <div class="flex items-center justify-between py-2 px-24 shadow">
        <div class="flex-1">
            <img src="../images/main-logo.svg" alt="Logo" class="h-8" />
        </div>
        <div class="flex-1 flex justify-center items-center">
            <ul class="flex gap-8">
                <Link to="" class="hover:text-sorbus-600">Features</Link>
                <Link to="" class="hover:text-sorbus-600">Pricing</Link>
                <Link to="" class="hover:text-sorbus-600">About</Link>
                <Link to="" class="hover:text-sorbus-600">Contact</Link>
            </ul>
        </div>
        <div class="flex-1 text-end">
            <Link :href="route('dashboard')"
                ><Button label="Dashboard" icon="ep:right"
            /></Link>
        </div>
    </div>
</template>
