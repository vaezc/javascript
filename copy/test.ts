const getLocationQuery = (url: string, name: string) => {
  // get window.location.hash params
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  try {
    const resReg = url.split("?")[1] ? url.split("?")[1].match(reg) : null;
    return resReg !== null ? decodeURIComponent(resReg[2]) : null;
  } catch (err) {
    console.log(err);
  }
};

let testUrl =
  "http://dev.hunliji.com/p/frontend/adv_manage_center/dist/#/index?jti=test:test";
console.log(getLocationQuery(testUrl, "jti"));
