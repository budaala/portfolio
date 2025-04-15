<script setup>
import CSharpIcon from '@/assets/tech/CSharp.svg';
import DOTNETIcon from '@/assets/tech/DOTNET.svg';
import JavaScriptIcon from '@/assets/tech/JavaScript.svg';
import VueJSIcon from '@/assets/tech/VueJS.svg';
import AngularJSIcon from '@/assets/tech/AngularJS.svg';
import BootstrapIcon from '@/assets/tech/Bootstrap.svg';
import CSSIcon from '@/assets/tech/CSS.svg';
import FigmaIcon from '@/assets/tech/Figma.svg';
import HTMLIcon from '@/assets/tech/HTML.svg';
import GitIcon from '@/assets/tech/Git.svg';
import GitHubIcon from '@/assets/tech/GitHub.svg';
import MSOfficeIcon from '@/assets/tech/MS Office.svg';
import MSSQLServerIcon from '@/assets/tech/MS SQL Server.svg';
import PlaywrightIcon from '@/assets/Playwright.svg';
import TailwindCSSIcon from '@/assets/tech/Tailwind CSS.svg';
import ViteIcon from '@/assets/tech/Vite.svg';
import VuforiaStudioIcon from '@/assets/tech/Vuforia Studio.svg';
import VuelidateIcon from '@/assets/tech/Vuelidate.svg';

const props = defineProps({
    tech: {
        type: String,
        required: true
    }
});

const techData = {
    CSharp: { name: 'C#', icon: CSharpIcon },
    DOTNET: { name: '.NET', icon: DOTNETIcon },
    JavaScript: { name: 'JavaScript', icon: JavaScriptIcon },
    VueJS: { name: 'Vue.js', icon: VueJSIcon },
    AngularJS: { name: 'AngularJS', icon: AngularJSIcon },
    Bootstrap: { name: 'Bootstrap', icon: BootstrapIcon },
    CSS: { name: 'CSS', icon: CSSIcon },
    Figma: { name: 'Figma', icon: FigmaIcon },
    HTML: { name: 'HTML', icon: HTMLIcon },
    Git: { name: 'Git', icon: GitIcon },
    GitHub: { name: 'GitHub', icon: GitHubIcon },
    MSOffice: { name: 'MS Office', icon: MSOfficeIcon },
    MSSQLServer: { name: 'MS SQL Server', icon: MSSQLServerIcon },
    Playwright: { name: 'Playwright', icon: PlaywrightIcon },
    TailwindCSS: { name: 'Tailwind CSS', icon: TailwindCSSIcon },
    Vite: { name: 'Vite', icon: ViteIcon },
    VuforiaStudio: { name: 'Vuforia Studio', icon: VuforiaStudioIcon },
    Vuelidate: { name: 'Vuelidate', icon: VuelidateIcon }
};
</script>

<template>
    <div class="technology">
        <div>
            <img :src="techData[tech].icon" :alt="techData[tech].name" class="h-4 w-auto" />
        </div>
        <div>
            {{ techData[tech].name }}
        </div>
    </div>
</template>