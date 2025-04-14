<script setup>
import { ref, watch } from 'vue'

const form = ref({
    name: '',
    email: '',
    message: '',
})

const errors = ref({
    name: '',
    email: '',
    message: '',
})

const touched = ref({
    name: false,
    email: false,
    message: false,
})

watch(
    () => form.value,
    (newValue) => {
        if (touched.value.name && !newValue.name.trim()) {
            errors.value.name = 'Name is required.'
        } else {
            errors.value.name = ''
        }

        if (touched.value.email && !newValue.email.trim()) {
            errors.value.email = 'Email is required.'
        } else if (touched.value.email && !/\S+@\S+\.\S+/.test(newValue.email)) {
            errors.value.email = 'Email is invalid.'
        } else {
            errors.value.email = ''
        }

        if (touched.value.message && !newValue.message.trim()) {
            errors.value.message = 'Message is required.'
        } else {
            errors.value.message = ''
        }
    },
    { deep: true }
)

const validateForm = () => {
    let valid = true
    errors.value = {
        name: '',
        email: '',
        message: '',
    }
    if (!form.value.name.trim()) {
        errors.value.name = 'Name is required.'
        valid = false
    }
    if (!form.value.email.trim()) {
        errors.value.email = 'Email is required.'
        valid = false
    } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.value.email = 'Email is invalid.'
        valid = false
    }
    if (!form.value.message.trim()) {
        errors.value.message = 'Message is required.'
        valid = false
    }
    return valid
}

const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
    if (!validateForm()) {
        return
    }
    try {
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form.value),
        })

        if (!response.ok) {
            throw new Error('Failed to send message.')
        }

        successMessage.value = 'Message sent successfully!'
        form.value = {
            name: '',
            email: '',
            message: '',
        }
        touched.value = {
            name: false,
            email: false,
            message: false,
        }
        errors.value = {
            name: '',
            email: '',
            message: '',
        }
        setTimeout(() => {
            successMessage.value = ''
        }, 5000)
    } catch (error) {
        errorMessage.value = 'There was a problem sending your message.'
        console.error(error)
    }
}
</script>

<template>
    <form @submit.prevent="submitForm" class="space-y-6">
        <div>
            <label for="name" class="input-label">Name</label>
            <input v-model="form.name" @blur="touched.name = true" id="name" class="input-field"
                :class="{ 'invalid-input': errors.name }" />
            <p v-if="errors.name" class="invalid-input-message">{{ errors.name }}</p>
        </div>

        <div>
            <label for="email" class="input-label">Email</label>
            <input v-model="form.email" @blur="touched.email = true" id="email" class="input-field"
                :class="{ 'invalid-input': errors.email }" />
            <p v-if="errors.email" class="invalid-input-message">{{ errors.email }}</p>
        </div>

        <div>
            <label for="message" class="input-label">Message</label>
            <textarea v-model="form.message" @blur="touched.message = true" id="message" rows="5"
                class="input-field h-full" :class="{ 'invalid-input': errors.message }"></textarea>
            <p v-if="errors.message" class="invalid-input-message">{{ errors.message }}</p>
        </div>

        <p v-if="errorMessage" class="invalid-input-message">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        <button type="submit" class="btn btn-secondary w-full cursor-pointer">
            Send Message
        </button>
    </form>

</template>