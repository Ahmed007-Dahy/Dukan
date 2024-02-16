<template>
    <section class="mb-5 min-h-[400px]">
        <div
            class="container grid max-w-full gap-y-12 md:min-h-[420px] lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-8 landscape:md:min-h-[500px] landscape:lg:min-h-[380px]"
        >
            <!--Online Shopping part-->
            <div
                class="relative flex items-center justify-center overflow-hidden bg-onlineShop py-5"
            >
                <div>
                    <img
                        class="absolute right-[-10%] top-[17%] inline w-[50%] md:inline md:w-[30%] tablet:right-0 landscape:sm:w-[27%] landscape:lg:w-[55%]"
                        src="../../assets/images/onlineShopping/onlineShopping.webp"
                        alt="onlineShop"
                    />
                </div>
                <div class="w-[80%] landscape:sm:z-0">
                    <h2
                        class="font-Quicksand text-[23px] font-semibold text-white lg:text-[33px]"
                    >
                        Easier shopping with online fast delivery. Meet new
                        feature!
                    </h2>
                    <button
                        type="button"
                        class="z-0 mt-7 inline rounded-lg border-2 border-paginationColor bg-white px-5 py-2 font-Quicksand text-[20px] font-semibold text-paginationColor lg:px-10 lg:py-3"
                    >
                        Learn More
                    </button>
                </div>
            </div>
            <!--Seasonal offers part-->
            <div
                class="relative flex items-center justify-center overflow-hidden bg-bannerResponsive"
            >
                <div class="text-center">
                    <h2
                        class="font-Quicksand text-[25px] font-semibold lg:text-[40px]"
                    >
                        Seasonal offers
                    </h2>
                    <button
                        type="button"
                        class="mt-7 inline rounded-lg bg-paginationColor px-5 py-2 font-Quicksand text-[20px] font-semibold text-white lg:px-10 lg:py-3"
                    >
                        Shop Now
                    </button>
                </div>
                <img
                    class="absolute bottom-0 right-[10%] w-[20%] lg:w-auto"
                    src="../../assets/images/onlineShopping/apple.webp"
                    alt="apple"
                />
                <img
                    class="absolute right-0 w-[20%] landscape:md:w-[15%] landscape:lg:w-auto"
                    src="../../assets/images/onlineShopping/banana.webp"
                    alt="banana"
                />
                <img
                    class="absolute bottom-[-15%] left-0 w-[20%] lg:bottom-0 lg:w-auto"
                    src="../../assets/images/onlineShopping/pineapple.webp"
                    alt="pineapple"
                />
                <img
                    class="absolute right-[0%] top-0 w-[20%] lg:w-auto"
                    src="../../assets/images/onlineShopping/SeasonalImg1.webp"
                    alt="SeasonalImg1"
                />
                <img
                    class="absolute bottom-0 left-[25%] w-[20%] lg:w-auto"
                    src="../../assets/images/onlineShopping/SeasonalImg2.webp"
                    alt="SeasonalImg2"
                />
                <img
                    class="absolute left-[0%] w-[20%] lg:w-auto landscape:md:top-[-5%] landscape:lg:top-[4%]"
                    src="../../assets/images/onlineShopping/strawberries.webp"
                    alt="strawberries"
                />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
