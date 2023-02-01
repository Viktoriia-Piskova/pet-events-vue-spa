<template>
  <div class="about">
    <h1>Event list</h1>
    <EventCard />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
export default {
  name: "EventsList",
  components: { EventCard },
};
</script>

<style></style>
