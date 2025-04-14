<script setup>
const props = defineProps({
    tech: {
        type: String,
        required: true
    }
});

const techName = {
    CSharp: 'C#',
    DOTNET: '.NET',
};
</script>

<template>
    <div class="technology">
        <div>
            <img :src="`src/assets/icons/${tech}.svg`" alt="Technology icon" class="h-4 w-auto" />
        </div>
        <div>
            {{ techName[tech] || tech }}
        </div>
    </div>
</template>