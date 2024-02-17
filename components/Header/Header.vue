<script setup></script>
<script>
export default {
    data() {
        return {
            isSticky: false,
        };
    },
    mounted() {
        const handleScroll = () => {
            const windowPosition = window.scrollY;

            if (windowPosition >= 200) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        // Clean up the event listener on a component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },
};
</script>
<template>
    <header
        :class="`${
            isSticky ? 'animation-nav  flex w-full max-w-full' : ''
        } h-[27dvh] w-full max-w-full md:h-auto`"
    >
        <NavBar />
    </header>
</template>
