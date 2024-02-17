<script setup>
const API_URL =
    "https://innova.products.aait-d.com/api/website/home?guest_token=ZZoEhLlFeEs6rSh9UT9nUFgVgLgR762J1VJJcpZu9wYVdqtDtzSvFAewKcMgNFD2";

async function getCategories() {
    try {
        const res = await fetch(`${API_URL}`);

        // fetch won't throw error on 400 errors (e.g., when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
        if (!res.ok) return;

        const { data } = await res.json();
        const categoryData = data.filter(
            (item) => item.type === "main_categories",
        );
        const imageCategory = categoryData.map((item) =>
            item.content.map((raw) => raw),
        );
        const singleRawOfCategory = imageCategory[0].map((item) => item);
        return singleRawOfCategory;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return "Error fetching categories";
    }
}
const mainCategoryRaw = await getCategories();
const swiperConfig = {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
        },
    },
};
</script>
<script>
export default {
    data() {
        return {
            toggleActiveButton: "btn1",
        };
    },
    methods: {
        handleToggleActive(button) {
            this.toggleActiveButton = button;
        },
    },
};
</script>
<template>
    <section
        class="relative min-h-[20px] max-w-[2000px] pl-[3.7rem] md:pl-0 landscape:sm:pl-10 landscape:tablet:pl-20"
    >
        <h2 class="mb-6 font-Quicksand text-[25px] font-semibold">
            Main Category
        </h2>
        <button
            @click="handleToggleActive('btn1')"
            class="swiper-next-slide absolute left-[2%] top-[50%] z-[2] landscape:sm:left-0 landscape:tablet:left-[-4%]"
            type="button"
        >
            <Icon
                class="text-3xl"
                name="ep:arrow-left-bold"
                :color="`${
                    toggleActiveButton === 'btn1' ? '#00A9A2' : 'gray'
                } `"
            />
        </button>
        <Swiper
            class="mb-24 h-auto max-w-full"
            :modules="[SwiperAutoplay, SwiperFreeMode, SwiperNavigation]"
            :breakpoints="swiperConfig.breakpoints"
            :loop="true"
            :effect="'freeMode'"
            :navigation="{
                nextEl: '.swiper-next-slide',
                prevEl: '.swiper-perv-slide',
            }"
            :autoplay="{
                delay: 4000,
                disableOnInteraction: true,
            }"
            :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
        >
            <SwiperSlide v-for="image in mainCategoryRaw" :key="image.id">
                <div class="overflow-hidden">
                    <img
                        class="h-[200px] w-[200px] rounded-full"
                        :src="image.image"
                        :alt="image.name"
                    />
                    <h2
                        v-if="image.name"
                        class="mt-4 pl-20 font-Quicksand text-[20px] font-semibold text-black"
                    >
                        {{ image.name }}
                    </h2>
                    <h2
                        v-else
                        class="mt-4 pl-[1.5rem] font-Quicksand text-[20px] font-semibold text-red-600"
                    >
                        No name Found
                    </h2>
                </div>
            </SwiperSlide>
        </Swiper>
        <button
            @click="handleToggleActive('btn2')"
            class="swiper-perv-slide absolute right-[2%] top-[50%] z-[2] rotate-180 landscape:sm:right-0 landscape:tablet:right-[-4%]"
            type="button"
        >
            <Icon
                class="text-3xl"
                name="ep:arrow-left-bold"
                :color="`${
                    toggleActiveButton === 'btn2' ? '#00A9A2' : 'gray'
                } `"
            />
        </button>
    </section>
</template>
