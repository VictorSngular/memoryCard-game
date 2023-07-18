export const handleUserAuth = (() => {
  let instance: { value: string; set: (val: string) => void } | null = null;
  function createInstance(): { value: string; set: (val: string) => void } {
    return {
      value: localStorage.getItem("user") || "",
      set: function (username: string) {
        this.value = username;
        localStorage.setItem("user", username);
      },
    };
  }
  return {
    getInstance: () => {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();
