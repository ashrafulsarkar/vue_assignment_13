<script setup>
import { ref, computed, watch } from 'vue';

const user = ref({
    name: 'John Doe',
    profileImage: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
    email: 'john@example.com',
    birthdate: '1990-01-01',
    description: 'Lorem ipsum dolor sit amet.',
});

const userData = localStorage.getItem('userData');
if (userData) {
    user.value = JSON.parse(userData);
}

const birthYear = computed(() => {
    // Calculate birth year based on the birthdate
    const birthdateYear = new Date(user.value.birthdate).getFullYear();
    return birthdateYear;
});

const votingStatusMessage = computed(() => {
    // Check if the user is of legal voting age (18)
    const birthdateYear = new Date(user.value.birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const userAge = currentYear - birthdateYear;
    return userAge >= 18 ? 'Eligible for voting' : 'Not eligible for voting';
});


watch(user, (newUser) => {
    // Watch for changes in the user's birthdate and update the voting status message
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

        <!-- Display User Information -->
        <div>
            <img :src="user.profileImage" alt="Profile Image" />
            <div>Name: {{ user.name }}</div>
            <div>Email: {{ user.email }}</div>
            <div>Birthdate: {{ user.birthdate }}</div>
            <div>Description: {{ user.description }}</div>
        </div>  

        <!-- Computed Properties -->
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