import { json_resume2md } from "./json_resume2md";
import axios from "axios";

export const test_json_resume2md = async () => {
  const { data } = await axios.get("/api/github/gists/json?username=DrakeAxelrod")
  console.log(data)
}
