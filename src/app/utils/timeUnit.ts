export function timeUnit (time:number) {
    var hours = Math.floor(time/60);
    var minutes = time % 60;
    return (hours === 0 ? '' : hours + 'h ') + (minutes === 0 ? '' : minutes + 'min') 
  }
