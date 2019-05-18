export const formatTime = seconds => {
  let hh = Math.floor(seconds/3600);
  let mm = Math.floor(seconds/60) % 60;
  let ss = Math.floor(seconds) % 60;
  hh = (hh == 0) ? '' : hh+':'
  mm = (hh != '' && mm < 10) ? "0"+mm+":" : mm+":"
  ss = (ss < 10) ? "0"+ss : ss
  return hh+mm+ss
}