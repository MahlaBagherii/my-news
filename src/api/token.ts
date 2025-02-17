import axios from "axios";
import { useRouter } from "next/navigation";
const route = useRouter();
const token = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      "https://grs.pythonanywhere.com/token/",
      { username, password },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFTOKEN": "Z0lq0t32KBawcjyIfV4mhibVi70GhPtL"
        }
      }
    );

    // return response.data;
    // if (response.data.roled === "admin") {
    //   route.push("/");
    // } else {
    //   route.push("/");
    // }
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export default token;
