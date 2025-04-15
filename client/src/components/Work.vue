<script setup>
defineProps({
    position: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
});
</script>

<template>
    <div class="work-item" :class="index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'">
        <div>
            <img :src="icon" alt="Work icon" class="work-icon" />
        </div>
        <div>
            <h3 class="work-title">{{ position }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>