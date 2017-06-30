<template>
  <div id="server">
    <h1>{{title}}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
        <li v-for="item in items" v-bind:class="{finished:item.isFished}" v-on:click="toggleFinish(item)">
            {{item.label}}
        </li>
    </ul>
  </div>
</template>
<style>
        
</style>
<script>
export default {
  data: function () {
    return {
      title: 'this is a todo list88',
      items: [
          
      ],
      newItem: ""
    }
  },
  methods: {
      toggleFinish:function(item) {
          console.log(item)
      },
      addNew: function () {
          this.items.push({
              label: this.newItem,
              isFished: false
          })
          console.log(this.newItem)
          this.newItem = ""
      }
  }
}
</script>

<style>
.finished {
  display: none;
}
</style>