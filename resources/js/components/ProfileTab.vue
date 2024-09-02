<script setup>
defineProps({
    user: Object,
});
</script>

<template>
    <div class="rounded-md flex items-center gap-2 p-1 bg-white">
        <div
            class="icon size-10 rounded-full bg-slate-900 flex items-center justify-center"
        >
            Icon
        </div>
        <div class="name flex-grow flex flex-col">
            <h1>{{ user.name }}</h1>
            <h1>{{ user.email }}</h1>
        </div>
    </div>
</template>
