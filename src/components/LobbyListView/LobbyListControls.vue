<template>
  <div class="lobby-list-controls level">
    <div class="level-left">
      <div class="level-item">
        <div class="control has-icons-right">
          <input type="search" class="input is-rounded" placeholder="filter" />
          <span class="icon is-small is-right">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <button class="button is-info is-rounded is-responsive">Search</button>
      </div>
    </div>

    <div class="level-right">
      <div class="level-item">
        <div class="control">
          <input type="text" class="input is-rounded" placeholder="room code" />
        </div>
        <button class="button is-info is-rounded is-responsive">Join</button>
      </div>
      <button class="level-item button is-link is-rounded is-responsive">Update list</button>
      <button class="level-item button is-primary is-rounded is-responsive">Create</button>
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
  methods: {
  },
};
</script>

<style scoped lang="scss">
</style>
