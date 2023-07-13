"use strict";

const id  = document.querySelector("#id"), // 질의 선택지 #은 id의 id를 가져와라
 password  = document.querySelector("#password"),
 loginBtn  = document.querySelector("button");

 loginBtn.addEventListener("click", login);

 function login() {
      const req = {
        id: id.value,
        password: password.value,
      };
      console.log(req);
 }