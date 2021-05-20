import request from '@/utils/request'

/*
  获取配置
*/
export function getConfig(data) {
  return request({
    url: `/deer_api/index.php/Api/index/get_config`,
    method: 'POST',
    data
  })
}
/*
  正常登录、自动登录
*/
export function loginAuto(data) {
  return request({
    url: `/deer_api/index.php/Api/index/login`,
    method: 'POST',
    data
  })
}
/*
  获取用户信息
*/
export function getAuth(data) {
  return request({
    url: `/deer_api/index.php/Api/Index/auth`,
    method: 'GET',
    params: data
  })
}
/*
  获取系统配置信息
*/
export function getParam(data) {
  return request({
    url: `/deer_api/index.php/Api/Index/param_list`,
    method: 'GET',
    data
  })
}