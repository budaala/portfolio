<script setup>
import Work from '../components/Work.vue';
import FullStackDeveloper from '@/assets/illustrations/FullStackDeveloper.svg';
import ARFrontendDeveloper from '@/assets/illustrations/ARFrontendDeveloper.svg';
import Intern from '@/assets/illustrations/Intern.svg';
import { ref } from 'vue';

const works = ref([
    {
        id: 1,
        position: 'Full Stack Developer',
        description: "Assisted in the development of a web app using Vue.js and Vuelidate. Created API endpoints in C# .NET and worked with MS SQL Server databases.",
        icon: FullStackDeveloper
    },
    {
        id: 2,
        position: 'AR Frontend Developer',
        description: "Developed AR experiences using Vuforia Studio and AngularJS, working with 3D models, live API data.",
        icon: ARFrontendDeveloper
    },
    {
        id: 3,
        position: 'Intern',
        description: "Learned the fundamentals of C# .NET, SQL and computer networks.",
        icon: Intern
    }
]);
</script>

<template>
    <section id="work" class="mt-20">
        <div class="container">
            <h2>Work <span class="highlight">Experience</span></h2>
            <div class="flex flex-wrap justify-center gap-3 mt-10" style="grid-auto-rows: 1fr;">
                <Work v-for="(work, index) in works" :position="work.position" :icon="work.icon"
                    :description="work.description" :index="index" />
            </div>
        </div>
    </section>
</template>