<template>
    <section
        class="relative mb-24 flex min-h-[280px] flex-col items-center justify-center overflow-hidden bg-navbarResponsive px-5 tablet:flex-row tablet:justify-between tablet:px-14"
    >
        <!-- Description and button part-->
        <div class="w-full tablet:w-[50%]">
            <h2 class="font-Quicksand text-[25px] font-semibold text-white">
                Return up to 30% of the product cost by getting cashback on each
                order!
            </h2>
            <button
                type="button"
                class="z-0 mt-7 inline rounded-lg border-2 border-paginationColor bg-white px-5 py-2 font-Quicksand text-[20px] font-semibold text-paginationColor lg:px-10 lg:py-3"
            >
                Learn More
            </button>
        </div>
        <!--White Circle part-->
        <div
            class="absolute right-[4%] top-[30%] hidden h-[350px] w-[350px] rounded-full bg-white tablet:inline"
        >
            <img
                class="absolute left-[45%] top-[38%]"
                src="../../assets/images/cashBack/ActiveLarge.webp"
                alt="active"
            />
            <img
                class="absolute right-[5%] top-[25%]"
                src="../../assets/images/cashBack/ActiveMedium.webp"
                alt="active"
            />
            <img
                class="absolute left-[40%] top-[10%]"
                src="../../assets/images/cashBack/ActiveSmall.webp"
                alt="active"
            />
        </div>
    </section>
</template>
<script setup lang="ts"></script>
