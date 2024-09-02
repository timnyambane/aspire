<script setup>
import { Icon } from "@iconify/vue";
import modules from "../Data/modules.js";
import { Link, usePage } from "@inertiajs/vue3";
</script>

<template>
    <aside class="rounded-md bg-white mx-2 p-2">
        <Link
            href="/dashboard"
            :class="{
                'bg-primary-100 font-bold': usePage().url === '/dashboard',
                'font-bold text-primary-600 flex items-center my-2 hover:bg-primary-100 p-1.5 duration-100 ease-in rounded': true,
            }"
        >
            <Icon icon="ic:round-dashboard" class="text-primary-800 mr-2" />
            <span>Dashboard</span>
        </Link>
        <div
            class="py-1 px-1 my-1"
            v-for="module in modules"
            :key="module.name"
        >
            <div class="font-bold text-primary-600 flex items-center">
                <Icon :icon="module.icon" class="text-primary-800 mr-2" />
                {{ module.name }}
            </div>
            <Link
                :href="subItem.route"
                :class="{
                    'bg-primary-100 font-bold': usePage().url === subItem.route,
                    'pl-4 py-1 flex gap-2 items-center hover:bg-primary-100 px-1 duration-100 ease-in rounded my-0.5': true,
                }"
                v-for="subItem in module.subItems"
                :key="subItem.route"
            >
                <span>{{ subItem.name }}</span>
            </Link>
        </div>
    </aside>
</template>
