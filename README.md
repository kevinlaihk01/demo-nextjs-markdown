This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Reference

### Google Cloud GKE

- https://cloud.google.com/kubernetes-engine/docs/quickstart
- https://cloud.google.com/kubernetes-engine/docs/tutorials/authenticating-to-cloud-platform
- https://kustomize.io/
- https://github.com/kubernetes-sigs/kustomize

### Github Actions

- https://github.com/actions/starter-workflows
- https://github.com/actions/starter-workflows/blob/fe49f6631698e7cd6ad2d94183791b61f9a59bfe/ci/google.yml
- https://docs.github.com/en/actions/guides/deploying-to-google-kubernetes-engine#configuring-a-service-account-and-storing-its-credentials
- https://docs.github.com/en/actions/reference/environment-variables

### Domain and Cerificates

- https://ithelp.ithome.com.tw/articles/10197751
- https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs

#### Redirect

- [Setting up an HTTP-to-HTTPS redirect for HTTP(S) Load Balancing](https://cloud.google.com/load-balancing/docs/https/setting-up-http-https-redirect)
- [HTTP to HTTPS redirects](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features#https_redirect)

### CDN Cache

- https://cloud.google.com/load-balancing/docs/custom-headers#variables
