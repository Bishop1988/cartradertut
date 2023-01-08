<script setup>
const route = useRoute()

const {data: car} = await useFetchCar(route.params.id)
const { toTitleCase } = useUtilities()

useHead({
    title: toTitleCase(route.params.name)
})

if (!car.value) {
    throw createError({
        statusCode: 404,
        message: `Car with ID of ${route.params.id} does not exsist`
    })
}

definePageMeta({
    layout: "custom"
})
</script>

<template>
    <div v-if="car">
        <CarDetailHero :car="car" />
        <CarDetailAttributes :features="car.features" />
        <CarDetailDescription :description="car.description" />
        <CarDetailContact />
    </div>
    <!-- <div v-else>

    </div> -->
</template>