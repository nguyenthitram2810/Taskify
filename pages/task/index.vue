<template>
  <div class="pb-5">
    <header class="site-header header-transparent text-black mo-left">
      <!-- Main Header -->
      <div class="is-fixed main-bar-wraper navbar-expand-lg">
        <div class="main-bar">
          <div class="container">
            <!-- Website Logo -->
            <div class="logo-header mostion logo-dark">
              <a><img src="/images/logo_taskify.png" alt="" /></a>
            </div>
            <!-- Nav Toggle Button -->
            <button
              class="navbar-toggler collapsed navicon justify-content-end"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              class="header-nav navbar-collapse collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <div class="logo-header">
                <a><img src="/images/logo_taskify.png" alt="" /></a>
              </div>
              <ul class="nav navbar-nav navbar">
                <li>
                  <nuxt-link to="/"><span>Home</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/task"><span>Task</span></nuxt-link>
                </li>
                <li>
                  <a href="#services"><span>Services</span></a>
                </li>
                <li>
                  <a href="#features"><span>Features</span></a>
                </li>
                <li>
                  <a href="#contact"><span>Contact Us</span></a>
                </li>
                <li>
                  <a @click="logOut"
                    ><span
                      ><i
                        class="fas fa-sign-out-alt"
                        style="font-size: 20px"
                      ></i></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Main Header End -->
    </header>
    <!-- Header End -->
    <div class="container">
      <div class="row" style="padding-top: 120px">
        <div
          v-for="cate in categories"
          :key="cate.name"
          class="col-4"
          data-toggle="dragula"
          data-dragula-containers='["#trello-tasks-1", "#trello-tasks-2", "#trello-tasks-3", "#trello-tasks-4"]'
        >
          <div class="">
            <div class="card-header card-header-sm bg-success py-3">
              <h5 class="text-white mb-0 font__Roboto">{{ cate.value }}</h5>
            </div>
            <div class="card-body p-2 border border-top-0 bg-gray">
              <div
                class="trello-board__tasks-list card-list"
                id="trello-tasks-1"
              >
                <div v-for="task in cate.tasks" @click="editTask(task)" :key="task.id" class="trello-board__tasks-item mb-3 card shadow-none border">
                  <div class="p-3">
                    <p class="m-0 d-flex align-items-center">
                      <strong>{{ task.name }}</strong>
                      <span class="badge ml-auto" :class="cate.name === 'TODO' ? 'badge-light-blue' : cate.name === 'IN_PROGRESS' ? 'badge-warning' : 'badge-success'">{{ cate.name }}</span>
                    </p>

                    <p class="d-flex align-items-center mb-2">
                      {{ task.description }}
                    </p>
                    
                    <div class="media flex-row">
                      <div v-for="user in task.users" :key="user.id" class="media-left mr-2">
                        <div class="avatar avatar-xs object-fit rounded-circle" :style="`background-image: url(${user.avatar}); background-size: cover`">
                        </div>
                      </div>
                      <div class="media-body"></div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" class="btn btn-light btn-block mt-2">+ Add Card</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a-modal v-model="isModalCreateOpen" title="Basic Modal" @cancel="handleCancel">
      <template slot="title">
        <span><i class="fas fa-tasks" style="font-size: 20px;"></i> New Task</span>
      </template>
      <template slot="footer">
        <a-button key="submit" type="primary">
          Primary
        </a-button>
      </template>
      
    </a-modal>
  </div>
</template>

<script src="./script.js"></script>

<style scoped>
@import url("./style.scss");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
</style>