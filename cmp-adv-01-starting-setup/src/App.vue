<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponents('active-goals')">Actvie Goals</button>
    <button @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponents === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponents === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponents"></component>
    </keep-alive>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template>
    </course-goals> -->
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponents: "actvie-goals",
      activeUser: {
        name: "Dawit Endaylalu",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponents(cmp) {
      this.selectedComponents = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
