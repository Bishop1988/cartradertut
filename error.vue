<script setup>
const error = useError()

const handleError = () => {
    clearError({
        redirect: "/"
    })
}
</script>

<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl">{{ error.statusCode }}</h1>
        <p class="mt-7 text-4xl">{{ error.message }}</p>
        <button @click="handleError" class="bg-sky-500 px-5 py-2 rounded-md text-white mt-3 text-2xl">
            Go Back
        </button>
    </div>
</template>