<script>
export default {
    data() {
        return {
            myLocation: "",
            error: "",
            toggleMenu: false,
        };
    },
    methods: {
        async fetchAddress() {
            try {
                const positionObject = await this.getPosition();
                const position = {
                    latitude: positionObject.coords.latitude,
                    longitude: positionObject.coords.longitude,
                };

                const addressObject = await this.getAddress(position);
                const governmentName =
                    addressObject.localityInfo.administrative.find(
                        (item) => item.adminLevel === 4,
                    )?.name ?? "";

                const address = `${addressObject?.locality}, ${governmentName} ${addressObject?.city} ${addressObject?.postcode}, ${addressObject?.countryName}`;

                this.myLocation = address; // Set myLocation variable with the address
            } catch (error) {
                this.error = error.message;
                console.error("Error fetching address:", error.message);
            }
        },
        getPosition() {
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        },
        async getAddress({ latitude, longitude }) {
            const res = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
            );
            if (!res.ok) throw Error("Failed getting address");

            return await res.json();
        },
        handleToggleMenu() {
            this.toggleMenu = !this.toggleMenu;
        },
    },
    mounted() {
        if (window.location.hash) {
            history.replaceState({}, document.title, window.location.pathname);
            window.scrollTo(0, 0);
        }
        this.fetchAddress();
    },
};
</script>

<template>
    <div
        class="relative w-full max-w-full bg-navbarResponsive tablet:relative tablet:bg-white"
    >
        <div
            class="mb-7 mt-4 flex flex-col items-center tablet:flex-row tablet:gap-x-[1.3rem] tablet:px-7 landscape:lg:px-14 landscape:xl:px-20"
        >
            <!--Logo & Search input-->
            <div
                class="flex flex-col gap-y-3.5 tablet:flex-row tablet:items-center tablet:gap-3.5"
            >
                <div
                    class="flex items-center justify-around md:justify-between tablet:inline landscape:sm:justify-between"
                >
                    <img
                        class="hidden tablet:inline"
                        src="../../assets/images/navbar/logo.webp"
                        alt="logo"
                    />
                    <div
                        class="mr-[2.5rem] flex gap-x-3.5 md:ml-2 landscape:sm:ml-1 landscape:tablet:hidden"
                    >
                        <Icon
                            @click="handleToggleMenu"
                            class="text-3xl text-white tablet:hidden"
                            name="fluent-mdl2:global-nav-button"
                        />
                        <img
                            class="inline tablet:hidden"
                            src="../../assets/images/navbar/logoWhite.webp"
                            alt="logo"
                        />
                    </div>
                    <div class="flex tablet:hidden">
                        <div
                            class="mr-3 flex items-center rounded-l-lg rounded-r-xl bg-cashback px-1 py-1 font-Quicksand font-semibold lg:hidden"
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
                        <img
                            class="ml-2.5 inline tablet:hidden"
                            src="../../assets/images/navbar/cartWhite.webp"
                            alt=""
                        />
                    </div>
                </div>
                <div class="relative">
                    <label for="search">&nbsp;</label>
                    <img
                        class="absolute left-[4%] top-[27%] landscape:sm:left-[2.5%] landscape:tablet:left-[4%]"
                        src="../../assets/images/navbar/searchIcon.webp"
                        alt="search"
                    />
                    <input
                        class="min-w-[300px] rounded-l-lg rounded-r-3xl border-2 px-9 py-3 text-gray-400 focus:outline-none md:min-w-[600px] landscape:sm:min-w-[630px] landscape:md:min-w-[400px] landscape:lg:min-w-[380px]"
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search products"
                    />
                    <img
                        class="absolute right-[13%] top-[27%] landscape:sm:right-[8%] landscape:lg:right-[3%]"
                        src="../../assets/images/navbar/QR.webp"
                        alt=""
                    />
                    <img
                        class="ml-2.5 inline tablet:hidden"
                        src="../../assets/images/navbar/notificationIconWhite.webp"
                        alt=""
                    />
                </div>
            </div>
            <!--Location-->
            <div
                class="absolute top-full flex w-full items-center gap-x-2 bg-locationResponsive tablet:static tablet:w-[32%] tablet:bg-transparent landscape:lg:w-[90%] landscape:tablet:w-[20%]"
            >
                <img
                    class="hidden tablet:block"
                    v-if="myLocation"
                    src="../../assets/images/navbar/locationIcon.webp"
                    alt="location"
                />
                <img
                    class="block tablet:hidden"
                    v-if="myLocation"
                    src="../../assets/images/navbar/locationResponsive.webp"
                    alt="location"
                />
                <div v-if="myLocation">
                    <div class="font-Quicksand font-semibold">
                        <p class="text-gray-400">Delivery to:</p>
                        <h2>
                            {{ myLocation }}
                        </h2>
                    </div>
                </div>
                <span
                    class="py-5 font-Quicksand font-semibold text-red-600"
                    v-else
                    >{{ error }} &nbsp;
                </span>
            </div>
            <!--cash back box & icons-->
            <div class="flex items-center gap-x-5">
                <!--cash back-->
                <div
                    class="mt-[1rem] hidden rounded-br-2xl bg-cashback px-[0.2rem] py-0.5 font-Quicksand text-pageInfoTextColor lg:inline"
                >
                    <!--cash back box-->
                    <span>Your Cashback</span>
                    <!--icons box-->
                    <div class="flex items-center gap-x-2">
                        <img
                            src="../../assets/images/navbar/wallet.webp"
                            alt="wallet"
                        />
                        <span class="text-[15px] font-semibold">
                            SAR 124,00
                        </span>
                    </div>
                </div>
                <!--icons-->
                <div
                    class="mt-[0.8rem] hidden items-center gap-x-4 tablet:flex"
                >
                    <img
                        src="../../assets/images/navbar/notificationIcon.webp"
                        alt="notificationIcon"
                    />
                    <img
                        src="../../assets/images/navbar/userIcon.webp"
                        alt="user"
                    />
                    <img
                        src="../../assets/images/navbar/favIcon.webp"
                        alt="favIcon"
                    />
                    <img
                        src="../../assets/images/navbar/Cart.webp"
                        alt="cart"
                    />
                </div>
            </div>
        </div>
        <!--nav bar links-->
        <ul
            :class="` ${
                toggleMenu
                    ? 'animation-nav-links absolute left-0 top-0 z-50 flex h-screen w-full flex-col justify-start gap-y-6 overflow-auto border-b-0 bg-black bg-opacity-70 pl-10 pt-14 text-white backdrop-blur-[2px]'
                    : 'hidden w-0'
            } absolute border-b border-b-categoriesBorder font-Quicksand font-semibold transition-all duration-500 ease-in tablet:static tablet:flex tablet:w-full tablet:gap-x-3 tablet:px-6 landscape:lg:gap-x-6 landscape:lg:px-14 landscape:xl:px-20`"
        >
            <button
                v-if="toggleMenu"
                class="absolute right-[8%] top-[2%] text-3xl"
                @click="handleToggleMenu"
                type="button"
            >
                &times;
            </button>
            <li :class="` ${toggleMenu ? 'text-[20px]' : ''} cursor-pointer`">
                All categories
            </li>
            <li :class="` ${toggleMenu ? 'text-[20px]' : ''} cursor-pointer`">
                Highest cashback
            </li>
            <li :class="` ${toggleMenu ? 'text-[20px]' : ''} cursor-pointer`">
                <NuxtLink :to="{ hash: '#topDeals' }" :external="true">
                    Top Deals
                </NuxtLink>
            </li>
            <li :class="` ${toggleMenu ? 'text-[20px]' : ''} cursor-pointer`">
                Fruits & Vegetables
            </li>
            <li :class="` ${toggleMenu ? 'text-[20px]' : ''} cursor-pointer`">
                Diary & Eggs
            </li>
            <li :class="` ${toggleMenu ? 'text-[20px]' : ''} cursor-pointer`">
                Beverages & Drinks
            </li>
            <li :class="` ${toggleMenu ? 'text-[20px]' : ''} cursor-pointer`">
                Fresh Bakery
            </li>
            <li :class="` ${toggleMenu ? 'text-[20px]' : ''} cursor-pointer`">
                Baby Products
            </li>
            <li :class="` ${toggleMenu ? 'text-[20px]' : ''} cursor-pointer`">
                Household
            </li>
        </ul>
    </div>
</template>
