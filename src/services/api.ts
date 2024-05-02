import apiClient from "./apiClient";
import { JdListResponse } from "./interfaces/jobDescription";

export async function fetchData() {
  try {
    const body = {
      limit: 10,
      offset: 0,
    };

    const config = {
      method: "POST",
      url: "/adhoc/getSampleJdJSON",
      body,
    };

    const result = await apiClient<JdListResponse>(config);

    // Check if the result is successful
    if ("data" in result) {
      return result.data;
    } else {
      console.error("Error:", result.message);
    }
  } catch (error: unknown) {
    console.error("Error:", error);
  }
}
