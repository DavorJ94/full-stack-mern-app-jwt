import freezer from "../store";

export const postReq = async (history) => {
  try {
    const res = await fetch("http://127.0.0.1:3000/verifytoken", {
      method: "POST",
      body: null,
      credentials: "include",
    });
    const data = await res.json();

    if (data.verified) {
      if (!freezer.get().loggedIn) freezer.get().set("loggedIn", true);
      if (!freezer.get().email) freezer.get().set("email", data.email);
      if (!freezer.get().shouldRenderHeader)
        freezer.get().set("shouldRenderHeader", true);
      return true;
    } else {
      freezer.get().set("shouldRenderHeader", true);
      freezer.get().set("loggedIn", false);
      freezer.get().set("email", "");
      history.push("/login");
      return false;
    }
  } catch (err) {
    console.log(err.message);
  }
};
