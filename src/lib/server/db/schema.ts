import { pgTable, serial, text, integer, timestamp, uuid } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
    id: uuid('id').primaryKey().defaultRandom(),
    createdAt: timestamp('created_at').notNull(),
    username: text('username').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
});

export const session = pgTable("session", {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id').notNull().references(() => user.id),
    expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull(),
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;



export const course = pgTable("course", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    createdAt: timestamp('created_at').notNull(),
    description: text("description").notNull(),
    instructorId: uuid("instructor_id").references(() => user.id).notNull(),
});

export const lesson = pgTable("lesson", {
    id: uuid("id").primaryKey().defaultRandom(),
    courseId: uuid("course_id").references(() => course.id).notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp('created_at').notNull(),
});

export type Course = typeof course.$inferSelect;

export type Lesson = typeof lesson.$inferSelect;
