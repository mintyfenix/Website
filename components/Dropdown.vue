<template>
  <div class="dropdown">
    <a href="javascript:void(0)" class="dropdown-btn">{{ value }}</a>
    <div class="dropdown-content">
      <template v-for="link in links">
        <Dropdown class="recursive" v-if="link.isDropdown"  :value="link.value" :links="link.isDropdown" :key="'D'+link"></Dropdown>
        <a v-else :class="link.disabled ? 'disabled': ''"  :key="link" :href="link.href">{{ link.value }}</a>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
  .dropdown {
    position: relative;

    > a {
      color: #fff;
      text-decoration: none;
    }

    &:hover {
      > a {
        color: rgb(179, 179, 179);
      }

      > .dropdown-content {
        display: block;
      }
    }

    &.recursive {
      text-align: left;
      padding: 12px 16px;

      &:hover {
        cursor: default;
        background-color: rgb(48,48,48);

        > a {
          cursor: default;
          color: rgb(179, 179, 179);
        }
      }

      > .dropdown-btn {
        text-align: left;
      }

      > .dropdown-content {
        top: 0;
        left: 100%;
      }
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    left: 0;
    top: calc(4 * var(--padding-normal));
    background-color: rgb(24,24,24);
    width: max-content;
    box-shadow: var(--shadow-small);
    z-index: 1;

    > a {
      color: #fff;
      padding: 12px 16px;
      text-decoration: none;
      text-align: left;
      display: block;

      &:hover {
        color: rgb(179, 179, 179);
        background-color: rgb(48,48,48);
      }

      &.disabled {
        color: rgba(255,255,255,.2);

        &:hover {
          cursor: default;
          background-color: transparent;
        }
      }
    }
  }
</style>

<script lang="ts">
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
