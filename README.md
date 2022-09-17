# 鐵人賽 Crypto Collectable Wallet

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-5jafjr-mdxtrn)

Next.js + chakra-ui + Tailwind CSS Example

# Crypto Collectable Wallet

![Thumbnail](https://github.com/CS6/Ithome-NFT-Collectable-Wallet/blob/master/Thumbnail.png)

> use Next.js + Tailwind CSS

## How to use App:

1. Use Home page button connect wallet:

   Get address from the Metamask Chrome/Firefox extension instead

2. Wait for the data to be ready, At the same time, you will see a green circle

3. Scroll to browse the NFT list, automatically load the last 20 data when scrolling to the bottom

4. Tap the NFT card you want to browse to access the details page

5. Click the button at the bottom of the details page to jump to opensea

```
If you want to use the mainnet API, please go to
/pages/index.tsx Line:27 Fill in `X_API_KEY` .
```

## Project feature:

- [x] Use OpenSea API to get the collectables in this Ethereum account

- [x] Implement pagination. (infinite scrolling)
- [x] Show two columns of items.
- [x] Each item shows the name and the image.
- [x] basic RWD
- [x] Show collection name on the header
- [x] Fit the image on the screen. Image should take up the entire width.
- [x] Display the name of the collectable
- [x] Display the description of the collectable, note that some collectibles have a very long description.
- [x] A fixed button on the bottom that goes to the permalink of the collectable Again.

### Bonus:

- [ ] Use RxJS for data retrieval
- [x] Use web3.js and use the address from the Metamask

https://stackblitz.com/edit/github-5jafjr-mdxtrn?file=README.md

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/github-5jafjr-mdxtrn?file=README.md)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to run

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).
