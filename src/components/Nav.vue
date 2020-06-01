<template lang="html">
  <div class="header">
    <div class="header__logo">Todo manager</div>
    <div class="header__buttons">
      <router-link  to="/create"
                    class="header__button"
                    active-class="header__button_active" exact
      >
        Create
      </router-link>
      <router-link  to="/"
                    class="header__button"
                    active-class="header__button_active" exact
      >
        Main
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss">
@import '../style.scss';
.header {
    display: flex;
    background-color: $color_main;
    color: $color_white;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 0 20px;
    margin-bottom: 50px;

    &__logo {
        margin-right: auto;
        text-transform: uppercase;
        font-weight: bold;
        align-self: center;
        padding: 10px 0;
        font-size: 1.2rem;
    }

    &__buttons {
        display: flex;
    }

    &__button {
        color: inherit;
        padding: 15px 10px;
        transition: background-color 0.5s;

        &:hover {
            background-color: $color_active;
        }

        &_active {
          background-color: $color_active;
        }
    }

}
</style>
