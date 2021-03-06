<template>
  <nav :class="$style.sidebar">
    <ul :class="$style.sidebar__list">
      <li :class="$style.sidebar__item" @click="openMenu">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
        Home
      </li>
      <div v-show="menuOpen" :class="$style.sidebar__menu">
        <ul>
          <li v-for="app in apps" :key="app.id" @click="openApp(app)">
            {{ app.name }}
            open : {{ app.isOpen }}
          </li>
        </ul>
      </div>
      <li :class="$style.sidebar__apps">
        <ul :class="$style.sidebar__sublist">
          <li v-for="app in openApps" :key="app.id" :class="$style.sidebar__sublist__item" @click="minified(app)">
            {{ app.name }}
            minified : {{ app.properties.minified }}
          </li>
        </ul>
      </li>
      <li :class="$style.sidebar__item">
        <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>
        {{ date }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Application } from '~/core'

@Component
export default class ActivityBar extends Vue {
  menuOpen: boolean = false
  date: string = new Date().toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric'
  })

  apps: Application[] = [
    new Application('Terminal'),
    new Application('Files')
  ]

  mounted () {
    setInterval(this.updateDate, 1000)
  }

  get openApps () {
    const openApps: Application[] = []

    this.apps.forEach((app) => {
      if (app.open) {
        openApps.push(app)
      }
    })

    return openApps
  }

  updateDate () {
    this.date = new Date().toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  openMenu () {
    this.menuOpen = !this.menuOpen
  }

  openApp (app: Application) {
    app.isOpen = true
  }

  minified (app: Application) {
    app.properties!.minified = !app.properties!.minified
  }
}
</script>

<style lang='scss' module>
$background: #34495e;

.sidebar {
  width: 100%;
  height: 100%;
  border-top: 2px solid #fff;
  background-color: $background;
  position: relative;

  .sidebar__list {
    list-style-type: none;
    padding: 0;
    height: 100%;
    display: grid;
    grid-template-columns: 6rem 1fr 12rem;
    grid-template-areas: 'menu windows date';

    .sidebar__item {
      padding: 0.5rem 1rem;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 1rem;
        margin-right: 0.2rem;
      }

      &:first-child {
        background-color: #fff;
        color: #000;
      }

      &:last-child {
        cursor: auto;
      }
    }
  }

  .sidebar__apps {
    overflow-x: auto;
  }

  .sidebar__sublist {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    width: 100%;
    height: 100%;

    &__item {
      padding: 0.5rem 1rem;
      color: #fff;
      cursor: pointer;
      white-space: nowrap;
    }
  }

  .sidebar__menu {
    position: absolute;
    bottom: 2.9rem;
    left: 0;
    background-color: $background;
    border: 2px solid #fff;
    min-width: 15vw;
    min-height: 40vh;
    max-height: 60vh;
    overflow-y: scroll;

    ul {
      list-style-type: none;
      padding: 0;

      li {
        color: #fff;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background-color ease-in-out 0.2s;

        &:hover {
          background-color: lighten($background, 5%);
        }
      }
    }
  }
}
</style>
