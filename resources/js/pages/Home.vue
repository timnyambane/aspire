<script setup>
import { Head, Link, usePage } from "@inertiajs/vue3";

const isLoggedIn = usePage().props.auth.user !== null;
</script>

<template>
    <Head title="Home" />
    <div class="">
        <nav class="flex py-4 items-center justify-between shadow px-4">
            <div class="logo">Logo</div>
            <div class="links">Links</div>
            <div class="logins flex gap-2">
                <Link v-if="isLoggedIn" :href="route('dashboard')"
                    >Dashboard</Link
                >

                <Link v-if="!isLoggedIn" :href="route('login')">Login</Link>
            </div>
        </nav>
        Home page
    </div>
</template>
