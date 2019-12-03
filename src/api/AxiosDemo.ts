import { create, get, update, remove} from '@/axios/main'

/* 调用方法实现 */ 
export const getDemo = (params: any) => {
    return get('projects', params)
}
