<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Hero from './sections/HeroSection.vue';
import Projects from './sections/ProjectsSection.vue';
import Work from './sections/WorkSection.vue';
import TechStack from './sections/TechStackSection.vue';
import Contact from './sections/ContactSection.vue';
</script>

<template>
  <!-- <div class="background-blob top-[0%] left-[0%] "></div>
  <div class="background-blob top-[150%] sm:top-[70%] right-[0%] bg-secondary"></div>
  <div class="background-blob top-[250%] sm:top-[150%] left-[0%]"></div>
  <div class="background-blob top-[350%] sm:top-[200%] right-[0%] bg-secondary "></div>
  <div class="background-blob top-[450%] sm:top-[230%] left-[0%] z-0"></div>
  <div class="background-blob top-[550%] sm:top-[300%] right-[0%] bg-secondary md:hidden"></div>
  <div class="background-blob top-[650%] sm:top-[400%] left-[0%] min-400-hidden z-0"></div>
  <div class="background-blob top-[750%] sm:top-[400%] right-[0%] min-400-hidden z-0"></div> -->
  <div id="scroll-blob-1" class="scroll-blob scroll-blob-1"></div>
  <div id="scroll-blob-2" class="scroll-blob scroll-blob-2"></div>
  <Navbar />
  <Hero />
  <Projects />
  <Work />
  <TechStack />
  <Contact />
  <Footer />
</template>
