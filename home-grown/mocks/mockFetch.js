const userPostsRequest = {
  profile_picture: "https://cdn-icons-png.flaticon.com/512/4775/4775505.png",
  title: "Experienced Gardener Wanted for Vegetable Garden Maintenance",
  rating: 3,
  username: "AEdmunds299",
  location: "TS26 8JA",
  crop_name: "White Mushrooms",
  plot_size: 17,
  description:
    "Seeking an experienced gardener for regular vegetable garden maintenance. Contact for details.",
  user_email: "Amina@Edmunds.com",
};

export default async function mockFetch(url) {
  return {
    ok: true,
    status: 200,
    json: async () => nameNationalizeResponse,
  };

  //   throw new Error(`Unhandled request: ${url}`);
}
