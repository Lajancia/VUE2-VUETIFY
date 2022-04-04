<template>
  <v-container class="main">
    <v-row class="text-center">
      <v-col cols="12" class="text--text">
        <h1 id="main1" class="mx-4">
          Hello!
          <br />
          <span> My name is </span
          ><span class="accent--text">Soomin Hwang</span>
        </h1>
        <div id="main1">
          <p class="secondary--text text-left"></p>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="text--text">
          <h1>
            I'M
            <span
              class="txt-rotate"
              data-period="2000"
              data-rotate='[ " Lajancia", " Developer", " Writer", " Illustrator"]'
            ></span>
          </h1>
        </div>
      </v-col>

      <v-col cols="12">
        <div id="sentence" class="sentence text--text">
          This Webpage is for various private front end test and back end test.
          Have displayed 3D modeling and illustrations, js aninations, project
          summaries and so on. You can freely check out the projects and arts
          that I made. Please understand that some categories are not ready.
        </div>
      </v-col>

      <v-col cols="12" id="main1" class="text--text">Projects</v-col>
      <v-row class="p-5" no-gutters>
        <v-col id="card" class="pa-2" cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img :aspect-ratio="16 / 9" src="~@/assets/Projects/img6.jpg">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out accent darken-2 v-card--reveal text-h2 white--text"
                    style="height: 100%"
                  >
                    Intern
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6 text-left" style="position: relative">
                <a
                  href="https://freezing-honeycup-f3c.notion.site/Frontend-Backend-Developer-03dbe6b96de1492fa63fc4fec04f063a"
                >
                  <v-btn
                    absolute
                    color="#2978b5"
                    class="white--text"
                    fab
                    large
                    right
                    top
                  >
                    <v-icon color="white">mdi-post-outline</v-icon>
                  </v-btn>
                </a>

                <div class="font-weight-light grey--text text-h6 mb-2">
                  COMMON MAGAZINE
                </div>
                <h3 class="text-h6 font-weight-light accent--text mb-2">
                  웹사이트 개발자 인턴
                </h3>
                <div class="font-weight-light text-h8 mb-2">
                  Our Vintage kitchen utensils delight any chef.<br />
                  Made of bamboo by hand
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col id="card" class="pa-2 text-left" cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img :aspect-ratio="16 / 9" src="~@/assets/Projects/img4.jpg">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out accent darken-2 v-card--reveal text-h2 white--text"
                    style="height: 100%"
                  >
                    Private
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6 " style="position: relative">
                <a href="https://lajancia.github.io//vue9/">
                  <v-btn
                    absolute
                    color="#2978b5"
                    class="white--text"
                    fab
                    large
                    right
                    top
                  >
                    <v-icon color="white">mdi-post-outline</v-icon>
                  </v-btn>
                </a>

                <div class="font-weight-light grey--text text-h6 mb-2">
                  PORTFOLIO WEBSITE
                </div>
                <h3 class="text-h6 font-weight-light accent--text mb-2">
                  풀스텍 웹사이트 개발 및 배포
                </h3>
                <div class="font-weight-light text-h8 mb-2">
                  사용 프로그램 : vue.js, node.js, webpack, WebGL, Three.js,
                  VScode, Hostinger Shared Hosting
                  <br />
                  활동 내용 :
                  <br />
                  현재까지 로컬 호스트에서 개발한 프로젝트를 구입한 도메인과 웹
                  프로바이더를 통해 온라인 상에서 동작 가능하게 만들어본다.
                  <br />
                  다양한 프론트엔드, 백엔드 테스트를 통해 웹 개발에 필요한
                  것들을 공부한다.
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col id="card" class="pa-2 text-left" cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img :aspect-ratio="16 / 9" src="~@/assets/Projects/img5.jpg">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out accent darken-2 v-card--reveal text-h2 white--text"
                    style="height: 100%"
                  >
                    Team
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative">
                <a href="https://lajancia.github.io//webpack-modulefederation/"
                  ><v-btn
                    absolute
                    color="#2978b5"
                    class="white--text"
                    fab
                    large
                    right
                    top
                  >
                    <v-icon color="white">mdi-post-outline</v-icon>
                  </v-btn></a
                >

                <div class="font-weight-light grey--text text-h6 mb-2">
                  CAPSTONE DESIGN
                </div>
                <h3 class="text-h6 font-weight-light accent--text mb-2">
                  Micro-Frontend UI/UX 프레임워크 구축
                </h3>
                <div class="font-weight-light text-h8 mb-2">
                  프로젝트 주관 : 한국외국어대학교 기업 연계
                  <br />
                  협업 기업 : 애버커스
                  <br />
                  사용 프로그램 : vue.js, webpack, element ui, tailwindcss,
                  Single-SPA, VScode
                  <br />
                  활동 내용 : webpack module federation을 이용하여
                  마이크로프론트엔드 아키텍쳐 댓글 컴포넌트 개발
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-col cols="12" class="text--text"
        >
        <router-link to=/projects><v-btn class="ma-2" color="accent"> And More... </v-btn></router-link>
        </v-col
      >
      <v-row no-gutters>
        <v-col id="main1" class="text--text" cols="12">SKILLS</v-col>
        <v-col cols="12"
          ><span
            ><v-btn class="ma-2" outlined color="accent">
              HTML, CSS, JS
            </v-btn></span
          >
          <span
            ><v-btn class="ma-2" outlined color="accent"> VUE </v-btn></span
          ></v-col
        >
        <v-col cols="12"
          ><span
            ><v-btn class="ma-2" outlined color="accent"> PYTHON </v-btn></span
          >
          <span
            ><v-btn class="ma-2" outlined color="accent"> NODE.JS </v-btn></span
          ><span
            ><v-btn class="ma-2" outlined color="accent"> MYSQL </v-btn></span
          ></v-col
        >
        <v-col cols="12"
          ><span
            ><v-btn class="ma-2" outlined color="accent"> SLACK</v-btn></span
          >
          <span
            ><v-btn class="ma-2" outlined color="accent"> GITHUB </v-btn></span
          ><span
            ><v-btn class="ma-2" outlined color="accent"> NOTION </v-btn></span
          ></v-col
        >
      </v-row>
    </v-row>
    <v-row class="my-5" no-gutters>
      <v-col id="main1" class="text--text text-center" col="12">CONTACT</v-col>
      <v-col cols="12" class="text-center"
        ><v-btn
          class="ma-2"
          color="accent"
          onclick="document.location =  'mailto:kie6974@gmail.com'"
        >
          Send Mail
        </v-btn></v-col
      >
    </v-row>

    <a href="https://lajancia.github.io/"
      ><v-btn fab dark large color="text" fixed right bottom>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
          />
        </svg> </v-btn
    ></a>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },

      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};
TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var that = this;
  var delta = 300 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};
window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Black+Han+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");

* {
  /* background-image: url("../assets/coffee.jpg"); */
  font-family: "Anton", sans-serif;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.main1 {
  font-size: 8rem;
}
.wrapper {
  display: flex;
}
.wrapper #static-txt {
  font-size: 30px;
}
.wrapper #dynamic-txts {
  line-height: 45px;
  height: 45px;
  overflow: hidden;
}
.txt-rotate {
  color: #2978b5;
}
.sentence {
  text-align: left;
  margin-left: 15px;
  margin-right: 15px;
}
#card{
  font-family: "Do Hyeon", sans-serif;
}
#main1 {
  font-size: 60px;
}
#dynamic-txts li {
  list-style: none;
  position: relative;
  font-size: 30px;
  font-weight: 125;
  top: 0;
  position: relative;
  animation: slide 12s steps(4) infinite;
}
@keyframes slide {
  100% {
    top: -180px;
  }
}
#sentence {
  margin-left: 5vh;
  margin-right: 5vh;
  text-align: left;
}

#dynamic-txts li::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  background-color: black;
  width: 100%;
  border-left: 2px solid white;
  animation: typing 3s steps(10) infinite;
}
@keyframes typing {
  40%,
  60% {
    left: calc(100% + 7px);
  }
  100% {
    left: 0;
  }
}
a:hover {
  color: yellow;
}
</style>
