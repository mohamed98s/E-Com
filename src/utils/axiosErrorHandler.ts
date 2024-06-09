import { isAxiosError } from "axios";

function axiosErrorHandler(error :unknown) {
    if (isAxiosError(error)) {
        return error.response?.data.message || error.message;
      } else {
        return "An unknown error occurred";
      }
}

export default axiosErrorHandler;