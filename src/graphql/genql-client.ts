import { chainConfig } from "~/config/chain";
import { clientEnv } from "~/config/client";
import { logger } from "~/lib/logger";

import { createClient } from "./generated";

export { everything } from "./generated";

export function getGraphQLClient() {
  const jwt = localStorage.getItem(clientEnv.jwtLocalStorageKey);
  if (!jwt) throw new Error("JWT not found");

  return createClient({
    fetcher: async (operation) => {
      const headers = {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
        "X-Niftory-API-Key": clientEnv.niftoryApiKey,
      };
      // logger.info(
      //   '\n ==> GraphQL Query : \n',
      //   JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', '')),
      // )

      console.log(chainConfig.flowTestnet.niftory, {
        method: "POST",
        headers,
        body: JSON.stringify(operation),
      });

      let fetchResponse;
      try {
        fetchResponse = fetch(chainConfig.flowTestnet.niftory, {
          method: "POST",
          headers,
          body: JSON.stringify(operation),
        }).then((response) => response.json());
      } catch (error) {
        logger.error("Error in graphql fetcher", error);
      }

      return fetchResponse;
    },
  });
}
