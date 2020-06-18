import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Users",
    component: Home
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "Users" */ "../views/Users.vue")
  },
  {
    path: "/user/:id",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "User" */ "../views/User.vue")
  
  },
  {
    path: "/roles",
    name: "Roles",
    component: () =>
      import(/* webpackChunkName: "Roles" */ "../views/Roles.vue")
  },
  {
    path: "/privileges",
    name: "Privileges",
    component: () =>
      import(/* webpackChunkName: "Privileges" */ "../views/Privileges.vue")
  },
  {
    path: "/adduser",
    name: "AddUser",
    component: () =>
      import(/* webpackChunkName: "AddUser" */ "../components/AddUser.vue") 
  },
  {
    path: "/addrole",
    name: "AddRole",
    component: () =>
      import(/* webpackChunkName: "AddRole" */ "../components/AddRole.vue") 
  },
  {
    path: "/addprivilege",
    name: "AddPrivilege",
    component: () =>
      import(/* webpackChunkName: "AddUser" */ "../components/AddPrivilege.vue") 
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
