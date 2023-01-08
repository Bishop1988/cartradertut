<script setup>
definePageMeta({
    layout: "custom",
})

const route = useRoute()
const { data: messages } = useFetch(`/api/car/listings/${route.params.id}/message`)

const handleDelete = async (id) => {
    await $fetch(`/api/car/listings/${id}/message`, {
        method: "delete"
    })
    messages.value = messages.value.filter(message => message.id !== id)
}
</script>

<template>
    <div class="rounded shadow mt-20">
        <CarMessageCard
          v-for="message in messages"
          :key="message.id"
          :message="message"
          @delete-click="handleDelete"
        />
    </div>
</template>