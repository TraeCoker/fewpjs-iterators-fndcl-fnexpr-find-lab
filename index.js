function superbowlWin(record){
   const result = record.find( function(e) {return e.result === "W"})
  return result ? result.year : result
}
