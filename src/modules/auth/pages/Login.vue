<template>

  <div class="containerLogIn">
    <div class="d-flex align-items-center justify-content-center pb-4">
      <img src="/images/veraLogoPng.png" style="width: 30px;" alt="">
      <span style="font-size: 22px;font-weight: 600; color: #20986E;">era</span>
    </div>
    <div class="modalInnerLogIn">
      <b style="font-size: 18px;">Che bello rivederti!</b>
      <div class="inputGroup col-12">
        <label for="">Username</label>
        <input v-model="username" type="text" placeholder="Username">
      </div>
      <div class="inputGroup col-12">
        <label for="">Password</label>
        <input v-model="password" type="password" placeholder="Password">
        <div style="text-align: end;font-size: 12px;text-decoration: underline;" class="mt-1">
          Hai dimenticato la password?
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-center mt-4">
      <button class="generalButton" @click="login">LogIn</button>
    </div>



  </div>
  <div class="logInCredit">
    Un prodotto a cura di <a href="https://prensys.it/">Prensys</a>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
const username = ref("")
const password = ref("")
const router = useRouter()
function login() {
  console.log("Username:", username.value)
  console.log("Password:", password.value)
  alert("Simulazione login")
  router.push("/dashboard")
}
</script>

<style>
.modalInnerLogIn {
  width: 350px;
  padding: 35px;
  border-radius: 25px;
  background-color: #fff;
}

.containerLogIn {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logInCredit {
  position: fixed;
  bottom: 10px;
  /* left: 50%; */
  /* transform: translateX(-50%); */
  font-size: 14px;
  width: 100%;
  text-align: center;
  text-wrap: nowrap;
}
</style>