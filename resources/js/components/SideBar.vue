<script setup>
import modules from "../data/modules";
</script>
<template>
    <aside class="p-1">
        <div
            class="py-1 px-1 my-1"
            v-for="module in modules"
            :key="module.name"
        >
            <div class="font-bold text-primary-600">{{ module.name }}</div>
            <div
                class="ml-2 py-1 flex gap-2 items-center hover:bg-primary-100 px-1 duration-100 ease-in rounded"
                v-for="subItem in module.subItems"
                :key="subItem.route"
            >
                <Icon :icon="subItem.icon" class="text-primary-800" />
                <span>{{ subItem.name }}</span>
            </div>
        </div>
    </aside>
</template>
