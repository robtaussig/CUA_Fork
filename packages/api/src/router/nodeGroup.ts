import { router, publicProcedure, protectedProcedure } from '../trpc'
import { z } from 'zod'

export const nodeGroupRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.nodeGroup.findMany({
      where: {
        OR: [
          { type: { not: 'PRIVATE'}},
          { nodeGroupMembers: {
            some: {
              userId: ctx.user?.id ?? 'unauthenticated'
            }
          }}
        ],
      },
      include: {
        _count: {
          select: {
            nodes: true,
          }
        }
      }
    })
  }),
  one: publicProcedure.input(
    z.object({
      id: z.string(),
    })
  ).query(async ({ ctx, input }) => {
    const nodeGroup = await ctx.prisma.nodeGroup.findFirst({
      where: { id: input.id },
      include: {
        nodeGroupMembers: {
          select: {
            userId: true,
          }
        }
      }
    });

    if (nodeGroup?.type !== 'PRIVATE') return nodeGroup;
    if (nodeGroup.nodeGroupMembers.some(({ userId }) => userId === ctx.user?.id)) {
      return nodeGroup;
    }
  }),
  delete: protectedProcedure
    .input(
      z.object({
        nodeGroupId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.nodeGroup.deleteMany({
        where: {
          id: input.nodeGroupId,
          creator: {
            id: ctx.user.id
          }
        }
      })
    }),
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.nodeGroup.create({
        data: {
          name: input.name,
          creator: {
            connect: {
              id: ctx.user.id,
            },
          },
          nodeGroupMembers: {
            create: {
              user: {
                connect: {
                  id: ctx.user.id
                }
              }
            }
          }
        },
      })
    }),
})
