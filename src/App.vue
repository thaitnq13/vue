<template>
  <router-view id="content" />
</template>

<style>
#content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
}

.container {
  width: 400px;
  max-width: 95%;
}
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.input > label {
  text-align: start;
}
.input > input {
  margin-top: 6px;
  height: 38px !important;
}

.btn-submit {
}

/*  */
.alternative-option {
  text-align: center;
}
.alternative-option > span {
  color: #0d6efd;
  cursor: pointer;
}
.error-message {
  color: red;
}
</style>
