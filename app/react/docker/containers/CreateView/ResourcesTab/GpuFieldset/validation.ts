import { SchemaOf, object, array, string, bool } from 'yup';

import { Values } from './types';

export function validation(): SchemaOf<Values> {
  return object({
    capabilities: array()
      .of(string().default(''))
      .default(['compute', 'utility']),
    enabled: bool().default(false),
    selectedGPUs: array().of(string()).default([]),
    useSpecific: bool().default(true),
  });
}
