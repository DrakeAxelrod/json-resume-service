import axios from "axios";
import { origin } from "../utils/host-info"

export const api = axios.create({
  baseURL: origin
})
