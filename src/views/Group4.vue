<template>
  <v-card>
    <v-text-field
      append-icon="mdi-magnify"
      label="Search"
      single-line
      v-model="search"
    ></v-text-field>

    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="4"
      :search="search"
    >
      <template v-slot:top>
        <v-dialog v-model="dialog" persistent max-width="415px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Add User
            </v-btn>
          </template>
          <user-modal
            :form="form"
            :index="itemIndex"
            @output="submitUser"
            @close="closeModal"
          ></user-modal>
        </v-dialog>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <v-alert v-if="showSuccess" type="success">
      Your request was finished successfully.
    </v-alert>
    <v-alert v-if="showError" type="success">
      Internal server error.
    </v-alert>
  </v-card>
</template>

<script>
import axios from "axios";
import UserModal from "./UserModal.vue";
export default {
  name: "Group4",
  watch: {
    $route(value) {
      this.showModal = value.meta && value.meta.dialog;
    }
  },
  data() {
    return {
      dialog: false,
      search: "",
      items: [],
      headers: [
        {
          text: "ID",
          value: "id",
          sortable: false,
          filterable: false
        },
        {
          text: "First Name",
          value: "first_name"
        },
        {
          text: "Last Name",
          value: "last_name"
        },
        {
          text: "Email",
          value: "email"
        },
        {
          text: "",
          value: "actions",
          sortable: false,
          filterable: false
        }
      ],
      form: {
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        avatar: null
      },
      defaultForm: {
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        avatar: null
      },
      itemIndex: -1,
      showSuccess: false,
      showError: false
    };
  },
  components: {
    "user-modal": UserModal
  },
  created() {
    axios
      .get("https://reqres.in/api/users")
      .then(response => {
        this.items = response.data.data;
      })
      .catch(e => {
        this.erros.push(e);
        this.callErrorAlert();
      });
  },
  methods: {
    editItem(user) {
      this.itemIndex = this.items.indexOf(user);
      this.form = Object.assign({}, user);
      this.dialog = true;
    },
    submitUser(value) {
      console.log(value);
      if (this.itemIndex > -1) {
        Object.assign(this.items[this.itemIndex], this.form);
      } else {
        let ids = [];
        this.items.forEach(element => {
          ids.push(element.id);
        });
        this.form.id = Math.max.apply(null, ids) + 1;
        this.items.push(this.form);
      }
      this.callSuccessAlert();
      this.closeModal();
    },
    deleteItem(user) {
      this.itemIndex = this.items.indexOf(user);
      this.items.splice(this.itemIndex, 1);
      this.callSuccessAlert();
    },
    callSuccessAlert() {
      this.showSuccess = true;
      setTimeout(() => (this.showSuccess = false), 3000);
    },
    callErrorAlert() {
      this.showError = true;
      setTimeout(() => (this.showError = false), 3000);
    },
    closeModal() {
      this.$nextTick(() => {
        this.form = Object.assign({}, this.defaultForm);
        this.itemIndex = -1;
      });
      console.log(this.form);
      this.dialog = false;
    }
  }
};
</script>

<style>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
  padding: 15px;
}
.img-responsive {
  width: 50%;
  border-radius: 50%;
}
.user-form {
  text-align: center;
}
input {
  margin-bottom: 5px;
}
</style>
