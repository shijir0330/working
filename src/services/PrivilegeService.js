import http from "./http-common";

class Service {
  getAll() {
    return http.get("/privileges");
  }

  get(id) {
    return http.get(`/privileges/${id}`);
  }

  create(data) {
    return http.post("/privileges", data);
  }

  update(id, data) {
    return http.put(`/privileges/${id}`, data);
  }

  delete(id) {
    return http.delete(`/privileges/${id}`);
  }

  deleteAll() {
    return http.delete(`/privileges`);
  }

  findByTitle(name) {
    return http.get(`/privileges?title=${name}`);
  }
}

export default new Service();