<template>
  <div class="about">
    <h1>Event list</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import axios from "axios";
export default {
  name: "EventsList",
  data() {
    return {
      events: [],
    };
  },
  components: { EventCard },
  created() {
    axios
      .get(
        "https://my-json-server.typicode.com/Viktoriia-Piskova/mock-database-vue2/events"
      )
      .then((response) => {
        this.events = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
