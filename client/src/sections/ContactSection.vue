<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>

<template>
    <section id="contact">
        <div class="container">
            <h2>Let's <span class="highlight">
                    Get In Touch
                </span></h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                <div class="flex flex-col justify-center items-center">
                    <h3 class="call-to-action text-center">LOOKING FOR A DEVELOPER?</h3>
                    <p class="mb-10">I'm just one message away.</p>
                    <div class="flex flex-col lg:flex-row justify-center gap-6">
                        <a class="contact-item" href="mailto:alicjabuda@protonmail.com">
                            <div class="contact-icon-container">
                                <FontAwesomeIcon icon="fa-solid fa-envelope" class="contact-icon" />
                            </div>
                            <div class="contact-details">
                                <h4 class="subheader">MAIL</h4>
                            </div>
                        </a>
                        <a class="contact-item" href="https://www.linkedin.com/in/budaalicja/" target="_blank">
                            <div class="contact-icon-container">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" class="contact-icon" />
                            </div>
                            <div class="contact-details">
                                <h4 class="subheader">LINKEDIN</h4>
                            </div>
                        </a>
                        <a class="contact-item" href="https://github.com/budaala" target="_blank">
                            <div class="contact-icon-container">
                                <FontAwesomeIcon icon="fa-brands fa-github" class="contact-icon" />
                            </div>
                            <div class="contact-details">
                                <h4 class="subheader">GITHUB</h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
</template>