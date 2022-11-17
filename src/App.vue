<template>
  <router-view id="content" />
</template>

<style>
#content {
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

.input>label {
  text-align: start;
}

.input>input {
  margin-top: 6px;
  height: 38px !important;
}

.btn-submit {
  background: #83c27f;
  width: 100%;
  border: 0;
  margin: 15px 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #37a72f;
}

/*  */
.alternative-option {
  text-align: center;
}

.alternative-option>span {
  color: #0d6efd;
  cursor: pointer;
}

.error-message {
  color: red;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
