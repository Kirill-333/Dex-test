import axios from "axios";
 import Cookies from "js-cookie";


const axiosInstance = axios.create({
  baseURL: "http://dev.trainee.dex-it.ru/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("token");
    console.log(Cookies.get('token'), 'cookies')
    // console.log(JSON.parse(localStorage.auth))
    // const authToken = JSON.parse(localStorage.auth).token.catch((e) => console.log(e))
    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const api = {
  registration(data) {
      // "https://nestjs-boilerplate-test.herokuapp.com/api/v1/auth/email/register"
      console.log(data)
      return axiosInstance.post("/Auth/SignUp", data)
      
  },
  login(data) {
    return axiosInstance.post("Auth/SignIn", data)
  },
  team: { 
    add(data) { 
      return axiosInstance.post("Team/Add", data)
    },
    getTeams(data) {
      return axiosInstance.get(`Team/GetTeams?Page=${data.page}&PageSize=${data.pageSize}`)
    },
    getTeam(data) {
      return axiosInstance.get(`Team/Get?id=${data.id}`)
    }
  },
  player: {
    add(data) {
      return axiosInstance.post("Player/Add", data)
    },
    getPositions() {
      return axiosInstance.get("Player/GetPositions")
    },
    
    getPlayers(data) {
      return axiosInstance.get(`Player/GetPlayers?${data.teamIds.map((id) => id ).join('&')}&Page=${data.page}&PageSize=${data.pageSize}`)
      // http://dev.trainee.dex-it.ru/api/Player/GetPlayers?TeamIds=2503&TeamIds=2504
      // http://dev.trainee.dex-it.ru/api/Player/GetPlayers?TeamIds=2724&2568&2503&2504&Page=1&PageSize=6
      // teamIds:[2503, 2504]
      // [{teamsIds:2503}, {teamsIds:2504}]
      // TeamIds=2503&TeamIds=2504&
      // ["TeamIds=2503&","TeamIds=2504&"]
      // ["TeamIds=2503&","TeamIds=2504&"].join('&')
      // TeamIds=2503&TeamIds=2504&
      // TeamIds=2503&&TeamIds=2504&
    },

    upDate(data) {
      return axiosInstance.put('Player/Update', data)
    },
    get(data) {
      console.log(data)
      return axiosInstance.get(`Player/Get?id=${data.id}`)
    
    }
  
  },
 
  saveImage(data) {
    return axiosInstance.post("Image/SaveImage", data)
  },

 
    
}

export default api;