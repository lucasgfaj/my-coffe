# Welcome to My-Coffe App ☕

It's a coffee app for a coffee shop.

### Coffee App Features
- Buy Coffee for Delivery
Order coffee and get it delivered to your home.

- Favorites
Save your favorite coffees for quick access.

- Notifications and Promotions
Get alerts about offers and news.

## How to Execute?

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the app

   ```bash
   yarn start
   ```
## Screens for the App

<p align="center">
  <img src="https://github.com/user-attachments/assets/6a9ec413-ce05-482e-ac4d-d5e58ab79c49" width="200"/>
  <img src="https://github.com/user-attachments/assets/9f3841a0-fc40-4199-b494-760bf98b9671" width="200"/>
  <img src="https://github.com/user-attachments/assets/ab503b6c-f526-41e7-88e0-dd9ddc8fc6ef" width="200"/>
  <img src="https://github.com/user-attachments/assets/2b4479af-5513-479f-a638-ccfcd43152a2" width="200"/>
</p>

## Figma

- [My-Coffe](https://www.figma.com/design/dnHIbg0CA0LHI5DLtZBeey/Coffee-Shop-Mobile-App-Design--Community-?node-id=2-2&t=ccuUfSoYzPqTbh4j-1): Prototipation Screens for the App

### If you're updating Expo, follow the steps below:

### 1️⃣ Remove `yarn.lock`

Removes the lock file to ensure a clean reinstall of dependencies.

```bash
rm yarn.lock
```

### 2️⃣ Add the Expo package again

Adds the latest available version of Expo to your project.

```bash
yarn add expo
```

### 3️⃣ Fix dependencies with `expo install --fix`

Automatically checks and fixes packages to match the current SDK version.

```bash
npx expo install --fix
```

### 4️⃣ Start the project using tunnel mode

Starts the Expo server in tunnel mode (useful behind firewalls or NAT).

```bash
yarn start --tunnel
```

# 📱 Automated Testing with React Native / Expo

## ✅ Difference Between Unit Tests and End-to-End (E2E) Tests

**Unit tests** check **small, isolated units of code**, such as functions, hooks, or components.  
The goal is to ensure that **each part of the application works correctly in isolation**.

**E2E (End-to-End) tests**, on the other hand, simulate the **user behavior**, testing the **entire flow of the application** — from interacting with the interface to communicating with services (such as login, registration, screen navigation).  
They ensure that the main features of the app work properly from start to finish.

| Test Type | Scope                          | Example                                                              |
|-----------|--------------------------------|----------------------------------------------------------------------|
| Unit Test | Isolated components or hooks   | Test if a button renders and triggers `onPress`                     |
| E2E Test  | Full app (user → system flow)  | Test if the user can register and see a success message             |

---

## 🧪 How to Run Unit Tests

To run unit tests using Jest:

```bash
yarn test -- -u
```

## ⚙️ Installing and Running Maestro on Linux

[Maestro](https://maestro.mobile.dev/) is a tool for writing and executing E2E (End-to-End) test flows in mobile apps. Below are the steps to install and use it on Linux.

---

### 📥 Step 1: Install Maestro on Linux

Run the following command in your terminal to install the latest version:

```bash
curl -fsSL "https://get.maestro.mobile.dev" | bash
```

After installation, the maestro CLI will be available globally.

### 🆙 (Optional) Upgrade Maestro

To upgrade to the latest version of Maestro, simply run the installation script again:

```
curl -fsSL "https://get.maestro.mobile.dev" | bash
```

## ▶️ Run the Flow

To run your E2E test:

```bash
maestro test flows/register-user.yaml
```
Tip: Make sure your app is already running in the emulator or on a physical device before running the test.
