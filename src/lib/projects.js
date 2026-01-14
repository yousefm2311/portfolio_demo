import "server-only";
import projectsSeed from "@/data/projects";
import { getMongoDb } from "@/lib/mongodb";

const COLLECTION = "projects";
let seedPromise = null;

const safeString = (value) => (typeof value === "string" ? value : "");
const safeArray = (value) => (Array.isArray(value) ? value : []);

const normalizeLocaleBlock = (block = {}) => ({
  title: safeString(block.title),
  tagline: safeString(block.tagline),
  highlights: safeArray(block.highlights).filter(Boolean),
  story: {
    problem: safeString(block.story?.problem),
    solution: safeString(block.story?.solution),
    result: safeString(block.story?.result),
  },
  architecture: {
    overview: safeString(block.architecture?.overview),
    bullets: safeArray(block.architecture?.bullets).filter(Boolean),
  },
});

const normalizeImage = (image = {}) => ({
  src: safeString(image.src).trim(),
  alt: {
    ar: safeString(image.alt?.ar),
    en: safeString(image.alt?.en),
  },
});

const normalizeEndpoint = (endpoint = {}) => ({
  key: safeString(endpoint.key).trim(),
  label: {
    ar: safeString(endpoint.label?.ar).trim(),
    en: safeString(endpoint.label?.en).trim(),
  },
  method: safeString(endpoint.method).trim() || "POST",
  path: safeString(endpoint.path).trim(),
  sampleBody: {
    ar: endpoint.sampleBody?.ar || {},
    en: endpoint.sampleBody?.en || {},
  },
  mockResponse: endpoint.mockResponse || {},
});

const sanitizeProject = (input = {}) => {
  const slug = safeString(input.slug).trim();
  const problems = safeArray(input.problems)
    .map((item) => safeString(item).trim())
    .filter(Boolean);
  const stack = safeArray(input.stack)
    .map((item) => safeString(item).trim())
    .filter(Boolean);

  const demo = input.demo || {};
  const demoNote = demo.note || {};
  const images = safeArray(input.images)
    .map(normalizeImage)
    .filter((image) => image.src);

  const apiPlayground = input.apiPlayground || {};
  const endpoints = safeArray(apiPlayground.endpoints)
    .map(normalizeEndpoint)
    .filter((endpoint) => endpoint.key);

  const project = {
    slug,
    problems,
    stack,
    demo: {
      status: demo.status === "live" ? "live" : "coming_soon",
      url: safeString(demo.url).trim(),
      webPreviewUrl: safeString(demo.webPreviewUrl).trim(),
      note: {
        ar: safeString(demoNote.ar),
        en: safeString(demoNote.en),
      },
    },
    images,
    content: {
      ar: normalizeLocaleBlock(input.content?.ar || {}),
      en: normalizeLocaleBlock(input.content?.en || {}),
    },
  };

  if (safeString(apiPlayground.baseUrl).trim() || endpoints.length > 0) {
    project.apiPlayground = {
      baseUrl: safeString(apiPlayground.baseUrl).trim(),
      endpoints,
    };
  }

  return project;
};

const serializeProject = (project) => {
  if (!project) {
    return null;
  }
  const { _id, ...rest } = project;
  return {
    ...rest,
    _id: _id ? _id.toString() : undefined,
  };
};

const ensureSeeded = async (collection) => {
  if (seedPromise) {
    await seedPromise;
    return;
  }

  seedPromise = (async () => {
    const count = await collection.countDocuments();
    if (count > 0) {
      return;
    }
    const now = new Date();
    const docs = projectsSeed.map((project) => ({
      ...sanitizeProject(project),
      createdAt: now,
      updatedAt: now,
    }));
    if (docs.length > 0) {
      await collection.insertMany(docs);
    }
  })();

  await seedPromise;
};

const getCollection = async () => {
  const db = await getMongoDb();
  return db.collection(COLLECTION);
};

export const getProjects = async () => {
  const collection = await getCollection();
  await ensureSeeded(collection);
  const docs = await collection.find({}).sort({ updatedAt: -1 }).toArray();
  return docs.map(serializeProject);
};

export const getProjectBySlug = async (slug) => {
  if (!slug) {
    return null;
  }
  const collection = await getCollection();
  await ensureSeeded(collection);
  const doc = await collection.findOne({ slug });
  return serializeProject(doc);
};

export const createProject = async (input) => {
  const project = sanitizeProject(input);
  if (!project.slug) {
    throw new Error("slug_required");
  }
  const collection = await getCollection();
  await ensureSeeded(collection);
  const existing = await collection.findOne({ slug: project.slug });
  if (existing) {
    throw new Error("slug_exists");
  }
  const now = new Date();
  const result = await collection.insertOne({
    ...project,
    createdAt: now,
    updatedAt: now,
  });
  return serializeProject({ ...project, _id: result.insertedId });
};

export const updateProject = async (slug, input) => {
  const project = sanitizeProject({ ...input, slug });
  if (!project.slug) {
    throw new Error("slug_required");
  }
  const collection = await getCollection();
  await ensureSeeded(collection);
  const now = new Date();
  await collection.updateOne(
    { slug: project.slug },
    {
      $set: {
        ...project,
        updatedAt: now,
      },
      $setOnInsert: {
        createdAt: now,
      },
    },
    { upsert: true }
  );
  const saved = await collection.findOne({ slug: project.slug });
  return serializeProject(saved);
};

export const deleteProject = async (slug) => {
  if (!slug) {
    return false;
  }
  const collection = await getCollection();
  const result = await collection.deleteOne({ slug });
  return result.deletedCount > 0;
};
