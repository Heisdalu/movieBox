/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  env: {
    NEXT_TDMB:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2M1ZmY3MWFhN2VjZjM5NGYzOGUzZmY3OGM2ZjczOSIsInN1YiI6IjY0ZmZhMTdhZDdkY2QyMDBmZmViMTNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5J-vCNqvTcDOR-mawpln2vz7opQjfc40LfKta6Q6Stg",
  },
};

module.exports = nextConfig;
