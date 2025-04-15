<script setup>
import Technology from './Technology.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    },
    techStack: {
        type: Array,
        default: () => []
    },
    index: {
        type: Number,
        required: true
    }
});
</script>

<template>
    <div class="flex flex-col lg:flex-row justify-around gap-4 mb-15"
        :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'">
        <div class="project-image-container">
            <img :src="image" alt="Project image" class="project-image" />
        </div>
        <div class="project-content">
            <p class="subheader">{{ subtitle }}</p>
            <h3 class="mb-4">{{ title }}</h3>
            <ul class="space-y-3 mb-6 mr-6">
                <li v-for="desc in description" :key="desc">
                    <div class="leading-5">
                        <FontAwesomeIcon icon="fa-solid fa-caret-right" class="mr-2 bullet-point">
                        </FontAwesomeIcon>
                        {{ desc }}
                    </div>
                </li>
            </ul>
            <ul class="flex flex-wrap gap-3">
                <li v-for="tech in techStack" :key="tech">
                    <Technology :tech="tech"></Technology>
                </li>
            </ul>
            <a :href="link" target="_blank" class="btn btn-primary mt-4">
                <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" class="mr-2"></FontAwesomeIcon>
                View Project
            </a>
        </div>
    </div>
</template>