<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="created_at">created_at</label>
        <input
          type="date"
          class="form-control"
          id="created_at"
          required
          v-model="info.created_at"
          name="created_at"
        />
      </div>
      <div class="form-group">
        <label for="created_by">created_by</label>
        <input
          type="int"
          class="form-control"
          id="created_by"
          required
          v-model="info.created_by"
          name="created_by"
        />
      </div>
      <div class="form-group">
        <label for="updated_at">updated_at</label>
        <input
          type="date"
          class="form-control"
          id="updated_at"
          required
          v-model="info.updated_at"
          name="updated_at"
        />
      </div>
      <div class="form-group">
        <label for="updated_by">updated_by</label>
        <input
          type="int"
          class="form-control"
          id="updated_by"
          required
          v-model="info.updated_by"
          name="updated_by"
        />
      </div>
      <div class="form-group">
        <label for="description">description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          required
          v-model="info.description"
          name="description"
        />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="info.name"
          name="name"
        />
      </div>
      <button @click="saveInfo" class="btn btn-success">Submit</button>
    </div>
  </div>
</template>

<script>
import Service from "../services/RoleService";

export default {
  name: "add-info",
  data() {
    return {
      info: {
        title: " ",
        body: " "
      },
      submitted: false
    };
  },
  methods: {
    saveInfo() {
      var data = {
        id: this.info.id,
        title: this.info.title,
        body: this.info.body
      };

      Service.create(data)
        .then(response => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newInfo() {
      this.submitted = false;
      this.post = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>