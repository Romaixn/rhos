<template>
  <nav :class="[$style.sidebar]">
    <ul :class="[$style.sidebar__list]">
      <li :class="[$style.sidebar__item]">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        Home
      </li>
      <li :class="[$style.sidebar__item, $style.sidebar__apps]">
        <ul :class="[$style.sidebar__sublist]">
          <li>
            Current apps
          </li>
        </ul>
      </li>
      <li :class="[$style.sidebar__item]">
        {{ date }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ActivityBar',
  data() {
    return {
      date: new Date().toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss" module>
.sidebar {
  width: 100%;
  height: 100%;
  border-top: 2px solid #fff;
  background-color: #34495e;

  .sidebar__list {
    list-style-type: none;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;

    .sidebar__item {
      padding: .5rem 1rem;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;

      &:last-child {
        flex: 1 1 auto;
      }

      svg {
        width: 1rem;
        margin-right: .2rem;
      }
    }

    .sidebar__apps {
      flex: 1 1 88%;
    }
  }

  .sidebar__sublist {
    list-style-type: none;
    padding: 0;
    width: 100%;
  }
}
</style>
