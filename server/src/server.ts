import express, { response } from 'express';
import {PrismaClient} from '@prisma/client'

const app = express ()
const prisma = new PrismaClient ({
      log: ['query']
})

app.get('/games', async (request, response) => {
   const games = await prisma.game.findMany({
      include: {
         _count: {
            select: {
               Ad: true,
            }  
         }
      }
   })
   return response.json(games);
})

app.post('/ads', (request, response) => {
   return response.status(201).json([]);
})
app.get('/games/:id/ads', async (request, response) => {
   const gameId = request.params.id;
   const ads = await prisma.ad.findMany({
      where: {
         gameId,
      }
   }) 
   return response.json(ads)
})

app.get('/ads/:id/discord', (request, response) => {
   return response.json([ ])
})

app.listen(3333)