<template>
  <div class="legend">
    <div class="legend__list">
      <div class="title is-5 has-text-dark">Legend</div>
      <div
        class="message is-small"
        v-for="player in Object.keys(legend)"
        :key="player"
      >
        <div class="message-body p-2">
          <div class="title is-7 has-text-dark m-1">
            {{ player }}: {{ legend[player].length }}
          </div>
          <ul class="tags">
            <li
              v-for="word in legend[player]"
              :key="word"
              class="tag is-info is-light"
            >
              {{ word }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="legend__controls">
      <label class="label is-small">Check word in the dictionary</label>
      <div class="field has-addons">
        <div class="control">
          <input class="input is-small" type="text" placeholder="Random" />
        </div>
        <div class="control">
          <a class="button is-small is-link"> Check </a>
        </div>
      </div>
      <div class="buttons">
        <button class="button is-small is-success">
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
          <span>Submit word</span>
        </button>
        <button class="button is-small is-danger is-outlined">
          <span>Clear input</span>
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameLegend",
  props: {
    legend: Object,
  },
  methods: {},
  computed: {
    alphabetArray: {
      get() {
        return Array.from(this.alphabet);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/colorscheme.scss";
.legend {
  height: 82vh;
  display: grid;
  grid-template-rows: auto 20%;
  font-size: 0.7rem;

  &__list {
    overflow-y: scroll;
  }
}
</style>