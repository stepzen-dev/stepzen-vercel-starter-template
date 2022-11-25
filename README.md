[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstepzen-dev%2Fstepzen-vercel-starter-template&project-name=stepzen-starter&repository-name=stepzen-starter&redirect-url=https%3A%2F%2Fdashboard.stepzen.com&developer-id=oac_fS5U5f04cXnxV1N90Ws6SFXh&demo-title=StepZen%20Vercel%20Starter&demo-description=Starter%20kit%20to%20build%20fullstack%20Next.js%20projects%20with%20StepZen%20and%20Vercel&demo-image=%2F%2Fuser-images.githubusercontent.com%2F22416150%2F202710759-d6316ceb-ebd2-4b95-b93d-4e8d64a4cc37.png&demo-url=https%3A%2F%2Fgithub.com%2Fstepzen-dev%2Fstepzen-vercel-starter-template&integration-ids=oac_fS5U5f04cXnxV1N90Ws6SFXh&external-id=stepzen-dev%2Fstepzen-vercel-starter-template)

---

This is a demo [StepZen](https://stepzen.com) + [Next.js](https://nextjs.org/) project created from the [`stepzen-dev/stepzen-vercel-starter-template`](https://github.com/stepzen-dev/stepzen-vercel-starter-template) template repo.

## Getting Started

1. First, install StepZen CLI and log in using your StepZen account name and the admin key from [`dashboard.stepzen.com/account`](https://dashboard.stepzen.com/account).

   ```bash
   npm i -g stepzen
   stepzen login
   ```

2. Then, create a `.env.local` file to pass your StepZen credentials to the NextJS app:

   ```bash
   echo "STEPZEN_ACCOUNT=$(stepzen whoami --account)" >> .env.local
   echo "STEPZEN_API_KEY=$(stepzen whoami --apikey)" >> .env.local
   ```

3. Finally, install dependencies and start the development server:

   ```bash
   npm i
   npm run dev
   ```

> Running `npm run dev` also executes `stepzen start`, which is the command to deploy your GraphQL API to the StepZen cloud.
> You can as well run the `stepzen start` command at any point, in a serapate terminal window.
>
> Read more about what happens when you run `npm run dev`, in the ["Getting started" explained](#getting-started-explained) section below.

---

<img width="1306" alt="demo" src="https://user-images.githubusercontent.com/22416150/203358874-7ccbe260-0f70-4433-9340-974dd6e17616.png">

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the app, and [`dashboard.stepzen.com`](https://dashboard.stepzen.com/) to see your GraphQL API endpoint.

You can edit the GraphQL API by modifying `stepzen/index.graphql` by hand, or use the [`stepzen import`](https://stepzen.com/docs/cli/cli-commands#stepzen-import) CLI command to import additional data sources to your API.

The page auto-updates as you edit JS or CSS files, and the GraphQL API on `stepzen.net` auto-updates as you edit GraphQL schema files in `stepzen/`.

The GraphiQL component on the home page is only an example to show that your app has a GraphQL API. Feel free to delete this component at any time. You can always use the [StepZen dashboard](https://dashboard.stepzen.com/explorer) to explore your GraphQL endpoints.

## Learn More

To learn more about StepZen, take a look at the following resources:

- [StepZen Documentation](https://stepzen.com/docs) - learn about StepZen features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the StepZen `examples` GitHub repository](https://github.com/stepzen-dev/examples) for more StepZen examples.

## Deploy to Vercel

If you created this app by clonning the starter repo with the "Deploy to Vercel" button, your Vercel project already has the `STEPZEN_ACCOUNT` and `STEPZEN_API_KEY` [environment variables](https://vercel.com/docs/concepts/projects/environment-variables) defined. The StepZen Vercel integtaion does that for you, and you do not need to make any extra actions.

If you deploy this repo to another hosting, please make sure to define the `STEPZEN_ACCOUNT` and `STEPZEN_API_KEY` environment variables in your deployment / hosting admin panel.

## "Getting started" explained

This section explains step-by-step what happens under the hood when running the steps from the [Getting started](#getting-started) section above.

- `npm i -g stepzen`

  Install the [`stepzen`](https://www.npmjs.com/package/stepzen) npm package into your system (globally). It comes with the `stepzen` command line tool, which is what you can later use to run commands like `stepzen login`.

- `stepzen login`

  Log in with your StepZen account name and an admin key so that StepZen CLI could act on your behalf. You can always check your login status with `stepzen whoami` and log out with `stepzen logout`.

- `npm run dev`

  Start both NextJS and StepZen development servers for your project using the `concurrently` npm package. Both servers run in parallel and print logs into the same terminal window. Each line starts with either `[StepZen]` or `[NextJS]`, telling you which source it comes from. Terminating the task with `Ctrl+C` / `Cmd+C` stops both dev servers.

  The StepZen development server watches for GraphQL schema changes inside the `./stepzen` folder, and automatically redeploys the schema to the StepZen cloud on every change. You can start this server separately with the `stepzen start --dir ./stepzen` command.

  The NextJS development server watches for NextJS source file change, and automatically updates the web page in the browser on every change. You can start this server separately with the `npx next dev` command.

  See the exact logic in `package.json`.

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
