const utilServices = {
  compare_date(date2) {
    const today = new Date();
    let date1 = [today.getDate(), today.getMonth() + 1, today.getFullYear()];
    date2 = date2.split("/");
    if (
      parseInt(date1[2]) === parseInt(date2[2]) &&
      parseInt(date1[1]) === parseInt(date2[1]) &&
      parseInt(date1[0]) > parseInt(date2[0])
    ) {
      return true;
    } else if (
      parseInt(date1[2]) === parseInt(date2[2]) &&
      parseInt(date1[1]) > parseInt(date2[1])
    ) {
      return true;
    } else if (parseInt(date1[2]) > parseInt(date2[2])) {
      return true;
    } else {
      return false;
    }
  },
};

export default utilServices;
