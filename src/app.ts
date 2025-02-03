import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcast-controller' 
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";



export const app = async (request: http.IncomingMessage, res: http.ServerResponse ) =>{
        
        
    const baseUrl = request.url?.split("?")[0];
    
    
    //listar episodios   
  if(request.method === HttpMethod.GET  && baseUrl === Routes.LIST){
        await getListEpisodes(request, res);
     }
     // Filtrar episodios
     if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
         await getFilterEpisodes(request,res);
     }
 };

