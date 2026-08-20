import sleep from "@3-/sleep";
import "../../Toast.js";
import { toast } from "../../../js/Toast.js";

export default (root) => {
  const auth = root.querySelector("c-auth");
  if (!auth) return;

  auth.onSignup = async (mail, name, _pwd, code) => {
    await sleep(600);
    toast((el) => {
      el.textContent = "注册成功: " + name + " (" + mail + ") 验证码: " + code;
    });
    return [0, mail, name, code];
  };

  auth.onResend = async (mail) => {
    await sleep(500);
    toast((el) => {
      el.textContent = "验证码已重新发送至: " + mail;
    });
  };

  auth.onLogin = async (mail, _pwd) => {
    await sleep(600);
    toast((el) => {
      el.textContent = "登录成功: " + mail;
    });
    return [0, mail];
  };

  auth.onSmsSend = async (phone) => {
    await sleep(500);
    toast((el) => {
      el.textContent = "验证码已发送: " + phone;
    });
    return 60;
  };

  auth.onSmsVerify = async (phone, code) => {
    await sleep(600);
    toast((el) => {
      el.textContent = "手机号验证成功: " + phone + " 验证码: " + code;
    });
    return [0, phone];
  };

  auth.onPassport = (provider) => {
    toast((el) => {
      el.textContent = "第三方登录: " + provider;
    });
  };

  auth.onReset = (mail) => {
    toast((el) => {
      el.textContent = "重置密码: " + mail;
    });
  };
};
