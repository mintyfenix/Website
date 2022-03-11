<template>
  <div class="lang-select">
    <img src="~/assets/icons/translation.svg">
    <div class="lang-select-content">
      <button v-for="lang in $i18n.availableLocales" :key="lang" @click="$i18n.locale = lang">
        <img :src="'https://flagcdn.com/' + (lang === 'en' ? 'gb' : lang) + '.svg'" />
        {{ lang }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
  .lang-select {
    position: absolute;
    right: calc(2 * var(--padding-normal));
    top: calc(1.5 * var(--padding-normal));

    width: 32px;
    height: 32px;

    > img {
      width: 90%;
      height: 90%;
      color: white;

      &:hover {
        cursor: pointer;
      }
    }

    &:hover {
      background-color: rgba(255,255,255,.2);

      > .lang-select-content {
        display: block;
      }
    }
  }

  .lang-select-content {
    display: none;
    position: absolute;
    top: calc(3 * var(--padding-normal));
    right: 0;

    background-color: #f9f9f9;
    min-width: 100%;
    box-shadow: var(--shadow-small);
    z-index: 1;

    > button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: var(--padding-normal);
      text-transform: uppercase;
      font-size: small;

      > img {
        width: 32px;
        height: 18px;
        margin-right: var(--margin-normal);
      }

      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
</style>