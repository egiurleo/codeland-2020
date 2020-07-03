<img src="https://codeland-open-source-workshop.vercel.app/title.png" height=150px alt="Your First Open Source Contribution"/>

"Your First Open Source Contribution" is a virtual workshop for the [Codeland 2020](https://codelandconf.com) conference where participants will have the opportunity to make their first contributions to an open source GitHub repository -- aka, the thing you're looking at right now!

## Fork and Clone this Repo

Follow these steps to start developing locally on this repository!

See the [GitHub SSH documentation](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for more information about setting up your SSH key.

1. Fork the repository using the "Fork" button on the top-right part of the page.

2. Once the repository is forked, clone it by running the following command in your terminal:
```
git clone git@github.com:<your-username>/codeland-2020.git
```

3. Set this repository as a git remote:
```
git remote add upstream git@github.com:egiurleo/codeland-2020.git
```

## Install Dependencies

Make sure you have Node.js and npm or yarn installed on your machine.

1. Navigate into your newly-cloned repo:
```
cd codeland-2020
```

2. Install dependencies:
```
yarn install
# OR
npm i
```

## Run Local Server

Once your dependencies are installed, you can run the development server locally:

```
yarn dev
# OR
npm run dev
```
Open `localhost:3000` to see the site!

## Contribute

1. Create a new branch:
```
git checkout -b <your-branch-name>
```

2. Implement your changes and commit them to the branch. Please make sure to include a test that would fail without your changes!

3. Push to your forked repo:
```
git push -u origin <your-branch-name>
```

4. [Create a new pull request on this repository](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
