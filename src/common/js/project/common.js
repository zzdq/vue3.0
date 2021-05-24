var project_name = 'S20190520EFT'
var project_path_root = '/' + (window.document.location.pathname.substring(1).substring(0, window.document.location.pathname.substring(1).indexOf('/')).indexOf(project_name) < 0 ? '' : (window.document.location.pathname.substring(1).substring(0, window.document.location.pathname.substring(1).indexOf('/')) + '/'))
var project_domain = 'web.brainbank.vip'
var project_password_front_code = 'walleteft-'
var project_oss_domain = 'oss.brainbank.vip'

export default {
  project_name,
  project_path_root,
  project_domain,
  project_password_front_code,
  project_oss_domain
}
