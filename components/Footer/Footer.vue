<script setup lang="ts"></script>

<template>
    <footer
        class="flex min-h-fit flex-col bg-footer pb-3 pt-10 font-Quicksand text-white"
    >
        <!--Footer content-->
        <div
            class="grid grid-cols-2 grid-rows-3 border-b-2 border-b-gray-400 pl-10 lg:grid-cols-6 tablet:grid-cols-7 tablet:grid-rows-1 tablet:pb-5"
        >
            <div class="col-span-2 mb-5 flex flex-col gap-y-10 tablet:mb-0">
                <div class="flex items-center justify-between">
                    <img
                        class="w-[40%] tablet:w-[70%] landscape:sm:w-[25%] landscape:md:w-[35%]"
                        src="../../assets/images/navbar/logoWhite.webp"
                        alt="logo"
                    />
                    <div class="pr-9 landscape:md:hidden">
                        <span>AR</span>
                        <span
                            class="mx-2 border-l-2 border-l-white lg:mx-1.5 xl:mx-2.5"
                        ></span>
                        <span>EN</span>
                    </div>
                </div>
                <div>
                    <h2 class="mb-1 text-[15px] text-gray-500">Follow Us</h2>
                    <div
                        class="flex items-center justify-around gap-x-4 tablet:justify-start landscape:lg:gap-x-2"
                    >
                        <Icon class="text-3xl" name="logos:facebook" />
                        <Icon class="text-3xl" name="skill-icons:instagram" />
                        <img
                            class="inline w-[8%]"
                            src="../../assets/images/footer/Twitter.png"
                            alt="twitter"
                        />
                        <Icon class="text-3xl" name="fa-brands:snapchat" />
                        <Icon class="text-3xl" name="logos:youtube-icon" />
                        <Icon class="text-3xl" name="logos:tiktok-icon" />
                    </div>
                </div>
                <div class="flex items-center gap-x-2 xl:gap-x-3.5">
                    <img
                        src="../../assets/images/navbar/whatsapp.webp"
                        alt="whatsapp"
                    />
                    <h2>+966 55 80 2 88 55</h2>
                </div>
            </div>
            <!--About Company-->
            <div class="flex flex-col gap-y-3">
                <h2 class="text-[15px] text-gray-500">About Company</h2>
                <ul class="flex flex-col gap-y-3">
                    <li>About Us</li>
                    <li>News</li>
                    <li>Store locations</li>
                    <li>Careers</li>
                    <li>Sell with us</li>
                </ul>
            </div>
            <!--Customer support-->
            <div class="flex flex-col gap-y-3">
                <h2 class="text-[15px] text-gray-500">Customer support</h2>
                <ul class="flex flex-col gap-y-3">
                    <li>Contact Us</li>
                    <li>Returns & Exchanges</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <!--Services-->
            <div class="flex flex-col gap-y-3">
                <h2 class="text-[15px] text-gray-500">Services</h2>
                <ul class="flex flex-col gap-y-3">
                    <li>Services & Warranty</li>
                    <li>Terms & Conditions</li>
                    <li>Shipping & Delivery</li>
                </ul>
            </div>
            <!--Our programs-->
            <div class="flex flex-col gap-y-3">
                <h2 class="text-[15px] text-gray-500">Our programs</h2>
                <ul class="flex flex-col gap-y-3">
                    <li>Cashback programs</li>
                    <li>Gift Cards</li>
                    <li>Weekly Offers</li>
                </ul>
            </div>
            <!--payment methods-->
            <div
                class="mt-5 hidden flex-col items-start gap-y-3 pr-7 lg:mt-0 tablet:flex tablet:items-end"
            >
                <div class="hidden landscape:md:inline">
                    <span>AR</span>
                    <span
                        class="mx-1.5 border-l-2 border-l-white lg:mx-1.5 xl:mx-2.5"
                    ></span>
                    <span>EN</span>
                </div>
                <div>
                    <ul>
                        <li class="mb-4 text-[15px] text-gray-500">
                            Available payment methods
                        </li>
                    </ul>
                    <div>
                        <img
                            src="../../assets/images/footer/paymentMethods.png"
                            alt="payment"
                        />
                        <div class="mt-5 flex items-center gap-x-5">
                            <img
                                src="../../assets/images/footer/cash.png"
                                alt="cash"
                            />
                            <img
                                src="../../assets/images/footer/mada.png"
                                alt="mada"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Footer for apps-->
        <div
            class="flex flex-col items-center justify-between px-4 pt-4 lg:pt-0 tablet:flex-row tablet:px-10"
        >
            <a href="mailto:support@dukan.me">support@dukan.me</a>
            <div
                class="mt-4 flex flex-col items-start gap-5 tablet:flex-row tablet:items-center"
            >
                <img
                    src="../../assets/images/footer/AppGallery.png"
                    alt="appGallery"
                />
                <img
                    src="../../assets/images/footer/googlePlay.png"
                    alt="googlePlay"
                />
                <img
                    src="../../assets/images/footer/appStore.png"
                    alt="appStore"
                />
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
