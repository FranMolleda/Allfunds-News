import { ClientAxiosBack } from "../config/configAxios";

export const GetStoredArchives = async (setArchivedStored) => {
  try {
    const response = await ClientAxiosBack.get("/archived");
    setArchivedStored(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const PostStoredArchives = async (archive) => {
  try {
    await ClientAxiosBack.post("/archived", archive);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteStoredArchives = async (archivesId) => {
  try {
    await ClientAxiosBack.delete(`/archived/${archivesId}`);
  } catch (error) {
    console.log(error);
  }
};
