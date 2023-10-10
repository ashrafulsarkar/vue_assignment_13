<script setup>
import { computed, watch } from 'vue';
import { user } from '../store/store';

const birthYear = computed(() => {
    const birthdateYear = new Date(user.value.birthdate).getFullYear();
    return birthdateYear;
});

const votingStatusMessage = computed(() => {
    const birthdateYear = new Date(user.value.birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const userAge = currentYear - birthdateYear;
    return userAge >= 18 ? 'Eligible for voting' : 'Not eligible for voting';
});


watch(user, (newUser) => {
    const birthdateYear = new Date(newUser.birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const userAge = currentYear - birthdateYear;
    votingStatusMessage.value =
        userAge >= 18 ? 'Eligible for voting' : 'Not eligible for voting';
});
</script>

<template>
    <div>
        <h1>User Details</h1>

        <div>
            <img :src="user.profileImage" alt="Profile Image" />
            <div>Name: {{ user.name }}</div>
            <div>Email: {{ user.email }}</div>
            <div>Birthdate: {{ user.birthdate }}</div>
            <div>Description: {{ user.description }}</div>
        </div>
        <div>
            <p>Birth Year: {{ birthYear }}</p>
            <p>{{ votingStatusMessage }}</p>
        </div>
        <div>
            <router-link to="/edit">Edit</router-link>
        </div>
    </div>
</template>

<style scoped>
img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
p{
    margin: 0;
}
</style>