<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>

<template>
    <section id="contact">
        <div class="container mx-auto">
            <h2>Let's <span class="highlight">
                    get in touch
                </span></h2>
            <div class="flex flex-col md:flex-row gap-5 mt-10">
                <div class="w-1/2 md:w-1/2">
                    <h3 class="call-to-action">LOOKING FOR A DEVELOPER?</h3>
                    <p class="mb-10">I'm just one message away.</p>
                    <div class="flex flex-col gap-6">
                        <a class="contact-item" href="mailto:alicjabuda@protonmail.com">
                            <div class="contact-icon-container">
                                <FontAwesomeIcon icon="fa-solid fa-envelope" class="contact-icon" />
                            </div>
                            <div class="contact-details">
                                <h4 class="subheader">MAIL</h4>
                                <p>alicjabuda@protonmail.com</p>
                            </div>
                        </a>
                        <a class="contact-item" href="https://www.linkedin.com/in/budaalicja/" target="_blank">
                            <div class="contact-icon-container">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" class="contact-icon" />
                            </div>
                            <div class="contact-details">
                                <h4 class="subheader">LINKEDIN</h4>
                                <p>budaalicja</p>
                            </div>
                        </a>
                        <a class="contact-item" href="https://github.com/budaala" target="_blank">
                            <div class="contact-icon-container">
                                <FontAwesomeIcon icon="fa-brands fa-github" class="contact-icon" />
                            </div>
                            <div class="contact-details">
                                <h4 class="subheader">GITHUB</h4>
                                <p>budaala</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
</template>