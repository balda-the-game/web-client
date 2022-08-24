<template>
  <div class="lobby-list-controls level">
    <div class="level-left">
      <div class="level-item field has-addons">
        <div class="control has-icons-right">
          <input type="search" class="input is-rounded" placeholder="filter" />
          <span class="icon is-small is-right">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <div class="control">
          <button class="button is-info is-rounded">Search</button>
        </div>
      </div>

      <div class="level-item field has-addons">
        <div class="control has-icons-right">
          <input type="text" class="input is-rounded" placeholder="room code" />
          <span class="icon is-small is-right">
            <i class="fas fa-key"></i>
          </span>
        </div>
        <div class="control">
          <button class="button is-info is-rounded">Join</button>
        </div>
      </div>

      <div class="level-item field has-addons">
        <div class="control">
          <button class="button is-link is-rounded">
            <span>Refresh</span>
            <span class="icon is-small">
              <i class="fas fa-rotate-left"></i>
            </span>
          </button>
        </div>
        <div class="control">
          <button class="button is-primary is-rounded">
            <span>Create</span>
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LobbyListControls",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.lobby-list-controls {
  justify-content: space-evenly;
  margin-bottom: 0.7rem;
}
input {
  max-width: 10rem;
}
.field {
  margin-bottom: 0.75rem;
  &.has-addons {
    display: flex;
    justify-content: center;
  }
}
</style>
