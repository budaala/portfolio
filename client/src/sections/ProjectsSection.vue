<script setup>
import fungeye from '@/assets/fungeye.png';
import beehyve from '@/assets/beehyve.jpg';

const projects = ref([
    {
        id: 1,
        title: '🍄‍🟫 FungEye',
        description: ["Developed the frontend of the project", "Implemented CRUD operations for managing data", "Managed authentication using JWT tokens", "Designed an intuitive and responsive user interface with attention to accessibility"],
        image: fungeye,
        link: 'https://github.com/Bakkonrad/FungEye',
        subtitle: 'MUSHROOM RECOGNITION APP',
        techStack: ['VueJS', 'Vuelidate', 'JavaScript', 'Bootstrap', 'HTML', 'CSS']
    },
    {
        id: 2,
        title: '🐝 Beehyve',
        description: ['Integrated live data retrieval and displayed it within the AR experience', 'Visualized temperature variations inside the hive, using color indicators to highlight areas with the highest bee activity', 'Designed interactive controls to toggle data visibility', 'Implemented charts to showcase measurement trends over time'],
        image: beehyve,
        link: 'https://www.plcnext-community.net/bee-projects/using-augmented-reality/',
        subtitle: 'AR BEE HIVE',
        techStack: ['AngularJS', 'VuforiaStudio', 'CSS']
    }
]);
import { ref } from 'vue';
import Project from '../components/Project.vue';
</script>

<template>
    <section id="projects">
        <div class="container">
            <h2>Notable <span class="highlight">
                    Projects
                </span></h2>
            <div class="flex flex-col mt-10">
                <Project v-for="(project, index) in projects" :key="project.id" :title="project.title"
                    :description="project.description" :image="project.image" :link="project.link"
                    :subtitle="project.subtitle" :techStack="project.techStack" :index="index" />
            </div>
        </div>
    </section>
</template>