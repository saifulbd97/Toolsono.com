// MOCKED db layer - in-memory mock for unused database
const noOp = {
  findMany: async () => [],
  findFirst: async () => null,
  findUnique: async () => null,
  create: async (d: any) => d?.data ?? {},
  update: async (d: any) => d?.data ?? {},
  delete: async () => ({}),
};

export const pool: any = null;
export const db: any = new Proxy({}, {
  get: (_, prop) => (prop === "query" ? new Proxy({}, { get: () => noOp }) : async () => []),
});

export * from "./schema";
