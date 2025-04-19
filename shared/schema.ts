import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Articles Table
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  summary: text("summary").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  publishedAt: timestamp("published_at").notNull(),
});

export const insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
});

export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;

// Planets Table
export const planets = pgTable("planets", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  color: text("color").notNull(),
  imageUrl: text("image_url").notNull(),
  orderFromSun: integer("order_from_sun"),
  diameter: integer("diameter"),
  moons: integer("moons"),
  distanceFromSun: text("distance_from_sun"),
});

export const insertPlanetSchema = createInsertSchema(planets).omit({
  id: true,
});

export type InsertPlanet = z.infer<typeof insertPlanetSchema>;
export type Planet = typeof planets.$inferSelect;

// Missions Table
export const missions = pgTable("missions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  targetLocation: text("target_location").notNull(),
  status: text("status").notNull(),
  launchDate: timestamp("launch_date"),
  imageUrl: text("image_url"),
});

export const insertMissionSchema = createInsertSchema(missions).omit({
  id: true,
});

export type InsertMission = z.infer<typeof insertMissionSchema>;
export type Mission = typeof missions.$inferSelect;

// Newsletter Subscribers Table
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
  isActive: boolean("is_active").default(true).notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

// Users Table (from template)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
