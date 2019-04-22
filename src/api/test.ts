import request from '@/utils/request'

export function getInfo() {
    return request({
        url: '/api/user',
        method: 'get'
    })
}
