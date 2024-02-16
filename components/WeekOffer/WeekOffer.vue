<script setup></script>

<template>
    <section class="relative max-w-full">
        <h2 class="mb-8 text-center font-Quicksand text-3xl font-semibold">
            This week offers
        </h2>
        <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
                delay: 8000,
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
            <SwiperSlide class="mb-32 max-w-full">
                <div
                    class="grid grid-cols-1 grid-rows-3 gap-5 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1"
                >
                    <!--Household Essentials-->
                    <div
                        class="relative flex min-h-[240px] w-full max-w-full items-center overflow-hidden rounded-lg bg-household pl-3 tablet:w-auto"
                    >
                        <!--content of box-->
                        <div class="w-[90%]">
                            <h2
                                class="font-Quicksand text-[32px] font-semibold"
                            >
                                Up to 50% discount
                            </h2>
                            <p class="font-Quicksand text-[20px]">
                                Household Essentials
                            </p>
                            <button
                                type="button"
                                class="mt-7 inline rounded-lg bg-paginationColor px-5 py-2 font-Quicksand text-[15px] font-semibold text-white lg:px-10 lg:py-3"
                            >
                                Shop Now
                            </button>
                        </div>
                        <!--images of box-->
                        <div class="w-[40%]">
                            <img
                                class="absolute bottom-0 right-[40%] z-[4] w-[20%]"
                                src="../../assets/images/weekOffers/battery.webp"
                                alt="battery"
                            />
                            <img
                                class="absolute bottom-[5%] right-[10%] z-[3] w-[50%]"
                                src="../../assets/images/weekOffers/fairy.webp"
                                alt="fairy"
                            />
                            <img
                                class="absolute bottom-0 right-[30%] z-[4] w-[25%]"
                                src="../../assets/images/weekOffers/maog.webp"
                                alt="maog"
                            />
                            <img
                                class="absolute bottom-[0%] right-[-3%] w-[40%]"
                                src="../../assets/images/weekOffers/mrPropper.webp"
                                alt="mrPropper"
                            />
                        </div>
                    </div>
                    <!--Fruits & Vegetables-->
                    <div
                        class="relative flex min-h-[240px] w-full max-w-full items-center overflow-hidden rounded-lg bg-vitamins pl-3 text-white tablet:w-full"
                    >
                        <!--content of box-->
                        <div class="z-[3] w-full tablet:w-[98%]">
                            <h2
                                class="font-Quicksand text-[25px] font-semibold md:text-[30px] tablet:text-[32px]"
                            >
                                Vitamins time! -30%
                            </h2>
                            <p
                                class="font-Quicksand text-[15px] tablet:text-[20px]"
                            >
                                Fruits & Vegetables
                            </p>
                            <button
                                type="button"
                                class="mt-7 inline rounded-lg bg-paginationColor px-5 py-2 font-Quicksand text-[15px] font-semibold text-white lg:px-10 lg:py-3"
                            >
                                Shop Now
                            </button>
                        </div>
                        <!--images of box-->
                        <div class="w-[40%]">
                            <img
                                class="lg::w-auto absolute right-0 top-[0%] w-[20%] lg:top-[3%]"
                                src="../../assets/images/weekOffers/apple.webp"
                                alt="apple"
                            />
                            <img
                                class="absolute bottom-[-4%] right-[18%] w-[30%] lg:w-auto"
                                src="../../assets/images/weekOffers/pineapple.webp"
                                alt="pineapple"
                            />
                            <img
                                class="absolute bottom-[3%] left-[2%] w-[30%] tablet:w-[40%]"
                                src="../../assets/images/weekOffers/strawberries.webp"
                                alt="strawberries"
                            />
                            <img
                                class="absolute bottom-0 right-0 w-[30%] tablet:w-auto"
                                src="../../assets/images/weekOffers/banana.webp"
                                alt="banana"
                            />
                        </div>
                    </div>
                    <!--Specials-->
                    <div
                        class="relative flex w-full max-w-full items-center overflow-hidden rounded-lg bg-navbarResponsive pl-3 text-white tablet:w-full"
                    >
                        <!--content of box-->
                        <div class="w-[95%]">
                            <h2
                                class="font-Quicksand text-[32px] font-semibold"
                            >
                                Only in Dukan
                            </h2>
                            <p class="font-Quicksand text-[20px]">Specials</p>
                            <button
                                type="button"
                                class="mt-7 inline rounded-lg bg-paginationColor px-5 py-2 font-Quicksand text-[20px] font-semibold text-white lg:px-10 lg:py-3"
                            >
                                Shop Now
                            </button>
                        </div>
                        <!--images of box-->
                        <div>
                            <img
                                class="absolute right-0 top-0 w-[30%] tablet:w-auto"
                                src="../../assets/images/banners/can.webp"
                                alt="jar"
                            />
                            <img
                                class="absolute bottom-[-4%] right-[5%] w-[30%] tablet:w-auto"
                                src="../../assets/images/weekOffers/pickUp.webp"
                                alt="pickup"
                            />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>
