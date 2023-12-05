"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_tui_icon2 = common_vendor.resolveComponent("tui-icon");
  _easycom_tui_icon2();
}
const _easycom_tui_icon = () => "../../components/thorui/tui-icon/tui-icon.js";
if (!Math) {
  _easycom_tui_icon();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("hello world");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "about"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/other projects/train-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
