import { column, defineDb, defineTable, NOW } from "astro:db";

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    lastName: column.text(),
  },
});

const Post = defineTable({
  columns: {
    title: column.text(),
    description: column.text(),
    publishDate: column.date({ default: NOW }),
    content: column.text(),
    authorId: column.number({ references: () => Author.columns.id }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Author, Post },
});
