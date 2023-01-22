import { router } from "../trpc";
import { authRouter } from "./auth";
import { userRouter } from "./user";
import { searchRouter } from "./search";
import { browseRouter } from "./browse";
import { createRouter } from "./create";
import { settingsRouter } from "./settings";
import { nodeGroupRouter } from "./nodeGroup";

export const appRouter = router({
  user: userRouter,
  auth: authRouter,
  search: searchRouter,
  browse: browseRouter,
  create: createRouter,
  settings: settingsRouter,
  nodeGroup: nodeGroupRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
