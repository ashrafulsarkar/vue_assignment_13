<script setup>
import { user } from '../store/store';

const saveChanges = () => {
    localStorage.setItem('userData', JSON.stringify(user.value));
    alert('Changes saved successfully.');
};

</script>

<template>
    <h1>Edit Details</h1>
    <form @submit.prevent="saveChanges">
            <div>
                <label>Name</label>
                <input v-model="user.name" />
            </div>
            <div>
                <label>Profile Image URL</label>
                <input v-model="user.profileImage" type="url" />
            </div>
            <div>
                <label>Email</label>
                <input v-model="user.email" type="email" />
            </div>
            <div>
                <label>Birthdate</label>
                <input v-model="user.birthdate" type="date" />
            </div>
            <div>
                <label>Description</label>
                <textarea v-model="user.description"></textarea>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
        <div>
            <router-link to="/">View Profile</router-link>
        </div>
</template>

<style scoped>
label{
    display: block;
    text-align: left;
}
input{
    display: block;
    width: 100%;
    box-sizing: border-box;
    height: 30px;
}
textarea{
    display: block;
    width: 100%;
    box-sizing: border-box;
}
button{
    margin-top: 10px;
}
a{
    margin-top: 20px;
    display: inline-block;
}
</style>