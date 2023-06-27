<template>
    <form v-on:submit="loginSession">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return{
            username: "",
            password: ""
        }
    },
    methods: {
        loginSession() {
            fetch("http://localhost:5000/login-form", {
                method: "POST",
                headers: {
                    "Content-Type": "applications/json"
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                })
            });
        }
    }
}
</script>