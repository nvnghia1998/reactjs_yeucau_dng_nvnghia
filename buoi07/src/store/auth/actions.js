// Action Type
import authService from "../../services/auth";

// Action


// Action Async
export function actLoginPageAsync(userName, password) {
    return async (dispatch) => {
      try {
        const response = await authService.login(userName, password);
        return {
            data:true
        }
      } catch (err) {
        console.log(err.response.data);
        return{
          error: err.response.data.message
        };
      }
    }
  }