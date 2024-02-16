<script setup>
import Header from "~/components/Header/Header.vue";
import BannerSlider from "~/components/BannerSlider/BannerSlider.vue";
import WeekOffer from "~/components/WeekOffer/WeekOffer.vue";
</script>

<template>
    <div>
        <Header />
        <section class="w-full max-w-full bg-pageInfo px-4 lg:px-14 xl:px-20">
            <BannerSlider />
            <ShoppingOnline />
            <MainCategories />
            <CashBack />
            <NewProducts />
            <WeekOffer />
            <DukanGifts />
            <TopDealProducts />
            <DiscountCountDown />
            <MostPopularProducts />
        </section>
        <Footer />
    </div>
</template>
