<script setup lang="ts"></script>

<template>
    <section
        class="bg-richGround relative mb-24 flex min-h-[150px] justify-center overflow-hidden rounded-lg py-10 font-Quicksand text-white landscape:sm:min-h-[250px] landscape:lg:min-h-[480px]"
    >
        <div class="flex flex-col items-center justify-center">
            <!--timer part-->
            <div
                class="mb-8 flex w-[90%] flex-row items-center justify-center gap-x-4 tablet:w-full tablet:gap-x-9"
            >
                <div class="flex flex-col items-center">
                    <div class="flex items-center gap-x-2.5">
                        <div
                            class="inline bg-paginationColor px-5 py-3.5 text-4xl font-semibold tablet:text-7xl"
                        >
                            1
                        </div>
                        <div
                            class="inline bg-paginationColor px-5 py-3.5 text-4xl font-semibold tablet:text-7xl"
                        >
                            9
                        </div>
                    </div>
                    <h2 class="text-xl font-semibold">hours</h2>
                </div>
                <span class="block"> : </span>
                <div class="flex flex-col items-center">
                    <div class="flex items-center gap-x-2.5">
                        <div
                            class="inline bg-paginationColor px-5 py-3.5 text-4xl font-semibold tablet:text-7xl"
                        >
                            2
                        </div>
                        <div
                            class="inline bg-paginationColor px-5 py-3.5 text-4xl font-semibold tablet:text-7xl"
                        >
                            2
                        </div>
                    </div>
                    <h2 class="text-xl font-semibold">minutes</h2>
                </div>
            </div>
            <!--heading of section-->
            <div class="text-center">
                <h2
                    class="text-3xl font-semibold text-paginationColor tablet:text-5xl"
                >
                    -40% on all Personal Care products
                </h2>
                <p class="mx-auto mt-4 w-[90%] text-[14px] tablet:w-[60%]">
                    *Some explanation small text if needed displayed here. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    lobortis egestas mi
                </p>
                <button
                    type="button"
                    class="mt-7 inline rounded-lg bg-paginationColor px-5 py-2 font-Quicksand text-[20px] font-semibold text-white lg:px-10 lg:py-3"
                >
                    Shop Now
                </button>
            </div>
            <!--button part-->
            <div></div>
        </div>
    </section>
</template>
