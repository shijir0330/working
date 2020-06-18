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
        <th scope="row">Confirmation Token</th>
        <td>
          <input type="text" class="form-control" id="confirmation_token"
            v-model="info.confirmation_token"
          />  
        </td>
      </tr>
      <tr>
        <th scope="row">email</th>
        <td>
          <input type="email" class="form-control" id="email"
            v-model="info.email"
          />  
        </td>
      </tr>
      <tr>
        <th scope="row">enabled</th>
        <td>
          <input type="checkbox" class="form-control" id="enabled"
            v-model="info.enabled"
          />  
        </td>
      </tr>
      <tr>
        <th scope="row">Firebase Token</th>
        <td>
          <input type="text" class="form-control" id="firebase_token"
            v-model="info.firebase_token"
          />  
        </td>
      </tr>
      <tr>
        <th scope="row">First Name</th>
        <td>
          <input type="text" class="form-control" id="firstname"
            v-model="info.firstname"
          />  
        </td>
      </tr>
      <tr>
        <th scope="row">Last Name</th>
        <td>
          <input type="text" class="form-control" id="lastname"
            v-model="info.lastname"
          />  
        </td>
      </tr>
      <tr>
        <th scope="row">Password</th>
        <td>
          <input type="text" class="form-control" id="password"
            v-model="info.password"
          />  
        </td>
      </tr>
    </table>
    <div>
        <button class="badge badge-primary mr-2"
        v-if="info.enabled"
        @click="updateEnabled(false)"
        >
            UnPublish
        </button>
        <button v-else class="badge badge-primary mr-2"
        @click="updateEnabled(true)"
        >
            Publish
        </button>
    </div>

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
import Service from "../services/UserService";

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
          this.$router.push({ name: "Users" });
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePost() {
      Service.delete(this.info.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Users" });
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