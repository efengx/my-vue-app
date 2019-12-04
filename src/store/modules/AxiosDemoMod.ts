import { Commit, Dispatch } from "vuex"
import { getDemo } from '@/api/AxiosDemo'
import { traversonDemo } from '@/api/TraversonDemo'

export interface State {
    projects: any,
    name: string
}

const state: State = {
    projects: [],
    name: 'fx'
}
const getters = {}
const mutations = {}

const actions = {
    changeName(context: {state: State}) {
        state.name = 'fengxiang'
    },

    /* 查询 Demo 对象 */ 
    async getDemo(
        context: { commit: Commit; dispatch: Dispatch; state: State },
        params: any
    ) {
        traversonDemo()

        await getDemo(params).then(
            (res: any): void => {
                state.projects = res
            }
        )
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};