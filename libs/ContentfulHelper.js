import { createClient } from "contentful";

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
  return data.filter((item) => data.field.category === category);
}
