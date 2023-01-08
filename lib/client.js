import dayjs from "dayjs";
import { createClient } from "next-sanity";

const apiVersion = dayjs().format("YYYY-MM-DD");

export const client = createClient({
  projectId: "imluhig2",
  dataset: "production",
  apiVersion: apiVersion,
  useCdn: false,
});


export * from "next-sanity"