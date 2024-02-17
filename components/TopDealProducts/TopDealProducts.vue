<script setup>
import { ref, onMounted } from "vue";

const API_URL =
    "https://innova.products.aait-d.com/api/website/home?guest_token=ZZoEhLlFeEs6rSh9UT9nUFgVgLgR762J1VJJcpZu9wYVdqtDtzSvFAewKcMgNFD2";

const newProductsRaw = ref([]);
const toggleActiveButton = ref("btn1");

async function fetchNewProducts() {
    try {
        const res = await fetch(`${API_URL}`);

        if (!res.ok) return;

        const { data } = await res.json();
        const categoryData = data.filter(
            (item) => item.type === "top_deal_products",
        );
        const imageCategory = categoryData.map((item) =>
            item.content.map((raw) => raw),
        );
        const singleRawOfCategory = imageCategory[0].map((item) => item);
        newProductsRaw.value = singleRawOfCategory;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return Promise.reject(error);
    }
}
function handleToggleActive(button) {
    toggleActiveButton.value = button;
}

function increaseItemQuantity(productId) {
    const itemForIncrease = newProductsRaw.value.find(
        (item) => item.id === productId,
    );
    const dataRawObj = toRaw(itemForIncrease);
    const increaseProductPrice = dataRawObj.available_quantity++;
    return increaseProductPrice;
}
function decreaseItemQuantity(productId) {
    const itemForIncrease = newProductsRaw.value.find(
        (item) => item.id === productId,
    );
    const dataRawObj = toRaw(itemForIncrease);
    if (dataRawObj.available_quantity <= 0) return;
    const increaseProductPrice = dataRawObj.available_quantity--;
    return increaseProductPrice;
}

function toggleFavProduct(productId) {
    const itemIsFavIndex = newProductsRaw.value.findIndex(
        (item) => item.id === productId,
    );
    if (itemIsFavIndex !== -1) {
        const product = newProductsRaw.value[itemIsFavIndex];
        product.is_fav = !product.is_fav;
    }
    return newProductsRaw.value;
}

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

onMounted(fetchNewProducts);
</script>

<template>
    <main class="relative min-h-[20px] max-w-full">
        <h2 class="mb-6 font-Quicksand text-[25px] font-semibold">
            Top Deal Products
        </h2>
        <button
            @click="handleToggleActive('btn1')"
            :class="`${
                toggleActiveButton === 'btn1'
                    ? 'border-2 border-banner'
                    : 'border-2 border-gray-500'
            } swiper-next-slide1 absolute right-[10%] top-[0.5%] tablet:top-[0%]`"
            type="button"
        >
            <Icon
                class="text-2xl"
                name="ep:arrow-left-bold"
                :color="`${
                    toggleActiveButton === 'btn1' ? '#00A9A2' : 'gray'
                } `"
            />
        </button>
        <Swiper
            class="mb-32 h-auto max-w-full"
            :modules="[SwiperAutoplay, SwiperFreeMode, SwiperNavigation]"
            :breakpoints="swiperConfig.breakpoints"
            :loop="true"
            :effect="'coverflow'"
            :navigation="{
                nextEl: '.swiper-next-slide1',
                prevEl: '.swiper-perv-slide1',
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
            <SwiperSlide v-for="product in newProductsRaw" :key="product.id">
                <div class="mx-auto w-[90%] overflow-hidden lg:w-[93%]">
                    <div class="mb-3 flex items-center justify-between">
                        <h2
                            class="flex items-center rounded-l-lg rounded-br-2xl bg-titleOfCard px-2.5 py-1.5 font-Quicksand text-xl font-semibold text-white brightness-110"
                        >
                            <Icon name="fluent-emoji:fire" />
                            Top Deals
                        </h2>
                        <div>
                            <button
                                class="transition-colors delay-200 duration-500"
                                v-if="product.is_fav"
                                @click="toggleFavProduct(product.id)"
                            >
                                <Icon
                                    class="text-2xl"
                                    :color="`red`"
                                    name="mdi:heart"
                                />
                            </button>
                            <button
                                @click="toggleFavProduct(product.id)"
                                v-else
                                class="transition-colors delay-200 duration-500"
                            >
                                <Icon
                                    class="text-2xl"
                                    :color="`#00A9A2`"
                                    name="mdi:heart-outline"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center justify-center bg-white py-5">
                        <img
                            class="h-[200px] w-[200px] rounded-full"
                            :src="product.image"
                            :alt="product.name"
                        />
                    </div>
                    <div
                        :class="`${
                            product.available_quantity
                                ? 'flex h-fit items-center justify-between overflow-hidden rounded-xl border-2 border-navbarResponsive'
                                : ''
                        } mt-4 `"
                    >
                        <button
                            @click="increaseItemQuantity(product.id)"
                            class="rounded-l-md rounded-r-lg bg-navbarResponsive px-2 py-1.5"
                        >
                            <Icon
                                class="text-3xl"
                                name="material-symbols:add"
                                color="white"
                            />
                        </button>
                        <div
                            class="font-Quicksand text-[20px] font-semibold"
                            v-if="product.available_quantity"
                        >
                            {{ product.available_quantity }}
                        </div>
                        <button
                            @click="decreaseItemQuantity(product.id)"
                            v-if="product.available_quantity"
                            class="rounded-l-md rounded-r-lg bg-navbarResponsive px-2 py-1.5"
                        >
                            <Icon
                                class="text-3xl"
                                name="ep:semi-select"
                                color="white"
                            />
                        </button>
                    </div>
                    <div class="flex w-full items-center justify-between">
                        <div>
                            <NuxtRating :read-only="false" :ratingValue="1.2" />
                        </div>
                        <div
                            class="ml-8 mt-2 flex items-center rounded-l-lg rounded-r-xl bg-cashback px-1 py-1 font-Quicksand font-semibold"
                        >
                            <img
                                src="../../assets/images/navbar/wallet.webp"
                                alt="wallet"
                            />
                            <span
                                class="mt-px font-Quicksand text-[10px] font-semibold"
                            >
                                +124,00 SAR
                            </span>
                        </div>
                    </div>
                    <div class="mt-3">
                        <h2 class="font-Quicksand font-semibold">
                            {{ product.price.toFixed(2) }}
                            <span class="text-[13px]">{{
                                product.currency
                            }}</span>
                        </h2>
                    </div>
                    <div v-if="product.name">
                        <h2>{{ product.name }}</h2>
                    </div>
                    <div v-else>
                        <h2 class="font-Quicksand font-semibold text-red-500">
                            No Info Fetched...
                        </h2>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <button
            @click="handleToggleActive('btn2')"
            :class="`${
                toggleActiveButton === 'btn2'
                    ? 'border-2 border-banner'
                    : 'border-2 border-gray-500'
            } swiper-perv-slide1 absolute right-[0%] top-[0.5%] tablet:right-[7%] tablet:top-[0%]`"
            type="button"
        >
            <Icon
                class="text-2xl"
                name="ep:arrow-right-bold"
                :color="`${
                    toggleActiveButton === 'btn2' ? '#00A9A2' : 'gray'
                } `"
            />
        </button>
    </main>
</template>
