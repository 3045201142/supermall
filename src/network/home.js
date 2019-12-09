import {req,req2} from "./request";


export function getHomeMutiData() {
	return req({
		url:'/home/multidata',
	})
}

export function getHomeGoods(type,page) {
	return req2({
		url:'/home/data',
		params: {
			'type': type,
			'page':page
		}
	})
}
