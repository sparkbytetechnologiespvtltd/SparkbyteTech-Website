# Enquiry Form Setup Guide

The "For More Enquiry" form appends submitted rows directly to an Excel table in SharePoint via **Microsoft Graph API**.

Copy `.env.example` to `.env.local` and fill in the values below.

---

## Microsoft Graph + SharePoint Excel Setup

### 1. Register an Azure App

1. Go to [Azure Portal](https://portal.azure.com) → **Microsoft Entra ID** → **App registrations** → **New registration**.
2. Name it e.g. `Sparkbyte Website Enquiries`.
3. Choose **Accounts in this organizational directory only**.
4. After creation, note:
   - **Application (client) ID** → `AZURE_CLIENT_ID`
   - **Directory (tenant) ID** → `AZURE_TENANT_ID`

### 2. Create a Client Secret

1. In the app → **Certificates & secrets** → **New client secret**.
2. Copy the value → `AZURE_CLIENT_SECRET`

### 3. Grant API Permissions

1. **API permissions** → **Add a permission** → **Microsoft Graph** → **Application permissions**.
2. Add `Sites.ReadWrite.All` (or a narrower site-scoped permission if available).
3. Click **Grant admin consent** for your tenant.

### 4. Create the Excel File

1. In SharePoint, create an Excel file named e.g. `enquiries.xlsx`.
2. Add a header row with these columns (order matters):

   | Timestamp | Name | Email | Phone | Company | Requirements |
   |-----------|------|-------|-------|---------|--------------|

3. Select the header + one empty row → **Insert** → **Table** → name the table **`Enquiries`**.
4. Upload/save the file to your SharePoint document library.

### 5. Get SharePoint IDs

Use [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer) or these requests (with admin auth):

**Site ID:**
```
GET https://graph.microsoft.com/v1.0/sites/{hostname}:/{site-path}
```

**Drive Item ID (Excel file):**
```
GET https://graph.microsoft.com/v1.0/sites/{site-id}/drive/root/children
```

Set in `.env.local`:
- `GRAPH_SITE_ID` — SharePoint site ID
- `GRAPH_DRIVE_ITEM_ID` — Excel file drive item ID
- `GRAPH_TABLE_NAME` — table name (default: `Enquiries`)

---

## Testing Locally

1. Copy `.env.example` to `.env.local` and fill in all values.
2. Run `npm run dev`.
3. Submit the form at `http://localhost:3000/#enquiry`.
4. Check the SharePoint Excel file for the new row.

---

## Editing Office Address & Contact Info

Update [`lib/site-config.ts`](../lib/site-config.ts) — the Google Maps embed and displayed address both derive from this file.

## Adding Leader Photos

Drop JPG files into `public/images/leaders/` using these filenames:

- `shaik.jpg`
- `sagar.jpg`
- `sophie.jpg`

No code changes needed — the site shows a placeholder icon until each file exists.
