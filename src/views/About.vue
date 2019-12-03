<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AxiosDemo />
  </div>
</template>

<script>
import AxiosDemo from '@/components/AxiosDemo.vue'

export default {
  name: 'about',
  components: {
    AxiosDemo
  }
}
</script>