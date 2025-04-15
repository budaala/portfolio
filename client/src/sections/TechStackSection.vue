<script setup>
import Technology from '../components/Technology.vue';
import { ref } from 'vue';
const techStack = ref([
    'VueJS',
    'Vuelidate',
    'JavaScript',
    'Bootstrap',
    'HTML',
    'CSS',
    'AngularJS',
    'VuforiaStudio',
    'CSharp',
    'DOTNET',
    'MSSQLServer',
    'Figma',
    'Git',
    'GitHub',
    'MSOffice',
    'Playwright',
    'Vite',
    'TailwindCSS'
]);
</script>

<template>
    <section id="tech-stack" class="mt-20">
        <div class="container">
            <h2><span class="highlight">Tech</span> Stack</h2>
            <div class="flex flex-wrap justify-center mx-auto space-x-3 space-y-3 mt-10 w-[80%]">
                <Technology v-for="tech in techStack" :key="tech" :tech="tech"></Technology>
            </div>
        </div>
    </section>
</template>