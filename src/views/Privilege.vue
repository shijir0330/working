<template>
  <div>
    <table class="table table-borderless table-dark"> 
      <tr>
        <th scope="col">Id</th>
        <td scope="col">{{info.id}}</td>
      </tr>
      <tr>
        <th scope="row">Created At</th>
        <td>
          <input type="date" class="form-control" id="created_at"
            v-model="info.created_at"
          />
        </td>
      </tr>
      <tr>
        <th scope="row">Created By</th>
        <td>
          <input type="number" class="form-control" id="created_by"
            v-model="info.created_by"
          />
        </td>
      </tr>
      <tr>
        <th scope="row">Updated At</th>
        <td>
          <input type="date" class="form-control" id="updated_at"
            v-model="info.updated_at"
          />
        </td>
      </tr>
      <tr>
        <th scope="row">Updated By</th>
        <td>
          <input type="number" class="form-control" id="updated_by"
            v-model="info.updated_by"
          />
        </td>
      </tr>
      <tr>
        <th scope="row">Description</th>
        <td>
          <input type="text" class="form-control" id="description"
            v-model="info.description"
          />  
        </td>
      </tr>
      <tr>
        <th scope="row">Name</th>
        <td>
          <input type="text" class="form-control" id="name"
            v-model="info.name"
          />  
        </td>
      </tr>
    </table>

    <div class="home">
        <button class="m-3 btn btn-sm btn-danger"
        @click="deletePost"
        >
          Delete
        </button>

        <button type="submit" class="m-3 btn btn-sm btn-success"
          @click="updatePost"
        >
          Update
        </button>
    </div>
      
  </div>
</template>

<script>
import Service from "../services/PrivilegeService";

export default {
    name: "user",
  data() {
    return {
      info: null,
      message: ''
    };
  },
  methods: {
    getPost(id) {
      Service.get(id)
        .then(response => {
          this.info = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateEnable(status) {
      var data = {
        id: this.info.id,
        title: this.info.title,
        description: this.info.description,
        published: status
      };

      Service.update(this.info.id, data)
        .then(response => {
          this.info.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePost() {
      Service.put(this.info.id, this.info)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Roles" });
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePost() {
      Service.delete(this.info.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Roles" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getPost(this.$route.params.id);
  }
}
</script>