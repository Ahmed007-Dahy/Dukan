<script setup></script>

<template>
    <section
        class="relative mb-14 flex min-h-[150px] overflow-hidden rounded-lg bg-bannerResponsive py-5 landscape:sm:min-h-[250px] landscape:lg:min-h-[400px]"
    >
        <!--description of Gifts-->
        <div
            class="flex w-full flex-col items-center justify-center pl-5 tablet:w-[50%] tablet:pl-24"
        >
            <div class="mb-5">
                <h2
                    class="font-Quicksand text-[30px] font-semibold tablet:text-[40px]"
                >
                    Take care just like that with Dukan gift cards
                </h2>
                <button
                    type="button"
                    class="z-0 mt-7 inline rounded-lg border-2 border-navbarResponsive bg-navbarResponsive px-5 py-2 font-Quicksand text-[20px] font-semibold text-white lg:px-10 lg:py-3"
                >
                    Learn More
                </button>
            </div>
            <p>
                *Some explanation small text if needed displayed here. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobotomist egestas mi
            </p>
        </div>
        <!--photo Of Gifts-->
        <div class="relative hidden w-[50%] tablet:inline">
            <img
                class="absolute right-0 top-[13%] w-[50%] lg:w-auto xl:top-[8%]"
                src="../../assets/images/dukanGifts/giftGreen.webp"
                alt="green"
            />
            <img
                class="absolute bottom-[-6%] right-[20%] w-[50%] lg:w-auto xl:bottom-[-8%]"
                src="../../assets/images/dukanGifts/giftRed.webp"
                alt="green"
            />
            <img
                class="absolute right-[42%] w-[60%] xl:top-[-5%] xl:w-auto"
                src="../../assets/images/dukanGifts/giftYellow.webp"
                alt="green"
            />
        </div>
    </section>
</template>
