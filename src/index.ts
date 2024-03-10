/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { shortURLs } from "./urls";

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// return new Response('Hello World!');

		const url = new URL(request.url);
    const pathname = url.pathname.substring(1); // remove initial /

		if (pathname === "") {
      return new Response("kmn.sh: link shortening service for the Keyman Project. Learn more at: https://github.com/keymanapp/kmn.sh 😇");
    }

		let redirectURL: string = "";

		for(const u of shortURLs) {
			if(typeof u.match == 'string') {
				if(pathname == u.match) {
					if(typeof u.redirect != 'string') {
						throw new Error('Invalid redirect');
					}
					redirectURL = u.redirect;
					break;
				}
			} else {
				const matches = u.match.exec(pathname);
				if(matches) {
					redirectURL = typeof u.redirect == 'string' ? u.redirect : u.redirect(matches);
					break;
				}
			}
		}

		if(redirectURL == "") {
			return new Response("Invalid shortlink");
		}

    return Response.redirect(redirectURL, 301);
	},
};
