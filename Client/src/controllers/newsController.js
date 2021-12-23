import { ClientAxiosBack } from "../config/configAxios";

//Get All News from BBDD
export const GetStoredNews = async (setStoredNews) => {
  try {
    const response = await ClientAxiosBack.get("/news");
    await setStoredNews(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const PostStoredNews = async (news) => {
  try {
    await ClientAxiosBack.post("/news", news);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteStoredNews = async (reportId) => {
  try {
    await ClientAxiosBack.delete(`/news/${reportId}`);
  } catch (error) {
    console.log(error);
  }
};
