# Hosting Maxera Talent on Hostinger Business Web Hosting

Since you have the **Business Web Hosting** plan, you do not need to set up a manual VPS (virtual server). Hostinger provides a managed **Node.js Web App** environment in your hPanel. This is much simpler as Hostinger handles the server, processes, domain mapping, and SSL certificates automatically.

Here is the step-by-step guide to deploying your Next.js project on your Business Web Hosting plan.

---

## Step 1: Create a MySQL Database in hPanel
Next.js needs to connect to a database to run Prisma.
1. Log in to your **Hostinger hPanel**.
2. Go to **Databases** > **MySQL Databases**.
3. Create a new database:
   - **Database Name**: e.g., `u123456789_maxera` (Hostinger automatically adds your account prefix)
   - **MySQL User**: e.g., `u123456789_user`
   - **Password**: Create a strong password and save it.
4. Note down your Database Name, User, Host (usually `127.0.0.1` or the specific server IP listed there), and Password.

---

## Step 2: Push Your Project to GitHub
Hostinger can connect directly to your GitHub repository to pull the code and build it.
1. Make sure all your local files are committed and pushed to your remote repository (e.g., `https://github.com/relicus123/website.git`).
2. *Note: Ensure your `.env` file is NOT pushed to GitHub (it should be in `.gitignore`).*

---

## Step 3: Create a Node.js Application in hPanel
1. In your **hPanel**, go to **Websites** > **Add website**.
2. Select **Node.js Web App**.
3. Choose the **Import Git repository** option.
4. Authorize Hostinger to access your GitHub account, and select your repository (`relicus123/website` or similar).
5. Set the configurations:
   - **Node.js Version**: Select **20.x** (or the latest version compatible with React 19).
   - **Install Command**: `npm ci` (or `npm install`)
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start -- -p $PORT` (This lets Hostinger assign the correct port dynamically)
6. Click **Deploy**.

---

## Step 4: Configure Environment Variables
Your app needs database connections and Auth secret to work properly.
1. In your Hostinger dashboard, find your Node.js application.
2. Go to the **Environment Variables** section.
3. Add the following keys:
   - `DATABASE_URL`: `mysql://your_db_user:your_db_password@your_db_host:3306/your_db_name`
     *(Replace with the database credentials you created in Step 1)*
   - `NEXTAUTH_URL`: `https://yourdomain.com` (Your actual domain name)
   - `NEXTAUTH_SECRET`: A random 32-character security string.
   - `ADMIN_EMAIL`: `admin@maxeratalent.com`
   - `ADMIN_PASSWORD`: `securepassword123`

---

## Step 5: Run Database Migrations
Prisma needs to create the database tables in Hostinger.
1. Once the application builds, you need to run your migrations. 
2. Go to **SSH Access** in your Hostinger hPanel under **Advanced** (enable SSH access if it's disabled).
3. Open your computer's terminal (or PowerShell) and connect to your hosting account:
   ```bash
   ssh your_ssh_username@your_server_ip
   ```
   *(You can find these SSH details in hPanel under **Advanced** > **SSH Access**)*
4. Navigate to your app directory (usually inside `public_html` or the specific folder Hostinger created for the Node.js app):
   ```bash
   cd domains/yourdomain.com/public_html
   ```
5. Run the Prisma push command to create tables:
   ```bash
   npx prisma db push
   ```

---

## Step 6: Start/Restart the App
1. Go back to your Hostinger hPanel > **Node.js** dashboard.
2. Click **Restart Application** or **Start** to run the app with your environment variables and database tables in place.
3. Access your domain (e.g. `https://yourdomain.com`) to verify that the website is online!
