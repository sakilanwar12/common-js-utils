function omitKeys<T extends Record<string, unknown>, k extends keyof T>(
  obj: T,
  keys: k[]
): Omit<T, k> {
  const finalObj: Partial<T> = {};
  const keysSet = new Set(keys as string[]);
  for (const key in obj) {
    if (obj && Object.hasOwnProperty.call(obj, key) && !keysSet.has(key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj as Omit<T, k>;
}

export { omitKeys };

