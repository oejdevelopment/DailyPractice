function htmlspecialchars(formData) {
  return formData.replace(/[<>"&]/g, function (match) {
    return {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "&": "&amp;",
    }[match];
  });
}
