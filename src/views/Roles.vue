<template>
  <div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="name"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Role ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="post.id" v-for="post in posts">
          <th scope="row">{{ post.id }}</th>
          <td>{{ post.name }}</td>
          <td>{{ post.description }}</td>
          <td>
            <router-link
              :to="{ name: 'User', params: { id: post.id } }"
            >More</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Service from "../services/RoleService";

export default {
  name: "roles",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrievePosts() {
      Service.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    setActivePost(post, index) {
      this.currentPost = post;
      this.currentIndex = index;
    },

    removeAllPosts() {
      Service.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      Service.findByTitle(this.name)
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievePosts();
  }
};
</script>