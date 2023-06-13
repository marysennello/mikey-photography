<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-wrap md:flex-nowrap">
    <!-- side bar -->
    <aside class="shadow py-3">
      <HeaderNav />
    </aside>

     <!-- output the main page content -->
    <div class="static mt-30 flex-1 justify-items-center 
    grid gap-y-5 md:gap-y-40 
    mx-auto px-5
    z-1">
        <slot class="relative my-5"/>
    </div>
  </div>
</template>

<style>
html {
  @apply scroll-pt-28 md:scroll-pt-20
}
aside {
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 1em;
  background-color: #f4f4f5;

}

</style>