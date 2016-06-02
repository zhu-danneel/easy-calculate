function calculate_median(arr) {
  if ((arr.length % 2) == 0)
  {
  	return (arr[(arr.length/2)]);
  }
  else 
  {
  	return (arr[parseInt(arr.length/2)]);
  }
}

module.exports = calculate_median;
