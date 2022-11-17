<template>
  <div class="input">
    <label for="{{type}}">{{ label_name }}</label>
    <input class="form-control" type="{{type}}" name="{{name}}" />
  </div>
</template>

<script>
export default {
  props: {
    label_name: String,
    type: String,
    name: String
  }
}
</script>
