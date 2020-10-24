<template>
  <div class="relative h-full">
    <!-- Main image -->
    <img
      src="../assets/images/interior_detail.jpg"
      height="auto"
      width="100%"
      alt="Interior"
    />
    <!-- Card -->
    <div class="absolute bg-white bottom-0 left-0 z-10 rounded-3xl px-5 py-6 w-full">
      <!-- Card header -->
      <div class="flex">
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
      <!-- Actions -->
      <div class="flex basis my-5">
        <div class="action">
          <bookmark-icon class="text-gray-500 inline-block"></bookmark-icon>
          <span class="ml-1 align-middle caption text-gray-500">1863</span>
        </div>
        <div class="action">
          <user-icon class="text-gray-500 inline-block"></user-icon>
          <span class="ml-1 align-middle caption text-gray-500">863</span>
        </div>
        <div class="action">
          <thumbs-up-icon class="text-gray-500 inline-block"></thumbs-up-icon>
          <span class="ml-1 align-middle caption text-gray-500">863</span>
        </div>
        <div class="flex-grow"></div>
        <div>
          <heart-icon class="text-purple-500 inline-block"></heart-icon>
          <span class="ml-1 align-middle caption text-purple-500">465</span>
        </div>
      </div>
      <!-- Card body -->
      <div>
        <h1 class="title font-semibold">Awesome Story</h1>
        <p class="body text-gray-600">
          Once I was drawing a perfect chair for myself in my head. But I could
          not finish her design... And so I found her!
        </p>
      </div>
      <!-- Avatars -->
      <div class="my-5 pl-3">
        <img
          class="avatar"
          src="../assets/images/photos/generated.photos_v3_5.jpg"
          alt="User 5"
        />
        <img
          class="avatar"
          src="../assets/images/photos/generated.photos_v3_6.jpg"
          alt="User 6"
        />
        <img
          class="avatar"
          src="../assets/images/photos/generated.photos_v3_7.jpg"
          alt="User 7"
        />
        <span class="align-middle ml-3 inline-block subtitle text-gray-500">521 +</span>
      </div>
      <!-- Footer -->
      <div class="flex items-center">
        <input placeholder="Type something" class="rounded-3xl px-6 py-3 bg-gray-300 flex-grow text-gray-500" type="text">
        <message-square-icon class="text-gray-500 ml-3"></message-square-icon>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BookmarkIcon,
  UserIcon,
  ThumbsUpIcon,
  HeartIcon,
  MessageSquareIcon,
} from "vue-feather-icons";

export default {
  components: {
    BookmarkIcon,
    UserIcon,
    ThumbsUpIcon,
    HeartIcon,
    MessageSquareIcon,
  },
};
</script>

<style lang="postcss" scoped>
.action {
  flex-basis: 80px;
}
</style>
