export function isAdmin() {
    if (typeof window !== "undefined") {
      const role = window.localStorage.getItem("role");
      if (role === "3287983d-0be7-488f-998d-4fa266e1d484") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  