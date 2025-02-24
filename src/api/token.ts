import axios from "axios";
import { useRouter } from "next/navigation";

const token = async (
  username: string,
  password: string
): Promise<{ access?: string; roled?: string } | null> => {
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

    return response.data;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    return null;
  }
};

export default token;
