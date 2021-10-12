import { createClient } from "contentful";
import { parseISO } from "date-fns";

const POST_SLICE = 3;

const client = createClient({
  // space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID,
  // accessToken: process.env.NEXT_APP_CONTENTFUL_ACCESS_KEY,
  space: "up7zvjjaxklq",
  accessToken: "YON_T69vQFwEVLLJPwnL6RNxnS1qJbO94SepbDIYFo8",
});

export async function getAllPost() {
  const result = await client.getEntries({ content_type: "blog" });
  return result.items;
}

export async function getPostByCategory(category) {
  const result = await client.getEntries({
    content_type: "blog",
    "fields.category": category,
  });
  return result.items;
}

export async function getPostBySlug(slug) {
  const result = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });
  return result.items[0];
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
