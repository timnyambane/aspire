<script setup>
import { Head, Link, useForm, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const flashMessage = computed(() => usePage().props.flash.success);
const form = useForm({
    email: "",
    password: "",
    remember: false,
});

function login() {
    form.post(route("login.store"), {
        onFinish: () => {
            form.reset("password");
        },
    });
}

function handleSubmit(event) {
    event.preventDefault();
    login();
}
</script>

<template>
    <Head title="Login" />
    <div class="flex items-center justify-center h-screen w-screen">
        <div class="w-2/5 h-1/2 rounded-3xl bg-slate-200 shadow flex">
            <div class="flex-1 bg-slate-300 pt-4 flex flex-col items-center">
                <div class="flex-1 flex flex-col w-full items-center">
                    <img
                        src="https://cdn.dribbble.com/users/227808/screenshots/1746437/media/ac03a4b7efd77fcd1d690a48f2ecd120.gif"
                        alt=""
                        class="h-32"
                    />
                    <h1 class="font-bold text-xl m-2">Welcome</h1>
                    <h1 class="m-2">Enter your details to get logged in</h1>

                    <div v-if="flashMessage" class="alert alert-success">
                        {{ flashMessage }}
                    </div>

                    <!-- Form element to capture Enter key event -->
                    <form
                        @submit="handleSubmit"
                        class="w-full flex flex-col items-center"
                    >
                        <InputText
                            class="w-3/4 my-2"
                            type="email"
                            placeholder="E-mail"
                            v-model="form.email"
                        />
                        <!-- Display email error message -->
                        <div
                            v-if="form.errors.email"
                            class="text-red-600 text-sm mt-1"
                        >
                            {{ form.errors.email }}
                        </div>

                        <InputText
                            class="w-3/4 my-2"
                            type="password"
                            placeholder="Password"
                            v-model="form.password"
                        />
                        <!-- Display password error message -->
                        <div
                            v-if="form.errors.password"
                            class="text-red-600 text-sm mt-1"
                        >
                            {{ form.errors.password }}
                        </div>

                        <div class="flex items-center justify-start w-3/4 my-4">
                            <Checkbox
                                v-model="form.remember"
                                :binary="true"
                                id="remember"
                            />
                            <label for="remember" class="ml-2">
                                Remember Me
                            </label>
                        </div>

                        <Button class="w-3/4" label="Login" type="submit" />
                    </form>
                    <Link href="/" class="text-sm mt-4">Forgot Password?</Link>
                </div>

                <Link href="/" class="text-sm m-2 hover:text-white"
                    >Contact Support?</Link
                >
            </div>
            <div class="flex-1 bg-slate-100 flex flex-col items-center">
                Logo
            </div>
        </div>
    </div>
</template>
