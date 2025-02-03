import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from '../services/list-episodes-service'
import { servicefilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/Podcast-Transfer-Model';


const defaultType = {'content-Type': ContentType.JSON}

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {



const content: PodcastTransferModel = await serviceListEpisodes();

res.writeHead(content.statusCode, defaultType);
res.write(JSON.stringify(content.body));
res.end();
};


export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {

  

    const content: PodcastTransferModel = await servicefilterEpisodes(req.url);

res.writeHead(content.statusCode, defaultType);
res.write(JSON.stringify(content.body));
res.end();
}
