import axios from "axios";

const token = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      "https://grs.pythonanywhere.com/token/",
      { username, password },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFTOKEN": "Z0lq0t32KBawcjyIfV4mhibVi70GhPtL",
        },
      }
    );

    return response.data; // بازگشت داده‌های پاسخ سرور
  } catch (error: any) {
    console.error(
      "Error:",
      error.response?.data || error.message // نمایش خطای دریافت‌شده از سرور
    );
    throw error;
  }
};

export default token;
