<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <footer class="mt-30 text-sm text-gray-400"
        style="background: linear-gradient(-180deg, #05041e 20%, #6320ee 230%);">
        <div class="max-w-6xl mx-auto px-4 pt-8 flex flex-row flex-wrap justify-between items-baseline sm:gap-4 pb-3">
            <div class="text-left">
                <p>Thanks for scrolling! <br> Hope you enjoyed my work 👋</p>
            </div>

            <a href="#top" class="btn btn-primary flex items-center justify-center cursor-pointer">
                <span class="hidden sm:inline">Back to top</span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-up" class="sm:ml-2 ml-0" />
            </a>
        </div>

        <div class="max-w-6xl mx-auto px-4 pb-8 text-xs text-gray-400">
            <hr class="border-gray-700 mb-4" />
            Copyright © Alicja Buda 2025
        </div>
    </footer>
</template>