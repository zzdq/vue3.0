function shareted_common_audio_init(file) {
  var player = document.createElement('audio')
  player.preload = 'auto'
  player.src = file

  return player
}

function shareted_common_audio_play(admin_audio_player) {
  if (admin_audio_player !== null && undefined !== admin_audio_player) {
    admin_audio_player.play()
  }
}
