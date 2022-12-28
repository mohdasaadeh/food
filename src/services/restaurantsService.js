import api from "./api";

export const getRestaurantsByTerm = async (
  term,
  resolveAction,
  rejectAction
) => {
  try {
    const response = await api.get("/search", {
      params: {
        term,
        location: "New York City",
        limit: 50,
      },
    });

    resolveAction(response.data.businesses);
  } catch (error) {
    rejectAction(error.response);
  }
};
