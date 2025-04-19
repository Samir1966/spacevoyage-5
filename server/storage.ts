import { 
  users, type User, type InsertUser,
  articles, type Article, type InsertArticle,
  planets, type Planet, type InsertPlanet,
  missions, type Mission, type InsertMission,
  subscribers, type Subscriber, type InsertSubscriber
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Article methods
  getAllArticles(): Promise<Article[]>;
  getArticleById(id: number): Promise<Article | undefined>;
  
  // Planet methods
  getAllPlanets(): Promise<Planet[]>;
  getPlanetById(id: number): Promise<Planet | undefined>;
  
  // Mission methods
  getAllMissions(): Promise<Mission[]>;
  getMissionById(id: number): Promise<Mission | undefined>;
  
  // Subscriber methods
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private articles: Map<number, Article>;
  private planets: Map<number, Planet>;
  private missions: Map<number, Mission>;
  private subscribers: Map<number, Subscriber>;
  
  private userIdCounter: number;
  private articleIdCounter: number;
  private planetIdCounter: number;
  private missionIdCounter: number;
  private subscriberIdCounter: number;

  constructor() {
    this.users = new Map();
    this.articles = new Map();
    this.planets = new Map();
    this.missions = new Map();
    this.subscribers = new Map();
    
    this.userIdCounter = 1;
    this.articleIdCounter = 1;
    this.planetIdCounter = 1;
    this.missionIdCounter = 1;
    this.subscriberIdCounter = 1;
    
    // Add some sample data
    this.initSampleData();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getAllArticles(): Promise<Article[]> {
    return Array.from(this.articles.values());
  }
  
  async getArticleById(id: number): Promise<Article | undefined> {
    return this.articles.get(id);
  }
  
  async getAllPlanets(): Promise<Planet[]> {
    return Array.from(this.planets.values());
  }
  
  async getPlanetById(id: number): Promise<Planet | undefined> {
    return this.planets.get(id);
  }
  
  async getAllMissions(): Promise<Mission[]> {
    return Array.from(this.missions.values());
  }
  
  async getMissionById(id: number): Promise<Mission | undefined> {
    return this.missions.get(id);
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberIdCounter++;
    const subscriber: Subscriber = { 
      ...insertSubscriber, 
      id, 
      subscribedAt: new Date(), 
      isActive: true 
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  private initSampleData() {
    // Sample articles
    const sampleArticles: Omit<Article, "id">[] = [
      {
        title: "The Future of Interstellar Travel",
        content: "Detailed content about interstellar travel technologies...",
        summary: "Exploring breakthrough propulsion technologies that could one day take humanity to the stars.",
        category: "Technology",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400",
        publishedAt: new Date("2023-06-12")
      },
      {
        title: "Mars Colonization Plans",
        content: "Detailed content about Mars colonization...",
        summary: "A comprehensive look at how humanity plans to establish permanent habitats on the Red Planet.",
        category: "Exploration",
        imageUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=600&h=400",
        publishedAt: new Date("2023-05-28")
      },
      {
        title: "Searching for Extraterrestrial Life",
        content: "Detailed content about search for extraterrestrial life...",
        summary: "How scientists are looking for signs of life beyond Earth using advanced telescopes and instruments.",
        category: "Science",
        imageUrl: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=600&h=400",
        publishedAt: new Date("2023-04-15")
      }
    ];
    
    // Sample planets
    const samplePlanets: Omit<Planet, "id">[] = [
      {
        name: "Mars",
        description: "The fourth planet from the Sun and the second-smallest planet in the Solar System.",
        color: "#FF6B4A",
        imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=100&h=100",
        orderFromSun: 4,
        diameter: 6779,
        moons: 2,
        distanceFromSun: "227.9 million km"
      },
      {
        name: "Venus",
        description: "The second planet from the Sun and the hottest planet in our solar system.",
        color: "#FF9A8A",
        imageUrl: "https://images.unsplash.com/photo-1630855407415-b8aa7b206435?auto=format&fit=crop&w=100&h=100",
        orderFromSun: 2,
        diameter: 12104,
        moons: 0,
        distanceFromSun: "108.2 million km"
      },
      {
        name: "Jupiter",
        description: "The largest planet in our solar system and the fifth planet from the sun.",
        color: "#F8CA90",
        imageUrl: "https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?auto=format&fit=crop&w=100&h=100",
        orderFromSun: 5,
        diameter: 139820,
        moons: 79,
        distanceFromSun: "778.5 million km"
      }
    ];
    
    // Sample missions
    const sampleMissions: Omit<Mission, "id">[] = [
      {
        name: "Mars Exploration",
        description: "A mission to explore the surface of Mars and search for signs of past life.",
        targetLocation: "Mars",
        status: "In Progress",
        launchDate: new Date("2024-07-15"),
        imageUrl: "https://images.unsplash.com/photo-1614726365952-510103b5fe98?auto=format&fit=crop&w=600&h=400"
      },
      {
        name: "Titan Atmospheric Study",
        description: "A mission to study the dense atmosphere of Saturn's moon Titan.",
        targetLocation: "Titan",
        status: "Planning",
        launchDate: new Date("2026-03-20"),
        imageUrl: "https://images.unsplash.com/photo-1614313914067-384547da3b20?auto=format&fit=crop&w=600&h=400"
      },
      {
        name: "Interstellar Probe",
        description: "A mission to send a probe beyond our solar system to study interstellar space.",
        targetLocation: "Interstellar Space",
        status: "Concept",
        launchDate: new Date("2030-01-01"),
        imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&h=400"
      }
    ];
    
    // Add sample data to maps
    sampleArticles.forEach(article => {
      const id = this.articleIdCounter++;
      this.articles.set(id, { ...article, id });
    });
    
    samplePlanets.forEach(planet => {
      const id = this.planetIdCounter++;
      this.planets.set(id, { ...planet, id });
    });
    
    sampleMissions.forEach(mission => {
      const id = this.missionIdCounter++;
      this.missions.set(id, { ...mission, id });
    });
  }
}

export const storage = new MemStorage();
