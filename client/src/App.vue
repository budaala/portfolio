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
