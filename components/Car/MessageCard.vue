<script setup>
const props = defineProps({
    message: Object
})

const emits = defineEmits(['deleteClick'])
</script>

<template>
    <div class="shadow rounded overflow-hidden flex justify-between even:bg-gray-100">
        <div class="even:bg-gray-100 p-4">
            <h1 class="font-bold text-2xl">{{ message.name }}</h1>
            <p class="text-grey-700">{{ message.message }}</p>
            <div class="flex items-center mt-4">
                <p class="text-green-700 mr-10">{{ message.email }}</p>
                <p class="text-blue-500">{{ message.phone }}</p>
            </div>
        </div>
        <div class="p-3 flex">
            <p @click="emits('deleteClick', message.id)" class="text-red-400 cursor-pointer">Delete</p>
        </div>
    </div>
</template>