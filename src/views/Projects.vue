<template>
  <v-container>
    <v-row class="p-5" no-gutters>
      <v-col id="card" class="pa-2" cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
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
                마이크로프론트엔드 아키텍쳐 쳐 댓글 컴포넌트 개발
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col id="card" class="pa-2" cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
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
            <v-card-text class="pt-6" style="position: relative">
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
                다양한 프론트엔드, 백엔드 테스트를 통해 웹 개발에 필요한 것들을
                공부한다.
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col id="card" class="pa-2" cols="12" sm="4"
        ><v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
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
              <a href="https://lajancia.github.io//BERT/"
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
                데이터 청년 캠퍼스
              </div>
              <h3 class="text-h6 font-weight-light accent--text mb-2">
                KoBERT 김성 분석 다이어리 Return :Diary 개발
              </h3>
              <div class="font-weight-light text-h8 mb-2">
                프로젝트 주관 : 데이터 청년 캠퍼스
                <br />
                프로젝트 타입 : 팀 프로젝트
                <br />
                팀 역할 : 팀장, KoBERT 모델 학습, Django 개발, 발표자
                <br />
                사용 프로그램 : Django, Pytorch, javascript, VScode
                <br />
                활동 내용 : KoBERT 모델을 이용하여 입력된 일기장 텍스트로부터
                행복, 즐거움, 슬픔, 분노 네 가지 감정을 분석할 수 있는 일기장
                개발
              </div>
            </v-card-text>
          </v-card>
        </v-hover></v-col
      >
      <v-col id="card" class="pa-2" cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
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
            <v-card-text class="pt-6" style="position: relative">
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
      <v-col id="card" class="pa-2" cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out accent darken-2 v-card--reveal text-h4 white--text"
                  style="height: 100%"
                >
                  Outsourcing
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
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
              <div class="font-weight-light grey--text text-h6 mb-2">
                브로드웨이브
              </div>
              <h3 class="text-h4 font-weight-light accent--text mb-2">
                QW cooking utensils
              </h3>
              <div class="font-weight-light text-h6 mb-2">
                Our Vintage kitchen utensils delight any chef.<br />
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col id="card" class="pa-2" cols="12" sm="4"
        ><v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
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
              <div class="font-weight-light grey--text text-h6 mb-2">
                For the perfect meal
              </div>
              <h3 class="text-h4 font-weight-light accent--text mb-2">
                QW cooking utensils
              </h3>
              <div class="font-weight-light text-h6 mb-2">
                Our Vintage kitchen utensils delight any chef.<br />
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover></v-col
      >
    </v-row>
  </v-container>
</template>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
