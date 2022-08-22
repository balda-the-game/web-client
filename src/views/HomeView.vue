<template>
  <div class="home">
    <section class="hero is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="title">BALDA</div>
          <div class="subtitle">The pen & papper game</div>
          <figure class="image is-inline-block is-256x256">
            <img src="https://avatars.githubusercontent.com/u/111589147" />
          </figure>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="title">FAQ</div>
      <div class="message is-small">
        <div class="message-header">Q: What is "Balda"?</div>
        <div class="message-body">
          A: It is a game on the game field with 5x5, 7x7 and more dimension
          that starts with a random word on the middle row. Player should place
          a letter in one empty circuit and assemble a new noun which hasn't
          appeared in the game yet. A person who have more letters in general
          wins.
        </div>
      </div>
      <div class="message is-small">
        <div class="message-header">Q: What about rules?</div>
        <div class="message-body">
          A: One turn - one letter and one word. Turn has a time limit so player
          must meet it. Turn moves on to the next player after previous player
          has reached the time limit or has sent a word that was approved by the
          server. Game lasts untill the game field has at least one empty
          circuit.
        </div>
      </div>
      <div class="message is-small">
        <div class="message-header">Q: How many players?</div>
        <div class="message-body">A: In this implementation 2 to 6.</div>
      </div>
      <div class="message is-small">
        <div class="message-header">Q: How to play it?</div>
        <div class="message-body">
          A: Sign up and join a free room. You may also play with friends in a
          private room.
        </div>
      </div>
    </section>

    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container columns">
          <div class="column">
            <div class="notification is-success">
              <div class="title">
                <i class="fa-solid fa-people-group"></i>
                Multiplayer
              </div>
            </div>
          </div>

          <div class="column">
            <div class="notification is-warning">
              <div class="title">
                <i class="fa-solid fa-zap"></i>
                Competitive
              </div>
            </div>
          </div>

          <div class="column">
            <div class="notification is-danger">
              <div class="title">
                <i class="fa-solid fa-brain"></i>
                Intellectual
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="title">Title</div>
          <div class="subtitle">Title</div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <strong>Balda</strong> by
        <a href="https://wvovaw.github.io/">
          wvovaw
          <i class="fa-solid fa-globe"></i>
        </a>
        <br />The
        <a href="https://github.com/balda-the-game/">
          source code
          <i class="fa-brands fa-github"></i>
        </a>
        is licensed
        <a href="http://opensource.org/licenses/mit-license.php"
          ><strong>MIT</strong></a
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss">
// *:not(path):not(g) {
//   color: hsla(210, 100%, 100%, 0.9) !important;
//   background: hsla(210, 100%, 50%, 0.5) !important;
//   outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
//   box-shadow: none !important;
// }
</style>
