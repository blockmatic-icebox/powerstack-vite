export default {
    "scalars": [
        0,
        1,
        2,
        6,
        12,
        14,
        21,
        22,
        23
    ],
    "types": {
        "Boolean": {},
        "Int": {},
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                2
            ],
            "_gt": [
                2
            ],
            "_gte": [
                2
            ],
            "_ilike": [
                2
            ],
            "_in": [
                2
            ],
            "_iregex": [
                2
            ],
            "_is_null": [
                0
            ],
            "_like": [
                2
            ],
            "_lt": [
                2
            ],
            "_lte": [
                2
            ],
            "_neq": [
                2
            ],
            "_nilike": [
                2
            ],
            "_nin": [
                2
            ],
            "_niregex": [
                2
            ],
            "_nlike": [
                2
            ],
            "_nregex": [
                2
            ],
            "_nsimilar": [
                2
            ],
            "_regex": [
                2
            ],
            "_similar": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "accounts": {
            "account_id": [
                23
            ],
            "addresses": [
                15,
                {
                    "distinct_on": [
                        21,
                        "[addresses_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        20,
                        "[addresses_order_by!]"
                    ],
                    "where": [
                        17
                    ]
                }
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "accounts_bool_exp": {
            "_and": [
                5
            ],
            "_not": [
                5
            ],
            "_or": [
                5
            ],
            "account_id": [
                24
            ],
            "addresses": [
                17
            ],
            "username": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "accounts_constraint": {},
        "accounts_insert_input": {
            "account_id": [
                23
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "accounts_mutation_response": {
            "affected_rows": [
                1
            ],
            "returning": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "accounts_on_conflict": {
            "constraint": [
                6
            ],
            "update_columns": [
                14
            ],
            "where": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "accounts_order_by": {
            "account_id": [
                22
            ],
            "addresses_aggregate": [
                16
            ],
            "username": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "accounts_pk_columns_input": {
            "account_id": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "accounts_select_column": {},
        "accounts_set_input": {
            "account_id": [
                23
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "accounts_update_column": {},
        "addresses": {
            "account_id": [
                23
            ],
            "address": [
                2
            ],
            "network": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "addresses_aggregate_order_by": {
            "count": [
                22
            ],
            "max": [
                18
            ],
            "min": [
                19
            ],
            "__typename": [
                2
            ]
        },
        "addresses_bool_exp": {
            "_and": [
                17
            ],
            "_not": [
                17
            ],
            "_or": [
                17
            ],
            "account_id": [
                24
            ],
            "address": [
                3
            ],
            "network": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "addresses_max_order_by": {
            "account_id": [
                22
            ],
            "address": [
                22
            ],
            "network": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "addresses_min_order_by": {
            "account_id": [
                22
            ],
            "address": [
                22
            ],
            "network": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "addresses_order_by": {
            "account_id": [
                22
            ],
            "address": [
                22
            ],
            "network": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "addresses_select_column": {},
        "order_by": {},
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                23
            ],
            "_gt": [
                23
            ],
            "_gte": [
                23
            ],
            "_in": [
                23
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                23
            ],
            "_lte": [
                23
            ],
            "_neq": [
                23
            ],
            "_nin": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "accounts": [
                4,
                {
                    "distinct_on": [
                        12,
                        "[accounts_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        10,
                        "[accounts_order_by!]"
                    ],
                    "where": [
                        5
                    ]
                }
            ],
            "accounts_by_pk": [
                4,
                {
                    "account_id": [
                        23,
                        "uuid!"
                    ]
                }
            ],
            "addresses": [
                15,
                {
                    "distinct_on": [
                        21,
                        "[addresses_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        20,
                        "[addresses_order_by!]"
                    ],
                    "where": [
                        17
                    ]
                }
            ],
            "addresses_by_pk": [
                15,
                {
                    "address": [
                        2,
                        "String!"
                    ],
                    "network": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "insert_accounts": [
                8,
                {
                    "objects": [
                        7,
                        "[accounts_insert_input!]!"
                    ],
                    "on_conflict": [
                        9
                    ]
                }
            ],
            "insert_accounts_one": [
                4,
                {
                    "object": [
                        7,
                        "accounts_insert_input!"
                    ],
                    "on_conflict": [
                        9
                    ]
                }
            ],
            "update_accounts": [
                8,
                {
                    "_set": [
                        13
                    ],
                    "where": [
                        5,
                        "accounts_bool_exp!"
                    ]
                }
            ],
            "update_accounts_by_pk": [
                4,
                {
                    "_set": [
                        13
                    ],
                    "pk_columns": [
                        11,
                        "accounts_pk_columns_input!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Subscription": {
            "accounts": [
                4,
                {
                    "distinct_on": [
                        12,
                        "[accounts_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        10,
                        "[accounts_order_by!]"
                    ],
                    "where": [
                        5
                    ]
                }
            ],
            "accounts_by_pk": [
                4,
                {
                    "account_id": [
                        23,
                        "uuid!"
                    ]
                }
            ],
            "addresses": [
                15,
                {
                    "distinct_on": [
                        21,
                        "[addresses_select_column!]"
                    ],
                    "limit": [
                        1
                    ],
                    "offset": [
                        1
                    ],
                    "order_by": [
                        20,
                        "[addresses_order_by!]"
                    ],
                    "where": [
                        17
                    ]
                }
            ],
            "addresses_by_pk": [
                15,
                {
                    "address": [
                        2,
                        "String!"
                    ],
                    "network": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        }
    }
}