<script setup>
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";

defineOptions({ layout: AuthenticatedLayout });
</script>

<template>
    <Head title="Dashboard" />
    <div class="flex">
        <h1>Dashboard</h1>
    </div>
</template>
