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
    }
});
</script>

<template>
    <div class="work-item">
        <div class="w-1/3">
            <img :src="icon" alt="Work icon" class="work-icon" />
        </div>
        <div class="w-2/3 space-y-2">
            <h3 class="work-title">{{ position }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>