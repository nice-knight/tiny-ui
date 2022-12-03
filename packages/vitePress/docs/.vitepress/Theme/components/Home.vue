<script setup lang="ts">
import {teams} from '../configs/contributors'
</script>

<template>
  <div class="wrap">
    <div class="title">团队成员</div>
    <div class="teamsLists">
      <div class="teamItem" v-for="team of teams" :key="team.name">
        <div  class="headIconImg">
          <img
            class="headIcon"
            width="100"
            height="100"
            :src="team.avatar"
            :alt="`${team.name}'s avatar`"
          />
        </div>

        <div class="teamName">
          {{ team.name }}
        </div>
        <div class="linkList">
          <a
          v-if="team?.github"
          class="linkItem"
          :href="`https://github.com/${team.github}`"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${team.name} on GitHub`"
        >
          <span >GitHub</span>
        </a>
        <a
         v-if="team?.twitter"
          class="linkItem"
          :href="`https://github.com/${team.twitter}`"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${team.name} on GitHub`"
        >
          <span >Twitter</span>
        </a>
        </div>
        
        <div class="desc">
          {{ team.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrap {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 50px;
  flex-direction: column;
  width: 100%;
  .headIcon {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 1px solid #ccc;
  }
  .title {

    font-weight: bold;
    text-align: center;
    margin: 48px 0 66px;
    border-top: 1px solid var(--vp-c-divider-light);
    padding-top: 24px;
    letter-spacing: 2px;
    line-height: 32px;
    font-size: 24px;
  }
  .teamsLists {
    width: 60%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 20px;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap:wrap;
    align-content: center;
    .desc{
      border: 1px solid var(--vp-c-bg-soft);
      border-radius: 12px;
      height: 100%;
      background-color: var(--vp-c-bg-soft);
      transition: border-color 0.25s, background-color 0.25s;
      padding: 10px;
      font-size: 14px;
      font-weight: 500;
      color: var(--vp-c-text-2);
    }
    .headIconImg{
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .teamItem {
      display: flex;
      align-content: center;
      flex-direction: column;
      justify-content: center;
      max-width: 240px;
     
      .linkList{
        margin: 10px;
        text-align: center;
        .linkItem{
           
          height: 28px;
          padding: 2px 6px;
          border-radius: 4px;
          margin-right: 10px;
          display: inline-block;
          text-align: center;
          font-size: 14px;
          text-decoration:underline;
          background-color: var(--vp-c-bg-soft);
        }
      }
    }
    .teamName {
      font-weight: bold;
      text-align: center;
      margin: 10px;
      
    }
  }
}
</style>
