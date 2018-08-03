# Cash Machine
> https://cash-machine.surge.sh/

# Overview

The project uses `yarn` as dependency manager.

After cloning, run `yarn install` in the project root.

Available scripts:

| Script        | Description                                 |
|---------------|---------------------------------------------|
| `yarn test`   | Run tests (using Jest) |
| `yarn serve`  | Serve application locally (on [localhost:8080](http://localhost:8080/)) |
| `yarn bundle` | Bundle all files and assets for deployment |

# Project Structure

The project is written in TypeScript.

Relevant files:

```
src/
  |
  `- atm/
  |   |
  |   `- machine.ts       # the withdrawal logic location
  |   `- machine.spec.ts  # tests for the withdrawal logic
  `- ui/*                 # code related to user interface manipulation
```