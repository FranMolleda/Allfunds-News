import { ClientAxiosBack } from "../config/configAxios";

//Get All Archives from BBDD
export const GetStoredArchives = async (setStoredArchives) => {
  try {
    const response = await ClientAxiosBack.get("/archives");
    await setStoredArchives(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const PostStoredArchives = async (archive) => {
  try {
    await ClientAxiosBack.post("/archives", archive);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteStoredArchives = async (archivesId) => {
  try {
    await ClientAxiosBack.delete(`/archives/${archivesId}`);
  } catch (error) {
    console.log(error);
  }
};
