import axios from "axios";
export default {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  }
};
// export default {
//   // Gets all users
//   getUsers: function() {
//     return axios.get("../../public/assets/employeeList.json");
//   }
// };
