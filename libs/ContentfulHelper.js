import { createClient } from "contentful";
import { parseISO } from "date-fns";

const POST_SLICE = 3;

export async function getAllPost() {
  const client = createClient({
    space: "up7zvjjaxklq",
    accessToken: "YON_T69vQFwEVLLJPwnL6RNxnS1qJbO94SepbDIYFo8",
    // space: process.env.CONTENTFUL_SPACE_ID,
    // accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const result = await client.getEntries({ content_type: "blog" });
  return result.items;
}

export function getPostByCategory(data, category) {
  return data.filter((item) => item.fields.category === category);
}

export function getPostByDate(data, endPoint = POST_SLICE) {
  const dataTemp = [...data];

  dataTemp.sort((a, b) => {
    let aDate = a.fields.date;
    let bDate = b.fields.date;

    // Convert to Date object
    aDate = parseISO(aDate);
    bDate = parseISO(bDate);

    return bDate.getTime() - aDate.getTime();
  });

  return dataTemp.slice(0, endPoint);
}
