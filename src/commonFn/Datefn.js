export const formatDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };