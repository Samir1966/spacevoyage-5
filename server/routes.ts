import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { json } from "express";
import { handleCosmosRequest } from "./cosmos-agent";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  const apiRouter = app.route('/api');
  
  // Get all articles
  app.get('/api/articles', async (req, res) => {
    try {
      const articles = await storage.getAllArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  });
  
  // Get article by ID
  app.get('/api/articles/:id', async (req, res) => {
    try {
      const article = await storage.getArticleById(parseInt(req.params.id));
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch article' });
    }
  });
  
  // Get all planets
  app.get('/api/planets', async (req, res) => {
    try {
      const planets = await storage.getAllPlanets();
      res.json(planets);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch planets' });
    }
  });
  
  // Get planet by ID
  app.get('/api/planets/:id', async (req, res) => {
    try {
      const planet = await storage.getPlanetById(parseInt(req.params.id));
      if (!planet) {
        return res.status(404).json({ error: 'Planet not found' });
      }
      res.json(planet);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch planet' });
    }
  });
  
  // Get all missions
  app.get('/api/missions', async (req, res) => {
    try {
      const missions = await storage.getAllMissions();
      res.json(missions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch missions' });
    }
  });
  
  // Get mission by ID
  app.get('/api/missions/:id', async (req, res) => {
    try {
      const mission = await storage.getMissionById(parseInt(req.params.id));
      if (!mission) {
        return res.status(404).json({ error: 'Mission not found' });
      }
      res.json(mission);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch mission' });
    }
  });
  
  // Subscribe to newsletter
  app.post('/api/subscribe', json(), async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
      
      const subscriber = await storage.createSubscriber({ email });
      res.status(201).json(subscriber);
    } catch (error) {
      res.status(500).json({ error: 'Failed to subscribe' });
    }
  });
  
  // COSMOS Space Agent API endpoint
  app.post('/api/cosmos-agent', json(), handleCosmosRequest);

  const httpServer = createServer(app);

  return httpServer;
}
