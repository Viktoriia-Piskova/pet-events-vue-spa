<template>
  <div class="icon-wrapper">
    <span v-html="svg"> </span>
    <span class="icon-description">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  props: {
    name: {
      type: String,
      default: "users",
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        class: "icon",
        width: this.width,
        height: this.height,
      });
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
  margin-right: 6px;
  gap: 10px;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: #39b982;
}
.icon-description {
  color: rgb(76 73 73 / 99%);
  font-size: 1rem;
  font-weight: 700;
}
</style>
