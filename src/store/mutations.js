import * as types from "./types"
const  mutations={
	[types.CURRNAME](state,currName){
		state.currName=currName		
	},
	[types.CURRICO](state,currIco){
		state.currIco=currIco	
	},
	[types.CURRUSER](state,currUser){
		state.currUser=currUser
	},
	[types.CURRUSERICO](state,currUserIco){
		state.currUserIco=currUserIco
	}
}
export default mutations