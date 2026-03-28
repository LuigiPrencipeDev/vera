<template>
  <div style="max-width: 1920px;margin: auto;">
    <router-view />
  </div>

</template>

<style>
:root {
  --primary-color: #20986E;
  --positive: #2FD89D;
}

.numberStyleGeneral span {
  color: #b5b5b5;
}

.spacerTop {
  margin-top: 80px;
}

.bi-question-circle {
  color: #989898;
  cursor: pointer;
}

.miniText {
  font-size: 12px;
  color: #6d6d6d;
}

.greenButton,
.genericButton {
  font-size: 12px;
  color: #000;
  background-color: #f6f6f6;
  padding: 5px 25px;
  border: 1px solid #d1d1d1;
  border-radius: 100px;
  transition: all 0.2s ease-in-out;
  /* font-weight: 500; */
}

.greenButton:hover {
  background-color: var(--primary-color);
  color: #fff;
  border: 1px solid var(--primary-color);
}

.officineBoxData {
  width: 220px;
  height: 140px;
  border-radius: 20px;
  border: 1px solid #d1d1d1;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.officineBoxData .numberData {
  font-size: 30px;
  font-weight: 600;
}

.officineBoxData b {
  font-size: 12px;
}
</style>