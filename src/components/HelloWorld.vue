<template>
  <div class="hello">
    <ul>
      <template v-for="menuItem in menuItems">
        <li v-bind:key="menuItem.path">
          <a :href="menuItem.path">{{ menuItem.path }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      menuItems: [
        {
          path: '/a',
        },
        {
          path: '/b',
        },
        {
          path: '/c',
        },
        {
          path: '/d',
        },
        {
          path: '/e',
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
