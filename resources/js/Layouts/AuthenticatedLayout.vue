<script setup>
import { usePage } from "@inertiajs/vue3";
import Navbar from "../Components/Navbar.vue";
import ProfileTab from "../Components/ProfileTab.vue";
import Sidebar from "../Components/Sidebar.vue";
import Footer from "../Components/Footer.vue";

const user = usePage().props.auth.user;
</script>

<template>
    <div class="flex flex-col bg-slate-100 h-screen">
        <Navbar />

        <div class="flex pt-[4rem]">
            <div class="flex flex-col fixed top-[4rem]">
                <Sidebar
                    class="min-w-60 h-[calc(100vh-8.5rem)] overflow-y-auto custom-scrollbar"
                />
                <div class="h-14 mt-2 min-w-60 z-40">
                    <ProfileTab :user="user" class="mx-2" />
                </div>
            </div>
            <div
                class="flex flex-col fixed top-[4rem] right-0 left-[calc(16rem)] bottom-0 overflow-y-auto custom-scrollbar"
            >
                <div class="flex-grow p-2 rounded-md mb-2">
                    <slot />
                </div>
                <Footer class="rounded-md p-1 mb-2" />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom scrollbar styles */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #555454;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}
</style>
