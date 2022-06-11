<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="~@/assets/Gallery/School/22.jpeg" height="200px"></v-img>

          <v-card-title> 중앙동아리 그림사랑 </v-card-title>

          <v-card-subtitle> 2018-03 ~ </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="show1 = !show1">
              <v-icon>{{
                show1 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text>
                동아리면 : 그림사랑
                <br />
                일러스트, 만화, 굿즈 제작
                <br />
                <br />
                2018.03 가입
                <br />
                2019.03 ~ 2020.05 총무
                <br>
                 2020.06 ~ 2021.06 회장
                <br />
                <br />
                다수의 사람들을 이끌며 비대면 행사를 개최하고 관리하는 활동을
                통해 소통 능력과 리더쉽, 책임감을 기를 수 있었다.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="~@/assets/Projects/future.jpg" height="200px"></v-img>

          <v-card-title> 한일미래포럼 </v-card-title>

          <v-card-subtitle> 2019.08.13 ~ 2019.08.16 </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="show2 = !show2">
              <v-icon>{{
                show2 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text>
                시마네현에서 열리는 한일 미래 포름에 참여하여 일본 대학생들과
                앞으로의 한일 관계에 대한 전망과 다양한 이해관계를 논의하였다.
                <br />
                <br />
                팀 주제 : 한일 관광 사업
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="~@/assets/Projects/hafs_camp.jpg" height="200px"></v-img>

          <v-card-title> HAFS CAMP 담임 멘토 활동 </v-card-title>

          <v-card-subtitle> 2019.07.22 ~ 2019.08.12 </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="show3 = !show3">
              <v-icon>{{
                show3 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>

              <v-card-text>
                활동내용 : HAFS CAMP 5학년 담임 멘토
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="~@/assets/Projects/book.jpg" height="200px"></v-img>

          <v-card-title> 종이책 출판 </v-card-title>

          <v-card-subtitle> 2018. 05. 10 ~ 2021. 01. 20 </v-card-subtitle>

          <v-card-actions>
            <v-btn text>
              <a
                class="accent--text lighten-2"
                href="http://www.yes24.com/Product/Goods/96881583"
                >Book</a
              >
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show4 = !show4">
              <v-icon>{{
                show4 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show4">
              <v-divider></v-divider>

              <v-card-text>
                B&P 3차 스토리텔링 공모전 최종 우승
                <br />
                장르: 동화
                <br />
                책 이름: 라젠시아의 마음이 그린 편지
                <br />
                필명: 라젠시아
                <br />
                3년간의 긴 출판 진행을 통해 직접 출판 과정을 경험해보고, 홍보를
                위한 컨텐츠 제작하여 독자와 소통하는 활동을 하였다.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="~@/assets/Projects/Montreal.jpeg" height="200px"></v-img>

          <v-card-title> EC Montreal </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="show5 = !show5">
              <v-icon>{{
                show5 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show5">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="~@/assets/Projects/calender.jpg" height="200px"></v-img>

          <v-card-title> 동유럽대학 타로 카드 캘린더 제작 </v-card-title>

          <v-card-subtitle> 2021.01.15 ~ 2021.02.26 </v-card-subtitle>

          <v-card-actions>
            <v-btn class="accent--text lighten-2" text><router-link class="accent--text lighten-2" to=/other> ILLUST</router-link> </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show6 = !show6">
              <v-icon>{{
                show6 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show6">
              <v-divider></v-divider>

              <v-card-text>
                활동 : 동유럽 대학교 타로카드 일러스트 외주 작업
                <br />
                <br />
                동유럽대학교 측의 창작예술분과 동아리와의 콜라보 제안을 수락하여
                진행한 타로카드 일러스트 외주 작업을 진행하였다. 해당 학과
                특성에 맞는 동유럽 신화를 차용하여 제작되었다.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
  }),
};
</script>
