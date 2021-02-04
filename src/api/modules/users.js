import cusAxios from "@/api/cusAxios"
export default {
  getUsers (params) { return cusAxios.get('/api/getUsers', { params }) },
}