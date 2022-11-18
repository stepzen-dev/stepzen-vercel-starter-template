[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstepzen-dev%2Fstepzen-vercel-starter-template&project-name=stepzen-starter&repository-name=stepzen-starter&redirect-url=https%3A%2F%2Fdashboard.stepzen.com&developer-id=oac_fS5U5f04cXnxV1N90Ws6SFXh&demo-title=StepZen%20Vercel%20Starter&demo-description=Starter%20kit%20to%20build%20fullstack%20Next.js%20projects%20with%20StepZen%20and%20Vercel&demo-image=%2F%2Fuser-images.githubusercontent.com%2F22416150%2F202710759-d6316ceb-ebd2-4b95-b93d-4e8d64a4cc37.png&demo-url=https%3A%2F%2Fgithub.com%2Fstepzen-dev%2Fstepzen-vercel-starter-template&integration-ids=oac_fS5U5f04cXnxV1N90Ws6SFXh&external-id=stepzen-dev%2Fstepzen-vercel-starter-template)

---

This is a demo [StepZen](https://stepzen.com) + [Next.js](https://nextjs.org/) project created from the [`stepzen-dev/stepzen-vercel-starter-template`](https://github.com/stepzen-dev/stepzen-vercel-starter-template) template repo.

## Getting Started

1. First, install StepZen CLI and log in using your StepZen account name and the admin key from [`dashboard.stepzen.com/account`](https://dashboard.stepzen.com/account).

   ```bash
   npm i -g stepzen
   stepzen login
   ```

   and create a `.env.local` file to pass your StepZen credentials to the NextJS app:

   ```bash
   echo "STEPZEN_ACCOUNT=$(stepzen whoami --account)" >> .env.local
   echo "STEPZEN_API_KEY=$(stepzen whoami --apikey)" >> .env.local
   ```

2. Then, run the development server:

   ```bash
   npm i
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

The GraphiQL editor gives you an interactive UI to explore the GraphQL API available for your app.
You can edit the API my modifying `stepzen/index.graphql` by hand, or use the [`stepzen import`](https://stepzen.com/docs/cli/cli-commands#stepzen-import) CLI command to import additional data sources to your API.

The page auto-updates as you edit the file.

Feel free to delete the GraphiQL component from the front page and switch to your [StepZen dashboard](https://dashboard.stepzen.com/) instead, once you get familiar with the application structure.

## Learn More

To learn more about StepZen, take a look at the following resources:

- [StepZen Documentation](https://stepzen.com/docs) - learn about StepZen features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the StepZen `examples` GitHub repository](https://github.com/stepzen-dev/examples) for more StepZen examples.

## Deploy to Vercel

If you created this app by clonning the starter repo with the "Deploy to Vercel" button, your Vercel project already has the `STEPZEN_ACCOUNT` and `STEPZEN_API_KEY` environment variables correctly defined. The StepZen Vercel integtaion does that for you, and you do not need to make any extra actions.

If you deploy this repo to another hosting, please make sure to define the `STEPZEN_ACCOUNT` and `STEPZEN_API_KEY` environment variables in your deployment / hosting admin panel.

## Code-completion in GraphQL code

In VS Code you can get full IntelliSense support inside GraphQL queries for your API:

1. install the [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) extension
2. set the `STEPZEN_ACCOUNT` and `STEPZEN_API_KEY` environment variables when launching VS Code

   - either by setting these 2 environment variables globally, system-wide
   - or by passing them to VS Code on start-up (e.g. by `env $(cat .env.local | xargs) code .`)

   -- OR --

   replace the `${STEPZEN_ACCOUNT}` and `${STEPZEN_API_KEY}` placeholders in the `.graphqlrc` file with specific values (and do NOT commit this file anymore)

3. ✨ IntelliSense works inside `/* GraphQL */`-prefixed template literals ✨

   <img width="474" alt="auto-completion inside GraphQL queries" src="https://user-images.githubusercontent.com/22416150/202520302-215ee1d3-4e3c-4615-ad90-022f7eb2d9a2.png">
