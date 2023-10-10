import {ref, reactive} from 'vue'
import router from '../router/router'

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

export {user}