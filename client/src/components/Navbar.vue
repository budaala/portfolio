<template>
    <nav class="flex items-center justify-center px-8 py-4 w-[92%] mx-auto text-white gap-[4vw]">
        <div class="hidden md:inline">
            <img class="w-16" src="@/assets/logo.svg" alt="logo"></img>
        </div>
        <div class="navbar">
            <ul class="flex gap-[4vw]">
                <li>
                    <a href="#about" class="navbar-item">
                        <span class="inline sm:hidden">
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                        </span>
                        <span class="hidden sm:inline">about</span>
                    </a>
                </li>
                <li>
                    <a href="#projects" class="navbar-item">
                        <span class="inline sm:hidden">
                            <FontAwesomeIcon icon="fa-solid fa-code" />
                        </span>
                        <span class="hidden sm:inline">projects</span>
                    </a>
                </li>
                <li>
                    <a href="#work" class="navbar-item">
                        <span class="inline sm:hidden">
                            <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                        </span>
                        <span class="hidden sm:inline">work</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" class="navbar-item">
                        <span class="inline sm:hidden">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        </span>
                        <span class="hidden sm:inline">contact</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>