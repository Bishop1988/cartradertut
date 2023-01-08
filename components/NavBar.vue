<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
    const {error} = await supabase.auth.signOut()
    try {
        await $fetch('/api/_supabase/session', {
            method: "POST",
            body: {event: "SIGNED_OUT", session: null}
        })
    } catch (err) {
        console.log(err)
    }

    user.value = null
    navigateTo('/')
}

</script>

<template>
    <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
        <NuxtLink to="/" class="text-3xl font-mono">carexchange</NuxtLink>
        <div class="flex items-center" v-if="user">
            <NuxtLink class="mr-5" to="/profile/listings">Profile</NuxtLink>
            <button @click="logout" >Logout</button>
            <NuxtImg v-if="user" class="rounded-full h-10 ml-5" :src="`${user.user_metadata.avatar_url}`" alt="" />
        </div>
        <NuxtLink v-else to="/login">Login</NuxtLink>
    </header>
</template>