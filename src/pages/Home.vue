<template>
  <div class="root">
    <!-- Header -->
    <div class="flex px-5 py-8 items-center">
      <div class="flex-grow">
        <h1 class="hero-title font-semibold">Kelly Hoppen</h1>
        <span class="caption text-gray-600">Interior designer</span>
      </div>
      <div
        class="bg-purple-400 rounded-full w-10 h-10 flex justify-center items-center"
      >
        <search-icon class="text-white" size="1.5x"></search-icon>
      </div>
    </div>
    <!-- Tabs -->
    <ol
      class="pl-5 my-2 list-none overflow-auto hide-scrollbar w-auto whitespace-no-wrap pb-2"
    >
      <li class="text-black tab">Popular</li>
      <li class="tab">Recommend</li>
      <li class="tab">New</li>
      <li class="tab">Oldest</li>
      <li class="tab">People</li>
    </ol>
    <!-- Images -->
    <ol
      class="pl-5 list-none overflow-auto hide-scrollbar w-auto whitespace-no-wrap pb-3"
    >
      <router-link
        to="/interior"
        class="inline-block slide-image rounded-2xl mr-5"
        v-for="slide in slides"
        :key="slide.id"
        :style="slide"
        tag="li"
      ></router-link>
    </ol>
    <!-- Actions buttons -->
    <div class="flex px-5 py-2">
      <bookmark-icon class="text-purple-400"></bookmark-icon>
      <user-icon class="text-gray-500 ml-4"></user-icon>
      <div class="flex-grow"></div>
      <chevron-right-icon class="text-gray-500"></chevron-right-icon>
    </div>
    <!-- Users list -->
    <ol
      class="pl-5 list-none overflow-auto hide-scrollbar w-auto whitespace-no-wrap py-5"
    >
      <router-link
        to="/projects"
        tag="li"
        v-for="user in users"
        :key="user.name"
        :class="
          `
            user
            align-top
            text-center
            inline-block
            mr-5
          `
        "
      >
        <div
          class="w-16 h-16 rounded-full mx-auto shadow-lg"
          :style="user.styles"
        ></div>
        <p class="whitespace-normal mt-2 caption text-gray-600">
          {{ user.name }}
        </p>
      </router-link>
    </ol>
    <!-- Footer -->
    <div class="flex items-center rounded-lg shadow-lg px-5 py-2">
      <div class="flex-grow">
        <h1 class="title font-semibold">Tanya</h1>
        <span class="caption text-gray-600">Manager</span>
      </div>
      <h1 class="title text-purple-400">+ $560</h1>
    </div>
  </div>
</template>

<script>
import {
  SearchIcon,
  BookmarkIcon,
  UserIcon,
  ChevronRightIcon,
} from "vue-feather-icons";
import { getRandomPhotos } from "../services/photo.service";

export default {
  name: "Home",
  components: {
    SearchIcon,
    BookmarkIcon,
    UserIcon,
    ChevronRightIcon,
  },
  data: function() {
    return {
      images: [
        require("../assets/images/interior1.jpg"),
        require("../assets/images/interior2.jpg"),
      ],
      users: [],
    };
  },
  computed: {
    slides: function() {
      return this.images.map((i, index) => ({
        backgroundImage: `url('${i}')`,
        backgroundPositionX: "center",
        backgroundSize: "cover",
        id: index,
      }));
    },
  },
  mounted: async function() {
    const users = await getRandomPhotos();
    const avatar = function(photoName) {
      const photo = require(`../assets/images/photos/${photoName}.jpg`);
      return {
        backgroundImage: `url('${photo}')`,
        backgroundSize: "cover",
      };
    };
    this.users = users.map((u) => ({
      ...u,
      styles: avatar(u.photoName),
      name: u.name
        .split(" ")
        .map((n, i) => (i === 0 ? n : n[0].toUpperCase() + "."))
        .join(" "),
    }));
  },
};
</script>

<style lang="postcss" scoped>
.user {
  max-width: 80px;
}
</style>
