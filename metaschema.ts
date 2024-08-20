/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ExpressionList = string[];
/**
 * The context object is itself JSON schema
 */
export type CoreAndValidationSpecificationsMetaSchema = CoreVocabularyMetaSchema &
  ApplicatorVocabularyMetaSchema &
  UnevaluatedApplicatorVocabularyMetaSchema &
  ValidationVocabularyMetaSchema &
  MetaDataVocabularyMetaSchema &
  FormatVocabularyMetaSchemaForAnnotationResults &
  ContentVocabularyMetaSchema & {
    /**
     * @deprecated
     */
    dependencies?: {
      [k: string]:
        | {
            [k: string]: unknown;
          }
        | string[];
    };
    /**
     * @deprecated
     */
    $recursiveAnchor?: string;
    /**
     * @deprecated
     */
    $recursiveRef?: string;
    /**
     * @deprecated
     */
    $defs?: {
      [k: string]: {
        [k: string]: unknown;
      };
    };
    [k: string]: unknown;
  } & (
    | {
        /**
         * @deprecated
         */
        dependencies?: {
          [k: string]:
            | {
                [k: string]: unknown;
              }
            | string[];
        };
        /**
         * @deprecated
         */
        $recursiveAnchor?: string;
        /**
         * @deprecated
         */
        $recursiveRef?: string;
        /**
         * @deprecated
         */
        $defs?: {
          [k: string]: {
            [k: string]: unknown;
          };
        };
        [k: string]: unknown;
      }
    | boolean
  );
export type CoreVocabularyMetaSchema = {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $anchor?: string;
  $dynamicRef?: string;
  $dynamicAnchor?: string;
  $vocabulary?: {
    [k: string]: boolean;
  };
  $comment?: string;
  $defs?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  [k: string]: unknown;
} & (
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $anchor?: string;
      $dynamicRef?: string;
      $dynamicAnchor?: string;
      $vocabulary?: {
        [k: string]: boolean;
      };
      $comment?: string;
      $defs?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      [k: string]: unknown;
    }
  | boolean
);
export type ApplicatorVocabularyMetaSchema = {
  /**
   * @minItems 1
   */
  prefixItems?: [
    {
      [k: string]: unknown;
    },
    ...{
      [k: string]: unknown;
    }[]
  ];
  items?: {
    [k: string]: unknown;
  };
  contains?: {
    [k: string]: unknown;
  };
  additionalProperties?: {
    [k: string]: unknown;
  };
  properties?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  patternProperties?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  dependentSchemas?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  propertyNames?: {
    [k: string]: unknown;
  };
  if?: {
    [k: string]: unknown;
  };
  then?: {
    [k: string]: unknown;
  };
  else?: {
    [k: string]: unknown;
  };
  /**
   * @minItems 1
   */
  allOf?: [
    {
      [k: string]: unknown;
    },
    ...{
      [k: string]: unknown;
    }[]
  ];
  /**
   * @minItems 1
   */
  anyOf?: [
    {
      [k: string]: unknown;
    },
    ...{
      [k: string]: unknown;
    }[]
  ];
  /**
   * @minItems 1
   */
  oneOf?: [
    {
      [k: string]: unknown;
    },
    ...{
      [k: string]: unknown;
    }[]
  ];
  not?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
} & (
  | {
      /**
       * @minItems 1
       */
      prefixItems?: [
        {
          [k: string]: unknown;
        },
        ...{
          [k: string]: unknown;
        }[]
      ];
      items?: {
        [k: string]: unknown;
      };
      contains?: {
        [k: string]: unknown;
      };
      additionalProperties?: {
        [k: string]: unknown;
      };
      properties?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      patternProperties?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      dependentSchemas?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      propertyNames?: {
        [k: string]: unknown;
      };
      if?: {
        [k: string]: unknown;
      };
      then?: {
        [k: string]: unknown;
      };
      else?: {
        [k: string]: unknown;
      };
      /**
       * @minItems 1
       */
      allOf?: [
        {
          [k: string]: unknown;
        },
        ...{
          [k: string]: unknown;
        }[]
      ];
      /**
       * @minItems 1
       */
      anyOf?: [
        {
          [k: string]: unknown;
        },
        ...{
          [k: string]: unknown;
        }[]
      ];
      /**
       * @minItems 1
       */
      oneOf?: [
        {
          [k: string]: unknown;
        },
        ...{
          [k: string]: unknown;
        }[]
      ];
      not?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | boolean
);
export type UnevaluatedApplicatorVocabularyMetaSchema = {
  unevaluatedItems?: {
    [k: string]: unknown;
  };
  unevaluatedProperties?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
} & (
  | {
      unevaluatedItems?: {
        [k: string]: unknown;
      };
      unevaluatedProperties?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | boolean
);
export type ValidationVocabularyMetaSchema = {
  type?:
    | ("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")
    | [
        "array" | "boolean" | "integer" | "null" | "number" | "object" | "string",
        ...("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")[]
      ];
  const?: unknown;
  enum?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxContains?: number;
  minContains?: number;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  dependentRequired?: {
    [k: string]: string[];
  };
  [k: string]: unknown;
} & (
  | {
      type?:
        | ("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")
        | [
            "array" | "boolean" | "integer" | "null" | "number" | "object" | "string",
            ...("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")[]
          ];
      const?: unknown;
      enum?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number;
      pattern?: string;
      maxItems?: number;
      minItems?: number;
      uniqueItems?: boolean;
      maxContains?: number;
      minContains?: number;
      maxProperties?: number;
      minProperties?: number;
      required?: string[];
      dependentRequired?: {
        [k: string]: string[];
      };
      [k: string]: unknown;
    }
  | boolean
);
export type MetaDataVocabularyMetaSchema = {
  title?: string;
  description?: string;
  default?: unknown;
  deprecated?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  [k: string]: unknown;
} & (
  | {
      title?: string;
      description?: string;
      default?: unknown;
      deprecated?: boolean;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      [k: string]: unknown;
    }
  | boolean
);
export type FormatVocabularyMetaSchemaForAnnotationResults = {
  format?: string;
  [k: string]: unknown;
} & (
  | {
      format?: string;
      [k: string]: unknown;
    }
  | boolean
);
export type ContentVocabularyMetaSchema = {
  contentEncoding?: string;
  contentMediaType?: string;
  contentSchema?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
} & (
  | {
      contentEncoding?: string;
      contentMediaType?: string;
      contentSchema?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | boolean
);
export type CoreAndValidationSpecificationsMetaSchema1 = CoreVocabularyMetaSchema &
  ApplicatorVocabularyMetaSchema &
  UnevaluatedApplicatorVocabularyMetaSchema &
  ValidationVocabularyMetaSchema &
  MetaDataVocabularyMetaSchema &
  FormatVocabularyMetaSchemaForAnnotationResults &
  ContentVocabularyMetaSchema & {
    [k: string]: unknown;
  } & {
    /**
     * @deprecated
     */
    dependencies?: {
      [k: string]:
        | {
            [k: string]: unknown;
          }
        | string[];
    };
    /**
     * @deprecated
     */
    $recursiveAnchor?: string;
    /**
     * @deprecated
     */
    $recursiveRef?: string;
    /**
     * @deprecated
     */
    $defs?: {
      [k: string]: {
        [k: string]: unknown;
      };
    };
    [k: string]: unknown;
  } & (
    | {
        [k: string]: unknown;
      }
    | ({
        [k: string]: unknown;
      } & boolean)
  );
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^_[a-zA-Z0-9_-]+$".
 */
export type CoreAndValidationSpecificationsMetaSchema2 = CoreVocabularyMetaSchema &
  ApplicatorVocabularyMetaSchema &
  UnevaluatedApplicatorVocabularyMetaSchema &
  ValidationVocabularyMetaSchema &
  MetaDataVocabularyMetaSchema &
  FormatVocabularyMetaSchemaForAnnotationResults &
  ContentVocabularyMetaSchema & {
    /**
     * @deprecated
     */
    dependencies?: {
      [k: string]:
        | {
            [k: string]: unknown;
          }
        | string[];
    };
    /**
     * @deprecated
     */
    $recursiveAnchor?: string;
    /**
     * @deprecated
     */
    $recursiveRef?: string;
    /**
     * @deprecated
     */
    $defs?: {
      [k: string]: {
        [k: string]: unknown;
      };
    };
    [k: string]: unknown;
  } & (
    | {
        /**
         * @deprecated
         */
        dependencies?: {
          [k: string]:
            | {
                [k: string]: unknown;
              }
            | string[];
        };
        /**
         * @deprecated
         */
        $recursiveAnchor?: string;
        /**
         * @deprecated
         */
        $recursiveRef?: string;
        /**
         * @deprecated
         */
        $defs?: {
          [k: string]: {
            [k: string]: unknown;
          };
        };
        [k: string]: unknown;
      }
    | boolean
  );

export interface Metaschema {
  meta: {
    associations: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]: {
        selectors?: ExpressionList;
        target: {
          suffix?: string;
          extension: string | string[];
        };
        inherit?: boolean;
      };
    };
    context: CoreAndValidationSpecificationsMetaSchema;
    expression_tests: {
      expression: string;
      result: unknown;
    }[];
    versions: {
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  objects: {
    columns: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]: (
        | CoreAndValidationSpecificationsMetaSchema1
        | {
            definition: {
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }
      ) &
        General &
        NameValue & {
          format?:
            | "index"
            | "label"
            | "boolean"
            | "integer"
            | "number"
            | "string"
            | "hed_version"
            | "bids_uri"
            | "dataset_relative"
            | "date"
            | "datetime"
            | "file_relative"
            | "participant_relative"
            | "rrid"
            | "stimuli_relative"
            | "time"
            | "unit"
            | "uri";
          unit?: string;
          [k: string]: unknown;
        };
    };
    common_principles: {
      [k: string]: unknown;
    };
    datatypes: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]: General & Value;
    };
    entities: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]: CoreAndValidationSpecificationsMetaSchema1 &
        General &
        NameValue & {
          format:
            | "index"
            | "label"
            | "boolean"
            | "integer"
            | "number"
            | "string"
            | "hed_version"
            | "bids_uri"
            | "dataset_relative"
            | "date"
            | "datetime"
            | "file_relative"
            | "participant_relative"
            | "rrid"
            | "stimuli_relative"
            | "time"
            | "unit"
            | "uri";
          [k: string]: unknown;
        };
    };
    enums: {};
    extensions: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]: General & Value;
    };
    files: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]: General & {
        file_type: string;
        [k: string]: unknown;
      };
    };
    formats: {
      [k: string]: General & {
        pattern: string;
        [k: string]: unknown;
      };
    };
    metadata: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]: CoreAndValidationSpecificationsMetaSchema1 &
        General &
        NameValue & {
          recommended?: string[];
          unit?: string;
          [k: string]: unknown;
        };
    };
    modalities: {
      [k: string]: General2;
    };
    suffixes: {
      [k: string]: unknown;
    };
  };
  rules: {
    checks?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9_]+$".
         */
        [k: string]: {
          issue: Issue;
          selectors: ExpressionList;
          checks: ExpressionList;
        };
      };
    };
    files: {
      common: {
        core: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^[a-zA-Z0-9_]+$".
           */
          [k: string]: PathRule | StemRule;
        };
        tables: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^[a-zA-Z0-9_]+$".
           */
          [k: string]: StemRule | SuffixRule;
        };
      };
      deriv: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-z_]+$".
         */
        [k: string]: {
          [k: string]: SuffixRule;
        };
      };
      raw: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-z]+$".
         */
        [k: string]: {
          [k: string]: SuffixRule;
        };
      };
    };
    json: {
      [k: string]: Json;
    };
    sidecars: {};
    tabular_data: {};
    common_principles: string[];
    dataset_metadata: {
      [k: string]: unknown;
    };
    directories: {
      [k: string]: unknown;
    };
    entities: string[];
    errors: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]: {
        code?: string;
        message: string;
        level: "error" | "warning";
        selectors?: ExpressionList;
      };
    };
    modalities: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-z]+$".
       */
      [k: string]: {
        datatypes: string[];
      };
    };
  };
  bids_version: string;
  schema_version: string;
}
export interface General {
  display_name: string;
  description: string;
  [k: string]: unknown;
}
export interface NameValue {
  name: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_]+$".
 */
export interface General1 {
  display_name: string;
  description: string;
  [k: string]: unknown;
}
export interface Value {
  value: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z]+$".
 */
export interface General2 {
  display_name: string;
  description: string;
  [k: string]: unknown;
}
export interface Issue {
  code: string;
  message: string;
  level?: "error" | "warning";
}
export interface PathRule {
  level: "optional" | "required";
  path: string;
}
export interface StemRule {
  level: "optional" | "recommended" | "required";
  datatypes?: {
    [k: string]: unknown;
  }[];
  stem: string;
  extensions: string[];
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_]+$".
 */
export interface SuffixRule {
  level?: "optional" | "recommended" | "required";
  datatypes?: {
    [k: string]: unknown;
  }[];
  suffixes: {
    [k: string]: unknown;
  }[];
  extensions: string[];
  entities: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-z]+$".
     */
    [k: string]:
      | ("optional" | "required")
      | {
          level: "optional" | "required";
          enum: string[];
          [k: string]: unknown;
        };
  };
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^(?!derivatives$)[a-z_]+$".
 */
export interface Json {
  /**
   * This interface was referenced by `Json`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]+$".
   */
  [k: string]: {
    selectors: ExpressionList;
    fields: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]:
        | ("required" | "recommended" | "optional" | "deprecated")
        | {
            level: "required" | "recommended" | "optional" | "deprecated";
            level_addendum?: string;
            description_addendum?: string;
            issue?: Issue;
          }
        | string;
    };
  };
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^(?!derivatives$)[a-z_]+$".
 */
export interface TabularData {
  /**
   * This interface was referenced by `TabularData`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]+$".
   */
  [k: string]: {
    selectors: ExpressionList;
    columns: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_]+$".
       */
      [k: string]:
        | ("required" | "recommended" | "optional" | "deprecated")
        | {
            level: "required" | "recommended" | "optional" | "deprecated";
            level_addendum?: string;
            description_addendum?: string;
            issue?: Issue;
          }
        | string;
    };
    additional_columns?: string;
    index_columns?: string[];
    initial_columns?: string[];
  };
}
