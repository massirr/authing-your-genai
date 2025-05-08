# Auth-ing your GenAI: Implementing Auth and Tool Calling in a NextJS-based chat with Auth for GenAI

Welcome to dev_day(25) workshop, let's have fun and learn about tool calling.

Generative AI unlocks incredible potential, but how do you securely manage users and control the actions your AI takes, especially when calling external tools or APIs?

If you're a developer building GenAI applications and concerned about protecting user data and controlling AI actions, this 90-minute workshop is for you.

We’ll have a hands-on session implementing authentication and tool calling capabilities in a NextJS application. Come ready to code.

## The Workshop

Our assistant named Assistant0 is an AI personal assistant in the form of a chat. Assistant0 consolidates your digital life by dynamically accessing multiple tools to help you stay organized and efficient.

We are going to add two integrations via tool calling:

1. **Calculator**: So our assistant can learn how to do calculations; and
1. **Gmail Integration**: The assistant can scan your inbox to generate concise summaries. It can highlight urgent emails, categorizes conversations by importance, and even suggests drafts for quick replies.

## This Repository

The folder structure is as follows:

- `auth0-assistan0`: folder with the code we are going to update;
- `dev_day_workshop_steps`: folder containing the documentation so you can read through the steps and learn about tool calling. Avoid this folder if you don't spoilers ahead of dev_day.

## Where to begin

We recommend running the code locally with VS Code since some of the environment will be setup for you. If you want to run this with GitHub Codespaces or using another IDE you'll find instructions on doing so as well.

Complete the steps below to setup your environment with everything you'll need for the workshop.

Keep in mind that we are also going to cover these steps during the presentation too.

<details>

<summary>Locally + VS Code</summary>

1. Clone the Repository:
  ```bash
  git clone <your-repository-url>
  cd <your-repository-name>/auth0-assistant0
  ```

2. Install Prerequisites:
  * Ensure you have Node.js (v20 or later recommended, matching the blog post's suggestion) and npm/yarn/bun installed. The blog post specifically mentions `Bun v1.2` or `NodeJS v20`.
  * Visual Studio Code (latest version recommended).

3. Install Dependencies: Open the project in VS Code. Open the integrated terminal (View > Terminal).

  ```bash
  npm install
  # or
  bun install
  ```

4. OpenAI account:
  * Make sure you have an OpenAI account and an OpenAI API key.
  * Copy the `.env.example` file to `.env.local` and save the OpenAI API key to your `.env.local`.

Once the installation is completed and you have your OpenAI API key in `.env.local`, you'll be ready follow along the workshop in dev_day. See you there!

</details><br>

<details>

<summary>Locally + Other IDEs</summary>

1. Clone the Repository:
```bash
git clone <your-repository-url>
cd <your-repository-name>/auth0-assitant0
```

2. Install Prerequisites:
   * Ensure you have Node.js (v20 or later recommended, as per the blog post) and npm/yarn/bun installed.
   * Install Dependencies: Open the project in your IDE and use its integrated terminal or your system terminal.

  ```bash
  npm install
  # or
  bun install
  ```

3. OpenAI account:
  * Make sure you have an OpenAI account and an OpenAI API key.
  * Copy the `.env.example` file to `.env.local` and save the OpenAI API key to your `.env.local`.

Once the installation is completed and you have your OpenAI API key in `.env.local`, you'll be ready follow along the workshop in dev_day. See you there!

</details><br>

<details>

<summary>GitHub Codespaces + VS Code</summary>

1. Navigate to the repository on GitHub.
2. Click the green **Code** button, then select the **Codespaces** tab.
3. Click **Create codespace on main** to start a new Codespace.
4. Wait for the `postCreateCommand` finish and the Codespace to complete the setup, this might take about **2~3 minutes**.
    1. The Codespace setup will create the python environments and install the necessary dependencies.
5. OpenAI account:
  * Make sure you have an OpenAI account and an OpenAI API key.
  * Save the OpenAI API key to your `.env.local`.

Once the Codespace is ready and you have your OpenAI API key in `.env.local`, you'll be ready follow along the workshop in dev_day. See you there!

</details><br>

Now you are ready to make the most of your time during DevDay Workshop. If you are attending dev_day please stop here to avoid spoilers. 😁

## Workshop Steps

If you are doing this workshop on your own you can follow the steps in the files outlined below.

1. [Introduction to tool calling and application set up](dev_day_workshop_steps/00-intro-and-setup.md)
1. [Running Assistant0 for the first time](dev_day_workshop_steps/01-running-the-app.md)
1. [Adding the first tool calling feature: A calculator](dev_day_workshop_steps/02-tool-calling-calculator.md)
1. [Setting up a google project for tool calling](dev_day_workshop_steps/03-setting-up-google.md)
1. [Adding the second tool calling feature: Gmail](dev_day_workshop_steps/04-tool-calling-gmail.md)
1. [Recap your learnings](dev_day_workshop_steps/05-recap.md)
