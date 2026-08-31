import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import {
  TokenCredentialAuthenticationProvider,
  type TokenCredentialAuthenticationProviderOptions,
} from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials/index.js";

export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  requirements: string;
};

function getGraphClient() {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error(
      "AZURE_TENANT_ID, AZURE_CLIENT_ID, and AZURE_CLIENT_SECRET must be configured",
    );
  }

  const credential = new ClientSecretCredential(
    tenantId,
    clientId,
    clientSecret,
  );

  const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ["https://graph.microsoft.com/.default"],
  } satisfies TokenCredentialAuthenticationProviderOptions);

  return Client.initWithMiddleware({ authProvider });
}

export async function appendEnquiryToExcel(payload: EnquiryPayload) {
  const siteId = process.env.GRAPH_SITE_ID;
  const driveItemId = process.env.GRAPH_DRIVE_ITEM_ID;
  const tableName = process.env.GRAPH_TABLE_NAME ?? "Enquiries";

  if (!siteId || !driveItemId) {
    throw new Error("GRAPH_SITE_ID and GRAPH_DRIVE_ITEM_ID must be configured");
  }

  const client = getGraphClient();
  const timestamp = new Date().toISOString();

  await client
    .api(
      `/sites/${siteId}/drive/items/${driveItemId}/workbook/tables/${tableName}/rows/add`,
    )
    .post({
      values: [
        [
          timestamp,
          payload.name,
          payload.email,
          payload.phone,
          payload.company,
          payload.requirements,
        ],
      ],
    });
}
