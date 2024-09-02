<script setup>
import { usePage, Link } from "@inertiajs/vue3";
import { Icon } from "@iconify/vue/dist/iconify.js";

const appName = usePage().props.appName;
</script>

<template>
    <nav
        class="flex justify-between py-4 bg-white px-2 fixed top-0 left-0 right-0 z-50 shadow-md"
    >
        <div class="logo">
            <a :href="route('home')">{{ appName }}</a>
        </div>
        <div class="flex gap-4 mr-4">
            <Icon icon="flowbite:messages-solid" class="text-2xl" />
            <Icon icon="fluent:calendar-24-regular" class="text-2xl" />
            <Link :href="route('settings')"
                ><Icon icon="ic:round-settings" class="text-2xl"
            /></Link>
        </div>
    </nav>
</template>
