<template>
  <div class="relative h-full">
    <!-- Header -->
    <div class="flex items-center p-5">
      <img
        class="rounded-full w-16 h-16"
        src="../assets/images/photos/generated.photos_v3_8.jpg"
        alt="Avatar"
      />
      <div class="flex-grow ml-3">
        <h1 class="title font-semibold">Seidildahan</h1>
        <span class="caption text-gray-600">Designer</span>
      </div>
    </div>
    <!-- List -->
    <ol class="px-5 list-none my-3">
      <li v-for="project in projects" :key="project.title" class="flex mb-3">
        <img
          class="rounded-2xl w-24 h-24"
          :src="require(`../assets/images/avatars/${project.image}`)"
          :alt="project.title"
        />
        <div class="flex-grow flex flex-col mx-3">
          <h1 class="subtitle font-semibold">
            {{ project.title }}
          </h1>
          <p class="flex-grow body text-gray-500">{{ project.status }}</p>
          <span class="align-bottom subtitle text-purple-500"
            >+ ${{ project.price }}</span
          >
        </div>
        <div>
          <more-horizontal-icon class="text-gray-500"></more-horizontal-icon>
        </div>
      </li>
    </ol>
    <!-- Confirm -->
    <div
      class="bg-purple-500 text-white rounded-3xl mx-4 my-16 px-8 py-3 flex items-center"
    >
      <span class="caption">Total</span>
      <span class="subtitle ml-4">$456</span>
      <div class="flex-grow"></div>
      <span class="caption uppercase">confirm</span>
      <chevron-right-icon class="ml-3"></chevron-right-icon>
    </div>
    <!-- Footer -->
    <div
      class="rounded-3xl absolute left-0 bottom-0 c-shadow p-8 flex justify-between w-full"
    >
      <menu-icon class="text-gray-500" size="1.5x"></menu-icon>
      <shopping-cart-icon
        class="text-purple-500"
        size="1.5x"
      ></shopping-cart-icon>
      <bell-icon class="text-gray-500" size="1.5x"></bell-icon>
    </div>
  </div>
</template>

<script>
import {
  MoreHorizontalIcon,
  ChevronRightIcon,
  ShoppingCartIcon,
  MenuIcon,
  BellIcon,
} from "vue-feather-icons";

export default {
  components: {
    MoreHorizontalIcon,
    ChevronRightIcon,
    ShoppingCartIcon,
    MenuIcon,
    BellIcon,
  },
  data: function() {
    return {
      projects: [
        {
          image: "avatar_1.jpeg",
          title: "Header",
          status: "Done",
          price: 36,
        },
        {
          image: "avatar_2.jpeg",
          title: "Title",
          status: "Exported",
          price: 86,
        },
        {
          image: "avatar_3.jpeg",
          title: "Aside",
          status: "Done",
          price: 1953,
        },
        {
          image: "avatar_4.jpeg",
          title: "Footer",
          status: "Finished",
          price: 46,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.c-shadow {
  box-shadow: 0 -1px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>
