---
sidebar_position: 2
title: Installing Terraform
description: Step-by-step guide to installing Terraform on Windows or macOS, trying it in the HashiCorp Sandbox, or running LocalStack locally to practice safely.
tags: [terraform, installation, localstack, windows, macos, devops]
---

# How to Install Terraform

Terraform is a single program, so installing it is easy. Pick the option that suits you:

| Option | Best for |
|---|---|
| [Windows](#windows) | Installing Terraform on a Windows PC |
| [macOS](#macos) | Installing Terraform on a Mac |
| [HashiCorp Sandbox](#option-3-try-terraform-in-your-browser-hashicorp-sandbox-no-install) | Trying Terraform right now in your browser, with nothing to install |
| [LocalStack on your own machine](#option-4-install-localstack-on-your-own-machine-windows-or-macos) | Practicing Terraform with a fake AWS on your own Windows PC or Mac |

---

## Windows

### Option A: Using winget

**Step 1 — Open PowerShell**
Click **Start**, type `PowerShell`, and open it.

**Step 2 — Run the install command**

```powershell
winget install Hashicorp.Terraform
```

> Press `Y` if it asks you to accept terms.

**Step 3 — Restart PowerShell**
Close the window and open a new one. This step is important.

**Step 4 — Check that it worked**

```powershell
terraform -version
```

You should see something like `Terraform v1.x.x`. Done! ✅

---

### Option B: Manual install (if winget doesn't work)

**Step 1 — Download**
Go to [developer.hashicorp.com/terraform/install](https://developer.hashicorp.com/terraform/install), choose **Windows**, and download the **AMD64** version (for most PCs).

**Step 2 — Extract the zip file**
Right-click the downloaded zip, choose **Extract All**, and you'll get a file named `terraform.exe`.

**Step 3 — Create a folder and move the file**
Create a folder called `C:\terraform` and move `terraform.exe` into it.

**Step 4 — Add the folder to PATH**
This lets you run `terraform` from anywhere.

1. Click **Start** and search for **Environment Variables**.
2. Open **Edit the system environment variables**, then click **Environment Variables**.
3. Under **User variables**, select **Path** and click **Edit**.
4. Click **New**, type `C:\terraform`, and click **OK** on all windows.

**Step 5 — Verify**
Open a **new** PowerShell window and run:

```powershell
terraform -version
```

---

## macOS

### Option A: Using Homebrew (recommended)

**Step 1 — Open Terminal**
Press `Cmd + Space`, type `Terminal`, and press Enter.

**Step 2 — Check if Homebrew is installed**

```bash
brew --version
```

> If you see a version number, go to Step 3. If you see `command not found`, install Homebrew by copying the command from [brew.sh](https://brew.sh) and running it, then come back here.

**Step 3 — Add the HashiCorp repository**

```bash
brew tap hashicorp/tap
```

**Step 4 — Install Terraform**

```bash
brew install hashicorp/tap/terraform
```

**Step 5 — Verify**

```bash
terraform -version
```

You should see `Terraform v1.x.x`. Done! ✅

**To update later:**

```bash
brew update
brew upgrade hashicorp/tap/terraform
```

---

### Option B: Manual install (without Homebrew)

**Step 1 — Find your Mac's chip**
Click the **Apple menu**, then **About This Mac**. It will say either **Apple M1/M2/M3...** (Apple Silicon) or **Intel**.

**Step 2 — Download**
Go to [developer.hashicorp.com/terraform/install](https://developer.hashicorp.com/terraform/install), choose **macOS**, and download:

- **ARM64** for Apple Silicon
- **AMD64** for Intel

**Step 3 — Unzip and move the file**
In Terminal (assuming the zip is in Downloads):

```bash
cd ~/Downloads
unzip terraform_*.zip
sudo mv terraform /usr/local/bin/
```

> Enter your Mac password when asked. You won't see the characters as you type — that's normal.

**Step 4 — Verify**

```bash
terraform -version
```

---

## Option 3: Try Terraform in your browser (HashiCorp Sandbox, no install)

HashiCorp gives you a free, ready-made practice computer that runs in your web browser. Terraform is already installed, so there is nothing to download or set up. It works on Windows, macOS, or any computer with a browser.

**What you get inside the sandbox:**

- ⚙️ Terraform (already installed)
- 🐳 Docker (already running)
- 🪄 LocalStack, a fake "mini AWS" on the same machine, so you can practice safely without a real AWS account and without any cost
- ☁️ AWS CLI (the `aws` command is set up to talk to LocalStack)

:::caution[Good to know before you start]
- Each session lasts **up to 1 hour**, then it shuts down.
- **Nothing is saved** between sessions — copy any code you want to keep before the timer ends.
- LocalStack uses the free edition, so a few AWS services may not work. Simple things like S3 buckets work well for practice.
:::

### Step 1: Open the sandbox page

Go to [developer.hashicorp.com/terraform/sandbox](https://developer.hashicorp.com/terraform/sandbox)

### Step 2: Launch the sandbox

Click **Launch Sandbox**. If the page asks you to sign in or create a free HashiCorp account, follow the prompts, then click **Launch Sandbox** again.

### Step 3: Wait for the terminal

After a short wait, a terminal (a black command window) opens inside your browser. This is your practice computer.

### Step 4: Check that Terraform is ready

```bash
terraform version
```

You should see `Terraform v1.x.x`. Terraform is already installed here.

### Step 5: Look at your starting folder

```bash
ls
```

You should see a file called `localstack_overrides.tf`. This file automatically points Terraform to the fake AWS (LocalStack), so **do not delete it** and **stay in this same folder** for the next steps.

### Step 6: Check that LocalStack is running (important)

LocalStack is the fake AWS that Terraform talks to. Before you continue, make sure it is running:

```bash
docker ps
```

You should see a container in the list with an image named `localstack/localstack` and a status that starts with `Up`. Example:

```
CONTAINER ID   IMAGE                   ...   STATUS         PORTS                    NAMES
abc123def456   localstack/localstack   ...   Up 2 minutes   0.0.0.0:4566->4566/tcp   localstack
```

- ✅ **You see the localstack container with `Up`** — great, go to Step 7.
- ❌ **The list is empty (only the header line shows)** — LocalStack is not running. Do **not** continue. Go to [If LocalStack is not running](#if-localstack-is-not-running-fix-for-connection-refused-error) below.

:::tip
If you just launched the sandbox, wait about 1 minute before running this check — LocalStack needs a little time to start.
:::

### Step 7: Create your first Terraform file

Copy and paste this whole block into the terminal and press Enter. It creates a file called `main.tf` that describes one storage bucket:

```bash
cat > main.tf <<'EOF'
resource "aws_s3_bucket" "demo" {
  bucket = "my-first-terraform-bucket"
}
EOF
```

### Step 8: Initialize Terraform

```bash
terraform init
```

This downloads what Terraform needs. Wait until you see **Terraform has been successfully initialized!**

### Step 9: Preview what will be created

```bash
terraform plan
```

Terraform shows what it is *going* to create. Nothing is created yet.

### Step 10: Create the bucket

```bash
terraform apply
```

Type `yes` and press Enter when asked. You should see **Apply complete! Resources: 1 added.**

:::info
If you get an error containing `connection refused` and `4566`, LocalStack is not running. See [If LocalStack is not running](#if-localstack-is-not-running-fix-for-connection-refused-error) below.
:::

### Step 11: Confirm it exists

```bash
aws s3 ls
```

You should see `my-first-terraform-bucket` in the list. Congratulations — you just used Terraform! 🎉

### Step 12: Clean up (good habit)

```bash
terraform destroy
```

Type `yes` and press Enter. This removes everything you created.

### Step 13: Save your work if needed

The sandbox erases everything when the session ends. If you want to keep your code, copy it out of the terminal — for example, run `cat main.tf` and paste the output into a notepad file on your computer.

### If LocalStack is not running (fix for "connection refused" error)

**What the error looks like:** `terraform apply` keeps saying `Still creating...` for about a minute and then fails with something like this:

```
Error: creating S3 Bucket (my-first-terraform-bucket): operation error S3: CreateBucket,
exceeded maximum number of attempts ... dial tcp 127.0.0.1:4566: connect: connection refused
```

**What it means:** Terraform tried to reach LocalStack on port 4566, but LocalStack was not running. Your `main.tf` is fine and nothing was created, so it is safe to try again.

**How to fix it:**

1. Run `docker ps`.
2. If the list is empty (no `localstack/localstack` container), the sandbox did not start LocalStack properly.
3. **Fix: launch a fresh sandbox.** Close the sandbox tab, go back to [developer.hashicorp.com/terraform/sandbox](https://developer.hashicorp.com/terraform/sandbox), and click **Launch Sandbox** again.
4. Wait about 1 minute after the terminal appears.
5. Run `docker ps` again and confirm `localstack/localstack` shows `Up`.
6. Recreate your `main.tf` (Step 7), then run `terraform init` and `terraform apply` again.

**Optional extra check:** confirm LocalStack is answering with:

```bash
curl http://localhost:4566/_localstack/health
```

If you see a list of services (like `"s3": "available"`), LocalStack is ready.

> If a stopped container exists, `docker ps -a` will show it with status `Exited`. You can try `docker start <container-name>`, but launching a fresh sandbox is the most reliable fix.

### Using real AWS instead of LocalStack (optional, for later)

You can deploy to a real AWS account from the sandbox by deleting `localstack_overrides.tf` and setting the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables.

:::danger
If you do this, **always run `terraform destroy` before leaving** — the sandbox does not clean up real resources for you. As a beginner, stay with LocalStack until you are comfortable.
:::

---

## Option 4: Install LocalStack on your own machine (Windows or macOS)

In the HashiCorp Sandbox, LocalStack was already set up for you. Here you set it up yourself on your own computer, so you can practice Terraform any time, without a time limit and without a real AWS account.

### Why do we need LocalStack?

- 🪄 **LocalStack is a fake "mini AWS"** that runs on your own computer.
- 🔗 **Terraform needs something to talk to.** Terraform creates things (like storage buckets) by talking to AWS. LocalStack pretends to be AWS, so Terraform thinks it is talking to the real one.
- 💸 **It is safe and free of AWS charges.** Nothing is created in a real AWS account, so you cannot get an AWS bill by accident.
- ⚡ **It is fast.** Practice, break things, and start again in seconds.

:::info[Important: LocalStack needs an account and an "Auth Token"]
Since March 2026, LocalStack requires a free account and an **Auth Token** (a secret password-like text) to start. LocalStack offers a free **Hobby** plan for non-commercial use (like learning). Plans can change, so check [localstack.cloud/pricing](https://www.localstack.cloud/pricing) if anything looks different.

The HashiCorp Sandbox does **not** need this — it's only for setting up LocalStack on your own machine.
:::

### What you need first

| Requirement | Why |
|---|---|
| Terraform installed | Follow the Windows or macOS steps at the top of this guide |
| **Docker Desktop** | LocalStack runs inside Docker (a tool that runs programs in small, isolated boxes called containers) |
| A free LocalStack account and Auth Token | LocalStack will not start without one |

---

### Step 1: Install Docker Desktop

**Windows:**
1. Go to [docs.docker.com/get-docker](https://docs.docker.com/get-docker/) and download **Docker Desktop for Windows**.
2. Run the installer and accept the defaults (keep the **WSL 2** option ticked if it asks).
3. Restart your computer if asked.
4. Open **Docker Desktop** from the Start menu and wait until it says Docker is running.

**macOS:**
1. Go to [docs.docker.com/get-docker](https://docs.docker.com/get-docker/) and download **Docker Desktop for Mac**. Choose **Apple Silicon** (M1/M2/M3...) or **Intel**, matching your Mac (Apple menu → **About This Mac**).
2. Open the downloaded file and drag **Docker** into **Applications**.
3. Open **Docker** from Applications and wait until it says Docker is running.

**Check that Docker works** (PowerShell on Windows, Terminal on Mac):

```bash
docker --version
docker ps
```

> You should see a Docker version. `docker ps` will show an empty list with just a header line — that's normal, since nothing is running yet. If you see an error like `cannot connect to the Docker daemon`, open Docker Desktop and wait until it finishes starting.

### Step 2: Create a LocalStack account and get your Auth Token

1. Go to [app.localstack.cloud](https://app.localstack.cloud) and sign up for a free account.
2. Open the [Auth Tokens page](https://app.localstack.cloud/workspace/auth-tokens).
3. Copy your **Developer Token**. It starts with `ls-`.
4. Keep it private — never share it, post it online, or save it in code you upload to GitHub. If it leaks, reset it on the same Auth Tokens page.

### Step 3: Start LocalStack

Replace `your-token-here` with the token you copied.

**Windows (PowerShell):**

```powershell
$env:LOCALSTACK_AUTH_TOKEN="your-token-here"
docker run -d --rm --name localstack -p 127.0.0.1:4566:4566 -e LOCALSTACK_AUTH_TOKEN -v /var/run/docker.sock:/var/run/docker.sock localstack/localstack
```

**macOS (Terminal):**

```bash
export LOCALSTACK_AUTH_TOKEN="your-token-here"
docker run -d --rm --name localstack -p 127.0.0.1:4566:4566 -e LOCALSTACK_AUTH_TOKEN -v /var/run/docker.sock:/var/run/docker.sock localstack/localstack
```

**What the command does, in simple words:**

| Part | Meaning |
|---|---|
| `docker run -d` | Start LocalStack in the background |
| `--rm` | Delete the container automatically when it stops |
| `--name localstack` | Name the container `localstack` |
| `-p 127.0.0.1:4566:4566` | Make LocalStack reachable on port 4566 of your own computer (this is the address Terraform will use) |
| `-e LOCALSTACK_AUTH_TOKEN` | Pass your token into LocalStack |
| `localstack/localstack` | The LocalStack program to run (downloaded the first time, so it can take a few minutes) |

:::tip[Optional easier way on macOS (`lstk`)]
LocalStack also has a helper tool called `lstk` that handles the login for you.

```bash
brew install localstack/tap/lstk
lstk start
```

The first time, it opens your browser to log in. If you use this method, you can skip the `docker run` command above.
:::

### Step 4: Check that LocalStack is running

```bash
docker ps
```

You should see a container with the image `localstack/localstack` and a status starting with `Up`.

Then check that it is activated:

**Windows (PowerShell):**

```powershell
curl.exe http://localhost:4566/_localstack/info
```

**macOS (Terminal):**

```bash
curl http://localhost:4566/_localstack/info
```

You should see text that includes `"is_license_activated": true`. If the container is not listed, or it stops right after starting, see the [problems table](#problems-with-localstack-on-your-own-machine) below.

### Step 5: Create a folder and a Terraform file

On your own machine, there is no `localstack_overrides.tf` file like in the sandbox, so you tell Terraform to use LocalStack yourself.

**Windows (PowerShell):**

```powershell
mkdir terraform-localstack
cd terraform-localstack
notepad main.tf
```

**macOS (Terminal):**

```bash
mkdir terraform-localstack
cd terraform-localstack
nano main.tf
```

Paste this into the file and save it (Notepad: **File → Save**. nano: press `Ctrl + O`, Enter, then `Ctrl + X`):

```hcl
provider "aws" {
  region                      = "us-east-1"
  access_key                  = "test"
  secret_key                  = "test"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  s3_use_path_style           = true

  endpoints {
    s3 = "http://localhost:4566"
  }
}

resource "aws_s3_bucket" "demo" {
  bucket = "my-first-terraform-bucket"
}
```

**Why each part matters:**

| Part | Meaning |
|---|---|
| `access_key = "test"` and `secret_key = "test"` | Fake keys. LocalStack accepts any value, so no real AWS keys are needed |
| `skip_...` lines | Tell Terraform not to check with real AWS |
| `endpoints { s3 = "http://localhost:4566" }` | **The most important part.** It sends S3 requests to LocalStack instead of real AWS |

> If you use other AWS services later (for example DynamoDB), add a line for each one inside `endpoints`, using the same address.

:::note[Windows tip]
If Notepad saves the file as `main.tf.txt`, rename it to `main.tf`.
:::

### Step 6: Run Terraform

```bash
terraform init
terraform plan
terraform apply
```

Type `yes` when asked. You should see **Apply complete! Resources: 1 added.**

### Step 7: Confirm the bucket exists (optional)

This uses the AWS command-line tool. Install it first if you don't have it:

- **Windows:** `winget install Amazon.AWSCLI`
- **macOS:** `brew install awscli`

Close and reopen your terminal, then run:

**Windows (PowerShell):**

```powershell
$env:AWS_ACCESS_KEY_ID="test"
$env:AWS_SECRET_ACCESS_KEY="test"
$env:AWS_DEFAULT_REGION="us-east-1"
aws --endpoint-url=http://localhost:4566 s3 ls
```

**macOS (Terminal):**

```bash
export AWS_ACCESS_KEY_ID="test"
export AWS_SECRET_ACCESS_KEY="test"
export AWS_DEFAULT_REGION="us-east-1"
aws --endpoint-url=http://localhost:4566 s3 ls
```

You should see `my-first-terraform-bucket`. The `--endpoint-url` part tells the AWS tool to talk to LocalStack instead of real AWS. The `test` keys here are fake, on purpose.

### Step 8: Clean up and stop LocalStack

```bash
terraform destroy
docker stop localstack
```

Type `yes` for `terraform destroy`. Because we used `--rm`, the container is removed when it stops. By default, LocalStack does not keep your data after it stops, so the next time you start it, you start fresh.

> **To start it again later:** open Docker Desktop, set your `LOCALSTACK_AUTH_TOKEN` again (Step 3), and run the same `docker run` command.

### Problems with LocalStack on your own machine

| Problem | Fix |
|---|---|
| `Cannot connect to the Docker daemon` | Docker Desktop is not running. Open it and wait until it says it is running. |
| `docker: command not found` or `not recognized` | Close and reopen your terminal. If it still fails, reinstall Docker Desktop. |
| Container stops right away, or logs say `License activation failed` | The Auth Token is missing or wrong. Set `LOCALSTACK_AUTH_TOKEN` again (no extra spaces, includes the `ls-` start) and rerun the `docker run` command. To see the exact error, run the same `docker run` command again but without `-d`, so the messages print in your terminal. |
| `port is already allocated` or `address already in use` (port 4566) | Another LocalStack is already running. Run `docker ps`, then `docker stop localstack` and try again. |
| `terraform apply` fails for a service | Your LocalStack plan may not include that service. Try a simple one like S3. |
| Real AWS error about credentials or account | Check that the `endpoints` block is in your `provider "aws"` block, so Terraform is not reaching out to real AWS. |

---

## Common problems

| Problem | Fix |
|---|---|
| `terraform is not recognized` (Windows) | Close and reopen PowerShell. If it still fails, re-check that `C:\terraform` is in your Path. |
| `command not found: terraform` (Mac) | Close and reopen Terminal. If you used the manual method, check that the file is in `/usr/local/bin`. |
| `brew: command not found` | Install Homebrew first from [brew.sh](https://brew.sh). |
| "Bad CPU type" error (Mac) | You downloaded the wrong chip version. Download the other one (ARM64 or AMD64). |
| Sandbox session ended and my work is gone | Sandbox sessions last up to 1 hour and nothing is saved. Launch a new sandbox and copy your code out before the timer ends next time. |
| `connection refused` on port `4566` when running `terraform apply` | LocalStack is not running. Run `docker ps`; if no `localstack/localstack` container is listed, launch a fresh sandbox and check again. See the sandbox section above. |
| Sandbox will not load | Refresh the page and click **Launch Sandbox** again, or try a different browser. |
| `terraform apply` fails for a service in the sandbox | LocalStack's free edition does not support every AWS service. Try a simple resource like an S3 bucket. |

---

## Why Check the Terraform Version?

There are two simple reasons.

### Reason 1: It proves the install worked

When you type the command below and see a version number, Terraform is installed correctly and your computer can find it.

```bash
terraform -version
```

> If you get `command not found` or `not recognized`, something went wrong with the install. Think of it like turning the key in a car to see if the engine starts.

### Reason 2: Different versions can behave differently

Terraform gets updated regularly, like Microsoft Word or your phone apps. Each new version adds features, fixes bugs, and sometimes changes how things work.

A good comparison is Microsoft Word. If a friend makes a document in a brand-new version of Word with new features and you open it in a very old version, it may not open properly, or some parts may be missing. Terraform has the same kind of issue.

### Won't different versions work?

Most of the time, they do. Small differences between versions usually cause no problems. But sometimes they cause trouble:

| Situation | What can go wrong |
|---|---|
| Your code uses a **new feature** but you have an **old Terraform** | Terraform doesn't understand the code and shows an error |
| A project says "you must use Terraform 1.5 or newer" | Terraform refuses to run on an older version |
| A teammate uses a **newer** version and you use an **older** one | Terraform keeps a "notebook" (called the **state file**) of what it built. Once a newer version writes in it, an older version may refuse to read it |
| A tutorial was written for an older version | Some commands or examples may look or work slightly differently on yours |

### Why this matters for a beginner

- **Following a tutorial:** if something doesn't work, the version is one of the first things to check
- **Asking for help:** people will often ask "which version are you using?"
- **Working in a team:** everyone should use the same or a similar version, so nobody breaks each other's work
- **Reading error messages:** some errors say "this requires Terraform version X", and you need to know yours to fix it

:::tip[Simple rule of thumb]
Install the latest version, check it with `terraform -version`, and don't worry about it unless you see an error that mentions a version.

The check takes only a few seconds, but it can save you a lot of confusion later.
:::