<template>
  <div class="flex flex-col w-80 border border-zinc-800 items-center justify-start p-20">
    <h2 class="text-3xl text-bold ">contact</h2>

    <div>
      <ul class="flex flex-col md:flex-col md:flex-nowrap justify-around">
        <li>
        <!-- email -->
          <a href="mailto:mikey.dpala@gmail.com" class="flex justify-between items-center w-44">
            <h4 class="text-3xl inline">Email</h4>
            <span class="material-symbols-outlined inline">
              east
            </span>
          </a>
        </li>
        <li>
          <!-- flickr -->
          <a href="https://flic.kr/ps/42qHkw" class="flex items-center justify-between w-44">
            <h4 class="text-3xl inline">Flickr</h4>
            <span class="material-symbols-outlined inline">
              east
            </span>
          </a>
        </li>
        <li>
        <!-- instagram -->
          <a href="https://www.instagram.com/jdepala" class="flex items-center justify-between w-44">
            <h4 class="text-3xl inline">Instagram</h4>
            <span class="material-symbols-outlined inline">
              east
            </span>
          </a>
        </li>
      </ul>   
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
ul {
  list-style: none;
}
.router-link-exact-active {
  @apply text-cyan-700
}
li {
  @apply text-lg md:text-2xl px-2 py-1 md:py-3 w-full md:hover:text-zinc-50 md:hover:bg-zinc-800
}
</style>