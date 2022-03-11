<template>
  <select v-model="$i18n.locale" title="lang">
    <option
      v-for="lang in $i18n.availableLocales"
      :key="lang"
      :value="lang"
      ><v-img :src="'https://flagcdn.com/' + lang + '.svg'" />{{ lang }}</option>
  </select>
</template>