export type Scalars = {
  Boolean: boolean;
  Int: number;
  String: string;
  uuid: any;
};

/** columns and relationships of "accounts" */
export interface accounts {
  account_id: Scalars["uuid"];
  /** fetch data from the table: "addresses" */
  addresses: addresses[];
  username: Scalars["String"];
  __typename: "accounts";
}

/** unique or primary key constraints on table "accounts" */
export type accounts_constraint = "accounts_pkey";

/** response of any mutation on the table "accounts" */
export interface accounts_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: accounts[];
  __typename: "accounts_mutation_response";
}

/** select columns of table "accounts" */
export type accounts_select_column = "account_id" | "username";

/** update columns of table "accounts" */
export type accounts_update_column = "account_id" | "username";

/** columns and relationships of "addresses" */
export interface addresses {
  account_id: Scalars["uuid"];
  address: Scalars["String"];
  network: Scalars["String"];
  __typename: "addresses";
}

/** select columns of table "addresses" */
export type addresses_select_column = "account_id" | "address" | "network";

/** mutation root */
export interface mutation_root {
  /** insert data into the table: "accounts" */
  insert_accounts?: accounts_mutation_response;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: accounts;
  /** update data of the table: "accounts" */
  update_accounts?: accounts_mutation_response;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: accounts;
  __typename: "mutation_root";
}

/** column ordering options */
export type order_by =
  | "asc"
  | "asc_nulls_first"
  | "asc_nulls_last"
  | "desc"
  | "desc_nulls_first"
  | "desc_nulls_last";

export interface query_root {
  /** fetch data from the table: "accounts" */
  accounts: accounts[];
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: accounts;
  /** fetch data from the table: "addresses" */
  addresses: addresses[];
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: addresses;
  __typename: "query_root";
}

export interface subscription_root {
  /** fetch data from the table: "accounts" */
  accounts: accounts[];
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: accounts;
  /** fetch data from the table: "addresses" */
  addresses: addresses[];
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: addresses;
  __typename: "subscription_root";
}

export type Query = query_root;
export type Mutation = mutation_root;
export type Subscription = subscription_root;

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Scalars["String"] | null;
  _gt?: Scalars["String"] | null;
  _gte?: Scalars["String"] | null;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Scalars["String"] | null;
  _in?: Scalars["String"][] | null;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Scalars["String"] | null;
  _is_null?: Scalars["Boolean"] | null;
  /** does the column match the given pattern */
  _like?: Scalars["String"] | null;
  _lt?: Scalars["String"] | null;
  _lte?: Scalars["String"] | null;
  _neq?: Scalars["String"] | null;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Scalars["String"] | null;
  _nin?: Scalars["String"][] | null;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Scalars["String"] | null;
  /** does the column NOT match the given pattern */
  _nlike?: Scalars["String"] | null;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Scalars["String"] | null;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Scalars["String"] | null;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Scalars["String"] | null;
  /** does the column match the given SQL regular expression */
  _similar?: Scalars["String"] | null;
}

/** columns and relationships of "accounts" */
export interface accountsGenqlSelection {
  account_id?: boolean | number;
  /** fetch data from the table: "addresses" */
  addresses?: addressesGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: addresses_select_column[] | null;
      /** limit the number of rows returned */
      limit?: Scalars["Int"] | null;
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars["Int"] | null;
      /** sort the rows by one or more columns */
      order_by?: addresses_order_by[] | null;
      /** filter the rows returned */
      where?: addresses_bool_exp | null;
    };
  };
  username?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export interface accounts_bool_exp {
  _and?: accounts_bool_exp[] | null;
  _not?: accounts_bool_exp | null;
  _or?: accounts_bool_exp[] | null;
  account_id?: uuid_comparison_exp | null;
  addresses?: addresses_bool_exp | null;
  username?: String_comparison_exp | null;
}

/** input type for inserting data into table "accounts" */
export interface accounts_insert_input {
  account_id?: Scalars["uuid"] | null;
  username?: Scalars["String"] | null;
}

/** response of any mutation on the table "accounts" */
export interface accounts_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number;
  /** data from the rows affected by the mutation */
  returning?: accountsGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** on_conflict condition type for table "accounts" */
export interface accounts_on_conflict {
  constraint: accounts_constraint;
  update_columns: accounts_update_column[];
  where?: accounts_bool_exp | null;
}

/** Ordering options when selecting data from "accounts". */
export interface accounts_order_by {
  account_id?: order_by | null;
  addresses_aggregate?: addresses_aggregate_order_by | null;
  username?: order_by | null;
}

/** primary key columns input for table: accounts */
export interface accounts_pk_columns_input {
  account_id: Scalars["uuid"];
}

/** input type for updating data in table "accounts" */
export interface accounts_set_input {
  account_id?: Scalars["uuid"] | null;
  username?: Scalars["String"] | null;
}

/** columns and relationships of "addresses" */
export interface addressesGenqlSelection {
  account_id?: boolean | number;
  address?: boolean | number;
  network?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by aggregate values of table "addresses" */
export interface addresses_aggregate_order_by {
  count?: order_by | null;
  max?: addresses_max_order_by | null;
  min?: addresses_min_order_by | null;
}

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export interface addresses_bool_exp {
  _and?: addresses_bool_exp[] | null;
  _not?: addresses_bool_exp | null;
  _or?: addresses_bool_exp[] | null;
  account_id?: uuid_comparison_exp | null;
  address?: String_comparison_exp | null;
  network?: String_comparison_exp | null;
}

/** order by max() on columns of table "addresses" */
export interface addresses_max_order_by {
  account_id?: order_by | null;
  address?: order_by | null;
  network?: order_by | null;
}

/** order by min() on columns of table "addresses" */
export interface addresses_min_order_by {
  account_id?: order_by | null;
  address?: order_by | null;
  network?: order_by | null;
}

/** Ordering options when selecting data from "addresses". */
export interface addresses_order_by {
  account_id?: order_by | null;
  address?: order_by | null;
  network?: order_by | null;
}

/** mutation root */
export interface mutation_rootGenqlSelection {
  /** insert data into the table: "accounts" */
  insert_accounts?: accounts_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: accounts_insert_input[];
      /** upsert condition */
      on_conflict?: accounts_on_conflict | null;
    };
  };
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: accountsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: accounts_insert_input;
      /** upsert condition */
      on_conflict?: accounts_on_conflict | null;
    };
  };
  /** update data of the table: "accounts" */
  update_accounts?: accounts_mutation_responseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: accounts_set_input | null;
      /** filter the rows which have to be updated */
      where: accounts_bool_exp;
    };
  };
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: accountsGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: accounts_set_input | null;
      pk_columns: accounts_pk_columns_input;
    };
  };
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface query_rootGenqlSelection {
  /** fetch data from the table: "accounts" */
  accounts?: accountsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: accounts_select_column[] | null;
      /** limit the number of rows returned */
      limit?: Scalars["Int"] | null;
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars["Int"] | null;
      /** sort the rows by one or more columns */
      order_by?: accounts_order_by[] | null;
      /** filter the rows returned */
      where?: accounts_bool_exp | null;
    };
  };
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: accountsGenqlSelection & { __args: { account_id: Scalars["uuid"] } };
  /** fetch data from the table: "addresses" */
  addresses?: addressesGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: addresses_select_column[] | null;
      /** limit the number of rows returned */
      limit?: Scalars["Int"] | null;
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars["Int"] | null;
      /** sort the rows by one or more columns */
      order_by?: addresses_order_by[] | null;
      /** filter the rows returned */
      where?: addresses_bool_exp | null;
    };
  };
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: addressesGenqlSelection & {
    __args: { address: Scalars["String"]; network: Scalars["String"] };
  };
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface subscription_rootGenqlSelection {
  /** fetch data from the table: "accounts" */
  accounts?: accountsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: accounts_select_column[] | null;
      /** limit the number of rows returned */
      limit?: Scalars["Int"] | null;
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars["Int"] | null;
      /** sort the rows by one or more columns */
      order_by?: accounts_order_by[] | null;
      /** filter the rows returned */
      where?: accounts_bool_exp | null;
    };
  };
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: accountsGenqlSelection & { __args: { account_id: Scalars["uuid"] } };
  /** fetch data from the table: "addresses" */
  addresses?: addressesGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: addresses_select_column[] | null;
      /** limit the number of rows returned */
      limit?: Scalars["Int"] | null;
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars["Int"] | null;
      /** sort the rows by one or more columns */
      order_by?: addresses_order_by[] | null;
      /** filter the rows returned */
      where?: addresses_bool_exp | null;
    };
  };
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: addressesGenqlSelection & {
    __args: { address: Scalars["String"]; network: Scalars["String"] };
  };
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: Scalars["uuid"] | null;
  _gt?: Scalars["uuid"] | null;
  _gte?: Scalars["uuid"] | null;
  _in?: Scalars["uuid"][] | null;
  _is_null?: Scalars["Boolean"] | null;
  _lt?: Scalars["uuid"] | null;
  _lte?: Scalars["uuid"] | null;
  _neq?: Scalars["uuid"] | null;
  _nin?: Scalars["uuid"][] | null;
}

export type QueryGenqlSelection = query_rootGenqlSelection;
export type MutationGenqlSelection = mutation_rootGenqlSelection;
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection;

const accounts_possibleTypes: string[] = ["accounts"];
export const isaccounts = (obj?: { __typename?: any } | null): obj is accounts => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isaccounts"');
  return accounts_possibleTypes.includes(obj.__typename);
};

const accounts_mutation_response_possibleTypes: string[] = ["accounts_mutation_response"];
export const isaccounts_mutation_response = (
  obj?: { __typename?: any } | null,
): obj is accounts_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isaccounts_mutation_response"');
  return accounts_mutation_response_possibleTypes.includes(obj.__typename);
};

const addresses_possibleTypes: string[] = ["addresses"];
export const isaddresses = (obj?: { __typename?: any } | null): obj is addresses => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isaddresses"');
  return addresses_possibleTypes.includes(obj.__typename);
};

const mutation_root_possibleTypes: string[] = ["mutation_root"];
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"');
  return mutation_root_possibleTypes.includes(obj.__typename);
};

const query_root_possibleTypes: string[] = ["query_root"];
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"');
  return query_root_possibleTypes.includes(obj.__typename);
};

const subscription_root_possibleTypes: string[] = ["subscription_root"];
export const issubscription_root = (
  obj?: { __typename?: any } | null,
): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"');
  return subscription_root_possibleTypes.includes(obj.__typename);
};

export const enumaccountsConstraint = {
  accounts_pkey: "accounts_pkey" as const,
};

export const enumaccountsSelectColumn = {
  account_id: "account_id" as const,
  username: "username" as const,
};

export const enumaccountsUpdateColumn = {
  account_id: "account_id" as const,
  username: "username" as const,
};

export const enumaddressesSelectColumn = {
  account_id: "account_id" as const,
  address: "address" as const,
  network: "network" as const,
};

export const enumorderBy = {
  asc: "asc" as const,
  asc_nulls_first: "asc_nulls_first" as const,
  asc_nulls_last: "asc_nulls_last" as const,
  desc: "desc" as const,
  desc_nulls_first: "desc_nulls_first" as const,
  desc_nulls_last: "desc_nulls_last" as const,
};
